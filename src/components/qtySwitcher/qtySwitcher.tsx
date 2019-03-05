import React from 'react';
import './qtySwitcher.css';

export interface PropsType {
  /**
   * Current value
   * @type {number}
   */
  value: number;
  /**
   * Minimum allowed value
   * @type {number}
   */
  min: number;
  /**
   * Handler for increase button
   */
  onIncrease: () => void;
  /**
   * Handler for decrease button
   */
  onDecrease: () => void;
}

export class QtySwitcher extends React.PureComponent<PropsType> {
  static defaultProps = {
    min: 1
  };

  /**
   * Handler for "decrease" button,
   * call onDecrease prop current value for than minimum allowed
   */
  decreaseHandler = () => {
    const { value, onDecrease, min } = this.props;
    if (value > min) onDecrease();
  };

  render() {
    const { onIncrease, value } = this.props;

    return (
      <div className="qty-switcher">
        <button onClick={this.decreaseHandler}>-</button>
        <span className="qty-switcher__value">{value}</span>
        <button onClick={onIncrease}>+</button>
      </div>
    );
  }
}
