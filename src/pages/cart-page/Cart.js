import React, { Component } from "react";
import CartItem from "./CartItem";
import CartContext from "../../contexts/CartContext";

export default class Cart extends Component {
  static contextType = CartContext;

  render() {
    const {
      cartItems,
      cartTotal,
      customerId,
      deleteItem,
      increaseItemQuantity,
      decreaseItemQuantity,
      handleChange,
      handleSubmit
    } = this.context;

    return cartItems.length === 0 ? (
      <div className="container">
        <p>There is nothing in your cart</p>
      </div>
    ) : (
      <React.Fragment>
        <div className="container">
          <div className="row">
            <div className="col-sm-9">
              {cartItems.map(cartItem => (
                <CartItem
                  key={cartItem.id}
                  cartItem={cartItem}
                  deleteClickHandler={() => {
                    deleteItem(cartItem.id);
                  }}
                  increaseQuantityHandler={() => {
                    increaseItemQuantity(cartItem.id);
                  }}
                  decreaseQuantityHandler={() => {
                    decreaseItemQuantity(cartItem.id);
                  }}
                />
              ))}
            </div>
            <div
              className="col-sm-3"
              style={{ position: "fixed", top: "5.75vh", right: "5vw" }}
            >
              <ul className="list-group">
                <li className="list-group-item">Total: ${cartTotal}</li>
              </ul>
              <form onSubmit={handleSubmit} style={{ paddingTop: "40px" }}>
                <div className="form-group">
                  <label>Name</label>
                  <input
                    name="name"
                    onChange={handleChange}
                    value={customerId.name}
                    className="form-control"
                    placeholder="Enter name"
                    maxLength="50"
                    required
                  />
                  <small id="emailHelp" className="form-text text-muted" />
                </div>
                <div className="form-group">
                  <label>Address</label>
                  <input
                    name="address"
                    onChange={handleChange}
                    value={customerId.address}
                    className="form-control"
                    placeholder="Enter address"
                    maxLength="100"
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
