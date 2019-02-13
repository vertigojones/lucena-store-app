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
        price: 100
      },
      {
        id: 2,
        name: "Model Portfolio",
        description:
          "Lucena provides proven model portfolios that use big data and AI with impressive performance.",
        price: 200
      },
      {
        id: 3,
        name: "QuantDesk® Platform",
        description:
          "QuantDesk allows you to form and validate a quantitative investment approach with a user-friendly interface.",
        price: 300
      },
      {
        id: 4,
        name: "Quant-For-Hire",
        description:
          "Let our backtesting simulation infrastructure validate your investment approach before risking capital.",
        price: 1000000
      }
    ]
  };

  deleteItem = id => {
    const { cartItems } = this.state;

    const filteredCartItems = cartItems.filter(cartItem => cartItem.id !== id);

    this.setState({
      cartItems: filteredCartItems
    });
  };

  render() {
    const { cartItems } = this.state;

    return (
      <div>
        {cartItems.map(cartItem => (
          <CartItem
            key={cartItem.id}
            cartItem={cartItem}
            deleteClickHandler={this.deleteItem.bind(this, cartItem.id)}
          />
        ))}
      </div>
    );
  }
}
