import React from "react";

function SubHeader(props) {
    return (<div className="sub-header  max-width-4 px3 py3 mx-auto md-flex items-center justify-between">
        <div className="logo  pt1 md-pl2">
            <a href="index.html"><img src="images/logo.png" alt="Spareparts" /></a>
        </div>
        <div className="sub-header-right">
            <ul className="list-reset m0 fz1">
                <li className="inline-block"><a className="btn px2 bold white" href="#">log in</a></li>
                <li className="inline-block"><a className="btn px2 bold white" href="#">Your account</a></li>
                <li className="inline-block"><a className="btn px2 bold white" href="#">CART: 
                    <span className="inline-block px2">{props.cartCount}</span>
                    <img src="images/cart.png" alt="cart" className="align-middle" /></a>
                </li>
            </ul>
            <div className="flex fz1">
                <input type="text" className="input mb0"/>
                <input type="submit" value="search" className="btn btn-primary bg-black" />
            </div>
        </div>
    </div>);
}

export default SubHeader;
