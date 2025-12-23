import { HeroCarousel } from '@components/home/HeroCarousel';
import { NewsSection } from '@components/home/NewsSection';
import { DivisionsSection } from '@components/home/DivisionsSection';
import { TimelineSection } from '@components/home/TimelineSection';
import { CareersSection } from '@components/home/CareersSection';

export function HomePage() {
  return (
    <>
      {/* Hero Carousel - Full Width */}
      <HeroCarousel />

      {/* In the News Section */}
      <NewsSection />

      {/* Division Stories */}
      <DivisionsSection />

      {/* Timeline / Milestones */}
      <TimelineSection />

      {/* Careers Teaser */}
      <CareersSection />
    </>
  );
}
