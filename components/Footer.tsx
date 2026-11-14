"use client";

import { useTranslations } from "next-intl";
import styled from "styled-components";

import { Link } from "@/i18n/navigation";

const FooterContainer = styled.footer`
  width: 100%;
  flex-shrink: 0;
  margin-top: auto;
  padding: 40px 7% 20px;
  background: ${({ theme }) => theme.colors.header};
  color: #ffffff;
`;

const FooterContent = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1.5fr;
  gap: 48px;
  max-width: 1200px;
  margin: 0 auto 32px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 32px;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 28px;
  }
`;

const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;

  h3 {
    margin: 0 0 6px;
    color: #ffffff;
    font-size: 15px;
    font-weight: 600;
  }

  p {
    margin: 0;
    color: #b7c1d0;
    font-size: 13px;
    line-height: 1.9;
  }

  a {
    color: #b7c1d0;
    font-size: 13px;
    transition: color 0.2s ease;

    &:hover {
      color: #ff914d;
    }
  }
`;

const FooterLogo = styled(Link)`
  color: #ff914d !important;
  font-size: 26px !important;
  font-weight: 900;
  letter-spacing: 1px;
`;

const FooterBottom = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding-top: 18px;
  border-top: 1px solid rgba(255, 255, 255, 0.15);
  text-align: center;
  color: #a7b2c4;
  font-size: 12px;
`;

export default function Footer() {
  const t = useTranslations("Footer");

  return (
    <FooterContainer>
      <FooterContent>
        <FooterColumn>
          <FooterLogo href="/">NOVA</FooterLogo>

          <p>{t("description")}</p>
        </FooterColumn>

        <FooterColumn>
          <h3>{t("quickLinks")}</h3>

          <Link href="/">{t("home")}</Link>
          <Link href="/#products">{t("products")}</Link>
          <Link href="/cart">{t("cart")}</Link>
        </FooterColumn>

        <FooterColumn>
          <h3>{t("contactUs")}</h3>

          <p>{t("email")}</p>
          <p>{t("workingHours")}</p>
        </FooterColumn>
      </FooterContent>

      <FooterBottom>{t("copyright")}</FooterBottom>
    </FooterContainer>
  );
}
