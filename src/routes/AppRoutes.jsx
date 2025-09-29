import { Routes, Route, Navigate } from "react-router-dom";
import Onboarding from "../pages/Onboarding";
import Kyc from "../pages/Kyc";

export default function AppRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/onboarding" replace />} />
        <Route path="/onboarding" element={<Onboarding />} />
        <Route path="/kyc" element={<Kyc />} />
      </Routes>
    </>
  );
}
