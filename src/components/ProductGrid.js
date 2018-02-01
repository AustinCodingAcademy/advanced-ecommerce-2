import React from "react";
import ProductDetail from './ProductDetail';

function ProductGrid(props) {

    let prodDetails = props.products.map(function(product){
        return <ProductDetail product={product} key={product.id} />
    });

    return (<div className="bg-white-darken-1 px3">
        <div className="max-width-4 px3 mx-auto bg-white">
            <div className="flex flex-wrap mxn2">
                {prodDetails}
            </div>
        </div>
    </div>);
}

export default ProductGrid;
