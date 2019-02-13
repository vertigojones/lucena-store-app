import React, { Component } from "react";

class CartItem extends Component {
  render() {
    const { name, description, price } = this.props.cartItem;

    return (
      <div className="card card-body mb-3">
        <h4>{name}</h4>
        <ul className="list-group">
          <li className="list-group-item">{description}</li>
          <li className="list-group-item">{price}</li>
        </ul>
      </div>
    );
  }
}

export default CartItem;
