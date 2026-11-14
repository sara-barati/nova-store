"use client";

import styled, { ThemeProvider } from "styled-components";
import { Toaster } from "sonner";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CartHydration from "@/components/CartHydration";

import { ThemeContextProvider, useTheme } from "@/context/ThemeContext";

import { lightTheme, darkTheme } from "@/shared/theme";

import GlobalStyles from "@/shared/GlobalStyles";

interface ProvidersProps {
  children: React.ReactNode;
}

const AppShell = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const MainContent = styled.div`
  flex: 1;
  width: 100%;
`;

function AppThemeProvider({ children }: ProvidersProps) {
  const { themeMode } = useTheme();

  const theme = themeMode === "dark" ? darkTheme : lightTheme;

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />

      <Toaster position="top-center" richColors closeButton duration={2500} />

      <CartHydration />

      <AppShell>
        <Header />

        <MainContent>{children}</MainContent>

        <Footer />
      </AppShell>
    </ThemeProvider>
  );
}

export default function Providers({ children }: ProvidersProps) {
  return (
    <ThemeContextProvider>
      <AppThemeProvider>{children}</AppThemeProvider>
    </ThemeContextProvider>
  );
}
