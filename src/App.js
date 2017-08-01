import React from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ImageSlider from "./components/ImageSlider";
import SubHeader from "./components/SubHeader";
import TopNav from "./components/TopNav";
import ProductDetail from "./components/ProductDetail";

function App(props) {
    return (
      <div className="App">
        	<div className="wrap">

			<div className="header">

			<Header />
			<div className="clear"> </div>
			<SubHeader />
			<div className="clear"> </div>
			<TopNav />

			</div>


			<ImageSlider />
      <ProductDetail />

			<div className="clear"> </div>
			<Footer />
		</div>

      </div>
    );
}

export default App;
