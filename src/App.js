import React, { Component, Fragment } from 'react';
import Cart from './Cart';
import ProductList from './ProductList';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: window.location.pathname === "/cart" ? "cart" : "home"
    };
  }

  render() {
    let { page } = this.state;

    return (
      <Fragment>
        <header className="App-header">
          <div className="header-left">
          <h1>Dog Things</h1>
          </div>

          <div className="header-right">
          <Cart />
          </div>
        </header>

        <main>
          {page === 'cart' ? (
            <p>Cart stuff here</p>
          ) : (
            <section className="product-page">
							<aside className="sideoptions">
								<h1>Categories</h1>
								<ul>
									<li>Bones</li>
									<li>Food brands</li>
								</ul>
							</aside>
							<ProductList />
						</section>
          )}

        </main>
      </Fragment>
    );
  }
}

export default App;
