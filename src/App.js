import React from "react";
import "./App.css";
import Header from "./components/Header"
import Footer from "./components/Footer"
import ImageSlider from "./components/ImageSlider"
import SubHeader from "./components/SubHeader"
import TopNav from "./components/TopNav"
import ProductDetail from "./components/ProductDetail"

function App(props) {

  const productProps  = props.state.products
  .filter(
    (product) => product.category === props.currentCategory? true: false
  )
  .map(
    (product, idx) => <ProductDetail product={product} key = {idx} />
  )


    return (
      <div className="App">
        	<div className="wrap">

			<div className="header">
			<Header/>
			<div className="clear"> </div>
			<SubHeader/>
			<div className="clear"> </div>
			<TopNav changeCategory = {props.changeCategory}/>
			</div>


					<ImageSlider/>

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
			<Footer/>
		</div>

      </div>
    );
}

export default App;
