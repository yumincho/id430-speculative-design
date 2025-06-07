import { Routes, Route, Navigate } from "react-router-dom";
// import { useTheme, type DefaultTheme } from "styled-components";

// Common pages
import Home from "../pages/common/Home";
import Article from "../pages/common/Article";
import Stories from "../pages/common/Stories";
import Store from "../pages/common/Store";
import History from "../pages/common/History";

export default function AppRouter() {
  // const { mode }: DefaultTheme = useTheme();

  return (
    <Routes>
      {/* Root redirect */}
      <Route path="/" element={<Navigate to="/home" replace />} />

      {/* Routes */}
      <Route path="/home" element={<Home />} />
      <Route path="/store" element={<Store />} />
      <Route path="/history" element={<History />} />
      <Route path="/stories" element={<Stories />} />
      <Route path="/stories/:id" element={<Article />} />

      {/* 404 fallback */}
      <Route path="*" element={<Navigate to="/home" replace />} />
    </Routes>
  );
}
