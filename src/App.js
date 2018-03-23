import React from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ImageSlider from "./components/ImageSlider";
import ProductDetail from "./components/ProductDetail";
import TopNav from "./components/TopNav";
import SubHeader from "./components/SubHeader";

function App(props) { 

	// let categoryFilter = function catFil(currentCategory) {
	// 	return props.product.filter(props.product.category === props.currentCategory);
	// }

	// const categoryFilter = props.product.filter(props.product.category === 'tires');

	const categoryFilter = props.product.filter((product) => {
		return product.category === props.currentCategory 
	  });

	//   const productMap = categoryFilter.map(categoryFilter([, [, ]]) => {
	// 	return <ProductDetail product={props.product} />
	//   }[, thisArg]);

	// const productMap = categoryFilter.map(() => {
	// 	return <ProductDetail product={props.products}/>
	// });

	console.log(props.currentCategory); 
	console.log(categoryFilter);
	//console.log(productMap);
    return (
      <div className="App">
        	<div className="wrap">
	
			<div className="header">
	
			<Header />
			<div className="clear"> </div>
			<SubHeader />
			<div className="clear"> </div>

			 
			<TopNav changeCategory={props.changeCategory}/>
		
			</div>
			
		
					<ImageSlider />
				
				<div className="content">
					<div className="products-box">
					<div className="products">
						<h5><span>FEATURED</span> PRODUCTS</h5>
						<div className="section group">
						{/* <ProductDetail product={props.product}/> */}
							{/* <div className="grid_1_of_5 images_1_of_5">
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
							</div> */}
						</div>
					</div>
					<div className="products products-secondbox">
						<h5><span>Our</span> Specials</h5>
						<div className="section group">
							
							
							 {/* <div className="grid_1_of_5 images_1_of_5">
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
							</div>  */}
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
