import React, { Component } from "react";
import MarketplaceItem from "./MarketplaceItem";
import CartContext from "../../contexts/CartContext";

export default class Marketplace extends Component {
  static contextType = CartContext;

  constructor(props) {
    super(props);
    this.state = {
      marketplaceItems: [
        {
          id: 0,
          name: "Data Analytics Suite",
          description:
            "If you are looking for a robust platform that will take a deep dive into data, look no further!",
          price: 100,
          quantity: 1
        },

        {
          id: 1,
          name: "Model Portfolio",
          description:
            "Lucena provides proven model portfolios that use big data and AI with impressive performance.",
          price: 200,
          quantity: 1
        },

        {
          id: 2,
          name: "QuantDesk® Platform",
          description:
            "QuantDesk allows you to form and validate a quantitative investment approach with a user-friendly interface.",
          price: 300,
          quantity: 1
        },

        {
          id: 3,
          name: "Quant-For-Hire",
          description:
            "Let our backtesting simulation infrastructure validate your investment approach before risking capital.",
          price: 1000000,
          quantity: 1
        }
      ],

      cartItems: []
    };
    this.addItem = this.addItem.bind(this);
  }

  addItem = marketplaceItem => {
    // add item to cart array by id
    this.context.addToCart(marketplaceItem);

    // remove item from marketplace
    // get id of item
    const itemId = marketplaceItem.id;
    // filter array by removing items with matching id
    const updatedMarketplaceItems = this.state.marketplaceItems.filter(
      item => item.id !== itemId
    );
    // update state with removed items
    this.setState({ marketplaceItems: updatedMarketplaceItems });
  };

  render() {
    return this.state.marketplaceItems.length === 0 ? (
      <div className="container">
        <p>All items have been added to your cart</p>
      </div>
    ) : (
      <div>
        <div className="container">
          {this.state.marketplaceItems.map(marketplaceItem => (
            <MarketplaceItem
              key={marketplaceItem.id}
              marketplaceItem={marketplaceItem}
              addToCartHandler={() => {
                this.addItem(marketplaceItem);
              }}
            />
          ))}
        </div>
      </div>
    );
  }
}
