import { BrowserRouter as Router } from "react-router-dom";
import Navigation from "./components/Navigation";
import AppRouter from "./components/AppRouter";
import "./App.css";
import { useEffect } from "react";
import { ThemeProvider } from "styled-components";
import {
  darkTheme,
  whiteTheme,
  type ThemeMode,
} from "./components/styles/theme";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

// Separate ThemeWrapper to use the theme context
function ThemeWrapper({ mode }: { mode: ThemeMode }) {
  // Set CSS variables on document root
  useEffect(() => {
    if (mode) {
      const root = document.documentElement;
      root.style.setProperty(
        "--bg-color",
        mode === "white" ? "#ffffff" : "#121212"
      );
      root.style.setProperty(
        "--text-color",
        mode === "white" ? "#213547" : "#ffffff"
      );
    }
  }, [mode]);

  return (
    <Router basename={import.meta.env.VITE_BASE_PATH}>
      <div className="App">
        <Navigation />
        <ScrollToTop />
        <AppRouter />
        <Footer />
      </div>
    </Router>
  );
}

function App() {
  const mode: ThemeMode = Math.random() > 0.5 ? "dark" : "white";

  return (
    <ThemeProvider theme={mode === "white" ? whiteTheme : darkTheme}>
      <ThemeWrapper mode={mode} />
    </ThemeProvider>
  );
}

export default App;
