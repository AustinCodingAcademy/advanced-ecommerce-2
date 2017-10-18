import React from 'react';
import PropTypes from "prop-types";

class ProductDetail extends React.Component {
    render () {
        return (
            <div className="grid_1_of_5 images_1_of_5">
                <img src={this.props.product.imgUrl} />
                <h3>{this.props.product.name}</h3>
                <h4>{this.props.product.category}</h4>
                <p>{this.props.product.description}</p>
                <h4>{this.props.product.price}</h4>
                <div className="button"><span><a href="singlepage.html">Read More</a></span></div>
            </div>
        );
    }
}

    ProductDetail.propTypes = {
        product: PropTypes.object.isRequired
    }

export default ProductDetail;