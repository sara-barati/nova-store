"use client";

import { createContext, useContext, useSyncExternalStore } from "react";

type ThemeMode = "light" | "dark";

interface ThemeContextType {
  themeMode: ThemeMode;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const THEME_STORAGE_KEY = "nova-theme";

const getThemeSnapshot = (): ThemeMode => {
  const savedTheme = localStorage.getItem(THEME_STORAGE_KEY);

  return savedTheme === "dark" ? "dark" : "light";
};

const getServerSnapshot = (): ThemeMode => "light";

const subscribe = (callback: () => void) => {
  const handleStorageChange = () => callback();

  window.addEventListener("storage", handleStorageChange);
  window.addEventListener("nova-theme-change", handleStorageChange);

  return () => {
    window.removeEventListener("storage", handleStorageChange);
    window.removeEventListener("nova-theme-change", handleStorageChange);
  };
};

interface ThemeContextProviderProps {
  children: React.ReactNode;
}

export function ThemeContextProvider({ children }: ThemeContextProviderProps) {
  const themeMode = useSyncExternalStore(
    subscribe,
    getThemeSnapshot,
    getServerSnapshot,
  );

  const toggleTheme = () => {
    const nextTheme: ThemeMode = themeMode === "light" ? "dark" : "light";

    localStorage.setItem(THEME_STORAGE_KEY, nextTheme);

    window.dispatchEvent(new Event("nova-theme-change"));
  };

  return (
    <ThemeContext.Provider
      value={{
        themeMode,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useTheme must be used within ThemeContextProvider");
  }

  return context;
}
