import React, { Component } from "react";
import CartContext from "../../contexts/CartContext";

import FinalCartItem from "./FinalCartItem";

export default class Billing extends Component {
  static contextType = CartContext;

  render() {
    const { cartItems, cartTotal, customerId } = this.context;

    return cartItems.length === 0 ? (
      <div className="container">
        <p>Please add items to your cart and fill out your billing details</p>
      </div>
    ) : (
      <React.Fragment>
        <div className="container">
          <div className="row">
            <div className="col-sm-9">
              {cartItems.map(cartItem => (
                <FinalCartItem key={cartItem.id} cartItem={cartItem} />
              ))}
            </div>
            <div
              className="col-sm-3"
              style={{ position: "fixed", top: "5.75vh", right: "5vw" }}
            >
              <ul className="list-group">
                <li
                  className="list-group-item"
                  style={{ borderColor: "blue", fontWeight: "bold" }}
                >
                  Total: ${cartTotal}
                </li>
              </ul>
              <div
                className="container"
                style={{
                  paddingTop: "80px",
                  paddingBottom: "20px"
                }}
              />
              <h5>Billing info:</h5>
              <p>{customerId.name}</p>
              <p>{customerId.address}</p>
            </div>
            <button type="submit" className="btn btn-primary">
              Purchase
            </button>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
