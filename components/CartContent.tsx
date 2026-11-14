"use client";

import { useTranslations } from "next-intl";

import { useCartStore } from "@/storage/cartStore";
import { Link } from "@/i18n/navigation";

export default function CartContent() {
  const t = useTranslations("Cart");

  const items = useCartStore((state) => state.items);

  const hasHydrated = useCartStore((state) => state.hasHydrated);

  const updateQuantity = useCartStore((state) => state.updateQuantity);

  const removeFromCart = useCartStore((state) => state.removeFromCart);

  const clearCart = useCartStore((state) => state.clearCart);

  const subtotal = items.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  if (!hasHydrated) {
    return (
      <main className="cart-page">
        <p>{t("loading")}</p>
      </main>
    );
  }

  if (items.length === 0) {
    return (
      <main className="cart-page">
        <h1>{t("title")}</h1>

        <p>{t("empty")}</p>

        <Link href="/" className="continue-shopping">
          {t("continueShopping")}
        </Link>
      </main>
    );
  }

  return (
    <main className="cart-page">
      <div className="cart-header">
        <h1>{t("title")}</h1>

        <button type="button" className="clear-cart-button" onClick={clearCart}>
          {t("clear")}
        </button>
      </div>

      <div className="cart-items">
        {items.map((item) => (
          <article className="cart-item" key={item.id}>
            <div className="cart-item-image">
              <img src={item.image} alt={item.title} />
            </div>

            <div className="cart-item-info">
              <h3>{item.title}</h3>

              <p>${item.price.toFixed(2)}</p>

              <div className="quantity-controls">
                <button
                  type="button"
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                >
                  -
                </button>

                <span>{item.quantity}</span>

                <button
                  type="button"
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                >
                  +
                </button>
              </div>

              <button
                type="button"
                className="remove-item-button"
                onClick={() => removeFromCart(item.id)}
              >
                {t("remove")}
              </button>
            </div>

            <strong>${(item.price * item.quantity).toFixed(2)}</strong>
          </article>
        ))}
      </div>

      <div className="cart-summary">
        <h2>
          {t("subtotal")} ${subtotal.toFixed(2)}
        </h2>

        <Link href="/" className="continue-shopping">
          {t("continueShopping")}
        </Link>
      </div>
    </main>
  );
}
