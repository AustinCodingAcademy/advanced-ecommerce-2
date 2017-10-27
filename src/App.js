import React from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ImageSlider from "./components/ImageSlider";
import ProductDetail from "./components/ProductDetail";
import SubHeader from "./components/SubHeader";
import TopNav from "./components/TopNav";

function App(props) {

  console.log(props.currentCategory,'currentCategory');
  console.log(props.state,'state');
  console.log(props.state.products,'products');
  console.log(props.state.products[6].category,'item 1 category');


const displayProducts = props.state.products
  .filter(
  (product)=> product.category === props.currentCategory? true: false)
  .map(
    (product, index)=> <ProductDetail product={product} key={index} />
  );

    return (
      <div className="App">
        	<div className="wrap">

			<div className="header">
			<Header />

      <SubHeader />


      <TopNav changeCategory={props.changeCategory} />
      </div>

        <ImageSlider />

				<div className="content">
					<div className="products-box">
					<div className="products">
						<h5><span>FEATURED</span> PRODUCTS</h5>
						<div className="section group">

            {displayProducts}


						</div>
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
