import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
<<<<<<< HEAD
import styled from "styled-components";
=======
>>>>>>> ef0eb109953fcea77baf8fdfa956dee64e8999f3

import Marketplace from "./pages/marketplace-page/Marketplace";
import Cart from "./pages/cart-page/Cart";
import Billing from "./pages/billing-page/Billing";

class App extends Component {
  render() {
    return (
<<<<<<< HEAD
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
=======
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
>>>>>>> ef0eb109953fcea77baf8fdfa956dee64e8999f3
    );
  }
}

export default App;

const Appstyles = styled.div`
  color: black;
`;
