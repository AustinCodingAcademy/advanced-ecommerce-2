import React from "react";
import "./App.css";
import Footer from './components/Footer.js';
import Header from './components/Header.js';
import ImageSlider from './components/ImageSlider.js';
import ProductDetail from './components/ProductDetail.js';
import TopNav from './components/Top-Nav.js';
import SubHeader from './components/Sub-Header.js';

function App(props) {

		var filteredproducts = props.products.filter(function(product){
			return product.category === props.currentCategory;
		})

		var productdisplay=[];
		for (var i = 0; i < filteredproducts.length; i++) {
			productdisplay.push(<ProductDetail product={filteredproducts[i]}></ProductDetail>);
		   }
		   
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
							{productdisplay}
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
