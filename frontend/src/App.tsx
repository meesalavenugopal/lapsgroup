import { Routes, Route } from 'react-router-dom';
import { Layout } from '@components/layout/Layout';
import { HomePage } from '@pages/HomePage';
import { AboutPage } from '@pages/AboutPage';
import { DivisionPage } from '@pages/DivisionPage';
import { ContactPage } from '@pages/ContactPage';
import { CareersPage } from '@pages/CareersPage';
import { NewsroomPage } from '@pages/NewsroomPage';
import { LaunchPresentation } from '@pages/LaunchPresentation';
import {
  LeadershipPage,
  ValuesPage,
  MilestonesPage,
  HeritagePage,
  SustainabilityPage,
  InnovationPage,
} from '@pages/about';
import { PrivacyPolicyPage, TermsOfServicePage, CookiesPolicyPage } from '@pages/legal';

function App() {
  return (
    <Routes>
      {/* Architecture Division Launch Presentation - No Layout */}
      <Route path="/architecture-planning/launch-presentation" element={<LaunchPresentation />} />
      
      {/* Regular Routes with Layout */}
      <Route path="/*" element={
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/about/leadership" element={<LeadershipPage />} />
            <Route path="/about/values" element={<ValuesPage />} />
            <Route path="/about/milestones" element={<MilestonesPage />} />
            <Route path="/about/heritage" element={<HeritagePage />} />
            <Route path="/about/sustainability" element={<SustainabilityPage />} />
            <Route path="/about/innovation" element={<InnovationPage />} />
            <Route path="/architecture-planning/*" element={<DivisionPage division="architecture" />} />
            <Route path="/apps-platforms/*" element={<DivisionPage division="apps" />} />
            <Route path="/ads-services/*" element={<DivisionPage division="ads" />} />
            <Route path="/suites/*" element={<DivisionPage division="suites" />} />
            <Route path="/photography-studios/*" element={<DivisionPage division="photo" />} />
            <Route path="/careers/*" element={<CareersPage />} />
            <Route path="/newsroom/*" element={<NewsroomPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/legal/privacy" element={<PrivacyPolicyPage />} />
            <Route path="/legal/terms" element={<TermsOfServicePage />} />
            <Route path="/legal/cookies" element={<CookiesPolicyPage />} />
          </Routes>
        </Layout>
      } />
    </Routes>
  );
}

export default App;
