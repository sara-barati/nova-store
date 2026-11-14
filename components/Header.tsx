"use client";

import { useLocale, useTranslations } from "next-intl";
import styled from "styled-components";

import { useTheme } from "@/context/ThemeContext";

import { Link, usePathname, useRouter } from "@/i18n/navigation";

import { useCartStore } from "@/storage/cartStore";

const HeaderContainer = styled.header`
  width: 100%;
  background: ${({ theme }) => theme.colors.header};
  color: #ffffff;
  padding: 16px 5%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  flex-wrap: wrap;
`;

const Logo = styled(Link)`
  display: inline-flex;
  align-items: center;
  color: #ff914d;
  font-size: 28px;
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
  gap: 14px;
`;

const ActionButton = styled.button`
  min-height: 40px;
  padding: 8px 12px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: 9px;
  background: rgba(255, 255, 255, 0.07);
  color: #ffffff;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  &:hover {
    background: rgba(255, 255, 255, 0.15);
  }
`;

const CartLink = styled(Link)`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border-radius: 10px;
  color: #ffffff;
  background: rgba(255, 255, 255, 0.08);

  &:hover {
    background: rgba(255, 255, 255, 0.17);
  }

  svg {
    width: 23px;
    height: 23px;
  }
`;

const CartCount = styled.span`
  position: absolute;
  top: -5px;
  right: -5px;
  min-width: 19px;
  height: 19px;
  padding: 0 5px;
  border-radius: 20px;
  background: #ff914d;
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

  const changeLanguage = () => {
    const nextLocale = locale === "fa" ? "en" : "fa";

    router.replace(pathname, {
      locale: nextLocale,
    });
  };

  return (
    <HeaderContainer>
      <Logo href="/">NOVA</Logo>

      <Actions>
        <ActionButton
          type="button"
          onClick={toggleTheme}
          aria-label="Toggle theme"
        >
          {themeMode === "light" ? "☾" : "☀"}
          {themeMode === "light" ? t("darkMode") : t("lightMode")}
        </ActionButton>

        <ActionButton type="button" onClick={changeLanguage}>
          {t("language")}
        </ActionButton>

        <CartLink href="/cart" aria-label={t("cart")}>
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <circle cx="9" cy="21" r="1" />
            <circle cx="20" cy="21" r="1" />
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
          </svg>

          {hasHydrated && cartCount > 0 && <CartCount>{cartCount}</CartCount>}
        </CartLink>
      </Actions>
    </HeaderContainer>
  );
}
