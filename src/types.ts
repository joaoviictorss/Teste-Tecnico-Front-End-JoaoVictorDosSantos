export interface Product {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  description: string;
}

export type CartItem = {
  product: Product;
  quantity: number;
};