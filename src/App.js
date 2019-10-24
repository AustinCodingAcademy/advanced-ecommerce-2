import React, { Component } from "react";
import "./App.css";
import PropTypes from "prop-types";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ImageSlider from "./components/ImageSlider";
import SubHeader from "./components/SubHeader";
import TopNav from "./components/TopNav";
import ProductDetail from "./components/ProductDetail";

function App (props) {

	const filterProducts = props.state.products.filter( (product) => { 
		return product.category === props.currentCategory;
	});
	
	const products = filterProducts.map((product, i) => {
        return <ProductDetail product={product} key={i} />;
	});
	
	/*let topnav = [];
	for (var i = 0; i < props.products.length; i++){
		topnav.push(<TopNav category={props.products[i]}  changeCategory={props.changeCategory} />);
	}*/
	
	/*
	let topnav = props.state.products.map(function (category, index){
		return <TopNav products={category} changeCategory={props.changeCategory} filterProducts={props.filterProducts} key={category} />;
	});
	*/
	
	return (
      <div className="App">
        	<div className="wrap">

			<div className="header">

      			<Header />

			<div className="clear"> </div>

      			<SubHeader />

			<div className="clear"> </div>
	
				<TopNav changeCategory={props.changeCategory} />

			</div>

			   <ImageSlider />

				<div className="content">
					<div className="products-box">
					<div className="products">
						<h5><span>FEATURED</span> PRODUCTS</h5>
						<div className="section group">
							{products}
						</div>
					</div>
					</div>
				</div>
			<div className="clear"> </div>

        <Footer />

      </div>

      </div>
	);
	

}
/*App.PropTypes = {
	state: PropTypes.object,
	changeCategory: PropTypes.func
};*/
export default App;
