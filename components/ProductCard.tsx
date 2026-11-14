"use client";

import { useTranslations } from "next-intl";
import { toast } from "sonner";

import { Link } from "@/i18n/navigation";
import { useCartStore } from "@/storage/cartStore";

import type { Product } from "@/types/product";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const t = useTranslations("Product");
  const notification = useTranslations("Notifications");

  const addToCart = useCartStore((state) => state.addToCart);

  const hasHydrated = useCartStore((state) => state.hasHydrated);

  const handleAddToCart = () => {
    addToCart(product);
    toast.success(notification("itemAdded"));
  };

  return (
    <article className="product-card">
      <Link href={`/products/${product.id}`} className="product-card-link">
        <div className="product-image">
          <img src={product.image} alt={product.title} />
        </div>

        <div className="product-info">
          <span className="product-category">{product.category}</span>

          <h3>{product.title}</h3>

          <div className="product-rating">
            <span className="rating-star">★</span>
            <span>{product.rating.rate}</span>
            <span className="rating-count">
              ({product.rating.count} {t("reviews")})
            </span>
          </div>
        </div>
      </Link>

      <div className="product-card-footer">
        <strong className="product-price">${product.price.toFixed(2)}</strong>

        <button
          type="button"
          className="card-add-button"
          disabled={!hasHydrated}
          onClick={handleAddToCart}
          aria-label={t("addToCart")}
          title={t("addToCart")}
        >
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
        </button>
      </div>
    </article>
  );
}
