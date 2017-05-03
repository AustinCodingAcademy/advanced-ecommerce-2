import React from "react";
import "./App.css";
import Header from "./components/Header";
import SubHeader from "./components/SubHeader";
import TopNav from "./components/TopNav";
import ImageSlider from "./components/ImageSlider";
import ProductDetail from "./components/ProductDetail";
import Footer from "./components/Footer";
import changeCategory from "./index";

function App(props) {
	var currentCategory = props.currentCategory;
    return (
      <div className="App">
        	<div className="wrap">
	
			<div className="header">

				<Header />
	
			<div className="clear"> </div>

			<SubHeader />

			<div className="clear"> </div>
			<TopNav changeCategory={changeCategory}/>
			</div>
			
			
			<ImageSlider />
		
				
				<div className="content">
					<div className="products-box">
					<div className="products">
						<h5><span>FEATURED</span> PRODUCTS</h5>
						<div className="section group">
							<ProductDetail />
							<ProductDetail />
							<ProductDetail />
							<ProductDetail />
							<ProductDetail />
						</div>
					</div>
					<div className="products products-secondbox">
						<h5><span>Our</span> Specials</h5>
						<div className="section group">
							<ProductDetail />
							<ProductDetail />
							<ProductDetail />
							<ProductDetail />
							<ProductDetail />
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
