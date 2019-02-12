import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import styled from "styled-components";

import NavBar from "./static-components/NavBar";

import Marketplace from "./pages/marketplace-page/Marketplace";
import Cart from "./pages/cart-page/Cart";
import Billing from "./pages/billing-page/Billing";

class App extends Component {
  render() {
    return (
      <Appstyles>
        <NavBar />
        <Router>
          <div>
            <Switch>
              <Route exact path={"/"} component={Marketplace} />
              <Route exact path={"/cart"} component={Cart} />
              <Route exact path={"/billing"} component={Billing} />
            </Switch>
          </div>
        </Router>
      </Appstyles>
    );
  }
}

export default App;

const Appstyles = styled.div`
  color: black;
`;
