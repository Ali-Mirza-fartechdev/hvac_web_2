import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from '../components/layout/Layout';

const HomePage = lazy(() => import('../pages/HomePage'));
const ServicesPage = lazy(() => import('../pages/ServicesPage'));
const AcRepairPage = lazy(() => import('../pages/AcRepairPage'));
const AcInstallationPage = lazy(() => import('../pages/AcInstallationPage'));
const HeatingPage = lazy(() => import('../pages/HeatingPage'));
const MaintenancePage = lazy(() => import('../pages/MaintenancePage'));
const AboutPage = lazy(() => import('../pages/AboutPage'));
const ServiceAreasPage = lazy(() => import('../pages/ServiceAreasPage'));
const ReviewsPage = lazy(() => import('../pages/ReviewsPage'));
const FinancingPage = lazy(() => import('../pages/FinancingPage'));
const ContactPage = lazy(() => import('../pages/ContactPage'));
const PrivacyPage = lazy(() => import('../pages/PrivacyPage'));
const NotFoundPage = lazy(() => import('../pages/NotFoundPage'));

export function App() {
  return (
    <Suspense fallback={<div style={{ minHeight: '60vh' }} aria-busy="true" />}>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="services" element={<ServicesPage />} />
          <Route path="services/ac-repair" element={<AcRepairPage />} />
          <Route path="services/ac-installation" element={<AcInstallationPage />} />
          <Route path="services/heating" element={<HeatingPage />} />
          <Route path="services/maintenance" element={<MaintenancePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="service-areas" element={<ServiceAreasPage />} />
          <Route path="reviews" element={<ReviewsPage />} />
          <Route path="financing-specials" element={<FinancingPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="privacy" element={<PrivacyPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
}
