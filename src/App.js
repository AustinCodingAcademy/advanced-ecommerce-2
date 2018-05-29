import React from "react";
import PropTypes from "prop-types";
import "./App.css";
import Header from './components/Header';	
import Footer from './components/Footer';
import ImageSlider from './components/ImageSlider';
import ProductDetail from './components/ProductDetail';
import state from "./state.js";


function App(props) {

  const filtered = state.products.filter(prod => prod.category === props.currentCategory);
  return (
    <div className="App">
      <div className="wrap">

        <Header changeCategory={props.changeCategory} />
        <ImageSlider />
				
        <div className="content">
          <div className="products-box">
            <div className="products">
              <h5><span>FEATURED</span> PRODUCTS</h5>
              <div className="section group">

                {filtered.map(prod => <ProductDetail product={prod} key={prod.id} />)}
              </div>
            </div>
            <div className="products products-secondbox">
              <h5><span>Our</span> Specials</h5>
              <div className="section group">
      
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

App.propTypes = {
  currentCategory: PropTypes.string.isRequired,
  changeCategory: PropTypes.func.isRequired
};

export default App;
