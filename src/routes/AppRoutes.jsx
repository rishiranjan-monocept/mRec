// AppRoutes.jsx
import { Routes, Route, Navigate, Outlet } from 'react-router-dom';
// import BaseLayout from "../layouts/BaseLayout";
import Onboarding from '../pages/Onboarding/Onboarding';
import BaseLayout from '../layouts/baseLayours';
import OnboardingForm from '../pages/Onboarding/OnboardingForm';

function BaseLayoutWrapper() {
  return (
    <BaseLayout>
      <Outlet />
    </BaseLayout>
  );
}

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/onboarding" replace />} />

      <Route element={<BaseLayoutWrapper />}>
        <Route path="/onboarding" element={<Onboarding />} />
        <Route path="/onboardingForm" element={<OnboardingForm />} />
      </Route>
    </Routes>
  );
}
