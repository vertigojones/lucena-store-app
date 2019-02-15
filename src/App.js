import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./static-components/NavBar";
import Marketplace from "./pages/marketplace-page/Marketplace";
import Cart from "./pages/cart-page/Cart";
import Billing from "./pages/billing-page/Billing";
import CartProvider from "./contexts/CartProvider";

class App extends Component {
  render() {
    return (
      <CartProvider>
        <AppStyles>
          <Router>
            <div>
              <NavBar />
              <Switch>
                <Route exact path={"/"} component={Marketplace} />
                <Route exact path={"/cart"} component={Cart} />
                <Route exact path={"/billing"} component={Billing} />
              </Switch>
            </div>
          </Router>
        </AppStyles>
      </CartProvider>
    );
  }
}

export default App;

const AppStyles = styled.div`
  color: black;
`;
