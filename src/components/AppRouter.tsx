import { Routes, Route, Navigate } from "react-router-dom";
import { useTheme, type DefaultTheme } from "styled-components";

// White mode pages
import Home from "../pages/white/Home";
import History from "../pages/white/History";

// Dark mode pages
import HomeDark from "../pages/dark/Home";
import HistoryDark from "../pages/dark/History";

// Common pages
import Article from "../pages/common/Article";
import Stories from "../pages/common/Stories";
import Store from "../pages/common/Store";

export default function AppRouter() {
  const { mode }: DefaultTheme = useTheme();

  return (
    <Routes>
      {/* Root redirect */}
      <Route path="/" element={<Navigate to="/home" replace />} />

      {/* Routes */}
      <Route
        path="/home"
        element={mode === "white" ? <Home /> : <HomeDark />}
      />
      <Route path="/store" element={<Store />} />
      <Route
        path="/history"
        element={mode === "white" ? <History /> : <HistoryDark />}
      />
      <Route path="/stories" element={<Stories />} />
      <Route path="/stories/:id" element={<Article />} />

      {/* 404 fallback */}
      <Route path="*" element={<Navigate to="/home" replace />} />
    </Routes>
  );
}
