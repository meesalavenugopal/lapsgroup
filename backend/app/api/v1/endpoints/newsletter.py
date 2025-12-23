"""
Newsletter API endpoints
"""
from fastapi import APIRouter
from pydantic import BaseModel, EmailStr

router = APIRouter()


class NewsletterSubscribeRequest(BaseModel):
    """Newsletter subscription request model"""
    email: EmailStr


@router.post("/subscribe")
async def subscribe_newsletter(request: NewsletterSubscribeRequest):
    """Subscribe to newsletter"""
    # In production, save to database and send confirmation email
    return {
        "success": True,
        "message": "Thank you for subscribing! You'll receive our latest updates.",
    }


@router.post("/unsubscribe")
async def unsubscribe_newsletter(request: NewsletterSubscribeRequest):
    """Unsubscribe from newsletter"""
    # In production, update database record
    return {
        "success": True,
        "message": "You have been unsubscribed from our newsletter.",
    }
