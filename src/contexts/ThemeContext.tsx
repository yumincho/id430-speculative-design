import { createContext, useContext, useState, useEffect } from "react";
import type { ReactNode } from "react";

export type ThemeMode = "white" | "dark";

interface ThemeContextType {
  mode: ThemeMode | null;
  isLoading: boolean;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
  children: ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [mode, setMode] = useState<ThemeMode | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    /* const storedMode = sessionStorage.getItem('themeMode');
    const randomMode: ThemeMode = storedMode ? storedMode as ThemeMode : Math.random() > 0.5 ? 'dark' : 'white'; */
    const randomMode: ThemeMode = Math.random() > 0.5 ? "dark" : "white";
    setMode(randomMode);
    sessionStorage.setItem("themeMode", randomMode);

    setIsLoading(false);
  }, []);

  return (
    <ThemeContext.Provider value={{ mode, isLoading }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
