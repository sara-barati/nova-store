"use client";

import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  :root {
    --app-background: ${({ theme }) => theme.colors.background};
    --app-surface: ${({ theme }) => theme.colors.surface};
    --app-text: ${({ theme }) => theme.colors.text};
    --app-secondary-text: ${({ theme }) => theme.colors.secondaryText};
    --app-primary: ${({ theme }) => theme.colors.primary};
    --app-border: ${({ theme }) => theme.colors.border};
    --app-danger: ${({ theme }) => theme.colors.danger};
    --app-header: ${({ theme }) => theme.colors.header};
    --app-card: ${({ theme }) => theme.colors.card};
    --app-input: ${({ theme }) => theme.colors.input};
    --app-muted: ${({ theme }) => theme.colors.muted};
  }

  * {
    box-sizing: border-box;
  }

  html {
    min-height: 100%;
    scroll-behavior: smooth;
  }

  body {
    margin: 0;
    min-height: 100vh;
    background-color: var(--app-background);
    color: var(--app-text);
    font-family: Arial, sans-serif;
    transition:
      background-color 0.2s ease,
      color 0.2s ease;
  }

  button,
  input,
  select,
  textarea {
    font: inherit;
  }

  button {
    cursor: pointer;
  }

  button:disabled {
    cursor: not-allowed;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  img {
    max-width: 100%;
  }
`;

export default GlobalStyles;
