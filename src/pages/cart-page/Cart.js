import React, { Component } from "react";
import CartItem from "./CartItem";
import CartContext from "../../contexts/CartContext";

export default class Cart extends Component {
  static contextType = CartContext;

  componentDidMount() {
    console.log("context cart item in cart.js", this.context.cartItems);
  }

  render() {
    const {
      cartItems,
      cartTotal,
      deleteItem,
      increaseItemQuantity,
      decreaseItemQuantity
    } = this.context;

    return cartItems.length === 0 ? (
      <div>There is nothing in your cart</div>
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
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
