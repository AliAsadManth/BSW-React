import React from "react";
import Header from "./components/Header";
import Menubar from "./components/Menubar";
import ImgSlider from "./components/ImgSlider";
import ProductsRow from "./components/ProductsRow";
import Footer from "./components/Footer";

const LandingPage = () => {
	return (
		<div style={{ position: "relative", overflowX: "hidden" }}>
			<Header component="LandingPage" />
			<Menubar />
			<ImgSlider />
			<ProductsRow />
			<Footer />
		</div>
	);
};

export default LandingPage;
