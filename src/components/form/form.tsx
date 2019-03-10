import * as React from 'react';
import { connect } from 'react-redux';
import { addCartItem } from '../../actions/cart';
import './form.css';

interface PropsType {
  addToCart: (name: string, price: number, count?: number) => void;
}

class Form extends React.PureComponent<PropsType> {
  state = {
    name: '',
    price: '',
    count: '1'
  };

  /**
   * Handle changes from form inputs
   */
  handleInput = ({ currentTarget }: React.SyntheticEvent<HTMLInputElement>) => {
    const { name, value } = currentTarget;
    this.setState({ [name]: value });
  };

  /**
   * Validate inputs and add item to cart
   */
  addProduct = (event: React.SyntheticEvent) => {
    const { name, price, count } = this.state;

    event.preventDefault();
    if (name && price) {
      this.props.addToCart(name, Number(price), Number(count));
      this.setState({ name: '', price: '', count: '1' });
    }
  };

  render() {
    const { name, price, count } = this.state;

    return (
      <form onSubmit={this.addProduct} className="product-form">
        <label>
          Название продукта:
          <input
            type="text"
            value={name}
            name="name"
            onChange={this.handleInput}
          />
        </label>
        <label>
          Цена:
          <input
            type="number"
            value={price}
            name="price"
            onChange={this.handleInput}
          />
        </label>
        <label>
          Количество:
          <input
            type="number"
            value={count}
            name="count"
            onChange={this.handleInput}
          />
        </label>
        <button type="submit">Добавить в корзину</button>
      </form>
    );
  }
}

export default connect(
  null,
  { addToCart: addCartItem }
)(Form);
