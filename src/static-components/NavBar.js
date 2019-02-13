import React, { Component } from "react";

export class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-sm navbar-dark bg-success mb-3 py-0">
        <div className="container">
          <a href="/" className="navbar-brand">
            Lucena Store
          </a>
          <div>
            <ul className="navbar-nav mr-auto">
              <li href="/cart" className="nav-link">
                Cart
              </li>
              <li href="/cart" className="nav-link">
                Billing
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default NavBar;
