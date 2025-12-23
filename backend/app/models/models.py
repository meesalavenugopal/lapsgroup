"""
Database Models for LAPS Group
"""
from datetime import datetime
from enum import Enum
from typing import Optional
from uuid import uuid4

from sqlalchemy import Boolean, DateTime, ForeignKey, String, Text, Integer
from sqlalchemy.dialects.postgresql import UUID
from sqlalchemy.orm import Mapped, mapped_column, relationship

from app.core.database import Base


class DivisionType(str, Enum):
    """Division types enum"""
    ARCHITECTURE = "architecture"
    APPS = "apps"
    ADS = "ads"
    SUITES = "suites"
    PHOTO = "photo"


class JobType(str, Enum):
    """Job types enum"""
    FULL_TIME = "full-time"
    PART_TIME = "part-time"
    CONTRACT = "contract"
    INTERNSHIP = "internship"


class TimestampMixin:
    """Mixin for timestamp fields"""
    created_at: Mapped[datetime] = mapped_column(DateTime, default=datetime.utcnow)
    updated_at: Mapped[datetime] = mapped_column(
        DateTime, default=datetime.utcnow, onupdate=datetime.utcnow
    )


class Division(Base, TimestampMixin):
    """Division model"""
    __tablename__ = "divisions"

    id: Mapped[str] = mapped_column(UUID(as_uuid=True), primary_key=True, default=uuid4)
    key: Mapped[str] = mapped_column(String(50), unique=True, nullable=False)
    name: Mapped[str] = mapped_column(String(100), nullable=False)
    full_name: Mapped[str] = mapped_column(String(200), nullable=False)
    tagline: Mapped[str] = mapped_column(String(200), nullable=False)
    description: Mapped[str] = mapped_column(Text, nullable=False)
    slug: Mapped[str] = mapped_column(String(100), unique=True, nullable=False)
    icon: Mapped[str] = mapped_column(String(50), nullable=True)
    accent_color: Mapped[str] = mapped_column(String(20), nullable=False)
    is_active: Mapped[bool] = mapped_column(Boolean, default=True)

    # Relationships
    services: Mapped[list["Service"]] = relationship(back_populates="division")
    news_items: Mapped[list["NewsItem"]] = relationship(back_populates="division")
    job_openings: Mapped[list["JobOpening"]] = relationship(back_populates="division")
    projects: Mapped[list["Project"]] = relationship(back_populates="division")


class Service(Base, TimestampMixin):
    """Service model"""
    __tablename__ = "services"

    id: Mapped[str] = mapped_column(UUID(as_uuid=True), primary_key=True, default=uuid4)
    division_id: Mapped[str] = mapped_column(UUID(as_uuid=True), ForeignKey("divisions.id"))
    name: Mapped[str] = mapped_column(String(100), nullable=False)
    description: Mapped[str] = mapped_column(Text, nullable=True)
    icon: Mapped[str] = mapped_column(String(50), nullable=True)
    order: Mapped[int] = mapped_column(Integer, default=0)
    is_active: Mapped[bool] = mapped_column(Boolean, default=True)

    # Relationships
    division: Mapped["Division"] = relationship(back_populates="services")


class NewsItem(Base, TimestampMixin):
    """News item model"""
    __tablename__ = "news_items"

    id: Mapped[str] = mapped_column(UUID(as_uuid=True), primary_key=True, default=uuid4)
    division_id: Mapped[Optional[str]] = mapped_column(
        UUID(as_uuid=True), ForeignKey("divisions.id"), nullable=True
    )
    title: Mapped[str] = mapped_column(String(300), nullable=False)
    slug: Mapped[str] = mapped_column(String(300), unique=True, nullable=False)
    excerpt: Mapped[str] = mapped_column(Text, nullable=False)
    content: Mapped[str] = mapped_column(Text, nullable=True)
    category: Mapped[str] = mapped_column(String(50), nullable=False)
    image_url: Mapped[str] = mapped_column(String(500), nullable=True)
    is_featured: Mapped[bool] = mapped_column(Boolean, default=False)
    is_published: Mapped[bool] = mapped_column(Boolean, default=False)
    published_at: Mapped[Optional[datetime]] = mapped_column(DateTime, nullable=True)

    # Relationships
    division: Mapped[Optional["Division"]] = relationship(back_populates="news_items")


class JobOpening(Base, TimestampMixin):
    """Job opening model"""
    __tablename__ = "job_openings"

    id: Mapped[str] = mapped_column(UUID(as_uuid=True), primary_key=True, default=uuid4)
    division_id: Mapped[str] = mapped_column(UUID(as_uuid=True), ForeignKey("divisions.id"))
    title: Mapped[str] = mapped_column(String(200), nullable=False)
    slug: Mapped[str] = mapped_column(String(200), unique=True, nullable=False)
    description: Mapped[str] = mapped_column(Text, nullable=False)
    requirements: Mapped[str] = mapped_column(Text, nullable=True)
    location: Mapped[str] = mapped_column(String(100), nullable=False)
    job_type: Mapped[str] = mapped_column(String(50), nullable=False)
    experience: Mapped[str] = mapped_column(String(100), nullable=False)
    salary_range: Mapped[str] = mapped_column(String(100), nullable=True)
    is_active: Mapped[bool] = mapped_column(Boolean, default=True)
    expires_at: Mapped[Optional[datetime]] = mapped_column(DateTime, nullable=True)

    # Relationships
    division: Mapped["Division"] = relationship(back_populates="job_openings")
    applications: Mapped[list["JobApplication"]] = relationship(back_populates="job_opening")


class JobApplication(Base, TimestampMixin):
    """Job application model"""
    __tablename__ = "job_applications"

    id: Mapped[str] = mapped_column(UUID(as_uuid=True), primary_key=True, default=uuid4)
    job_opening_id: Mapped[str] = mapped_column(UUID(as_uuid=True), ForeignKey("job_openings.id"))
    name: Mapped[str] = mapped_column(String(200), nullable=False)
    email: Mapped[str] = mapped_column(String(200), nullable=False)
    phone: Mapped[str] = mapped_column(String(20), nullable=True)
    resume_url: Mapped[str] = mapped_column(String(500), nullable=True)
    cover_letter: Mapped[str] = mapped_column(Text, nullable=True)
    linkedin_url: Mapped[str] = mapped_column(String(300), nullable=True)
    portfolio_url: Mapped[str] = mapped_column(String(300), nullable=True)
    status: Mapped[str] = mapped_column(String(50), default="pending")

    # Relationships
    job_opening: Mapped["JobOpening"] = relationship(back_populates="applications")


class Project(Base, TimestampMixin):
    """Project/Portfolio model"""
    __tablename__ = "projects"

    id: Mapped[str] = mapped_column(UUID(as_uuid=True), primary_key=True, default=uuid4)
    division_id: Mapped[str] = mapped_column(UUID(as_uuid=True), ForeignKey("divisions.id"))
    title: Mapped[str] = mapped_column(String(200), nullable=False)
    slug: Mapped[str] = mapped_column(String(200), unique=True, nullable=False)
    description: Mapped[str] = mapped_column(Text, nullable=False)
    client: Mapped[str] = mapped_column(String(200), nullable=True)
    location: Mapped[str] = mapped_column(String(200), nullable=True)
    year: Mapped[int] = mapped_column(Integer, nullable=True)
    image_url: Mapped[str] = mapped_column(String(500), nullable=True)
    gallery: Mapped[str] = mapped_column(Text, nullable=True)  # JSON array of image URLs
    is_featured: Mapped[bool] = mapped_column(Boolean, default=False)
    is_published: Mapped[bool] = mapped_column(Boolean, default=True)

    # Relationships
    division: Mapped["Division"] = relationship(back_populates="projects")


class ContactSubmission(Base, TimestampMixin):
    """Contact form submission model"""
    __tablename__ = "contact_submissions"

    id: Mapped[str] = mapped_column(UUID(as_uuid=True), primary_key=True, default=uuid4)
    division_id: Mapped[Optional[str]] = mapped_column(
        UUID(as_uuid=True), ForeignKey("divisions.id"), nullable=True
    )
    name: Mapped[str] = mapped_column(String(200), nullable=False)
    email: Mapped[str] = mapped_column(String(200), nullable=False)
    phone: Mapped[str] = mapped_column(String(20), nullable=True)
    subject: Mapped[str] = mapped_column(String(300), nullable=False)
    message: Mapped[str] = mapped_column(Text, nullable=False)
    status: Mapped[str] = mapped_column(String(50), default="new")
    responded_at: Mapped[Optional[datetime]] = mapped_column(DateTime, nullable=True)


class NewsletterSubscriber(Base, TimestampMixin):
    """Newsletter subscriber model"""
    __tablename__ = "newsletter_subscribers"

    id: Mapped[str] = mapped_column(UUID(as_uuid=True), primary_key=True, default=uuid4)
    email: Mapped[str] = mapped_column(String(200), unique=True, nullable=False)
    is_active: Mapped[bool] = mapped_column(Boolean, default=True)
    unsubscribed_at: Mapped[Optional[datetime]] = mapped_column(DateTime, nullable=True)


class TimelineEvent(Base, TimestampMixin):
    """Company timeline event model"""
    __tablename__ = "timeline_events"

    id: Mapped[str] = mapped_column(UUID(as_uuid=True), primary_key=True, default=uuid4)
    year: Mapped[str] = mapped_column(String(10), nullable=False)
    title: Mapped[str] = mapped_column(String(200), nullable=False)
    description: Mapped[str] = mapped_column(Text, nullable=False)
    image_url: Mapped[str] = mapped_column(String(500), nullable=True)
    order: Mapped[int] = mapped_column(Integer, default=0)
    is_active: Mapped[bool] = mapped_column(Boolean, default=True)
