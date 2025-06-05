import type { ThemeMode } from "../../contexts/ThemeContext";

const white = {
  textColor: "#444",
};

const dark = {
  textColor: "#fff",
};

export const getTheme = (mode: ThemeMode) => {
  return mode === "white" ? white : dark;
};
