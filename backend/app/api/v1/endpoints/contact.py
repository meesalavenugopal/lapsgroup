"""
Contact API endpoints
"""
from typing import Optional, List
from datetime import datetime
from uuid import UUID

from fastapi import APIRouter, HTTPException, Depends
from pydantic import BaseModel, EmailStr, ConfigDict, field_serializer
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select

from app.core.email import email_service
from app.core.database import get_db
from app.models.models import ContactSubmission

router = APIRouter()


class ContactRequest(BaseModel):
    """Contact form request model"""
    name: str
    email: EmailStr
    phone: Optional[str] = None
    company: Optional[str] = None
    division: Optional[str] = None
    subject: str
    message: str


class ContactResponse(BaseModel):
    """Contact submission response"""
    model_config = ConfigDict(from_attributes=True)
    
    id: UUID
    reference_id: str
    name: str
    email: str
    phone: Optional[str] = None
    company: Optional[str] = None
    division_id: Optional[UUID] = None
    subject: str
    message: str
    is_read: bool
    status: str
    created_at: datetime
    updated_at: datetime
    responded_at: Optional[datetime] = None
    responded_by: Optional[str] = None
    response_notes: Optional[str] = None
    
    @field_serializer('id', 'division_id')
    def serialize_uuid(self, value: Optional[UUID]) -> Optional[str]:
        """Convert UUID to string for JSON serialization"""
        return str(value) if value else None
        json_encoders = {
            datetime: lambda v: v.isoformat() if v else None,
        }


@router.post("/submit")
async def submit_contact_form(
    contact: ContactRequest,
    db: AsyncSession = Depends(get_db)
):
    """Submit a contact form"""
    # Generate reference ID
    timestamp = datetime.now().strftime("%Y%m%d%H%M%S")
    reference_id = f"LAPS-{timestamp}"
    
    # Try to save to database (optional - continues if DB not configured)
    try:
        contact_submission = ContactSubmission(
            reference_id=reference_id,
            name=contact.name,
            email=contact.email,
            phone=contact.phone,
            company=contact.company,
            division_id=None,  # TODO: Map division key to division_id if needed
            subject=contact.subject,
            message=contact.message,
            is_read=False,
            status="new",
        )
        db.add(contact_submission)
        await db.commit()
        await db.refresh(contact_submission)
        print(f"Contact submission saved to database: {reference_id}")
    except Exception as db_error:
        print(f"Database save failed (continuing): {db_error}")
        await db.rollback()
    
    # Send emails (these should work even if DB fails)
    try:
        # Send confirmation email to user
        await email_service.send_contact_confirmation(
            to_email=contact.email,
            name=contact.name,
            subject=contact.subject,
            message=contact.message,
            phone=contact.phone,
            company=contact.company,
            reference_id=reference_id,
        )
        
        # Send notification email to LAPS team
        await email_service.send_contact_notification(
            name=contact.name,
            email=contact.email,
            subject=contact.subject,
            message=contact.message,
            phone=contact.phone,
            company=contact.company,
            division=contact.division,
        )
        
        return {
            "success": True,
            "message": "Thank you for reaching out. We'll get back to you shortly.",
            "reference_id": reference_id,
        }
    except Exception as email_error:
        raise HTTPException(
            status_code=500,
            detail=f"Failed to send confirmation emails: {str(email_error)}"
        )


@router.get("/submissions", response_model=List[ContactResponse])
async def get_contact_submissions(
    skip: int = 0,
    limit: int = 50,
    is_read: Optional[bool] = None,
    status: Optional[str] = None,
    db: AsyncSession = Depends(get_db)
):
    """Get all contact form submissions"""
    stmt = select(ContactSubmission)
    
    if is_read is not None:
        stmt = stmt.filter(ContactSubmission.is_read == is_read)
    
    if status:
        stmt = stmt.filter(ContactSubmission.status == status)
    
    stmt = stmt.order_by(ContactSubmission.created_at.desc()).offset(skip).limit(limit)
    result = await db.execute(stmt)
    submissions = result.scalars().all()
    return submissions


@router.get("/submissions/{submission_id}", response_model=ContactResponse)
async def get_contact_submission(
    submission_id: UUID,
    db: AsyncSession = Depends(get_db)
):
    """Get a specific contact submission"""
    stmt = select(ContactSubmission).filter(ContactSubmission.id == submission_id)
    result = await db.execute(stmt)
    submission = result.scalar_one_or_none()
    if not submission:
        raise HTTPException(status_code=404, detail="Contact submission not found")
    return submission


@router.patch("/submissions/{submission_id}/read")
async def mark_as_read(
    submission_id: UUID,
    is_read: bool = True,
    db: AsyncSession = Depends(get_db)
):
    """Mark a contact submission as read/unread"""
    stmt = select(ContactSubmission).filter(ContactSubmission.id == submission_id)
    result = await db.execute(stmt)
    submission = result.scalar_one_or_none()
    if not submission:
        raise HTTPException(status_code=404, detail="Contact submission not found")
    
    submission.is_read = is_read
    await db.commit()
    
    return {"success": True, "is_read": is_read}


class UpdateStatusRequest(BaseModel):
    """Update status request with audit fields"""
    status: str
    responded_by: Optional[str] = None
    response_notes: Optional[str] = None


@router.patch("/submissions/{submission_id}/status")
async def update_status(
    submission_id: UUID,
    update: UpdateStatusRequest,
    db: AsyncSession = Depends(get_db)
):
    """Update contact submission status with audit tracking"""
    stmt = select(ContactSubmission).filter(ContactSubmission.id == submission_id)
    result = await db.execute(stmt)
    submission = result.scalar_one_or_none()
    if not submission:
        raise HTTPException(status_code=404, detail="Contact submission not found")
    
    submission.status = update.status
    if update.status == "responded":
        submission.responded_at = datetime.now()
        submission.responded_by = update.responded_by
        submission.response_notes = update.response_notes
    await db.commit()
    
    return {"success": True, "status": update.status}


@router.get("/info")
async def get_contact_info():
    """Get contact information"""
    return {
        "general": {
            "email": "hello@lapsgroup.com",
            "phone": "+91 98765 43210",
            "address": {
                "line1": "LAPS Group Headquarters",
                "city": "Hyderabad",
                "state": "Telangana",
                "country": "India",
                "pincode": "500001",
            },
        },
        "divisions": {
            "architecture": {
                "email": "architecture@lapsgroup.com",
                "phone": "+91 98765 43211",
            },
            "apps": {
                "email": "apps@lapsgroup.com",
                "phone": "+91 98765 43212",
            },
            "ads": {
                "email": "ads@lapsgroup.com",
                "phone": "+91 98765 43213",
            },
            "suites": {
                "email": "suites@lapsgroup.com",
                "phone": "+91 98765 43214",
            },
            "photo": {
                "email": "photo@lapsgroup.com",
                "phone": "+91 98765 43215",
            },
        },
        "business_hours": {
            "weekdays": "9:00 AM - 6:00 PM IST",
            "saturday": "10:00 AM - 4:00 PM IST",
            "sunday": "Closed",
        },
    }
