import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import styled from "styled-components";

import Marketplace from "./pages/marketplace-page/Marketplace";
import Cart from "./pages/cart-page/Cart";
import Billing from "./pages/billing-page/Billing";

class App extends Component {
  render() {
    return (
      <Appstyles>
        <Router>
          <div>
            <Link to={"/"}>Marketplace</Link>
            <Link to={"/cart"}>Cart</Link>
            <Link to={"/billing"}>Billing</Link>
          </div>
          <Switch>
            <Route exact path={"/"} component={Marketplace} />
            <Route exact path={"/cart"} component={Cart} />
            <Route exact path={"/billing"} component={Billing} />
          </Switch>
        </Router>
      </Appstyles>
    );
  }
}

export default App;

const Appstyles = styled.div`
  color: black;
`;
