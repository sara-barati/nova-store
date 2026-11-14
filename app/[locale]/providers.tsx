"use client";

import type { ReactNode } from "react";

import { ThemeContextProvider } from "@/context/ThemeContext";
import GlobalStyles from "@/shared/GlobalStyles";
import Header from "@/components/Header";
import CartHydration from "@/components/CartHydration";

interface ProvidersProps {
  children: ReactNode;
}

export default function Providers({ children }: ProvidersProps) {
  return (
    <ThemeContextProvider>
      <GlobalStyles />

      <CartHydration />

      <Header />

      {children}
    </ThemeContextProvider>
  );
}
