"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

import { ThemeProvider as StyledThemeProvider } from "styled-components";

import { lightTheme, darkTheme, type AppTheme } from "@/shared/theme";

type ThemeMode = "light" | "dark";

interface ThemeContextType {
  themeMode: ThemeMode;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeContextProviderProps {
  children: ReactNode;
}

export function ThemeContextProvider({ children }: ThemeContextProviderProps) {
  const [themeMode, setThemeMode] = useState<ThemeMode>("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("nova-theme");

    if (savedTheme === "light" || savedTheme === "dark") {
      setThemeMode(savedTheme);
    }
  }, []);

  const toggleTheme = () => {
    setThemeMode((currentTheme) => {
      const nextTheme = currentTheme === "light" ? "dark" : "light";

      localStorage.setItem("nova-theme", nextTheme);

      return nextTheme;
    });
  };

  const selectedTheme: AppTheme =
    themeMode === "light" ? lightTheme : darkTheme;

  return (
    <ThemeContext.Provider
      value={{
        themeMode,
        toggleTheme,
      }}
    >
      <StyledThemeProvider theme={selectedTheme}>
        {children}
      </StyledThemeProvider>
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useTheme must be used inside ThemeContextProvider");
  }

  return context;
}
