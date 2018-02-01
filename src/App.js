import React from "react";
import "./App.css";
//Components
import Header from './components/Header';
import Footer from './components/Footer';
import ImageSlider from './components/ImageSlider';
import ProductDetail from './components/ProductDetail';
import SubHeader from './components/SubHeader';
import TopNav from './components/TopNav';

function App(props) {
  const renderProducts  = props.state.products
  .filter(
    (product) => product.category === props.currentCategory? true: false
  )
  .map(
    (product) => <ProductDetail product={product} key={product.id} />
  );

    return (
      <div className="App">
        <div className="wrap">
          <div className="header">
            <Header />
            <div className="clear" />
			         <SubHeader />
			      <div className="clear" />
            <TopNav changeCategory={props.changeCategory}/>
          </div>

          <ImageSlider />

          <div className="content">
            <div className="products-box">
              <div className="products">
                <h5><span>FEATURED</span> PRODUCTS</h5>
                <div className="section group">
                  {renderProducts}
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
