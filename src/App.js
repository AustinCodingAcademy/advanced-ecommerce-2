import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ImageSlider from "./components/ImageSlider";
import ProductGrid from "./components/ProductGrid";
import "./App.css";

function App(props) {

    return (
      <div className="App">
    
        <Header />
        
        <ProductGrid products={props.state.products} />
    
        <ImageSlider />
        
        <Footer />
    
      </div>
    );
}

export default App;
