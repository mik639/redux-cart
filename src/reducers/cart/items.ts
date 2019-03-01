import { CartItem } from '../../types';
import { SetCartItems, RemoveCartItem } from '../../actions/cart';
import { SET_CART_ITEMS, REMOVE_CART_ITEM } from '../../constants/actions';

export default function(
  state: Array<CartItem> = [],
  action: SetCartItems | RemoveCartItem
) {
  switch (action.type) {
    case SET_CART_ITEMS:
      return action.payload;
    case REMOVE_CART_ITEM:
      return state.filter(({ id }) => id !== action.payload);
    default:
      return state;
  }
}
