import React from "react";

function ProductDetail(props){

    return (
        <div className="md-down-col-6 md-col-4 lg-col-3 p4 border-white-darken-2 border-right border-bottom">
            <img src={props.product.imgUrl} className="block fit mb2" alt="{props.product.name}"/>
            <h4 className="fz4 caps mt0 mb1"><a className="no-underline black" href="#">{props.product.name}</a></h4>
            <p className="fz3 mt0 mb1 gray">{props.product.description}</p>
            <p className="fz3 mt0 mb3">{props.product.price}</p>
            <div>
                <button className="btn btn-primary fz2 nocaps" onClick={()=>{
                    props.increaseCartCount();
                }}>Add to Cart</button>

                <button className="btn blue fz2 nocaps">Read More</button>
            </div>
        </div>

    )
}

export default ProductDetail;