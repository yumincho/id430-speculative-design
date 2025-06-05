export type ThemeMode = "white" | "dark";

export const whiteTheme = {
  mode: "white" as ThemeMode,
  text: "#333333",
  textRed: "#d9304c",
  textReverse: "#ffffff",
  quote: "#999999",
  background: "#efefef",
  backgroundSecondary: "#f5f5f5",
  backgroundReverse: "#000000",
};

export const darkTheme = {
  mode: "dark" as ThemeMode,
  text: "#ffffff",
  textRed: "#ff1744",
  textReverse: "#000000",
  quote: "#cccccc",
  background: "#333333",
  backgroundSecondary: "#0a0a0a",
  backgroundReverse: "#ffffff",
};

export const getTheme = (mode: ThemeMode) => {
  return mode === "white" ? whiteTheme : darkTheme;
};

export type ThemeType = typeof whiteTheme;
