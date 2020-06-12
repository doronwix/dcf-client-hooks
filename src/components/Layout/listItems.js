import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import StretchedData2 from "./../StretchedData2";

import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import DashboardIcon from "@material-ui/icons/Dashboard";
import BarChartIcon from "@material-ui/icons/BarChart";

const routes = [
  {
    path: "/",
    exact: true,
    sidebar: () => <StretchedData2></StretchedData2>,
    //main: () => <h2>Home</h2>
  },
];
export const mainListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="StretchedData2">
        <Link to="/StretchedData2">Home</Link>
      </ListItemText>
    </ListItem>

    <Switch>
      {routes.map((route, index) => (
        // You can render a <Route> in as many places
        // as you want in your app. It will render along
        // with any other <Route>s that also match the URL.
        // So, a sidebar or breadcrumbs or anything else
        // that requires you to render multiple things
        // in multiple places at the same URL is nothing
        // more than multiple <Route>s.
        <Route
          key={index}
          path={route.path}
          exact={route.exact}
          children={<route.sidebar />}
        />
      ))}
    </Switch>
  </div>
);
