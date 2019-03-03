import { Dispatch, Action } from 'redux';
import {
  SET_CART_ITEMS,
  SET_ERROR,
  REMOVE_CART_ITEM,
  SET_SORTING_FIELD,
  TOGGLE_SORTING_ORDER
} from '../constants/actions';
import { CartItem, SortableFields } from '../types';

export interface SetCartItems {
  type: SET_CART_ITEMS;
  payload: Array<CartItem>;
}

/**
 * Set cart items list
 * @param items {Array<CartItem>} cart items list
 */
export const setCartItems = (items: Array<CartItem>): SetCartItems => ({
  type: SET_CART_ITEMS,
  payload: items
});

export interface RemoveCartItem {
  type: REMOVE_CART_ITEM;
  payload: string;
}
/**
 * Remove item from cart by ID
 * @param id {string} cart item id
 */
export const removeCartItem = (id: string): RemoveCartItem => ({
  type: REMOVE_CART_ITEM,
  payload: id
});

/**
 * Load list of cart items from server
 */
export const fetchItems = () => async (dispatch: Dispatch) => {
  const items = await fetch('/items.json').then(res => res.json());
  // .catch(error => dispatch());
  dispatch(setCartItems(items));
};

export interface setSortingField {
  type: SET_SORTING_FIELD;
  payload: SortableFields;
}

export const changeSortingField = (field: SortableFields): setSortingField => ({
  type: SET_SORTING_FIELD,
  payload: field
});

export interface toggleSortingOrder {
  type: TOGGLE_SORTING_ORDER;
}

export const toggleSortingOrder = () => ({
  type: TOGGLE_SORTING_ORDER
});
