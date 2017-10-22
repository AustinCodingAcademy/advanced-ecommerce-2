import React from "react";
import PropTypes from 'prop-types';

function ProductDetail(props) {
  const {id, name, description, price, imgUrl, category, rating, reviews} = props.product;

  console.log('In ProductDetail', props.product);
  return (
    <div className="grid_1_of_5 images_1_of_5">
       <img src={imgUrl} />
       <h3>{name}</h3>
       <p>{description}</p>
       <h4>{price}</h4>
         <div className="button"><span><a href="singlepage.html">Read More</a></span></div>
    </div>

  );
}

ProductDetail.propTypes = {
  product: PropTypes.object.isRequired
}

export default ProductDetail;

// <div className="section group">
//     <div className="grid_1_of_5 images_1_of_5">
//        <img src="images/g1.jpg" />
//        <h3>Lorem Ipsum is simply </h3>
//       <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, in reprehenderit.</p>
//       <h4>$300.00</h4>
//          <div className="button"><span><a href="singlepage.html">Read More</a></span></div>
//     </div>
//
//     <div className="grid_1_of_5 images_1_of_5">
//       <img src="images/g2.jpg" />
//        <h3>Lorem Ipsum is simply </h3>
//        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, in reprehenderit.</p>
//        <h4>$120.00</h4>
//          <div className="button"><span><a href="singlepage.html">Read More</a></span></div>
//     </div>
//
//     <div className="grid_1_of_5 images_1_of_5">
//        <img src="images/g3.png" />
//        <h3>Lorem Ipsum is simply </h3>
//        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, in reprehenderit.</p>
//        <h4>$500.00</h4>
//          <div className="button"><span><a href="singlepage.html">Read More</a></span></div>
//     </div>
//
//     <div className="grid_1_of_5 images_1_of_5">
//        <img src="images/g4.jpg" />
//        <h3>Lorem Ipsum is simply</h3>
//        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, in reprehenderit.</p>
//        <h4>$120.00</h4>
//          <div className="button"><span><a href="singlepage.html">Read More</a></span></div>
//     </div>
// </div>
