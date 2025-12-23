"""
Pydantic Schemas for API request/response validation
"""
from datetime import datetime
from typing import List, Optional
from uuid import UUID

from pydantic import BaseModel, EmailStr, Field, HttpUrl


# Base schemas
class BaseSchema(BaseModel):
    """Base schema with common configuration"""

    class Config:
        from_attributes = True


class PaginatedResponse(BaseModel):
    """Paginated response wrapper"""
    items: List
    total: int
    page: int
    page_size: int
    total_pages: int


# Division schemas
class DivisionStatSchema(BaseSchema):
    """Division statistics"""
    label: str
    value: str


class DivisionBase(BaseSchema):
    """Division base schema"""
    key: str
    name: str
    full_name: str
    tagline: str
    description: str
    slug: str
    icon: Optional[str] = None
    accent_color: str


class DivisionCreate(DivisionBase):
    """Division creation schema"""
    pass


class DivisionUpdate(BaseSchema):
    """Division update schema"""
    name: Optional[str] = None
    full_name: Optional[str] = None
    tagline: Optional[str] = None
    description: Optional[str] = None
    icon: Optional[str] = None
    accent_color: Optional[str] = None
    is_active: Optional[bool] = None


class DivisionResponse(DivisionBase):
    """Division response schema"""
    id: UUID
    is_active: bool
    created_at: datetime
    updated_at: datetime
    services: List["ServiceResponse"] = []
    stats: List[DivisionStatSchema] = []


# Service schemas
class ServiceBase(BaseSchema):
    """Service base schema"""
    name: str
    description: Optional[str] = None
    icon: Optional[str] = None
    order: int = 0


class ServiceCreate(ServiceBase):
    """Service creation schema"""
    division_id: UUID


class ServiceResponse(ServiceBase):
    """Service response schema"""
    id: UUID
    is_active: bool


# News schemas
class NewsItemBase(BaseSchema):
    """News item base schema"""
    title: str
    excerpt: str
    category: str
    image_url: Optional[str] = None


class NewsItemCreate(NewsItemBase):
    """News item creation schema"""
    division_id: Optional[UUID] = None
    content: Optional[str] = None
    is_featured: bool = False


class NewsItemResponse(NewsItemBase):
    """News item response schema"""
    id: UUID
    slug: str
    content: Optional[str] = None
    is_featured: bool
    is_published: bool
    published_at: Optional[datetime] = None
    created_at: datetime
    division_key: Optional[str] = None


# Job schemas
class JobOpeningBase(BaseSchema):
    """Job opening base schema"""
    title: str
    description: str
    requirements: Optional[str] = None
    location: str
    job_type: str
    experience: str
    salary_range: Optional[str] = None


class JobOpeningCreate(JobOpeningBase):
    """Job opening creation schema"""
    division_id: UUID


class JobOpeningResponse(JobOpeningBase):
    """Job opening response schema"""
    id: UUID
    slug: str
    is_active: bool
    expires_at: Optional[datetime] = None
    created_at: datetime
    division_name: str


class JobApplicationCreate(BaseSchema):
    """Job application submission schema"""
    job_opening_id: UUID
    name: str = Field(..., min_length=2, max_length=200)
    email: EmailStr
    phone: Optional[str] = None
    cover_letter: Optional[str] = None
    linkedin_url: Optional[str] = None
    portfolio_url: Optional[str] = None


class JobApplicationResponse(BaseSchema):
    """Job application response schema"""
    id: UUID
    status: str
    created_at: datetime


# Project schemas
class ProjectBase(BaseSchema):
    """Project base schema"""
    title: str
    description: str
    client: Optional[str] = None
    location: Optional[str] = None
    year: Optional[int] = None
    image_url: Optional[str] = None


class ProjectCreate(ProjectBase):
    """Project creation schema"""
    division_id: UUID


class ProjectResponse(ProjectBase):
    """Project response schema"""
    id: UUID
    slug: str
    is_featured: bool
    is_published: bool
    created_at: datetime
    division_name: str


# Contact schemas
class ContactSubmissionCreate(BaseSchema):
    """Contact form submission schema"""
    name: str = Field(..., min_length=2, max_length=200)
    email: EmailStr
    phone: Optional[str] = None
    division_id: Optional[UUID] = None
    subject: str = Field(..., min_length=5, max_length=300)
    message: str = Field(..., min_length=10)


class ContactSubmissionResponse(BaseSchema):
    """Contact submission response schema"""
    id: UUID
    status: str
    created_at: datetime


# Newsletter schemas
class NewsletterSubscribeCreate(BaseSchema):
    """Newsletter subscription schema"""
    email: EmailStr


class NewsletterSubscribeResponse(BaseSchema):
    """Newsletter subscription response"""
    success: bool
    message: str


# Timeline schemas
class TimelineEventBase(BaseSchema):
    """Timeline event base schema"""
    year: str
    title: str
    description: str
    image_url: Optional[str] = None
    order: int = 0


class TimelineEventResponse(TimelineEventBase):
    """Timeline event response schema"""
    id: UUID


# Hero slide schemas (for frontend data)
class HeroSlideSchema(BaseSchema):
    """Hero carousel slide schema"""
    id: str
    title: str
    subtitle: str
    description: str
    image: str
    cta_text: str
    cta_link: str
    tag: Optional[str] = None


# Update forward references
DivisionResponse.model_rebuild()
