import * as React from 'react';
import { QtySwitcher } from '../qtySwitcher/qtySwitcher';
import { connect } from 'react-redux';
import { StoreType } from '../../types';
import { getItemByID } from '../../selectors/cart';
import {
  removeCartItem,
  increaseCount,
  decreaseCount
} from '../../actions/cart';

interface PropsType {
  id: string;
  name: string;
  count: number;
  price: number;
  increaseCount: (id: string) => void;
  decreaseCount: (id: string) => void;
  remove: (id: string) => void;
}

class Item extends React.PureComponent<PropsType> {
  /**
   * Remove item from cart
   */
  removeHandler = () => {
    const { id, remove } = this.props;
    remove(id);
  };

  /**
   * Increase count of item in cart by one
   */
  increaseCountHandler = () => {
    const { id, increaseCount } = this.props;
    increaseCount(id);
  };

  /**
   * Decrease count of item in cart by one
   */
  decreaseCountHandler = () => {
    const { id, decreaseCount } = this.props;
    decreaseCount(id);
  };

  render() {
    const { name, count, price } = this.props;

    return (
      <tr>
        <td>{name}</td>
        <td>
          <QtySwitcher
            value={count}
            onDecrease={this.decreaseCountHandler}
            onIncrease={this.increaseCountHandler}
          />
        </td>
        <td>{price}</td>
        <td>
          <button onClick={this.removeHandler}>X</button>
        </td>
      </tr>
    );
  }
}

const mapStateToProps = (state: StoreType, { id }: { id: string }) => {
  const { name, count, price } = getItemByID(state, id);
  return { name, count, price };
};

export default connect(
  mapStateToProps,
  { remove: removeCartItem, increaseCount, decreaseCount }
)(Item);
