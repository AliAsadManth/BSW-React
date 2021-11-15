import React from "react";
import LandingPage from "./LandingPage";
import { Switch, Route } from "react-router-dom";
import LoginPage from "./LoginPage";
import Signup from "./Signup";
import ProdunctView from "./ProdunctView";
import SearchView from "./SearchView";
import about from "./about";
import Contact from "./Contact";

const index = () => {
  return (
    <Switch>
      <Route path="/" exact component={LandingPage} />
      <Route path="/login" component={LoginPage} />
      <Route path="/signup" component={Signup} />
      <Route path="/product/:id" component={ProdunctView} />
      <Route path="/search" component={SearchView} />
      <Route path="/about" component={about} />
      <Route path="/contact" component={Contact} />
    </Switch>
  );
};

export default index;
