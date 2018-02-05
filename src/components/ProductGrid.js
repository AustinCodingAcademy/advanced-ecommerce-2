import React from "react";
import ProductDetail from './ProductDetail';

function ProductGrid(props) {

    let currentProducts = props.products.filter(function(product){
        return (product.category === props.category);
    });

    let prodDetails = currentProducts.map(function(product){
        return <ProductDetail product={product} key={product.id} increaseCartCount={props.increaseCartCount} />
    });

    return (<div className="bg-white-darken-1 px3">
        <div className="max-width-4 mx-auto bg-white">
            <div className="flex flex-wrap">
                {prodDetails}
            </div>
        </div>
    </div>);
}

export default ProductGrid;
