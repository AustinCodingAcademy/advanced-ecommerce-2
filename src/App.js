import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ImageSlider from "./components/ImageSlider";
import ProductDetail from "./components/ProductDetail";
import SubHeader from "./components/SubHeader";
import TopNav from "./components/TopNav";
import "./App.css";
import index from "./index.js";

function App(props) {

	var categories = props.state.products.filter((product) => {
		return 	product.category === props.currentCategory
	}
);


		var categoryMap = categories.map((product) => {
			return <ProductDetail key={product.id} product={product} />

		}
	);


	// mapfunction I think goes here refer to address book listofusers
	//filter first then map. filter willl provide the data to map
		return (
      <div className="App">
        	<div className="wrap">
			<div className="header">
        <Header changeCategory={props.changeCategory}/>
				<div className="clear"> </div>
			</div>
			<SubHeader />
      <div className="clear"> </div>
			<TopNav changeCategory={props.changeCategory}/>
			<div className="clear"> </div>
			<ImageSlider />
				<div className="content">
					<div className="products-box">
						{/* * App should use the currentCategory value to filter the array of
						products by category and then map over them to
						create ProductDetail components */}
					<div className="products">
						<h5><span>FEATURED</span> PRODUCTS</h5>
						<div className="section group">
							{categoryMap}
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
