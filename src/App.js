import React from "react";
import "./App.css";
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import ImageSlider from "./components/ImageSlider.js";
import ProductDetail from "./components/ProductDetail.js";
import SubHeader from "./components/SubHeader.js";
import TopNav from "./components/TopNav.js";



function App(props) {

  return (
    <div>
      <Header />
      <SubHeader />
      <TopNav
        changeCategory={
          (category) => {
            props.changeCategory(category);
          }
        }
      />
      <ImageSlider />
      {
        props.state.products.map( (prod) => {
          return (
            <ProductDetail
              key={prod.id}
              product={prod}
            />);
        }
      )}
      <Footer />
    </div>
  );
}


export default App;
