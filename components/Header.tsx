"use client";

import { useLocale } from "next-intl";
import styled from "styled-components";

import { useTheme } from "@/context/ThemeContext";
import { Link, usePathname, useRouter } from "@/i18n/navigation";

const HeaderContainer = styled.header`
  width: 100%;
  padding: 16px 5%;
  background-color: ${({ theme }) => theme.colors.surface};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;

  color: ${({ theme }) => theme.colors.text};
`;

const Logo = styled.h2`
  margin: 0;
  color: ${({ theme }) => theme.colors.primary};
`;

const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const ActionButton = styled.button`
  padding: 8px 12px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 8px;

  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};

  cursor: pointer;
`;

export default function Header() {
  const locale = useLocale();

  const pathname = usePathname();
  const router = useRouter();

  const { themeMode, toggleTheme } = useTheme();

  const changeLanguage = () => {
    const nextLocale = locale === "fa" ? "en" : "fa";

    router.replace(pathname, {
      locale: nextLocale,
    });
  };

  return (
    <HeaderContainer>
      <Logo>NOVA Store</Logo>

      <Actions>
        <ActionButton onClick={changeLanguage}>
          {locale === "fa" ? "English" : "فارسی"}
        </ActionButton>

        <ActionButton onClick={toggleTheme}>
          {themeMode === "light" ? "Dark Mode" : "Light Mode"}
        </ActionButton>

        <Link href="/cart">{locale === "fa" ? "سبد خرید" : "Cart"}</Link>
      </Actions>
    </HeaderContainer>
  );
}
