import React from 'react';
import PropTypes from 'prop-types';

function ProductDetail(props) {
  return(
    <div key={props.product.id}>

      <div className="grid_1_of_5 images_1_of_5">
         <img src={props.product.imgUrl} alt="" />
         <h3>{props.product.name}</h3>
         <p>{props.product.description}</p>
         <h4>{props.product.price}</h4>
           <div className="button"><span><a href="singlepage.html">Read More</a></span></div>
       </div>

    </div>

  )
}

// <div className="grid_1_of_5 images_1_of_5">
//    <img src="images/g1.jpg" />
//    <h3>Lorem Ipsum is simply </h3>
//    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, in reprehenderit.</p>
//    <h4>$300.00</h4>
//    <div className="button"><span><a href="singlepage.html">Read More</a></span></div>
// </div>
// <div className="grid_1_of_5 images_1_of_5">
//   <img src="images/g2.jpg" />
//   <h3>Lorem Ipsum is simply </h3>
//   <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, in reprehenderit.</p>
//   <h4>$120.00</h4>
//   <div className="button"><span><a href="singlepage.html">Read More</a></span></div>
// </div>
// <div className="grid_1_of_5 images_1_of_5">
//    <img src="images/g3.png" />
//    <h3>Lorem Ipsum is simply </h3>
//    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, in reprehenderit.</p>
//    <h4>$500.00</h4>
//      <div className="button"><span><a href="singlepage.html">Read More</a></span></div>
// </div>
// <div className="grid_1_of_5 images_1_of_5">
//    <img src="images/g4.jpg" />
//    <h3>Lorem Ipsum is simply</h3>
//    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, in reprehenderit.</p>
//    <h4>$120.00</h4>
//      <div className="button"><span><a href="singlepage.html">Read More</a></span></div>
// </div>

ProductDetail.proptypes = {
  product: PropTypes.object.isRequired
}

export default ProductDetail;
