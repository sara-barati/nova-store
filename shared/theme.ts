import type { DefaultTheme } from "styled-components";

export interface AppTheme extends DefaultTheme {
  mode: "light" | "dark";
  colors: {
    background: string;
    surface: string;
    text: string;
    secondaryText: string;
    primary: string;
    border: string;
    danger: string;
    header: string;
    card: string;
    input: string;
    muted: string;
  };
}

export const lightTheme: AppTheme = {
  mode: "light",
  colors: {
    background: "#F7F8FA",
    surface: "#FFFFFF",
    text: "#172B45",
    secondaryText: "#68778B",
    primary: "#F36F21",
    border: "#E4E8EE",
    danger: "#DC3545",
    header: "#FFFFFF",
    card: "#FFFFFF",
    input: "#FFFFFF",
    muted: "#F7F8FA",
  },
};

export const darkTheme: AppTheme = {
  mode: "dark",
  colors: {
    background: "#111B2A",
    surface: "#1B293B",
    text: "#F4F7FB",
    secondaryText: "#AAB6C6",
    primary: "#FF873D",
    border: "#344358",
    danger: "#FF737D",
    header: "#1B293B",
    card: "#1B293B",
    input: "#1B293B",
    muted: "#26364B",
  },
};
