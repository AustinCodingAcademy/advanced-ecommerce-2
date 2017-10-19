import React from "react";
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import ImageSlider from "./components/ImageSlider.js";
import ProductDetail from "./components/ProductDetail.js";
import SubHeader from "./components/SubHeader.js";
import TopNav from "./components/TopNav.js";
import "./App.css";

function App(props) {
  const filteredDivs = props.state.products.filter((product, i) => {
    console.log(props.state.products[i].category);
    return props.state.products[i].category === props.currentCategory;
  });

  const filteredDivs1 = filteredDivs.slice(0,5);
  const filteredDivs2 = filteredDivs.slice(5);

  const productDivs1 = filteredDivs1.map((product, i) => {
    console.log(filteredDivs1[i]);
    return (
      <ProductDetail key={filteredDivs1[i].id} product={product} />
    );
  });

  const productDivs2 = filteredDivs2.map((product, i) => {
    console.log(filteredDivs2[i]);
    return (
      <ProductDetail key={filteredDivs2[i].id} product={product} />
    );
  });

  return (
    <div className="App">
      <div className="wrap">

        <div className="header">

          <Header />

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

                {productDivs1}

              </div>
            </div>

            <div className="products products-secondbox">

              <h5><span>Our</span> Specials</h5>
              <div className="section group">

                {productDivs2}

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
