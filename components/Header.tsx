"use client";

import { useLocale, useTranslations } from "next-intl";
import styled from "styled-components";

import { useTheme } from "@/context/ThemeContext";

import { Link, usePathname, useRouter } from "@/i18n/navigation";

import { useCartStore } from "@/storage/cartStore";

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

const CartCount = styled.span`
  margin-left: 5px;
  padding: 2px 7px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  font-size: 12px;
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
      <Logo>NOVA Store</Logo>

      <Actions>
        <ActionButton onClick={changeLanguage}>{t("language")}</ActionButton>

        <ActionButton onClick={toggleTheme}>
          {themeMode === "light" ? t("darkMode") : t("lightMode")}
        </ActionButton>

        <Link href="/cart">
          {t("cart")}

          {hasHydrated && cartCount > 0 && <CartCount>{cartCount}</CartCount>}
        </Link>
      </Actions>
    </HeaderContainer>
  );
}
