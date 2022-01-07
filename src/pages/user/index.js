import React, { useContext } from "react";
import LandingPage from "./LandingPage";
import { Switch, Route } from "react-router-dom";
import LoginPage from "./LoginPage";
import Signup from "./Signup";
import ProdunctView from "./ProdunctView";
import SearchView from "./SearchView";
import about from "./about";
import Contact from "./Contact";
import ItSolutions from "./ItSolutions";
import PrivacyPolicy from "./PrivacyPolicy";
import Terms from "./Terms";
import Checkout from "./Checkout";
import CategoryProduct from "./CategoryProduct";
import Orders from "./Orders";
import Profile from "./Profile";
import UserContext from "../../context/UserContext";

const Index = () => {
  const { user } = useContext(UserContext);
  return (
    <Switch>
      <Route path="/" exact component={LandingPage} />
      <Route path="/product/:id" component={ProdunctView} />
      <Route path="/search" component={SearchView} />
      <Route path="/about" component={about} />
      <Route path="/contact" component={Contact} />
      <Route path="/itsolutions" component={ItSolutions} />
      <Route path="/privacypolicy" component={PrivacyPolicy} />
      <Route path="/terms" component={Terms} />
      {!user.name ? (
        <>
          <Route path="/login" component={LoginPage} />
          <Route path="/signup" component={Signup} />
        </>
      ) : (
        <>
          <Route path="/checkoutDetails" component={Checkout} />
          <Route path="/catproduct/:id" component={CategoryProduct} />
          <Route path="/orders" component={Orders} />
          <Route path="/profile" component={Profile} />
        </>
      )}
    </Switch>
  );
};

export default Index;
