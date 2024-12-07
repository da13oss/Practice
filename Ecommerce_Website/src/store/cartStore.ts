import { create } from 'zustand';
import { CartItem, Lightsaber } from '../types';

interface CartState {
  items: CartItem[];
  addItem: (lightsaber: Lightsaber) => void;
  removeItem: (lightsaberId: string) => void;
  updateQuantity: (lightsaberId: string, quantity: number) => void;
  clearCart: () => void;
}

export const useCartStore = create<CartState>((set) => ({
  items: [],
  addItem: (lightsaber) =>
    set((state) => {
      const existingItem = state.items.find(
        (item) => item.lightsaber.id === lightsaber.id
      );
      if (existingItem) {
        return {
          items: state.items.map((item) =>
            item.lightsaber.id === lightsaber.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      }
      return { items: [...state.items, { lightsaber, quantity: 1 }] };
    }),
  removeItem: (lightsaberId) =>
    set((state) => ({
      items: state.items.filter((item) => item.lightsaber.id !== lightsaberId),
    })),
  updateQuantity: (lightsaberId, quantity) =>
    set((state) => ({
      items: state.items.map((item) =>
        item.lightsaber.id === lightsaberId ? { ...item, quantity } : item
      ),
    })),
  clearCart: () => set({ items: [] }),
}));