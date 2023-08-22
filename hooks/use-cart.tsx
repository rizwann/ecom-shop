import { toast } from "react-hot-toast";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

import { Product } from "@/types";

interface CartStore {
  products: Product[];
  addProduct: (data: Product) => void;
  removeProduct: (id: string) => void;
  removeAll: () => void;
}

const useCart = create(
  persist<CartStore>(
    (set, get) => ({
      products: [],
      addProduct: (data: Product) => {
        const currentProducts = get().products;
        const existingProduct = currentProducts.find(
          (item) => item.id === data.id
        );

        if (existingProduct) {
          return toast("Product already in cart.", {
            icon: "🤔",
          });
        }

        set({ products: [...get().products, data] });
        toast.success("Product added to cart.", {
          icon: "🛒",
        });
      },
      removeProduct: (id: string) => {
        set({ products: [...get().products.filter((item) => item.id !== id)] });
        toast.success("Product removed from cart.", {
          icon: "😥",
        });
      },
      removeAll: () => set({ products: [] }),
    }),
    {
      name: "cart-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useCart;
