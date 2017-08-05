import React from "react";

function SubHeader() {
  return (
    <div className="sub-header">
      <div className="logo">
        <a href="index.html"><img src="images/logo.png" alt="" title="logo" /></a>
      </div>
      <div className="sub-header-right">
        <ul>
          <li><a href="#">log in</a></li>
          <li><a href="#">Your account</a></li>
          <li><a href="#">CART: (EMPTY) <img src="images/cart.png" alt="" title="cart" /></a></li>
        </ul>
        <input type="text" /><input type="submit" value="search" />
      </div>
      <div className="clear" />
    </div>
  );
}

export default SubHeader;
