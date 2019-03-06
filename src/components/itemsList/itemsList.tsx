import * as React from 'react';
import { CartItem, StoreType, SortableFields } from '../../types';
import { connect } from 'react-redux';
import classNames from 'classnames';

import './itemsList.css';
import { changeSortingField, toggleSortingOrder } from '../../actions/cart';
import { getSortedItems, getCartSort } from '../../selectors/cart';
import { CartSort } from '../../reducers/cart/sort';
import Item from '../item/item';

interface PropsType {
  items: Array<CartItem>;
  sort: CartSort;
  changeSortingField: (field: SortableFields) => void;
  toggleSortingOrder: () => void;
}

class ItemsList extends React.PureComponent<PropsType> {
  /**
   * Sort items by given field, if items already sorted
   * changing sort order
   *
   * @param {SortableFields} field field that should be used for sorting
   */
  sort = (field: SortableFields) => {
    const {
      toggleSortingOrder,
      changeSortingField,
      sort: { sortBy }
    } = this.props;

    if (sortBy === field) {
      toggleSortingOrder();
    } else {
      changeSortingField(field);
    }
  };

  /**
   * Return css classes for columns headers
   *
   * @param {SortableFields} field table column name
   */
  getColumnClassnames = (field: SortableFields): string => {
    const {
      sort: { sortBy, order }
    } = this.props;

    return classNames(
      { active: sortBy === field },
      { desc: order === 'DESC' },
      { asc: order === 'ASC' }
    );
  };

  render() {
    const { items } = this.props;

    return (
      <table className="cart-items-table">
        <thead>
          <tr>
            <th
              onClick={() => this.sort('name')}
              className={this.getColumnClassnames('name')}
            >
              Название продукта
            </th>
            <th
              onClick={() => this.sort('count')}
              className={this.getColumnClassnames('count')}
            >
              Количество
            </th>
            <th
              onClick={() => this.sort('price')}
              className={this.getColumnClassnames('price')}
            >
              Цена
            </th>
            <th />
          </tr>
        </thead>
        <tbody>
          {items.map(({ id }) => (
            <Item id={id} key={id} />
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
  { changeSortingField, toggleSortingOrder }
)(ItemsList);
