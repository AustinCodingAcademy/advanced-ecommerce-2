import React from "react";
import PropTypes from "prop-types";

function ProductDetail(props) {
  return(
    <div>
      <div className="grid_1_of_5 images_1_of_5">
         <img src={props.product.imgUrl} />
         <h3>{props.product.name} </h3>
         <p>{props.product.description} </p>
         <h4>{props.product.price} </h4>
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
)};

ProductDetail.propTypes = {
  product: PropTypes.object.isRequired
};

export default ProductDetail;
