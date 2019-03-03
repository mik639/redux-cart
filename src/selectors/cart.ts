import { createSelector } from 'reselect';
import { StoreType } from '../types';
import { CartItems } from '../reducers/cart/items';
import { CartSort } from '../reducers/cart/sort';
import { sortByField } from '../libs/stableSort';

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
