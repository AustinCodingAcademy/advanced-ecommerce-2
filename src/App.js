import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ImageSlider from "./components/ImageSlider";
import ProductGrid from "./components/ProductGrid";
import "./App.css";

function App(props) {

    return (
      <div className="App">
    
        <Header navItems={props.navItems} changeCategory={props.changeCategory} cartCount={props.cartCount} />
        
        <ProductGrid products={props.products} category={props.currentCategory} increaseCartCount={props.increaseCartCount} />
    
        <ImageSlider />
        
        <Footer />
    
      </div>
    );
}

export default App;
