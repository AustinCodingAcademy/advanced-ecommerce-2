import React from "react";

function ProductDetail(props) {
  let product = props.products

  return (
    <div className="grid_1_of_5 images_1_of_5">
      <img src={product.imgUrl} alt=""/>
      <h3>{product.name}
      </h3>
      <p>{product.description}</p>
      <h4>{product.price}</h4>
      <div className="button">
        <span>
          <a href="singlepage.html">Read More</a>
        </span>
      </div>
    </div>
  );
}

export default ProductDetail;
