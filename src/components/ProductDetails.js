import React from "react";
import propTypes from "prop-types";

function ProductDetails(props) {
    let {imgUrl, name, description, price } = props.product;

    return(
        <div className="grid_1_of_5 images_1_of_5">
            <img src={imgUrl} />
            <h3>{name}</h3>
            <p>{description}</p>
            <h4>{price}</h4>
            <div className="button"><span><a href="singlepage.html">Read More</a></span></div>
        </div>
    );
}

ProductDetails.propTypes = {
    product: propTypes.object.isRequired
}

export default ProductDetails;