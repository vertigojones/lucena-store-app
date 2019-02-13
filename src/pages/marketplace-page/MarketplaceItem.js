import React, { Component } from "react";

class CartItem extends Component {
  addToCart = () => {
    this.props.addToCartHandler();
  };

  render() {
    const { name, description, price } = this.props.marketplaceItem;

    return (
      <div className="container">
        <div className="card card-body mb-3">
          <h4>{name}</h4>
          <ul className="list-group">
            <li className="list-group-item">{description}</li>
            <li className="list-group-item">Price per unit: ${price}</li>
          </ul>
          <div className="container" style={{ paddingTop: "10px" }}>
            <div className="float-right">
              <button
                type="button"
                className="btn btn-primary btn-sm mr-auto"
                onClick={this.addToCart}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CartItem;
