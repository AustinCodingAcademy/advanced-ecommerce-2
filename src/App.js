import React from "react";
import Header from "./components/Header";
import SubHeader from "./components/SubHeader";
import TopNav from "./components/TopNav";
import ImageSlider from "./components/ImageSlider";
import ProductDetail from "./components/ProductDetail";
import Footer from "./components/Footer";
import "./App.css";

function App(props) {
    return (
		<div className="App">
			<div className="wrap">	
				<div className="header">
					<Header />

					<div className="clear"></div>

					<SubHeader />

					<div className="clear"></div>

					<TopNav changeCat={props.changeCat} />
				</div>

				<ImageSlider />

				<div className="content">
					<div className="products-box">
						<div className="products">
							<h5><span>CATEGORY:</span> {props.state.currentCat}</h5>
							<div className="section group">
								{props.state.products.map( function(product, i){
									if (product.category == props.state.currentCat) {
										return <ProductDetail key={i} product={product} />
									}
								})}
							</div>
						</div>

						<div className="products products-secondbox">
							<h5><span>FEATURED</span> PRODUCTS</h5>
							<div className="section group">
								{props.state.products.map( function(product, i){
									if (i < 5) {
										return <ProductDetail key={i} product={product} />
									}
								})}
							</div>
						</div>
						
						<div className="products products-thirdbox">
							<h5><span>Our</span> Specials</h5>
							<div className="section group">
								{props.state.products.map( function(product, i){
									if (i >= 5 && i < 10) {
										return <ProductDetail key={i} product={product} />
									}
								})}
							</div>
						</div>
					</div>
				</div>

				<div className="clear"></div>

				<Footer />
			</div>
		</div>
    );
}

export default App;
