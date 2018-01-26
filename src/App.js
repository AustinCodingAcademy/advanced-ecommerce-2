import React from "react";
import "./App.css";
import Header from "./components/Header";
import SubHeader from "./components/SubHeader";
import TopNav from "./components/TopNav";
import ImageSlider from "./components/ImageSlider";
import ProductDetail from "./components/ProductDetail";
import Footer from "./components/Footer";

function App(props) {

  function productDetails() {
    const filteredProducts = props.state.products.filter(
      product => product.category === props.currentCategory
    );
    const products = filteredProducts.slice(0, 5);
    return (
      products.map((e, i) => {
        return (
          <ProductDetail key={i} product={e} />
        );
      })
    );
  }

  return (
    <div className="App">
      <div className="wrap">

        <div className="header">
          <Header />
          <div className="clear" />
          <SubHeader />
          <div className="clear" />
          <TopNav changeCategory={props.changeCategory} />

        </div>


        <ImageSlider />

        <div className="content">
          <div className="products-box">
            <div className="products">
              <h5><span>FEATURED</span> PRODUCTS</h5>
              <div className="section group">
                {productDetails()}
              </div>
            </div>
            <div className="products products-secondbox">
              <h5><span>Our</span> Specials</h5>
              <div className="section group">
                {productDetails()}
              </div>
            </div>
          </div>
        </div>

        <div className="clear" />
        <Footer />
      </div>

    </div>
  );
}

export default App;
