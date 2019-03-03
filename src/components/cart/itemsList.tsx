import * as React from 'react';
import { CartItem, StoreType, SortableFields } from '../../types';
import { connect } from 'react-redux';

import './itemsList.css';
import {
  removeCartItem,
  changeSortingField,
  toggleSortingOrder
} from '../../actions/cart';
import { getSortedItems, getCartSort } from '../../selectors/cart';
import { CartSort } from '../../reducers/cart/sort';

interface PropsType {
  items: Array<CartItem>;
  sort: CartSort;
  removeItem: (id: string) => void;
  changeSortingField: (field: SortableFields) => void;
  toggleSortingOrder: () => void;
}

class ItemsList extends React.PureComponent<PropsType> {
  sort = (field: SortableFields) => {
    const { toggleSortingOrder, changeSortingField, sort: {sortBy} } = this.props;

    if (sortBy === field) {
      toggleSortingOrder();
    } else {
      changeSortingField(field);
    }
  };
  render() {
    const { items, removeItem, sort } = this.props;

    return (
      <table className="cart-items-table">
        <thead>
          <tr>
            <th onClick={() => this.sort('name')}>Название продукта</th>
            <th onClick={() => this.sort('count')}>Количество</th>
            <th onClick={() => this.sort('price')}>Цена</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {items.map(({ name, count, price, id }) => (
            <tr key={id}>
              <td>{name}</td>
              <td>{count}</td>
              <td>{price}</td>
              <td>
                <button onClick={() => removeItem(id)}>X</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = (state: StoreType) => ({
  items: getSortedItems(state),
  sort: getCartSort(state)
});

export default connect(
  mapStateToProps,
  { removeItem: removeCartItem, changeSortingField, toggleSortingOrder }
)(ItemsList);
