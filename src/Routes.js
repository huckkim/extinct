import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/Home";
import NotFound from "./containers/NotFound";
import Login from "./containers/Login";
import AppliedRoute from "./components/AppliedRoute";
import CTerminal from "./containers/CTerminal"
import GTerminal from './containers/GTerminal'

export default ({ childProps }) =>
  <Switch >
    {/* All the routes in this app*/}
    <AppliedRoute path="/" exact component={Home} props={childProps} />
    <AppliedRoute path="/login" exact component={Login} props={childProps} />
    <AppliedRoute path="/terminal" exact component={CTerminal} props={childProps} />
    <AppliedRoute path="/guestterminal" exact component={GTerminal} props={childProps} />
    { /* Finally, catch all unmatched routes */ }
    <Route component={NotFound} />
  </Switch>;

