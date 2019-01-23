import React, { Component } from 'react';
import { getProducts } from './api';
import './ProductList.css';

class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: props.products || []
    };
  }

  componentDidMount() {
    getProducts(item => {
      let { products } = this.state;
      this.setState({
        products: products.concat([item])
      });
    })
  }

  render() {
    let { products } = this.state;

    return (
      <ul className="list-of-products horizontal">
        {products.map(product => (
          <li id={`product-${product.id}`} key={product.id}>
            <aside>
              <img className="product-image" src={product.image} alt="The product" />
            </aside>

            <div className="product-info">
              <h2>{product.name}</h2>
              <div className="product-desc">
                {product.desc}
              </div>
            </div>
          </li>
        ))}
      </ul>
    );
  }
}

export default ProductList;
