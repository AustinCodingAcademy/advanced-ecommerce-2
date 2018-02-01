import React from "react";

function SubHeader() {
    return (<div className="sub-header  max-width-4 px3 py3 mx-auto flex items-center justify-between">
        <div className="logo  pt1">
            <a href="index.html"><img src="images/logo.png" title="logo" /></a>
        </div>
        <div className="sub-header-right">
            <ul className="list-reset m0 fz1">
                <li className="inline-block"><a className="btn px2 bold white" href="#">log in</a></li>
                <li className="inline-block"><a className="btn px2 bold white" href="#">Your account</a></li>
                <li className="inline-block"><a className="btn px2 bold white" href="#">CART: (EMPTY) <img src="images/cart.png" title="cart" className="align-middle" /></a></li>
            </ul>
            <div className="flex fz1">
                <input type="text" className="input mb0"/>
                <input type="submit" value="search" className="btn btn-primary bg-black" />
            </div>
        </div>
    </div>);
}

export default SubHeader;
