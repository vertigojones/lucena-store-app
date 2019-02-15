import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";
import CartContext from "../contexts/CartContext";

export class NavBar extends Component {
  static contextType = CartContext;

  render() {
    const { cartItems } = this.context;

    return (
      <nav className="navbar navbar-expand-sm navbar-dark bg-success mb-3 py-0">
        <div className="container">
          <Link to="/" className="navbar-brand">
            Lucena Store
          </Link>
          <div>
            <ul className="navbar-nav mr-auto">
              <NavLink to="/cart" activeClassName="active">
                <li className="nav-link" style={{ cursor: "pointer" }}>
                  Cart({cartItems.length})
                </li>
              </NavLink>
              <NavLink to="/billing" activeClassName="active">
                <li className="nav-link" style={{ cursor: "pointer" }}>
                  Billing
                </li>
              </NavLink>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default NavBar;
