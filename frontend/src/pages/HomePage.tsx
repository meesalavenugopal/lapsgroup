import { HeroCarousel } from '@components/home/HeroCarousel';
import { NewsSection } from '@components/home/NewsSection';
import { DivisionsSection } from '@components/home/DivisionsSection';
import { TimelineSection } from '@components/home/TimelineSection';
import { CareersSection } from '@components/home/CareersSection';
import { FloatingNav } from '@components/common/FloatingNav';

export function HomePage() {
  return (
    <>
      {/* Floating Section Navigation */}
      <FloatingNav />

      {/* Hero Carousel - Full Width */}
      <div id="hero">
        <HeroCarousel />
      </div>

      {/* In the News Section */}
      <div id="news">
        <NewsSection />
      </div>

      {/* Division Stories */}
      <div id="divisions">
        <DivisionsSection />
      </div>

      {/* Timeline / Milestones */}
      <div id="journey">
        <TimelineSection />
      </div>

      {/* Careers Teaser */}
      <div id="careers">
        <CareersSection />
      </div>
    </>
  );
}
