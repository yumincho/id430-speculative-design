import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "./contexts/ThemeContext";
import Navigation from "./components/Navigation";
import AppRouter from "./components/AppRouter";
import "./App.css";
import { useTheme } from "./contexts/ThemeContext";
import { useEffect } from "react";

// Separate ThemeWrapper to use the theme context
function ThemeWrapper() {
  const { mode } = useTheme();

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
        <AppRouter />
      </div>
    </Router>
  );
}

function App() {
  return (
    <ThemeProvider>
      <ThemeWrapper />
    </ThemeProvider>
  );
}

export default App;
