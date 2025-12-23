import { Routes, Route } from 'react-router-dom';
import { Layout } from '@components/layout/Layout';
import { HomePage } from '@pages/HomePage';
import { AboutPage } from '@pages/AboutPage';
import { DivisionPage } from '@pages/DivisionPage';
import { ContactPage } from '@pages/ContactPage';
import { CareersPage } from '@pages/CareersPage';
import { NewsroomPage } from '@pages/NewsroomPage';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about/*" element={<AboutPage />} />
        <Route path="/architecture-planning/*" element={<DivisionPage division="architecture" />} />
        <Route path="/apps-platforms/*" element={<DivisionPage division="apps" />} />
        <Route path="/ads-services/*" element={<DivisionPage division="ads" />} />
        <Route path="/suites/*" element={<DivisionPage division="suites" />} />
        <Route path="/photography-studios/*" element={<DivisionPage division="photo" />} />
        <Route path="/careers/*" element={<CareersPage />} />
        <Route path="/newsroom/*" element={<NewsroomPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
