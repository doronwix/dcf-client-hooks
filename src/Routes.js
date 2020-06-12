import React from "react";
import { Router, Switch, Route } from "react-router-dom";
import Dashboard from "./components/Layout/Dashboard";

import history from "./history";

const routes = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/Dashboard" component={Dashboard} />
      </Switch>
    </Router>
  );
};

export default routes;
