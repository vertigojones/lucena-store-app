import React, { Component } from "react";

class FinalCartItem extends Component {
  onDeleteClick = () => {
    this.props.deleteClickHandler();
  };

  increaseQuantity = () => {
    this.props.increaseQuantityHandler();
  };

  decreaseQuantity = () => {
    this.props.decreaseQuantityHandler();
  };

  render() {
    const { name, description, price, quantity } = this.props.cartItem;

    return (
      <div className="container">
        <div className="card card-body mb-3">
          <h4>{name}</h4>
          <ul className="list-group">
            <li className="list-group-item">{description}</li>
            <li className="list-group-item">Price per unit: ${price}</li>
            <li className="list-group-item">Quantity: {quantity}</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default FinalCartItem;
