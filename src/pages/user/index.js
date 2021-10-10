import React from "react";
import LandingPage from "./LandingPage";
import { Switch, Route } from "react-router-dom";
import LoginPage from "./LoginPage";

const index = () => {
  return (
    <Switch>
      <Route path="/" exact component={LandingPage} />
      <Route path="/login"  component={LoginPage} />
    </Switch>
  );
};

export default index;
