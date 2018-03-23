import React from "react";

function ProductDetail(props){
    console.log(props.product);
    return (
        <div className="grid_1_of_5 images_1_of_5">
        <img src="images/g1.jpg" />
        <h3>{props.product.name} </h3>
        <p>{props.product.description}</p>
        <h4><span>$600.00</span>$512.00</h4>
        <div className="button"><span><a href="singlepage.html">Read More</a></span></div>
  </div>
    )
}

export default ProductDetail;