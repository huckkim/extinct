import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/Home";
import NotFound from "./containers/NotFound";
import Login from "./containers/Login";
import Profile from "./containers/Profile";
import AppliedRoute from "./components/AppliedRoute";
import CTerminal from "./containers/CTerminal"

export default ({ childProps }) =>
  <Switch >
    {/* All the routes in this app*/}
    <AppliedRoute path="/" exact component={Home} props={childProps} />
    <AppliedRoute path="/login" exact component={Login} props={childProps} />
    <AppliedRoute path="/terminal" exact component={CTerminal} props={childProps} />
    <AppliedRoute path="/terminal" exact component={CTerminal} props={childProps} />
    { /* Finally, catch all unmatched routes */ }
    <Route component={NotFound} />
  </Switch>;

