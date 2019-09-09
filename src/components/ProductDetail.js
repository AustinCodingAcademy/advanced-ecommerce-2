import React from "react";

function ProductDetail(props) {
  return (

  <div className="col-sm-3 col-lg-3 col-md-3 grid_1_of_5 images_1_of_5">
       <img src={props.prod.imgUrl} />
       <h3>{props.prod.name}</h3>
       <p>{props.prod.description}</p>
       <h4>{props.prod.price}</h4>
         <div className="button"><span><a href="singlepage.html">Read More</a></span></div>
  </div>

    );
}

export default ProductDetail;
