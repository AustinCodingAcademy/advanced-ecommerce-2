import React from "react";
import "./App.css";
import products from "./state.js"
import Header from "./components/Header";
import Footer from "./components/Footer";
import ImageSlider from "./components/ImageSlider";
import SubHeader from "./components/SubHeader";
import TopNav from "./components/TopNav";
import ProductDetail from "./components/ProductDetail";


function App(props) {
	let filteredProducts = products.products.filter((product) => {
		return product.category === props.currentCategory;
	});
	let filteredProductDetail = [];
	filteredProducts.map((e) => {
	  filteredProductDetail.push(<ProductDetail product={e} />);
	});

    return (
      <div className="App">
        	<div className="wrap">
	
			<div className="header">
			<Header />
			
			<div className="clear"> </div>
			<SubHeader />
			<div className="clear"> </div>
			<TopNav changeCategory={props.changeCategory}/>
		
			</div>
			
		
					<ImageSlider />
				
				<div className="content">
					<div className="products-box">
					<div className="products">
						<h5><span>FEATURED</span> PRODUCTS</h5>
						<div className="section group">
							{filteredProductDetail}
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
