import { getTranslations } from "next-intl/server";

import { getProducts } from "@/requests/productRequests";
import ProductCatalog from "@/components/ProductCatalog";

import { Link } from "@/i18n/navigation";

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
        <div className="hero-content">
          <span className="hero-label">NOVA ONLINE STORE</span>

          <h1>{t("title")}</h1>

          <p>{t("description")}</p>

          <Link href="#products" className="hero-button">
            {t("shopNow")}
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>

      <section className="products-section" id="products">
        <div className="section-heading">
          <div>
            <span className="section-label">NOVA COLLECTION</span>

            <h2>{t("products")}</h2>
          </div>
        </div>

        {errorMessage ? (
          <p className="error-message">{errorMessage}</p>
        ) : products.length === 0 ? (
          <p className="catalog-empty">No products found.</p>
        ) : (
          <ProductCatalog products={products} />
        )}
      </section>
    </main>
  );
}
