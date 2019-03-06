import { CartItem, SortableFields } from '../types';

type Comparator<T> = (arg0: T, arg1: T) => number;

/**
 * Stable sort for compatibility with old browsers,
 * all modern engines already have stable sorting algorithms
 *
 * @param {Comparator<T>} comparator - compare function
 * @param {T[]} list - list of items for sorting
 * @returns {T[]} - new sorted array
 */
export function stableSort<T = any>(comparator: Comparator<T>, list: T[]): T[] {
  return list
    .map((el, i) => ({ el, i }))
    .sort((a, b) => {
      const weight = comparator(a.el, b.el);
      return weight !== 0 ? weight : a.i - b.i;
    })
    .map(({ el }) => el);
}

/**
 * Sort passed cart items by their sortable fields
 * 
 * @param {SortableFields} field - one of sortable fields in cart item
 * @param {CartItem[]} items - list of cart items
 * @param {boolean} [DESC=false] - DESC order
 * @returns {CartItem[]} - new array of sorted cart items
 */
export function sortByField(
  field: SortableFields,
  items: CartItem[],
  DESC: boolean = false
): CartItem[] {
  const comparator: Comparator<CartItem> = (a, b) => {
    if (a[field] > b[field]) return DESC ? -1 : 1;
    if (a[field] < b[field]) return DESC ? 1 : -1;
    return 0;
  };
  return stableSort(comparator, items);
}
