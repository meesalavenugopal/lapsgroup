"""
Initialize database tables
"""
import asyncio
from app.core.database import engine, Base
from app.models.models import (
    Division,
    Service,
    NewsItem,
    JobOpening,
    JobApplication,
    Project,
    ContactSubmission,
    NewsletterSubscriber,
    TimelineEvent,
)


async def init_db():
    """Create all database tables"""
    async with engine.begin() as conn:
        # Drop all tables (for fresh start)
        # await conn.run_sync(Base.metadata.drop_all)
        
        # Create all tables
        await conn.run_sync(Base.metadata.create_all)
        
        print("✅ Database tables created successfully!")


if __name__ == "__main__":
    asyncio.run(init_db())
