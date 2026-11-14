import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTranslations } from "next-intl/server";

import { getProductById } from "@/requests/productRequests";
import type { Product } from "@/types/product";

import AddToCartButton from "@/components/AddToCartButton";

interface ProductDetailsPageProps {
  params: Promise<{
    locale: string;
    id: string;
  }>;
}

export async function generateMetadata({
  params,
}: ProductDetailsPageProps): Promise<Metadata> {
  const { id } = await params;

  const productId = Number(id);

  if (!Number.isInteger(productId) || productId <= 0) {
    return {
      title: "Product | NOVA Store",
    };
  }

  try {
    const product = await getProductById(productId);

    return {
      title: `${product.title} | NOVA Store`,
      description: product.description,
    };
  } catch {
    return {
      title: "Product | NOVA Store",
    };
  }
}

export default async function ProductDetailsPage({
  params,
}: ProductDetailsPageProps) {
  const { id } = await params;

  const productId = Number(id);

  if (!Number.isInteger(productId) || productId <= 0) {
    notFound();
  }

  let product: Product;

  try {
    product = await getProductById(productId);
  } catch (error) {
    console.error("Failed to fetch product:", error);
    notFound();
  }

  const t = await getTranslations("Product");

  return (
    <main className="product-details-page">
      <div className="product-details-image">
        <img src={product.image} alt={product.title} />
      </div>

      <div className="product-details-info">
        <span className="product-category">{product.category}</span>

        <h1>{product.title}</h1>

        <p>{product.description}</p>

        <h2>${product.price}</h2>

        <div className="product-rating">
          <span>★ {product.rating.rate}</span>

          <span>
            ({product.rating.count} {t("reviews")})
          </span>
        </div>

        <AddToCartButton product={product} />
      </div>
    </main>
  );
}
