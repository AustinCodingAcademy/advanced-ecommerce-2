import React from "react";

function ProductDetail(props) {

  let prod = props.prod;

  return (
    <div className="grid_1_of_5 images_1_of_5">
      <img src={prod.imgUrl} alt="" />
      <h3>{prod.name}</h3>
      <p>{prod.description}</p>
      <h4>{prod.price}</h4>
      <div className="button"><span><a href="singlepage.html">Read More</a></span></div>
    </div>
  );
}

export default ProductDetail;
