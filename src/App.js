import React from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ImageSlider from "./components/ImageSlider";
import SubHeader from "./components/SubHeader";
import TopNav from "./components/TopNav";
import ProductDetail from "./components/ProductDetail";
import PropTypes from "prop-types";

function App(props) {

  const productDivs= props.state.products.filter(product => {
    return product.category === props.currentCategory;
  }).map(product => {
    return <ProductDetail key={product.id} product={product}/>
  });

  return (
    <div className="App">
      <div className="wrap">
        <div className="header">

          <Header />

        <div className="clear"> </div>

          <SubHeader />

          <div className="clear"> </div>

          <TopNav changeCategory={props.changeCategory}/>

        </div>

        <ImageSlider />

        <div className="content">
          <div className="products-box">
            <div className="products">
              <h5>
                <span>FEATURED</span> PRODUCTS
              </h5>
              <div className="section group">

                {productDivs}

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
  state: PropTypes.object.isRequired,
  changeCategory: PropTypes.func.isRequired,
};

export default App;
