import React, { Component } from "react";

class CartItem extends Component {
  onDeleteClick = () => {
    this.props.deleteClickHandler();
  };

  render() {
    const { name, description, price } = this.props.cartItem;

    return (
      <div className="container">
        <div className="card card-body mb-3">
          <h4>{name}</h4>
          <ul className="list-group">
            <li className="list-group-item">{description}</li>
            <li className="list-group-item">${price}</li>
          </ul>
          <div className="container" style={{ paddingTop: "10px" }}>
            <div className="float-right">
              <button
                type="button"
                class="btn btn-danger btn-sm mr-auto"
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
