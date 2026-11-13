"use client";

import { useTranslations } from "next-intl";

import { useCartStore } from "@/storage/cartStore";
import type { Product } from "@/types/product";

interface AddToCartButtonProps {
  product: Product;
}

export default function AddToCartButton({ product }: AddToCartButtonProps) {
  const t = useTranslations("Product");

  const addToCart = useCartStore((state) => state.addToCart);

  const hasHydrated = useCartStore((state) => state.hasHydrated);

  return (
    <button
      type="button"
      className="add-to-cart-button"
      onClick={() => addToCart(product)}
      disabled={!hasHydrated}
    >
      {t("addToCart")}
    </button>
  );
}
