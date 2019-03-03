import React from "react";
import "./App.css";
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import ImageSlider from './components/ImageSlider.js';
import ProductDetail from './components/ProductDetail.js';
import SubHeader from './components/SubHeader.js';
import TopNav from './components/TopNav.js';


function App(props) {

  // inCat filters currentCategory items selected by user
  const inCat = props.state.products.filter((p) => {
    return p.category === props.currentCategory;
    // return (<ProductDetail product={p} key={p.id}/>);  --This is wrong
  })

  // productDiv shows filtered items
  const productDiv = inCat.map((p) => {
    return <ProductDetail product={p} key={p.id}/>
  })

  return (
    <div className="App">

      <div className="wrap">
		    <div className="header">
          <Header />
		      <div className="clear"> </div>
		      <div className="sub-header">
			      <SubHeader />

			      <div className="sub-header-right">
              <ul>
      					<li><a href="#">log in</a></li>
      					<li><a href="#">Your account</a></li>
      					<li><a href="#">CART: (EMPTY)
                  <img src="images/cart.png" title="cart" alt="" /></a>
                </li>
      				</ul>
				      <input type="text" /><input type="submit"  value="search" />
			      </div>

			      <div className="clear"> </div>
		      </div>

		      <div className="clear"> </div>
	        <div className="top-nav">
			      <TopNav
              changeCategory={props.changeCategory}
              currentCategory={props.currentCategory} />
		      </div>

		    </div>

				<ImageSlider />

			  <div className="content">
				  <div className="products-box">

            <div className="products">
					    <h5><span>FEATURED</span> PRODUCTS</h5>
					    <div className="section group">
                {productDiv}
					    </div>
				    </div>

  				  <div className="products products-secondbox">
  					  <h5><span>Our</span> Specials</h5>
  					  <div className="section group">
  						  {productDiv}
                {/* Not sure if we are to list the list again? */ }
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

// <div className="grid_1_of_5 images_1_of_5">
//    <img src="images/g1.jpg" />
//    <h3>Lorem Ipsum is simply </h3>
//    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, in reprehenderit.</p>
//    <h4><span>$600.00</span>$512.00</h4>
//      <div className="button"><span><a href="singlepage.html">Read More</a></span></div>
//  </div>
// <div className="grid_1_of_5 images_1_of_5">
//    <img src="images/g6.jpg" />
//    <h3>Lorem Ipsum is simply </h3>
//   <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, in reprehenderit.</p>
//    <h4><span>$400.00</span>$352.00</h4>
//      <div className="button"><span><a href="singlepage.html">Read More</a></span></div>
//   </div>
// <div className="grid_1_of_5 images_1_of_5">
//   <img src="images/g7.png" />
//    <h3>Lorem Ipsum is simply </h3>
//    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, in reprehenderit.</p>
//     <h4><span>$300.00</span>$202.00</h4>
//      <div className="button"><span><a href="singlepage.html">Read More</a></span></div>
// </div>
// <div className="grid_1_of_5 images_1_of_5">
//    <img src="images/g8.png" />
//    <h3>Lorem Ipsum is simply </h3>
//    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, in reprehenderit.</p>
//    <h4><span>$400.00</span>$322.00</h4>
//      <div className="button"><span><a href="singlepage.html">Read More</a></span></div>
// </div>
// <div className="grid_1_of_5 images_1_of_5">
//    <img src="images/g1.jpg" />
//    <h3>Lorem Ipsum is simply</h3>
//    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, in reprehenderit.</p>
//    <h4><span>$700.00</span>$602.00</h4>
//      <div className="button"><span><a href="singlepage.html">Read More</a></span></div>
// </div>

export default App;
