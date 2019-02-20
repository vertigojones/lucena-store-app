import React, { Component } from "react";
import MarketplaceItem from "./MarketplaceItem";
import CartContext from "../../contexts/CartContext";

export default class Marketplace extends Component {
  static contextType = CartContext;

  constructor(props) {
    super(props);
    this.state = {
      marketplaceItems: [],
      cartItems: []
    };
    this.addItem = this.addItem.bind(this);
  }

  addItem = marketplaceItem => {
    // add item to cart array by id
    this.context.addToCart(marketplaceItem);
  };

  render() {
    const { marketplaceItems } = this.context;

    return marketplaceItems.length === 0 ? (
      <div className="container">
        <p>All items have been added to your cart</p>
      </div>
    ) : (
      <div>
        <div className="container">
          {marketplaceItems.map(marketplaceItem => (
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
