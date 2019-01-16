import React, { Component } from 'react';
import cartIcon from './shopping-cart.svg';
import * as api from './api';

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  componentDidMount() {
    this.getCount();
  }

  async getCount() {
    let data = await api.getCart();
    this.setState(data);
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
