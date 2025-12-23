"""
Projects/Portfolio API endpoints
"""
from typing import Optional

from fastapi import APIRouter, Query

router = APIRouter()


# Sample project data
PROJECTS = [
    {
        "id": "1",
        "title": "Urban Green Park",
        "slug": "urban-green-park",
        "description": "A sustainable urban park design integrating natural elements with modern city living.",
        "division_key": "architecture",
        "division_name": "Architecture & Planning",
        "client": "Municipal Corporation",
        "location": "Hyderabad",
        "year": 2024,
        "image_url": "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=800&q=80",
        "is_featured": True,
        "is_published": True,
    },
    {
        "id": "2",
        "title": "FinTech Mobile App",
        "slug": "fintech-mobile-app",
        "description": "A comprehensive mobile banking solution with AI-powered features.",
        "division_key": "apps",
        "division_name": "Apps & Platforms",
        "client": "Private Bank",
        "location": "Mumbai",
        "year": 2024,
        "image_url": "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80",
        "is_featured": True,
        "is_published": True,
    },
    {
        "id": "3",
        "title": "Brand Awareness Campaign",
        "slug": "brand-awareness-campaign",
        "description": "Multi-channel marketing campaign resulting in 300% ROI.",
        "division_key": "ads",
        "division_name": "Ads & Services",
        "client": "Consumer Electronics Brand",
        "location": "Pan India",
        "year": 2024,
        "image_url": "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80",
        "is_featured": True,
        "is_published": True,
    },
]


@router.get("/")
async def get_projects(
    division: Optional[str] = Query(None, description="Filter by division key"),
    featured: Optional[bool] = Query(None, description="Filter featured projects"),
    year: Optional[int] = Query(None, description="Filter by year"),
    page: int = Query(1, ge=1),
    page_size: int = Query(10, ge=1, le=50),
):
    """Get projects with optional filters"""
    items = [p for p in PROJECTS if p["is_published"]]
    
    if division:
        items = [p for p in items if p.get("division_key") == division]
    
    if featured is not None:
        items = [p for p in items if p["is_featured"] == featured]
    
    if year:
        items = [p for p in items if p.get("year") == year]
    
    # Pagination
    total = len(items)
    start = (page - 1) * page_size
    end = start + page_size
    items = items[start:end]
    
    return {
        "items": items,
        "total": total,
        "page": page,
        "page_size": page_size,
        "total_pages": (total + page_size - 1) // page_size,
    }


@router.get("/featured")
async def get_featured_projects():
    """Get featured projects"""
    return [p for p in PROJECTS if p["is_featured"] and p["is_published"]]


@router.get("/{slug}")
async def get_project(slug: str):
    """Get a specific project by slug"""
    for project in PROJECTS:
        if project["slug"] == slug and project["is_published"]:
            return project
    return {"error": "Project not found"}
