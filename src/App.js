import React from "react";
import "./App.css";
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import ImageSlider from './components/ImageSlider.js';
import SubHeader from './components/SubHeader.js';
import TopNav from './components/TopNav.js';
import ProductDetail from './components/ProductDetail.js';

function App(props) {

  // const productDisplay = props.state.product
  //   .filter(
  //     (product) => props.currentCategory === ''
  //   )


const productProps  = props.state.products
  .filter(
    (product) => product.category === props.currentCategory? true: false
  )
  .map(
    (product, idx) => <ProductDetail product={product} key = {idx} />
  )


  // const handleCategoryChange = productProps.filter((catgeory) => {
  //   if(productProps.category === )
  //
  // });


  console.log(productProps)
    return (
      <div className="App">
        	<div className="wrap">

  			<div className="header">
          <Header />

  			<div className="clear"> </div>
  			   <SubHeader />
  			<div className="clear"> </div>
  			   <TopNav changeCategory = {props.changeCategory} />

  			</div>
          <ImageSlider />



  				<div className="content">
  					<div className="products-box">
  					<div className="products">
  						<h5><span>FEATURED</span> PRODUCTS</h5>
  						<div className="section group">
              {productProps}
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
