import React, { Component } from "react";
import CartItem from "./CartItem";

export default class Cart extends Component {
  state = {
    cartItems: [],
    cartTotal: 0
  };

  componentDidMount() {
    console.log(this.props);
    this.calculateCartTotal();
  }

  calculateCartTotal = () => {
    if (this.state.cartItems.length > 0) {
      // create an empty array for the individual item totals
      const individualTotals = [];
      // multiply individual item quantity by price and push to above array
      this.state.cartItems.map(item => {
        return individualTotals.push(item.quantity * item.price);
      });
      // create new array and add all totals together, then push to state
      const cartTotal = individualTotals.reduce((a, b) => a + b);
      this.setState({ cartTotal });
    }
  };

  deleteItem = id => {
    if (this.state.cartItems.length > 0) {
      const { cartItems } = this.state;
      // filter items in cart and remove the selected id by matching against the id passed in
      const filteredCartItems = cartItems.filter(
        cartItem => cartItem.id !== id
      );
      // update state array with above filters and calculate new cart total
      this.setState(
        {
          cartItems: filteredCartItems
        },
        () => this.calculateCartTotal()
      );
    }
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

    return cartItems.length === 0 ? (
      <div>There is nothing in your cart</div>
    ) : (
      <React.Fragment>
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
      </React.Fragment>
    );
  }
}
