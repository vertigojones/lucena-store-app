import React, { Component } from "react";

class CartItem extends Component {
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
            <li className="list-group-item">
              Quantity: {quantity} |
              <i
                className="fas fa-plus"
                onClick={this.increaseQuantity}
                style={{
                  paddingLeft: "10px",
                  color: "grey",
                  cursor: "pointer"
                }}
              />{" "}
              <i
                className="fas fa-minus"
                onClick={this.decreaseQuantity}
                style={{ color: "grey", cursor: "pointer" }}
              />
            </li>
          </ul>
          <div className="container" style={{ paddingTop: "10px" }}>
            <div className="float-right">
              <button
                type="button"
                className="btn btn-danger btn-sm mr-auto"
                onClick={this.onDeleteClick}
              >
                Remove from Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CartItem;
