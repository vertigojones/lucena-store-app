import React, { Component } from "react";
import Marketplace from "./Marketplace";

export class Home extends Component {
  state = {
    marketplaceItems: [
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

    cartItems: []
  };

  addItem = id => {
    const { marketplaceItems } = this.state;
    // clone the state array of items in cart
    const cartItems = [...this.state.cartItems];
    // push the selected marketplace items to the new array with associated id and update state array
    cartItems.push(marketplaceItems[id]);
    this.setState({ cartItems });
  };

  render() {
    return (
      <Marketplace
        marketplaceItems={this.state.marketplaceItems}
        addToCartHandler={this.addItem}
      />
    );
  }
}

export default Home;
