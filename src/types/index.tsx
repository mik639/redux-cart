export interface CartItem {
  id: string;
  name: string;
  count: number;
  price: number;
}

export interface StoreType {
  cart: {
    items: Array<CartItem>;
  };
}
