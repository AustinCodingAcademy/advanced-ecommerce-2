import React from "react";
import PropTypes from "prop-types";

function ProductDetail(props) {
  return (
    <div className="grid_1_of_5 images_1_of_5">
            <img src="images/g3.png" />
            <h3>{props.product.name}</h3>
            <p>{props.product.descripton}</p>
            <h4>{props.product.price}</h4>
            <div className="button"><span><a href="singlepage.html">{props.product.reviews}</a></span></div>
    </div>
  );
}

ProductDetail.propTypes = {
  product: PropTypes.object.isRequired
};

export default ProductDetail;