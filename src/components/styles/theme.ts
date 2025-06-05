export type ThemeMode = "white" | "dark";

export const whiteTheme = {
  mode: "white" as ThemeMode,
  text: "#444",
  textRed: "#d9304c",
  quote: "999",
  backgroundSecondary: "#f5f5f5",
};

export const darkTheme = {
  mode: "dark" as ThemeMode,
  text: "#fff",
  textRed: "#ff1744",
  quote: "#ccc",
  backgroundSecondary: "#0a0a0a",
};

export const getTheme = (mode: ThemeMode) => {
  return mode === "white" ? whiteTheme : darkTheme;
};

export type ThemeType = typeof whiteTheme;
