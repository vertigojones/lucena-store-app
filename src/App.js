import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";

import NavBar from "./static-components/NavBar";

import Home from "./pages/marketplace-page/Home";
import Cart from "./pages/cart-page/Cart";
import Billing from "./pages/billing-page/Billing";

class App extends Component {
  render() {
    return (
      <AppStyles>
        <NavBar />
        <Router>
          <div>
            <Switch>
              <Route exact path={"/"} component={Home} />
              <Route exact path={"/cart"} component={Cart} />
              <Route exact path={"/billing"} component={Billing} />
            </Switch>
          </div>
        </Router>
      </AppStyles>
    );
  }
}

export default App;

const AppStyles = styled.div`
  color: black;
`;
