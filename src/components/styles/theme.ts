export type ThemeMode = "white" | "dark";

export const whiteTheme = {
  mode: "white" as ThemeMode,
  brandColor: "rgb(255, 90, 0)",
  text: "#333333",
  textRed: "#d9304c",
  textReverse: "#ffffff",
  quote: "#999999",
  button: "#efefef",
  background: "#ffffff",
  backgroundSecondary: "#f5f5f5",
  backgroundReverse: "#000000",
  border: "#cccccc",
};

export const darkTheme = {
  mode: "dark" as ThemeMode,
  brandColor: "rgb(255, 90, 0)",
  text: "#ffffff",
  textRed: "#ff0000",
  textReverse: "#000000",
  quote: "#cccccc",
  button: "#333333",
  background: "#121212",
  backgroundSecondary: "#0a0a0a",
  backgroundReverse: "#ffffff",
  border: "#444444",
};

export const getTheme = (mode: ThemeMode) => {
  return mode === "white" ? whiteTheme : darkTheme;
};

export type ThemeType = typeof whiteTheme;
