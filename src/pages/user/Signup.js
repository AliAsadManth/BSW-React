import React from "react";
import Header from "./components/Header";
import Menubar from "./components/Menubar";
import SignupForm from "./components/SignupForm";
import Footer from "./components/Footer";

const Signup = () => {
	return (
		<div div style={{ position: "relative", overflowX: "hidden" }}>
			<Header component="Signup" />
			<Menubar />
			<SignupForm />
			<Footer />
		</div>
	);
};

export default Signup;
