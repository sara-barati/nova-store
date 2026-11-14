"use client";

import { useLocale, useTranslations } from "next-intl";
import { Languages, Moon, ShoppingCart, Sun } from "lucide-react";
import styled from "styled-components";

import { useTheme } from "@/context/ThemeContext";
import { Link, usePathname, useRouter } from "@/i18n/navigation";
import { useCartStore } from "@/storage/cartStore";

const HeaderContainer = styled.header`
  min-height: 76px;
  padding: 0 5%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
  background: ${({ theme }) => theme.colors.header};
  color: ${({ theme }) => theme.colors.text};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  position: sticky;
  top: 0;
  z-index: 30;

  @media (max-width: 768px) {
    min-height: 66px;
    padding: 0 18px;
  }

  @media (max-width: 480px) {
    padding: 0 14px;
    gap: 10px;
  }
`;

const Logo = styled(Link)`
  display: inline-flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.primary};
  font-size: 26px;
  font-weight: 900;
  letter-spacing: 1px;
  text-decoration: none;

  &:hover {
    opacity: 0.85;
  }
`;

const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  @media (max-width: 480px) {
    gap: 7px;
  }
`;

const ActionButton = styled.button`
  min-height: 40px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 0 12px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 10px;
  background: ${({ theme }) => theme.colors.surface};
  color: ${({ theme }) => theme.colors.text};
  font-size: 13px;
  font-weight: 600;
  transition:
    background 0.18s ease,
    border-color 0.18s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.background};
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.primary};
    outline-offset: 2px;
  }

  @media (max-width: 520px) {
    width: 40px;
    padding: 0;

    span {
      display: none;
    }
  }
`;

const CartLink = styled(Link)`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 10px;
  color: ${({ theme }) => theme.colors.text};
  background: ${({ theme }) => theme.colors.surface};
  transition: background 0.18s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.background};
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.primary};
    outline-offset: 2px;
  }
`;

const CartCount = styled.span`
  position: absolute;
  top: -6px;
  right: -6px;
  min-width: 19px;
  height: 19px;
  padding: 0 5px;
  border-radius: 20px;
  background: ${({ theme }) => theme.colors.primary};
  color: #ffffff;
  font-size: 11px;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function Header() {
  const locale = useLocale();
  const t = useTranslations("Header");

  const pathname = usePathname();
  const router = useRouter();

  const { themeMode, toggleTheme } = useTheme();

  const cartCount = useCartStore((state) =>
    state.items.reduce((total, item) => total + item.quantity, 0),
  );

  const hasHydrated = useCartStore((state) => state.hasHydrated);

  const isPersian = locale === "fa";

  const changeLanguage = () => {
    const nextLocale = isPersian ? "en" : "fa";

    router.replace(pathname, {
      locale: nextLocale,
    });
  };

  const themeLabel = themeMode === "light" ? t("darkMode") : t("lightMode");

  return (
    <HeaderContainer>
      <Logo href="/">NOVA</Logo>

      <Actions>
        <ActionButton
          type="button"
          onClick={toggleTheme}
          aria-label={themeLabel}
          title={themeLabel}
        >
          {themeMode === "light" ? <Moon size={17} /> : <Sun size={17} />}
          <span>{themeLabel}</span>
        </ActionButton>

        <ActionButton
          type="button"
          onClick={changeLanguage}
          aria-label={isPersian ? "Switch to English" : "تغییر زبان به فارسی"}
          title={isPersian ? "English" : "فارسی"}
        >
          <Languages size={17} />
          <span>{isPersian ? "English" : "فارسی"}</span>
        </ActionButton>

        <CartLink href="/cart" aria-label={t("cart")} title={t("cart")}>
          <ShoppingCart size={20} />

          {hasHydrated && cartCount > 0 && <CartCount>{cartCount}</CartCount>}
        </CartLink>
      </Actions>
    </HeaderContainer>
  );
}
