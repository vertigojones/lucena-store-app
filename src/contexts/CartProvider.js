import React, { Component } from "react";
import CartContext from "./CartContext";

class CartProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cartItems: [],
      total: 0
    };
    this.addToCart = this.addToCart.bind(this);
  }

  addToCart(item) {
    const cartItems = [...this.state.cartItems];
    // push the selected marketplace items to the new array with associated id and update state array
    cartItems.push(item);
    this.setState({ cartItems }, () => this.calculateCartTotal());
  }

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
    console.log(cartItems.find(a => a.id === id));
    // increase the quantity of item with associated id
    // update state array with new quantities and calculate new cart total
    // this.setState({ cartItems }, () => this.calculateCartTotal());
  };

  decreaseItemQuantity = id => {
    // clone the state array of cart
    let cartItems = [...this.state.cartItems];
    // decrease the quantity of item with associated id
    cartItems[id - 1].quantity = cartItems[id - 1].quantity - 1;
    // update state array with new quantities and calculate new cart total
    this.setState({ cartItems }, () => this.calculateCartTotal());
  };

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

  render() {
    return (
      <CartContext.Provider
        value={{
          ...this.state,
          addToCart: this.addToCart,
          deleteItem: this.deleteItem,
          increaseItemQuantity: this.increaseItemQuantity,
          decreaseItemQuantity: this.decreaseItemQuantity
        }}
      >
        {this.props.children}
      </CartContext.Provider>
    );
  }
}

export default CartProvider;
