import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import toast from "react-hot-toast";
import { CartItem } from "../types";

interface CartStore {
  items: CartItem[];
  addItem: (data: CartItem) => void;
  removeItem: (id: number) => void;
  updateItemQuantity: (id: number, quantity: number) => void;
  removeAll: () => void;
}

const useCart = create(
  persist<CartStore>(
    (set, get) => ({
      items: [],
      addItem: (data: CartItem) => {
        const currentItems = get().items;
        const existingItem = currentItems.find(
          (item) => item.product.id === data.product.id
        );

        if (existingItem) {
          return toast("Item já está no carrinho.");
        }

        set({ items: [...get().items, { ...data, quantity: 1 }] });
        toast.success("Item adicionado ao carrinho.");
      },
      removeItem: (id: number) => {
        set({ items: get().items.filter((item) => item.product.id !== id) });
        toast.success("Item removido do carrinho");
      },
      updateItemQuantity: (id: number, quantity: number) => {
        const currentItems = get().items;
        const updatedItems = currentItems.map((item) =>
          item.product.id === id ? { ...item, quantity } : item
        );
        set({ items: updatedItems });
      },
      removeAll: () => set({ items: [] }),
    }),
    {
      name: "cart-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useCart;
