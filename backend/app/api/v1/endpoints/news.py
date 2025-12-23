"""
News API endpoints
"""
from typing import List, Optional

from fastapi import APIRouter, Query

router = APIRouter()


# Sample news data
NEWS_ITEMS = [
    {
        "id": "1",
        "title": "LAPS Architecture Wins National Design Award",
        "slug": "laps-architecture-wins-national-design-award",
        "excerpt": "Our sustainable urban planning project in Hyderabad recognized for innovation in green architecture.",
        "content": "LAPS Architecture & Planning division has been recognized with the prestigious National Design Award for our innovative sustainable urban planning project in Hyderabad...",
        "category": "SPOTLIGHT",
        "division_key": "architecture",
        "image_url": "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80",
        "is_featured": True,
        "is_published": True,
        "published_at": "2024-12-20T10:00:00Z",
        "created_at": "2024-12-20T09:00:00Z",
    },
    {
        "id": "2",
        "title": "LAPS Apps Launches AI-Powered Platform",
        "slug": "laps-apps-launches-ai-powered-platform",
        "excerpt": "Revolutionary new SaaS product helps businesses automate workflows with intelligent automation.",
        "content": "LAPS Apps & Platforms is proud to announce the launch of our new AI-powered workflow automation platform...",
        "category": "TECHNOLOGY",
        "division_key": "apps",
        "image_url": "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80",
        "is_featured": False,
        "is_published": True,
        "published_at": "2024-12-18T10:00:00Z",
        "created_at": "2024-12-18T09:00:00Z",
    },
    {
        "id": "3",
        "title": "LAPS Group Expands to 5 Divisions",
        "slug": "laps-group-expands-to-five-divisions",
        "excerpt": "LAPS Group now operates across 5 divisions, serving clients in 15+ cities across India.",
        "content": "We are excited to announce that LAPS Group has expanded to 5 specialized divisions...",
        "category": "FACTS",
        "division_key": None,
        "image_url": "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=800&q=80",
        "is_featured": False,
        "is_published": True,
        "published_at": "2024-12-15T10:00:00Z",
        "created_at": "2024-12-15T09:00:00Z",
    },
]


@router.get("/")
async def get_news(
    division: Optional[str] = Query(None, description="Filter by division key"),
    category: Optional[str] = Query(None, description="Filter by category"),
    featured: Optional[bool] = Query(None, description="Filter featured items"),
    page: int = Query(1, ge=1),
    page_size: int = Query(10, ge=1, le=50),
):
    """Get news items with optional filters"""
    items = [n for n in NEWS_ITEMS if n["is_published"]]
    
    if division:
        items = [n for n in items if n.get("division_key") == division]
    
    if category:
        items = [n for n in items if n["category"].lower() == category.lower()]
    
    if featured is not None:
        items = [n for n in items if n["is_featured"] == featured]
    
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
async def get_featured_news():
    """Get featured news items"""
    return [n for n in NEWS_ITEMS if n["is_featured"] and n["is_published"]]


@router.get("/categories")
async def get_categories():
    """Get all news categories"""
    categories = set(n["category"] for n in NEWS_ITEMS if n["is_published"])
    return list(categories)


@router.get("/{slug}")
async def get_news_item(slug: str):
    """Get a specific news item by slug"""
    for item in NEWS_ITEMS:
        if item["slug"] == slug and item["is_published"]:
            return item
    return {"error": "News item not found"}
