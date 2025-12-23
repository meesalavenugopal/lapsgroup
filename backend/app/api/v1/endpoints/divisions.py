"""
Divisions API endpoints
"""
from typing import List

from fastapi import APIRouter

router = APIRouter()


# Static division data (in production, fetch from database)
DIVISIONS = [
    {
        "id": "1",
        "key": "architecture",
        "name": "Architecture & Planning",
        "full_name": "Landscape + Architecture + Planning Studios",
        "tagline": "Designing Tomorrow's Spaces",
        "description": "Creating innovative architectural solutions and urban landscapes that blend functionality with aesthetic excellence.",
        "slug": "architecture-planning",
        "icon": "building-2",
        "accent_color": "#2D5016",
        "is_active": True,
        "services": [
            {"name": "Architectural Design", "description": "Comprehensive architectural design services"},
            {"name": "Urban Planning", "description": "Strategic urban development planning"},
            {"name": "Landscape Architecture", "description": "Outdoor space design and planning"},
            {"name": "Interior Design", "description": "Interior space optimization"},
            {"name": "Sustainable Design", "description": "Eco-friendly design solutions"},
            {"name": "Project Management", "description": "End-to-end project delivery"},
        ],
        "stats": [
            {"label": "Projects Completed", "value": "50+"},
            {"label": "Cities", "value": "12"},
            {"label": "Awards", "value": "8"},
            {"label": "Team Members", "value": "25"},
        ],
    },
    {
        "id": "2",
        "key": "apps",
        "name": "Apps & Platforms",
        "full_name": "Launchpad for Applications & Platforms",
        "tagline": "Building Digital Futures",
        "description": "Developing cutting-edge software solutions, SaaS products, and digital platforms that drive innovation.",
        "slug": "apps-platforms",
        "icon": "code-2",
        "accent_color": "#7C3AED",
        "is_active": True,
        "services": [
            {"name": "Custom Software Development", "description": "Tailored software solutions"},
            {"name": "Mobile App Development", "description": "iOS and Android applications"},
            {"name": "SaaS Products", "description": "Cloud-based software products"},
            {"name": "Cloud Solutions", "description": "Cloud infrastructure and services"},
            {"name": "API Development", "description": "RESTful and GraphQL APIs"},
            {"name": "UI/UX Design", "description": "User experience design"},
        ],
        "stats": [
            {"label": "Apps Launched", "value": "30+"},
            {"label": "Users Served", "value": "100K+"},
            {"label": "Technologies", "value": "20+"},
            {"label": "Team Members", "value": "40"},
        ],
    },
    {
        "id": "3",
        "key": "ads",
        "name": "Ads & Services",
        "full_name": "Launchpad for Ads & Services",
        "tagline": "Amplifying Your Voice",
        "description": "Strategic digital marketing, brand building, and advertising solutions that connect brands with their audience.",
        "slug": "ads-services",
        "icon": "megaphone",
        "accent_color": "#DC2626",
        "is_active": True,
        "services": [
            {"name": "Digital Marketing", "description": "Comprehensive digital marketing strategies"},
            {"name": "Brand Strategy", "description": "Brand positioning and identity"},
            {"name": "Social Media Management", "description": "Social media marketing"},
            {"name": "Content Marketing", "description": "Content creation and distribution"},
            {"name": "SEO & SEM", "description": "Search engine optimization"},
            {"name": "Performance Marketing", "description": "ROI-driven campaigns"},
        ],
        "stats": [
            {"label": "Campaigns Run", "value": "200+"},
            {"label": "Brands Served", "value": "75"},
            {"label": "Reach Generated", "value": "50M+"},
            {"label": "Team Members", "value": "20"},
        ],
    },
    {
        "id": "4",
        "key": "suites",
        "name": "LAPS Suites",
        "full_name": "Living and Party Suites",
        "tagline": "Curating Unforgettable Moments",
        "description": "Premium event management and hospitality services that transform occasions into extraordinary experiences.",
        "slug": "suites",
        "icon": "party-popper",
        "accent_color": "#F59E0B",
        "is_active": True,
        "services": [
            {"name": "Event Planning", "description": "Complete event management"},
            {"name": "Venue Management", "description": "Venue sourcing and management"},
            {"name": "Corporate Events", "description": "Professional corporate gatherings"},
            {"name": "Wedding Planning", "description": "Wedding coordination services"},
            {"name": "Hospitality Services", "description": "Guest experience management"},
            {"name": "Catering Coordination", "description": "Food and beverage management"},
        ],
        "stats": [
            {"label": "Events Hosted", "value": "500+"},
            {"label": "Happy Clients", "value": "2K+"},
            {"label": "Venues", "value": "15"},
            {"label": "Team Members", "value": "30"},
        ],
    },
    {
        "id": "5",
        "key": "photo",
        "name": "LAPS Studios",
        "full_name": "Lifestyle and Photography Studios",
        "tagline": "Capturing Life's Canvas",
        "description": "Professional photography and creative visual storytelling that brings moments and brands to life.",
        "slug": "photography-studios",
        "icon": "camera",
        "accent_color": "#0891B2",
        "is_active": True,
        "services": [
            {"name": "Commercial Photography", "description": "Professional commercial shoots"},
            {"name": "Event Photography", "description": "Event documentation"},
            {"name": "Product Photography", "description": "Product catalog shoots"},
            {"name": "Portrait Sessions", "description": "Professional portraits"},
            {"name": "Video Production", "description": "Video content creation"},
            {"name": "Photo Editing", "description": "Post-production services"},
        ],
        "stats": [
            {"label": "Shoots Completed", "value": "1000+"},
            {"label": "Photos Delivered", "value": "100K+"},
            {"label": "Studios", "value": "3"},
            {"label": "Team Members", "value": "15"},
        ],
    },
]


@router.get("/", response_model=List[dict])
async def get_divisions():
    """Get all divisions"""
    return [d for d in DIVISIONS if d["is_active"]]


@router.get("/{slug}")
async def get_division(slug: str):
    """Get a specific division by slug"""
    for division in DIVISIONS:
        if division["slug"] == slug:
            return division
    return {"error": "Division not found"}


@router.get("/{slug}/services")
async def get_division_services(slug: str):
    """Get services for a specific division"""
    for division in DIVISIONS:
        if division["slug"] == slug:
            return division.get("services", [])
    return []


@router.get("/{slug}/stats")
async def get_division_stats(slug: str):
    """Get statistics for a specific division"""
    for division in DIVISIONS:
        if division["slug"] == slug:
            return division.get("stats", [])
    return []
