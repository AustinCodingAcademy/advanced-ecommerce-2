import React from "react";
import PropTypes from "prop-types";

function ProductDetail(props) {
  console.log(props);
  // Always define before using props. Could be in context of map fnc or not
  return (
    <div className="grid_1_of_5 images_1_of_5">
       <img src="images/g3.png" />
       <h3>Lorem Ipsum is simply </h3>
       <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, in reprehenderit.</p>
       <h4>$512.00</h4>
         <div className="button"><span><a href="singlepage.html">Read More</a></span></div>
     </div>
  );
}

ProductDetail.propTypes = {
 product: PropTypes.object.isRequired
};

export default ProductDetail;
