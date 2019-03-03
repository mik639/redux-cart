import * as React from 'react';
import { connect } from 'react-redux';
import { CartItem, StoreType } from '../types';
import { fetchItems } from '../actions/cart';
import ItemsList from '../components/cart/itemsList';

interface PropsType {
  loadItems: () => void;
  items: Array<CartItem>;
}

const Cart = ({ loadItems, items }: PropsType) => {
  return (
    <>
      <ItemsList />
      <button type="button" onClick={loadItems}>
        Загрузить...
      </button>
    </>
  );
};

const mapStateToProps = (state: StoreType) => ({ items: state.cart.items });

export default connect(
  mapStateToProps,
  { loadItems: fetchItems }
)(Cart);
