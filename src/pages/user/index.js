import React from "react";
import LandingPage from "./LandingPage";
import { Switch, Route } from "react-router-dom";
import LoginPage from "./LoginPage";
import Signup from "./Signup";

const index = () => {
	return (
		<Switch>
			<Route path="/" exact component={LandingPage} />
			<Route path="/login" component={LoginPage} />
			<Route path="/signup" component={Signup} />
		</Switch>
	);
};

export default index;
