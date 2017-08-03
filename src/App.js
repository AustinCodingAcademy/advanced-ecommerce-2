import React from "react";
import "./App.css";
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import ImageSlider from "./components/ImageSlider.js";
import ProductDetail from "./components/ProductDetail.js";
import SubHeader from "./components/SubHeader.js";
import TopNav from "./components/TopNav.js";

function App(props) {


  // constructor() {
  //   super();
  //   this.state = {
  //   }
  // }


  const filterCategory = props.state.products.filter((c) => {
    return props.currentCategory === c.category;
  });

  const log = (category) => {
    console.log(category);
  }
    return (
      <div className="App">
        	<div className="wrap">

			<div className="header">

			<Header />
			<div className="clear"> </div>
			<SubHeader />
			<div className="clear"> </div>
			<TopNav
        changeCategory={(category) => props.changeCategory(category)}
      />

			</div>


					<ImageSlider />

				<div className="content">
					<div className="products-box">
					<div className="products">
						<h5><span>FEATURED</span> PRODUCTS</h5>
						<div className="section group">

            {filterCategory.map(product =>  {
                  return(<ProductDetail key={product.id} product={product} />);
                }
                )
            }
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
			<div className="clear"> </div>
			<Footer />
			</div>
		</div>
    );

}

export default App;
