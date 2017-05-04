import React from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ImageSlider from "./components/ImageSlider";
import SubHeader from "./components/SubHeader";
import TopNav from "./components/TopNav";
import ProductDetail from "./components/ProductDetail";

function App(props) {
  function renderProducts(products){
    var _products = products.map((product, index) => {
      return  <div key={index}> <ProductDetail product={product} /> </div>
    })

    return _products;
  }

    return (
      <div className="App">
        	<div className="wrap">
				<div className= "header">
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
            {renderProducts(props.products)}

						</div>
					</div>
					<div className="products products-secondbox">


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