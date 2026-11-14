"use client";

import { useEffect } from "react";

import { useCartStore } from "@/storage/cartStore";

export default function CartHydration() {
  useEffect(() => {
    useCartStore.persist.rehydrate();
  }, []);

  return null;
}
