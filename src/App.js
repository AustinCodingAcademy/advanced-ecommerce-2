import React from "react";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ImageSlider from "./components/ImageSlider";
import ProductDetail from "./components/ProductDetail";
import SubHeader from "./components/SubHeader";
import TopNav from "./components/TopNav";



function App(props) {

	let products = props.state.products;

	let filteredProducts = products.filter(function(product) {
		return props.currentCategory;
	});
	
	filteredProducts.map(function(product) {
		return <ProductDetail />
	});


    return (
		<div>
		<Header />
		<SubHeader />
		<TopNav changeCategory={props.changeCategory} />
		<ImageSlider />
		<ProductDetail product={products} />
		<Footer />
		</div>
    );
}

export default App;
