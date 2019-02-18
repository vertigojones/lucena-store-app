import React, { Component } from "react";
import CartContext from "./CartContext";

class CartProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cartItems: [],
      total: 0,
      customerId: {
        name: "",
        address: ""
      }
    };
    this.addToCart = this.addToCart.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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
    const { cartItems } = this.state;
    // map cart items with selected id and increase quantity by one
    const updatedCartItems = cartItems.map(item => {
      if (item.id === id) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    // update state array with new quantities and calculate new cart total
    this.setState({ cartItems: updatedCartItems }, () =>
      this.calculateCartTotal()
    );
  };

  decreaseItemQuantity = id => {
    const { cartItems } = this.state;
    // map cart items with selected id and decrease quantity by one
    const updatedCartItems = cartItems.map(item => {
      if (item.id === id) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });
    // update state array with new quantities and calculate new cart total
    this.setState({ cartItems: updatedCartItems }, () =>
      this.calculateCartTotal()
    );
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

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.addNewCustomer(this.state);
    this.setState({
      customerId: {
        name: "",
        address: ""
      }
    });
  };

  addNewCustomer = newCustomer => {
    const newCustomerId = { ...this.state.customerId, newCustomer };
    this.setState({
      customerId: newCustomerId
    });
  };

  render() {
    return (
      <CartContext.Provider
        value={{
          ...this.state,
          addToCart: this.addToCart,
          deleteItem: this.deleteItem,
          increaseItemQuantity: this.increaseItemQuantity,
          decreaseItemQuantity: this.decreaseItemQuantity,
          handleChange: this.handleChange,
          handleSubmit: this.handleSubmit
        }}
      >
        {this.props.children}
      </CartContext.Provider>
    );
  }
}

export default CartProvider;
