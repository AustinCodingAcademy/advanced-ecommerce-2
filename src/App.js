import React from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App(props) {
  return (
    <div className="App">
      <div className="wrap">
        <Header />

				
			
        <div className="image-slider">
				
          <ul className="rslides" id="slider1">
            <li><img src="images/slider1.jpg" alt="" /></li>
            <li><img src="images/slider3.jpg" alt="" /></li>
            <li><img src="images/slider1.jpg" alt="" /></li>
          </ul>
					
        </div>
				
        <div className="content">
          <div className="products-box">
            <div className="products">
              <h5><span>FEATURED</span> PRODUCTS</h5>
              <div className="section group">
                <div className="grid_1_of_5 images_1_of_5">
                  <img src="images/g3.png" />
                  <h3>Lorem Ipsum is simply </h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, in reprehenderit.</p>
                  <h4>$512.00</h4>
                  <div className="button"><span><a href="singlepage.html">Read More</a></span></div>
                </div>
                <div className="grid_1_of_5 images_1_of_5">
                  <img src="images/g1.jpg" />
                  <h3>Lorem Ipsum is simply </h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, in reprehenderit.</p>
                  <h4>$300.00</h4>
                  <div className="button"><span><a href="singlepage.html">Read More</a></span></div>
                </div>
                <div className="grid_1_of_5 images_1_of_5">
                  <img src="images/g2.jpg" />
                  <h3>Lorem Ipsum is simply </h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, in reprehenderit.</p>
                  <h4>$120.00</h4>
                  <div className="button"><span><a href="singlepage.html">Read More</a></span></div>
                </div>
                <div className="grid_1_of_5 images_1_of_5">
                  <img src="images/g3.png" />
                  <h3>Lorem Ipsum is simply </h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, in reprehenderit.</p>
                  <h4>$500.00</h4>
                  <div className="button"><span><a href="singlepage.html">Read More</a></span></div>
                </div>
                <div className="grid_1_of_5 images_1_of_5">
                  <img src="images/g4.jpg" />
                  <h3>Lorem Ipsum is simply</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, in reprehenderit.</p>
                  <h4>$120.00</h4>
                  <div className="button"><span><a href="singlepage.html">Read More</a></span></div>
                </div>
              </div>
            </div>
            <div className="products products-secondbox">
              <h5><span>Our</span> Specials</h5>
              <div className="section group">
                <div className="grid_1_of_5 images_1_of_5">
                  <img src="images/g1.jpg" />
                  <h3>Lorem Ipsum is simply </h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, in reprehenderit.</p>
                  <h4><span>$600.00</span>$512.00</h4>
                  <div className="button"><span><a href="singlepage.html">Read More</a></span></div>
                </div>
                <div className="grid_1_of_5 images_1_of_5">
                  <img src="images/g6.jpg" />
                  <h3>Lorem Ipsum is simply </h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, in reprehenderit.</p>
                  <h4><span>$400.00</span>$352.00</h4>
                  <div className="button"><span><a href="singlepage.html">Read More</a></span></div>
                </div>
                <div className="grid_1_of_5 images_1_of_5">
                  <img src="images/g7.png" />
                  <h3>Lorem Ipsum is simply </h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, in reprehenderit.</p>
                  <h4><span>$300.00</span>$202.00</h4>
                  <div className="button"><span><a href="singlepage.html">Read More</a></span></div>
                </div>
                <div className="grid_1_of_5 images_1_of_5">
                  <img src="images/g8.png" />
                  <h3>Lorem Ipsum is simply </h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, in reprehenderit.</p>
                  <h4><span>$400.00</span>$322.00</h4>
                  <div className="button"><span><a href="singlepage.html">Read More</a></span></div>
                </div>
                <div className="grid_1_of_5 images_1_of_5">
                  <img src="images/g1.jpg" />
                  <h3>Lorem Ipsum is simply</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, in reprehenderit.</p>
                  <h4><span>$700.00</span>$602.00</h4>
                  <div className="button"><span><a href="singlepage.html">Read More</a></span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="clear" />
				{/*footer  */}
        <Footer />
      </div>
	
    </div>
  );
}

export default App;
