import { create } from "zustand";
import axios from "axios";

type Product = {
  id?: string;
  name: string;
  price: number;
  image: string;
};

interface ProductStore {
  products: Product[];
  setProducts: (products: Product[]) => void;
  createProduct: (
    newProduct: Product
  ) => Promise<{ success: boolean; message: string }>;
  fetchProducts: () => Promise<void>;
}

export const useProductStore = create<ProductStore>((set) => ({
  products: [],
  setProducts: (products) => set({ products }),
  createProduct: async (newProduct) => {
    if (!newProduct.name || !newProduct.price || !newProduct.image) {
      return { success: false, message: "Please fill all fields" };
    }
    const res = await fetch("/api/products", {
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newProduct),
    });
    const data = await res.json();
    set((state) => ({ products: [...state.products, data.data] }));
    return { success: true, message: "Data Entry Successful" };
  },
  fetchProducts: async () => {
    try {
      const res = await axios.get("/api/products");
      set({ products: res.data.data });
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  },
}));
