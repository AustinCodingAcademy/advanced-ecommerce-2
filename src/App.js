import React from "react";
import "./App.css";
import Header from "./components/Header";
import SubHeader from "./components/SubHeader.js";
import Footer from "./components/Footer.js";
import ImageSlider from "./components/ImageSlider.js";
import TopNav from "./components/TopNav.js";
import ProductDetail from "./components/ProductDetail.js"

function App(props) {

const filteredArray = props.products.filter(product => {
  return product.category === props.currentCategory;
});

console.log(filteredArray);

const productArray = filteredArray.map(product => {
return <ProductDetail key={product.id} product={product} />
});

    return (
      <div className="App">
        	<div className="wrap">

			<div className="header">

			<Header />
			</div>
			<div className="clear"> </div>
			<SubHeader />

			<div className="clear"> </div>


			</div>


      <ImageSlider />
      <TopNav changeCategory={props.changeCategory}/>

				<div className="content">
					<div className="products-box">
					<div className="products">
						<h5><span>FEATURED</span> PRODUCTS</h5>
						<div className="section group">
      {productArray}
						</div>
					</div>
				</div>
			</div>
			<div className="clear"> </div>
			<Footer />
			</div>
    );
}

export default App;
