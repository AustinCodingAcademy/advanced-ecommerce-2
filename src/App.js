import React from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ImageSlider from "./components/ImageSlider";
import TopNav from "./components/TopNav";
import SubHeader from "./components/SubHeader";
import ProductDetail from "./components/ProductDetail"

function App(props) {
	let filteredProducts = props.products;
	function filterProducts(category) {
		filteredProducts = props.products.filter((product) => {
			return props.products.category === category;
		});
		return filteredProducts.map((product) => {
			return <ProductDetail key={product.id} product={product} />;
		});
	}

	let productDetails = filterProducts(props.products.currentCategory);
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
								{productDetails}
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

export default App;
