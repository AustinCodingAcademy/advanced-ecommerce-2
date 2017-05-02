import React from "react";

function imageExists(image_url){
    var http = new XMLHttpRequest();
    http.open('HEAD', image_url, false);
    http.send();
    return http.status;
}

function ProductDetail(props) {
    let product = props.product;

    let imageName = product.imgUrl.split('.');

    let imageUrl = '';

    if(imageExists(imageName[0] + '.' + 'jpg') == 200) {
        imageUrl = imageName[0] + '.' + 'jpg';
    } else if(imageExists(imageName[0] + '.' + 'png') == 200) {
        imageUrl = imageName[0] + '.' + 'png';
    } else {
        imageUrl = 'http://placehold.it/210x204';
    }
    
    return (
        <div>
            <img src={imageUrl} alt="" />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <h4>{product.price}</h4>
            <div className="button"><span><a href="singlepage.html">Read More</a></span></div>
        </div>
    );
}

export default ProductDetail;