import React, { Component } from "react";
import CartItem from "./CartItem";

export default class Cart extends Component {
  state = {
    cartItems: [
      {
        id: 1,
        name: "Data Analytics Suite",
        description:
          "If you are looking for a robust platform that will take a deep dive into data, look no further!",
        price: 100,
        quantity: 1
      },

      {
        id: 2,
        name: "Model Portfolio",
        description:
          "Lucena provides proven model portfolios that use big data and AI with impressive performance.",
        price: 200,
        quantity: 1
      },

      {
        id: 3,
        name: "QuantDesk® Platform",
        description:
          "QuantDesk allows you to form and validate a quantitative investment approach with a user-friendly interface.",
        price: 300,
        quantity: 1
      },

      {
        id: 4,
        name: "Quant-For-Hire",
        description:
          "Let our backtesting simulation infrastructure validate your investment approach before risking capital.",
        price: 1000000,
        quantity: 1
      }
    ],

    cartTotal: 0
  };

  componentWillMount() {
    this.calculateCartTotal();
  }

  calculateCartTotal = () => {
    // create an empty array for the individual item totals
    const individualTotals = [];
    // multiply individual item quantity by price and push to above array
    this.state.cartItems.map(item => {
      return individualTotals.push(item.quantity * item.price);
    });
    // create new array and add all totals together, then push to state
    const cartTotal = individualTotals.reduce((a, b) => a + b);
    this.setState({ cartTotal });
  };

  deleteItem = id => {
    const { cartItems } = this.state;
    // filter items in cart and remove the selected id by matching against the id passed in
    const filteredCartItems = cartItems.filter(cartItem => cartItem.id !== id);
    // update state array with above filters and calculate new cart total
    this.setState(
      {
        cartItems: filteredCartItems
      },
      () => this.calculateCartTotal()
    );
  };

  increaseItemQuantity = id => {
    // clone the state array of cart
    let cartItems = [...this.state.cartItems];
    // increase the quantity of item with associated id
    cartItems[id - 1].quantity = cartItems[id - 1].quantity + 1;
    // update state array with new quantities and calculate new cart total
    this.setState({ cartItems }, () => this.calculateCartTotal());
  };

  decreaseItemQuantity = id => {
    // clone the state array of cart
    let cartItems = [...this.state.cartItems];
    // decrease the quantity of item with associated id
    cartItems[id - 1].quantity = cartItems[id - 1].quantity - 1;
    // update state array with new quantities and calculate new cart total
    this.setState({ cartItems }, () => this.calculateCartTotal());
  };

  render() {
    const { cartItems } = this.state;

    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-9">
            {cartItems.map(cartItem => (
              <CartItem
                key={cartItem.id}
                cartItem={cartItem}
                deleteClickHandler={this.deleteItem.bind(this, cartItem.id)}
                increaseQuantityHandler={this.increaseItemQuantity.bind(
                  this,
                  cartItem.id
                )}
                decreaseQuantityHandler={this.decreaseItemQuantity.bind(
                  this,
                  cartItem.id
                )}
              />
            ))}
          </div>
          <div
            className="col-sm-3"
            style={{ position: "fixed", top: "5.75vh", right: "5vw" }}
          >
            <ul className="list-group">
              <li className="list-group-item">
                Total: ${this.state.cartTotal}
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
