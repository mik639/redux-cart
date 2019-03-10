import * as React from 'react';
import { connect } from 'react-redux';
import { CartItem, StoreType } from '../types';
import { fetchItems } from '../actions/cart';
import ItemsList from '../components/itemsList/itemsList';
import Form from '../components/form/form';
import './cart.css';

interface PropsType {
  loadItems: () => void;
}

const Cart = ({ loadItems }: PropsType) => {
  return (
    <div className="cart">
      <div>
        <ItemsList />
      </div>
      <div className="cart-actions">
        <button type="button" onClick={loadItems}>
          Загрузить корзину с сервера...
        </button>
        <Form />
      </div>
    </div>
  );
};

export default connect(
  null,
  { loadItems: fetchItems }
)(Cart);
