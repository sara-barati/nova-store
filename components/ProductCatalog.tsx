"use client";

import { useMemo, useState } from "react";
import { useTranslations } from "next-intl";

import ProductCard from "@/components/ProductCard";
import type { Product } from "@/types/product";

interface ProductCatalogProps {
  products: Product[];
}

type SortOption = "default" | "price-asc" | "price-desc" | "popular" | "rating";

const PRODUCTS_PER_PAGE = 6;

export default function ProductCatalog({ products }: ProductCatalogProps) {
  const t = useTranslations("Catalog");

  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const [sortOption, setSortOption] = useState<SortOption>("default");

  const [currentPage, setCurrentPage] = useState(1);

  const categories = useMemo(() => {
    return Array.from(new Set(products.map((product) => product.category)));
  }, [products]);

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (search.trim()) {
      result = result.filter((product) =>
        product.title.toLowerCase().includes(search.trim().toLowerCase()),
      );
    }

    if (selectedCategory !== "all") {
      result = result.filter(
        (product) => product.category === selectedCategory,
      );
    }

    switch (sortOption) {
      case "price-asc":
        result.sort((a, b) => a.price - b.price);
        break;

      case "price-desc":
        result.sort((a, b) => b.price - a.price);
        break;

      case "popular":
        result.sort((a, b) => b.rating.count - a.rating.count);
        break;

      case "rating":
        result.sort((a, b) => b.rating.rate - a.rating.rate);
        break;
    }

    return result;
  }, [products, search, selectedCategory, sortOption]);

  const totalPages = Math.ceil(filteredProducts.length / PRODUCTS_PER_PAGE);

  const startIndex = (currentPage - 1) * PRODUCTS_PER_PAGE;

  const paginatedProducts = filteredProducts.slice(
    startIndex,
    startIndex + PRODUCTS_PER_PAGE,
  );

  const handleSearch = (value: string) => {
    setSearch(value);
    setCurrentPage(1);
  };

  const handleCategoryChange = (value: string) => {
    setSelectedCategory(value);
    setCurrentPage(1);
  };

  const handleSortChange = (value: SortOption) => {
    setSortOption(value);
    setCurrentPage(1);
  };

  return (
    <section className="catalog-section">
      <div className="catalog-controls">
        <input
          type="search"
          value={search}
          onChange={(event) => handleSearch(event.target.value)}
          placeholder={t("searchPlaceholder")}
          className="catalog-search"
        />

        <select
          value={selectedCategory}
          onChange={(event) => handleCategoryChange(event.target.value)}
          className="catalog-select"
          aria-label={t("category")}
        >
          <option value="all">{t("allCategories")}</option>

          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>

        <select
          value={sortOption}
          onChange={(event) =>
            handleSortChange(event.target.value as SortOption)
          }
          className="catalog-select"
          aria-label={t("sort")}
        >
          <option value="default">{t("defaultSort")}</option>

          <option value="price-asc">{t("priceLowToHigh")}</option>

          <option value="price-desc">{t("priceHighToLow")}</option>

          <option value="popular">{t("mostPopular")}</option>

          <option value="rating">{t("highestRated")}</option>
        </select>
      </div>

      <p className="catalog-results">
        {filteredProducts.length} {t("results")}
      </p>

      {paginatedProducts.length === 0 ? (
        <p className="catalog-empty">{t("noProducts")}</p>
      ) : (
        <div className="products-grid">
          {paginatedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}

      {totalPages > 1 && (
        <div className="pagination">
          <button
            type="button"
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((page) => page - 1)}
          >
            {t("previous")}
          </button>

          <span>
            {t("page")} {currentPage} {t("of")} {totalPages}
          </span>

          <button
            type="button"
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage((page) => page + 1)}
          >
            {t("next")}
          </button>
        </div>
      )}
    </section>
  );
}
