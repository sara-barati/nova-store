import { Link } from "@/i18n/navigation";

import type { Product } from "@/types/product";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="product-card">
      <Link href={`/products/${product.id}`}>
        <div className="product-image">
          <img src={product.image} alt={product.title} />
        </div>

        <div className="product-info">
          <span className="product-category">{product.category}</span>

          <h3>{product.title}</h3>

          <p className="product-price">${product.price}</p>

          <div className="product-rating">
            <span>★ {product.rating.rate}</span>
            <span>({product.rating.count} reviews)</span>
          </div>
        </div>
      </Link>
    </article>
  );
}
