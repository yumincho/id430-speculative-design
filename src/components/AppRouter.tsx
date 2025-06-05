import { Routes, Route, Navigate } from "react-router-dom";

// White mode pages
import Home from "../pages/white/Home";
import Store from "../pages/white/Store";
import History from "../pages/white/History";
import Stories from "../pages/white/Stories";

// Dark mode pages
import HomeDark from "../pages/dark/Home";
import StoreDark from "../pages/dark/Store";
import HistoryDark from "../pages/dark/History";
import StoriesDark from "../pages/dark/Stories";
import Article from "../pages/common/Article";
import { useTheme, type DefaultTheme } from "styled-components";

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
      <Route
        path="/store"
        element={mode === "white" ? <Store /> : <StoreDark />}
      />
      <Route
        path="/history"
        element={mode === "white" ? <History /> : <HistoryDark />}
      />
      <Route
        path="/stories"
        element={mode === "white" ? <Stories /> : <StoriesDark />}
      />
      <Route path="/stories/:id" element={<Article />} />

      {/* 404 fallback */}
      <Route path="*" element={<Navigate to="/home" replace />} />
    </Routes>
  );
}
