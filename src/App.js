import React from "react";
import Header from "./components/Header";
import SubHeader from "./components/SubHeader";
import TopNav from "./components/TopNav";
import ImageSlider from "./components/ImageSlider";
import ProductDetail from "./components/ProductDetail";
import Footer from "./components/Footer";
import "./App.css";

function App(props) {
	const { products } = props;

	let filteredProducts = products;

  function filterProducts(category) {
		filteredProducts = products.filter((product) => {
			return product.category === category;
		});
		return filteredProducts.map((product) => {
    	return <ProductDetail key={product.id} product={product} />;
  	});
  }

  const productDetails = filterProducts(props.currentCategory);

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
