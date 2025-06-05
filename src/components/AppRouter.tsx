import { Routes, Route, Navigate } from "react-router-dom";
import { useTheme } from "../contexts/ThemeContext";

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

export default function AppRouter() {
  const { mode, isLoading } = useTheme();

  // Show loading state while determining theme
  if (isLoading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          fontSize: "1.2rem",
        }}
      >
        Loading...
      </div>
    );
  }

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
      <Route path="/stories/:id" element={<Article mode={mode ?? "dark"} />} />

      {/* 404 fallback */}
      <Route path="*" element={<Navigate to="/home" replace />} />
    </Routes>
  );
}
