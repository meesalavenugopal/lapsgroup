"""
Jobs API endpoints
"""
from typing import Optional

from fastapi import APIRouter, Query
from pydantic import BaseModel, EmailStr

router = APIRouter()


# Sample job data
JOB_OPENINGS = [
    {
        "id": "1",
        "title": "Senior Software Manager",
        "slug": "senior-software-manager",
        "description": "Lead our software development team and drive technical innovation.",
        "requirements": "- 5+ years of software development experience\n- Strong leadership skills\n- Experience with modern tech stack",
        "division_key": "apps",
        "division_name": "Apps & Platforms",
        "location": "Hyderabad",
        "job_type": "full-time",
        "experience": "5+ years",
        "salary_range": "Competitive",
        "is_active": True,
        "posted_at": "2024-12-15T10:00:00Z",
    },
    {
        "id": "2",
        "title": "Digital Marketing Manager",
        "slug": "digital-marketing-manager",
        "description": "Drive digital marketing strategies across multiple channels.",
        "requirements": "- 3+ years of digital marketing experience\n- Expertise in SEO, SEM, and social media\n- Strong analytical skills",
        "division_key": "ads",
        "division_name": "Ads & Services",
        "location": "Hyderabad",
        "job_type": "full-time",
        "experience": "3+ years",
        "salary_range": "Competitive",
        "is_active": True,
        "posted_at": "2024-12-18T10:00:00Z",
    },
    {
        "id": "3",
        "title": "Architectural Designer",
        "slug": "architectural-designer",
        "description": "Design innovative architectural solutions for diverse projects.",
        "requirements": "- 2+ years of architectural design experience\n- Proficiency in AutoCAD, SketchUp, and Revit\n- Strong portfolio",
        "division_key": "architecture",
        "division_name": "Architecture & Planning",
        "location": "Bangalore",
        "job_type": "full-time",
        "experience": "2+ years",
        "salary_range": "Competitive",
        "is_active": True,
        "posted_at": "2024-12-20T10:00:00Z",
    },
]


class JobApplicationRequest(BaseModel):
    """Job application request model"""
    name: str
    email: EmailStr
    phone: Optional[str] = None
    cover_letter: Optional[str] = None
    linkedin_url: Optional[str] = None
    portfolio_url: Optional[str] = None


@router.get("/")
async def get_jobs(
    division: Optional[str] = Query(None, description="Filter by division key"),
    location: Optional[str] = Query(None, description="Filter by location"),
    job_type: Optional[str] = Query(None, description="Filter by job type"),
    page: int = Query(1, ge=1),
    page_size: int = Query(10, ge=1, le=50),
):
    """Get job openings with optional filters"""
    items = [j for j in JOB_OPENINGS if j["is_active"]]
    
    if division:
        items = [j for j in items if j.get("division_key") == division]
    
    if location:
        items = [j for j in items if j["location"].lower() == location.lower()]
    
    if job_type:
        items = [j for j in items if j["job_type"] == job_type]
    
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
async def get_featured_jobs():
    """Get featured job openings (latest 3)"""
    active_jobs = [j for j in JOB_OPENINGS if j["is_active"]]
    return active_jobs[:3]


@router.get("/locations")
async def get_job_locations():
    """Get all available job locations"""
    locations = set(j["location"] for j in JOB_OPENINGS if j["is_active"])
    return list(locations)


@router.get("/divisions")
async def get_job_divisions():
    """Get divisions with active job openings"""
    divisions = {}
    for job in JOB_OPENINGS:
        if job["is_active"] and job["division_key"] not in divisions:
            divisions[job["division_key"]] = job["division_name"]
    return divisions


@router.get("/{slug}")
async def get_job(slug: str):
    """Get a specific job by slug"""
    for job in JOB_OPENINGS:
        if job["slug"] == slug and job["is_active"]:
            return job
    return {"error": "Job not found"}


@router.post("/{job_id}/apply")
async def apply_for_job(job_id: str, application: JobApplicationRequest):
    """Submit a job application"""
    # Find the job
    job = None
    for j in JOB_OPENINGS:
        if j["id"] == job_id and j["is_active"]:
            job = j
            break
    
    if not job:
        return {"success": False, "error": "Job not found or no longer active"}
    
    # In production, save to database and send email notification
    return {
        "success": True,
        "message": f"Application submitted successfully for {job['title']}",
        "application_id": "APP-" + job_id + "-001",
    }
