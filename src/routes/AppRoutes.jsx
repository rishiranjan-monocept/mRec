import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
// import AuthPage from "../features/auth/AuthPage";
// import NotFound from "../pages/NotFound";

export default function AppRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/auth" element={<AuthPage />} />
        <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </>
  );
}
