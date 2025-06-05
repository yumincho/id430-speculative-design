export type ThemeMode = "white" | "dark";

export const whiteTheme = {
  mode: "white" as ThemeMode,
  text: "#444",
  quote: "999",
};

export const darkTheme = {
  mode: "dark" as ThemeMode,
  text: "#fff",
  quote: "#ccc",
};

export const getTheme = (mode: ThemeMode) => {
  return mode === "white" ? whiteTheme : darkTheme;
};

export type ThemeType = typeof whiteTheme;
