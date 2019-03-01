import * as React from 'react';
import { CartItem } from '../../types';

import './itemsList.css';

interface PropsType {
  items: Array<CartItem>;
}

export const ItemsList = ({ items }: PropsType) => (
  <table className="cart-items-table">
    <thead>
      <tr>
        <th>Название продукта</th>
        <th>Количество</th>
        <th>Цена</th>
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
            <button>X</button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);
