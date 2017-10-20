import React from "react";
import "./App.css";
import TopNav from "./components/TopNav";
import SubHeader from "./components/SubHeader";
import ImageSlider from "./components/ImageSlider";
import ProductDetail from "./components/ProductDetail";
import Header from "./components/Header";
import Footer from "./components/Footer";



function App(props) {
  let products = props.state.products.filter((product)=> {
    return product.category === props.currentCategory;
  })

    return (
      <div>
      <div className="App">
        	<div className="wrap">

			<div className="header">

        <Header />
				<div className="clear"> </div>
			</div>
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
              <ProductDetail  products={products}/>
						</div>
					</div>
					<div className="products products-secondbox">
						<h5><span>Our</span> Specials</h5>
						<div className="section group">
              <ProductDetail products={products} />
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
