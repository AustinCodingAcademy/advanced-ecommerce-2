import React from "react";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ImageSlider from "./components/ImageSlider";
import ProductDetail from "./components/ProductDetail";
import SubHeader from "./components/SubHeader";
import TopNav from "./components/TopNav";

function App(props) {
debugger
	let products = props.state.products;

	let filteredProducts = products.filter(function(product) {
		return product.category === props.currentCategory;

		// if(product.category === props.currentCategory) {
		// 	return true;
		// } else {
		// 	return false;
		// }
	});
	
	let productDetailComponents = filteredProducts.map(function(product) {
		return <ProductDetail key={product.id} product={product} />
	});


    return (
		<div>
		<Header />
		<SubHeader />
		<TopNav changeCategory={props.changeCategory} />
		<ImageSlider />
		{productDetailComponents}
		<Footer />
		</div>
    );
}

export default App;
