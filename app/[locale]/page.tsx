import { getTranslations } from "next-intl/server";

import { getProducts } from "@/requests/productRequests";
import ProductCard from "@/components/ProductCard";

import type { Product } from "@/types/product";

export default async function HomePage() {
  const t = await getTranslations("HomePage");

  let products: Product[] = [];
  let errorMessage = "";

  try {
    products = await getProducts();
  } catch (error) {
    errorMessage =
      error instanceof Error ? error.message : "Unable to load products";
  }

  return (
    <main className="home-page">
      <section className="hero-section">
        <h1>{t("title")}</h1>
        <p>{t("description")}</p>
      </section>

      <section className="products-section">
        <h2>{t("products")}</h2>

        {errorMessage ? (
          <p className="error-message">{errorMessage}</p>
        ) : products.length === 0 ? (
          <p>No products found.</p>
        ) : (
          <div className="products-grid">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
