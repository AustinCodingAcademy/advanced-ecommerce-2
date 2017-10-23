import React from "react";
import PropTypes from 'prop-types';

function ProductDetail(props){
  const {name, description, price, imgUrl} = props.product;
  return (
    <div className="grid_1_of_5 images_1_of_5">
       <img src={imgUrl} alt='' />
       <h3>{name}</h3>
       <p>{description}</p>
       <h4>{price}</h4>
         <div className="button"><span><a href="singlepage.html">Read More</a></span></div>
     </div>
  )
}
ProductDetail.ropTypes = {
  product: PropTypes.object.isRequired
}
export default ProductDetail;
