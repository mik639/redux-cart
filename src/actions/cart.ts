import { Dispatch } from 'redux';
import {
  SET_CART_ITEMS,
  REMOVE_CART_ITEM,
  SET_SORTING_FIELD,
  TOGGLE_SORTING_ORDER,
  INCREASE_COUNT,
  DECREASE_COUNT
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
  const items = await fetch('api/items.json', {
    headers: { 'Content-Type': 'application/json' }
  }).then(res => res.json());

  dispatch(setCartItems(items));
};

export interface SetSortingField {
  type: SET_SORTING_FIELD;
  payload: SortableFields;
}

/**
 * Change "sort by" field for cart items
 * 
 * @param {SortableFields} field - field name
 */
export const changeSortingField = (field: SortableFields): SetSortingField => ({
  type: SET_SORTING_FIELD,
  payload: field
});

export interface ToggleSortingOrder {
  type: TOGGLE_SORTING_ORDER;
}

/**
 * Change sort order to opposite
 */
export const toggleSortingOrder = (): ToggleSortingOrder => ({
  type: TOGGLE_SORTING_ORDER
});

export interface IncreaseCount {
  type: INCREASE_COUNT;
  payload: string;
}

/**
 * Increase count of given item
 * 
 * @param {string} id - cart item id
 */
export const increaseCount = (id: string): IncreaseCount => ({
  type: INCREASE_COUNT,
  payload: id
});

export interface DecreaseCount {
  type: DECREASE_COUNT;
  payload: string;
}

/**
 * Decrease count of given item
 * 
 * @param {string} id - cart item id
 */
export const decreaseCount = (id: string): DecreaseCount => ({
  type: DECREASE_COUNT,
  payload: id
});
