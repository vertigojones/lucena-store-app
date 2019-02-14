import React, { Component } from "react";
import { Link } from "react-router-dom";

import MarketplaceItem from "./MarketplaceItem";

export default class Marketplace extends Component {
  addToCart = id => {
    this.props.addToCartHandler();
  };

  render() {
    return (
      <div>
        <Link to="/cart">Go to Cart</Link>
        <div className="container">
          {this.props.marketplaceItems.map(marketplaceItem => (
            <MarketplaceItem
              key={marketplaceItem.id}
              marketplaceItem={marketplaceItem}
              addToCart={this.addToCart.bind(this, marketplaceItem.id)}
            />
          ))}
        </div>
      </div>
    );
  }
}
