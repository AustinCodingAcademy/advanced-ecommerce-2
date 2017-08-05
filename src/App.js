import React from "react";
import propTypes from "prop-types";
import Header from "./components/Header";
import SubHeader from "./components/SubHeader";
import TopNav from "./components/TopNav";
import ImageSlider from "./components/ImageSlider";
import ProductDetail from "./components/ProductDetail";
import Footer from "./components/Footer";
import "./App.css";

function App(props) {
  // filter based on props.currentCategory
  const filteredCategory = props.state.products.filter((product) => {
    return (
      product.category === props.currentCategory
    );
  }
);
// create productDetail components
  const productDivs = filteredCategory.map((product) => {
    return (
      <ProductDetail key={product.id} product={product} />
    );
  }
);

  return (
    <div className="App">
      <div className="wrap">
        <Header />
        <div className="clear" />
        <SubHeader />
        <div className="clear" />
        <TopNav
          changeCategory={props.changeCategory} />
      </div>
      <ImageSlider />
      {productDivs}
      <div className="clear" />
      <Footer />
    </div>
  );
}

App.propTypes = {
  state: propTypes.object,
  changeCategory: propTypes.func,
};

export default App;
