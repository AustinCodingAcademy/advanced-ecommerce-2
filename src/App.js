import React from "react";
import "./App.css";
import Header from "./components/Header";
import TopNav from "./components/TopNav"
import SubHeader from "./components/SubHeader"
import ImageSlider from "./components/ImageSlider"
import Footer from "./components/Footer";
import ProductDetail from "./components/ProductDetail";

function App(props) {
  console.log(props);
  const products = props.products;
    return (
      <div className="App">
        	<div className="wrap">
            <Header changeCategory={props.changeCategory}/>

					<ImageSlider />

				<div className="content">
					<div className="products-box">
					<div className="products">
						<h5><span>FEATURED</span> PRODUCTS</h5>
						<div className="section group">
               <div>
                 {products.map((product, index) => {
                   return(<ProductDetail
                      key={index}
                     products={product} />);
                 })}

               </div>
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
