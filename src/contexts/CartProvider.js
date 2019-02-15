import React, { Component } from "react";
import CartContext from "./CartContext";

class CartProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cartItems: []
    };
    this.addToCart = this.addToCart.bind(this);
  }
  addToCart(item) {
    const cartItems = [...this.state.cartItems];
    // push the selected marketplace items to the new array with associated id and update state array
    cartItems.push(item);
    this.setState({ cartItems });
  }
  render() {
    console.log(this.state.cartItems);
    return (
      <CartContext.Provider
        value={{
          cartItems: this.state.cartItems,
          addToCart: this.addToCart
        }}
      >
        {this.props.children}
      </CartContext.Provider>
    );
  }
}

export default CartProvider;
