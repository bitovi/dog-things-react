import React, { Component } from 'react';
import cartIcon from './shopping-cart.svg';

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  render() {
    let { count } = this.state;
    return (
      <a href="/cart" className="cart-link">
      	<img className="cart-img" src={cartIcon} alt="shopping cart" />
      	<span id="cart-count" className="cart-count">{count}</span>
      </a>
    );
  }
}

export default Cart;
