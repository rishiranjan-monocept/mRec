import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
// import AuthPage from "../features/auth/AuthPage";
// import NotFound from "../pages/NotFound";

export default function AppRoutes() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />

        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </>
  );
}
