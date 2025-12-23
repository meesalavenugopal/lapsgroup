"""
Public API endpoints - No authentication required
Returns static/seed data for frontend
"""
from typing import List

from fastapi import APIRouter

from app.schemas import HeroSlideSchema, TimelineEventResponse, DivisionStatSchema

router = APIRouter()


# Static data for frontend
HERO_SLIDES = [
    {
        "id": "1",
        "title": "When Excellence Meets Vision",
        "subtitle": "LAPS Group",
        "description": "A multi-division company driving innovation across architecture, technology, marketing, events, and photography.",
        "image": "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1920&q=80",
        "cta_text": "Explore Our Divisions",
        "cta_link": "/#divisions",
        "tag": "Master Brand",
    },
    {
        "id": "2",
        "title": "Designing Tomorrow's Spaces",
        "subtitle": "LAPS Architecture & Planning",
        "description": "Award-winning architectural design and urban planning that shapes the future of how we live and work.",
        "image": "https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=1920&q=80",
        "cta_text": "View Projects",
        "cta_link": "/architecture-planning",
        "tag": "Architecture",
    },
    {
        "id": "3",
        "title": "Building Digital Futures",
        "subtitle": "LAPS Apps & Platforms",
        "description": "Cutting-edge software solutions and digital platforms that power the next generation of businesses.",
        "image": "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1920&q=80",
        "cta_text": "See Our Products",
        "cta_link": "/apps-platforms",
        "tag": "Technology",
    },
    {
        "id": "4",
        "title": "Curating Unforgettable Moments",
        "subtitle": "LAPS Suites",
        "description": "Premium event experiences and hospitality services that transform celebrations into cherished memories.",
        "image": "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&w=1920&q=80",
        "cta_text": "Plan Your Event",
        "cta_link": "/suites",
        "tag": "Events",
    },
]

TIMELINE_EVENTS = [
    {
        "id": "1",
        "year": "2020",
        "title": "The Beginning",
        "description": "LAPS was founded with a vision to create excellence across multiple domains.",
        "image_url": None,
        "order": 1,
    },
    {
        "id": "2",
        "year": "2021",
        "title": "Architecture Division Launch",
        "description": "Launched our first division focusing on landscape and architectural design.",
        "image_url": None,
        "order": 2,
    },
    {
        "id": "3",
        "year": "2022",
        "title": "Technology Expansion",
        "description": "Apps & Platforms division established to drive digital innovation.",
        "image_url": None,
        "order": 3,
    },
    {
        "id": "4",
        "year": "2023",
        "title": "Multi-Division Growth",
        "description": "Ads & Services and LAPS Studios divisions launched, completing our creative ecosystem.",
        "image_url": None,
        "order": 4,
    },
    {
        "id": "5",
        "year": "2024",
        "title": "LAPS Suites & Expansion",
        "description": "Events division launched, marking our entry into premium hospitality.",
        "image_url": None,
        "order": 5,
    },
]

COMPANY_STATS = {
    "employees": "130+",
    "divisions": 5,
    "cities": 15,
    "years_active": 4,
    "projects_completed": "500+",
    "clients_served": "1000+",
}

FOUNDER_INFO = {
    "name": "Venugopal Meesala",
    "title": "Founder & Chairman",
    "quote": "LAPS was born from the belief that excellence knows no boundaries. We aim to create value across every domain we enter.",
    "linkedin": "https://linkedin.com/in/venugopalmeesala",
}


@router.get("/hero-slides", response_model=List[HeroSlideSchema])
async def get_hero_slides():
    """Get hero carousel slides"""
    return HERO_SLIDES


@router.get("/timeline")
async def get_timeline():
    """Get company timeline events"""
    return TIMELINE_EVENTS


@router.get("/company-stats")
async def get_company_stats():
    """Get company statistics"""
    return COMPANY_STATS


@router.get("/founder")
async def get_founder_info():
    """Get founder information"""
    return FOUNDER_INFO


@router.get("/site-config")
async def get_site_config():
    """Get site-wide configuration"""
    return {
        "site_name": "LAPS Group",
        "tagline": "Excellence Across Horizons",
        "contact_email": "hello@lapsgroup.com",
        "contact_phone": "+91 98765 43210",
        "address": "Hyderabad, India",
        "social_links": {
            "facebook": "https://facebook.com/lapsgroup",
            "twitter": "https://twitter.com/lapsgroup",
            "instagram": "https://instagram.com/lapsgroup",
            "linkedin": "https://linkedin.com/company/lapsgroup",
            "youtube": "https://youtube.com/@lapsgroup",
        },
    }
