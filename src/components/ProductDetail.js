import React from "react";
import PropTypes from "prop-types";

function ProductDetail (props) {


  let displayProducts = props.products.map((product)=> {
    return (
      <div className="grid_1_of_5 images_1_of_5" key={product.id}>
        {console.log([product.name, product.description])}
         <img src={product.imgUrl} />
         <h3>{product.name}</h3>
         <p>{product.description}</p>
         <h4>{product.price}</h4>
           <div className="button"><span><a href="singlepage.html">Read More</a></span></div>
       </div>

    )
  })

  return (
    <div>
      {displayProducts}
    </div>
  )
}

ProductDetail.PropTypes = {
  products: PropTypes.array.isRequired
}

export default ProductDetail;
