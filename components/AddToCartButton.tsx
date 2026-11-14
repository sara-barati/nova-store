"use client";

import { useTranslations } from "next-intl";
import { toast } from "sonner";

import { useCartStore } from "@/storage/cartStore";
import type { Product } from "@/types/product";

interface AddToCartButtonProps {
  product: Product;
}

export default function AddToCartButton({ product }: AddToCartButtonProps) {
  const t = useTranslations("Product");
  const notification = useTranslations("Notifications");

  const addToCart = useCartStore((state) => state.addToCart);

  const hasHydrated = useCartStore((state) => state.hasHydrated);

  const handleAddToCart = () => {
    addToCart(product);
    toast.success(notification("itemAdded"));
  };

  return (
    <button
      type="button"
      className="add-to-cart-button"
      onClick={handleAddToCart}
      disabled={!hasHydrated}
    >
      {t("addToCart")}
    </button>
  );
}
