import { SetSortingField, ToggleSortingOrder } from '../../actions/cart';
import {
  SortableFields,
  SortOrder,
  SET_SORTING_FIELD,
  TOGGLE_SORTING_ORDER
} from '../../types';

export interface CartSort {
  sortBy: SortableFields;
  order: SortOrder;
}

const initialState: CartSort = {
  sortBy: '',
  order: 'DESC'
};

export default function(
  state: CartSort = initialState,
  action: SetSortingField | ToggleSortingOrder
): CartSort {
  switch (action.type) {
    case SET_SORTING_FIELD:
      return { sortBy: action.payload, order: 'DESC' };
    case TOGGLE_SORTING_ORDER:
      return { ...state, order: state.order === 'DESC' ? 'ASC' : 'DESC' };
    default:
      return state;
  }
}
