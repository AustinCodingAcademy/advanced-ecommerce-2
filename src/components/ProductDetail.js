import React from "react";

function ProductDetail(props) {
  return (
    <div id={props.id} className="grid_1_of_5 images_1_of_5">
      <img src={props.imgUrl} />
      <h3>{props.name}</h3>
      <p>{props.description}</p>
      <h4>{props.price}</h4>
      <div className="button"><span><a href="singlepage.html">Read More</a></span></div>
    </div>
  );
}

export default ProductDetail;
