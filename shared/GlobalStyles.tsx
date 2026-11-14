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
    font-family: "Vazirmatn", Inter, Tahoma, sans-serif;
    font-synthesis: none;
    text-rendering: optimizeLegibility;
  }

  body {
    margin: 0;
    min-height: 100vh;
    background-color: var(--app-background);
    color: var(--app-text);
    font-family: "Vazirmatn", Inter, Tahoma, sans-serif;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.7;
    transition:
      background-color 0.2s ease,
      color 0.2s ease;
    -webkit-font-smoothing: antialiased;
  }

  button,
  input,
  select,
  textarea {
    font: inherit;
    letter-spacing: inherit;
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

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: "Vazirmatn", Inter, Tahoma, sans-serif;
  }

  ::selection {
    background: var(--app-primary);
    color: #ffffff;
  }
`;

export default GlobalStyles;
