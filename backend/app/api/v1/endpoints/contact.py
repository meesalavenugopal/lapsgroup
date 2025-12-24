"""
Contact API endpoints
"""
from typing import Optional
from datetime import datetime

from fastapi import APIRouter, HTTPException
from pydantic import BaseModel, EmailStr

from app.core.email import email_service

router = APIRouter()


class ContactRequest(BaseModel):
    """Contact form request model"""
    name: str
    email: EmailStr
    phone: Optional[str] = None
    division: Optional[str] = None
    subject: str
    message: str


@router.post("/submit")
async def submit_contact_form(contact: ContactRequest):
    """Submit a contact form"""
    try:
        # Generate reference ID
        timestamp = datetime.now().strftime("%Y%m%d%H%M%S")
        reference_id = f"LAPS-{timestamp}"
        
        # Send confirmation email to user
        await email_service.send_contact_confirmation(
            to_email=contact.email,
            name=contact.name,
            subject=contact.subject,
            message=contact.message,
            phone=contact.phone,
            company=None,  # Not collecting company in current form
            reference_id=reference_id,
        )
        
        # Send notification email to LAPS team
        await email_service.send_contact_notification(
            name=contact.name,
            email=contact.email,
            subject=contact.subject,
            message=contact.message,
            phone=contact.phone,
            company=None,
            division=contact.division,
        )
        
        return {
            "success": True,
            "message": "Thank you for reaching out. We'll get back to you shortly.",
            "reference_id": reference_id,
        }
    except Exception as e:
        raise HTTPException(
            status_code=500,
            detail=f"Failed to process contact form: {str(e)}"
        )


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
