import type { ThemeType } from "../components/styles/theme";

declare module "styled-components" {
  export interface DefaultTheme extends ThemeType {
    mode: "white" | "dark";
  }
}
