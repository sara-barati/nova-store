"use client";

import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html {
    min-height: 100%;
  }

  body {
    margin: 0;
    min-height: 100vh;
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    font-family: Arial, sans-serif;
    transition: background-color 0.2s ease, color 0.2s ease;
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

  a {
    color: inherit;
    text-decoration: none;
  }

  img {
    max-width: 100%;
  `;

export default GlobalStyles;
