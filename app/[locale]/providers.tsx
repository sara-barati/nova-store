"use client";

import type { ReactNode } from "react";

import { ThemeContextProvider } from "@/context/ThemeContext";
import GlobalStyles from "@/shared/GlobalStyles";

interface ProvidersProps {
  children: ReactNode;
}

export default function Providers({ children }: ProvidersProps) {
  return (
    <ThemeContextProvider>
      <GlobalStyles />
      {children}
    </ThemeContextProvider>
  );
}
