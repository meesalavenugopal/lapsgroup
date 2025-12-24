"""
API v1 Router
"""
from fastapi import APIRouter

from app.api.v1.endpoints import (
    ai,
    contact,
    divisions,
    jobs,
    news,
    newsletter,
    projects,
    public,
)

router = APIRouter()

# Public endpoints (no auth required)
router.include_router(public.router, prefix="/public", tags=["Public"])
router.include_router(divisions.router, prefix="/divisions", tags=["Divisions"])
router.include_router(news.router, prefix="/news", tags=["News"])
router.include_router(jobs.router, prefix="/jobs", tags=["Jobs"])
router.include_router(projects.router, prefix="/projects", tags=["Projects"])
router.include_router(contact.router, prefix="/contact", tags=["Contact"])
router.include_router(newsletter.router, prefix="/newsletter", tags=["Newsletter"])
router.include_router(ai.router, prefix="/ai", tags=["AI Assistant"])
