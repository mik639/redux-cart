import {
  SetCartItems,
  RemoveCartItem,
  IncreaseCount,
  DecreaseCount,
  AddCartItem
} from '../../actions/cart';
import {
  CartItem,
  SET_CART_ITEMS,
  REMOVE_CART_ITEM,
  INCREASE_COUNT,
  DECREASE_COUNT,
  ADD_CART_ITEM
} from '../../types';

export type CartItems = Array<CartItem>;

export default function(
  state: CartItems = [],
  action:
    | SetCartItems
    | RemoveCartItem
    | IncreaseCount
    | DecreaseCount
    | AddCartItem
): CartItems {
  switch (action.type) {
    case SET_CART_ITEMS:
      return action.payload;

    case REMOVE_CART_ITEM:
      return state.filter(({ id }) => id !== action.payload);

    case ADD_CART_ITEM:
      return [...state, action.payload];

    case INCREASE_COUNT:
      return state.map(item =>
        item.id === action.payload ? { ...item, count: item.count + 1 } : item
      );

    case DECREASE_COUNT:
      return state.map(item =>
        item.id === action.payload ? { ...item, count: item.count - 1 } : item
      );

    default:
      return state;
  }
}
