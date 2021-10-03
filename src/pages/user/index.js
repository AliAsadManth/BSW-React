import React from "react";
import LandingPage from "./LandingPage";
import { Switch, Route } from "react-router-dom";

const index = () => {
  return (
    <Switch>
      <Route path="/" exact component={LandingPage} />
    </Switch>
  );
};

export default index;
