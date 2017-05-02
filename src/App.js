import React from "react";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ImageSlider from "./components/ImageSlider";
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

            <Header setCategory={props.setCategory} />
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
