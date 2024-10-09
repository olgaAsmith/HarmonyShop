import { create } from 'zustand';
import { PRODUCTS } from '@/lib/api/api';
import { client } from '../../../../apollo-client';

interface Products {
  id: number;
  title: string;
  price: number;
  description: string;
  category: number;
  images: string;
}

interface ProductsState {
  products: Products[] | null;
  setProducts: (products: Products[] | null) => void;
  loadProducts: () => Promise<void>;
}

export const useProductsStore = create<ProductsState>((set) => ({
  products: null,
  setProducts: (products) => set({ products }),

  loadProducts: async () => {
    try {
      const { data } = await client.query({
        query: PRODUCTS,
      });

      if (data.products) {
        set({ products: data.products });
      }
    } catch (error) {
      console.error('Ошибка при загрузке продуктов:', error);
    }
  },
}));
