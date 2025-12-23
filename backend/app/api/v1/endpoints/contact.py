"""
Contact API endpoints
"""
from typing import Optional

from fastapi import APIRouter
from pydantic import BaseModel, EmailStr

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
    # In production, save to database and send email notification
    return {
        "success": True,
        "message": "Thank you for reaching out. We'll get back to you shortly.",
        "submission_id": "CONTACT-001",
    }


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
