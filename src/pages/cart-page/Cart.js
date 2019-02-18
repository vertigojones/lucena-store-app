import React, { Component } from "react";
import CartItem from "./CartItem";
import CartContext from "../../contexts/CartContext";
import { Link } from "react-router-dom";

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
              >
                <h5>Please enter your billing details:</h5>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    name="name"
                    type="text"
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
                  <label htmlFor="address">Address</label>
                  <input
                    name="address"
                    type="text"
                    onChange={handleChange}
                    value={customerId.address}
                    className="form-control"
                    placeholder="Enter address"
                    maxLength="100"
                    required
                  />
                </div>
                <Link to="/billing">
                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                </Link>
              </form>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
