import React, { Component } from "react";
import CartItem from "./CartItem";
import CartContext from "../../contexts/CartContext";

export default class Cart extends Component {
  static contextType = CartContext;

  render() {
    const {
      cartItems,
      cartTotal,
      deleteItem,
      increaseItemQuantity,
      decreaseItemQuantity
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
              <form style={{ paddingTop: "40px" }}>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Name</label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter name"
                  />
                  <small id="emailHelp" className="form-text text-muted" />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputPassword1">Addresss</label>
                  <input
                    type="address"
                    className="form-control"
                    id="exampleInputPassword1"
                    placeholder="Enter Address"
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
