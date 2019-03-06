import { createSelector, ParametricSelector } from 'reselect';
import { StoreType, CartItem } from '../types';
import { CartItems } from '../reducers/cart/items';
import { CartSort } from '../reducers/cart/sort';
import { sortByField } from '../libs/sort';

export const getCartItems = (state: StoreType): CartItems => state.cart.items;
export const getCartSort = (state: StoreType): CartSort => state.cart.sort;

export const getSortedItems = createSelector(
  getCartSort,
  getCartItems,
  ({ sortBy, order }, items) => {
    if (sortBy === '') return items;
    return sortByField(sortBy, items, order === 'DESC');
  }
);

const getIdFromProps: ParametricSelector<StoreType, string, string> = (
  state,
  id
) => id;

export const getItemByID = createSelector(
  getIdFromProps,
  getCartItems,
  (itemId, items): CartItem => <CartItem>items.find(({ id }) => id === itemId)
);
