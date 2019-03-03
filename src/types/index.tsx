import { CartSort } from '../reducers/cart/sort';
import { CartItems } from '../reducers/cart/items';

export interface CartItem {
  id: string;
  name: string;
  count: number;
  price: number;
}

export type SortableFields = '' | 'name' | 'count' | 'price';
export type SortOrder = 'ASC' | 'DESC';

export interface StoreType {
  cart: {
    items: CartItems;
    sort: CartSort;
  };
}
