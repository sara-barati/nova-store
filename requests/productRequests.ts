import axiosInstance from "@/api/axiosInstance";
import type { Product } from "@/types/product";

export const getProducts = async (): Promise<Product[]> => {
  const response = await axiosInstance.get<Product[]>("/products");

  return response.data;
};

export const getProductById = async (id: number): Promise<Product> => {
  const response = await axiosInstance.get<Product>(`/products/${id}`);

  return response.data;
};

export const getCategories = async (): Promise<string[]> => {
  const response = await axiosInstance.get<string[]>("/products/categories");

  return response.data;
};
