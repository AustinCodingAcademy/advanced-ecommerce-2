import React from "react";

export default function Header(props) {
  return (
    <div className="header">	
      <div className="top-header">
        <div className="top-header-left">
          <ul>
            <li className="active"><a href="#">Home</a></li>
            <li><a href="#">Specials</a></li>
            <li><a href="#">Delivery</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
        <div className="top-header-right">
          <ul>
            <li><a href="#">CURRENCY:</a></li>
            <li>
              <select>
                <option>Dollar</option>
                <option>Euro</option>
                <option>Pound</option>
              </select>
            </li>
          </ul>
        </div>
        <div className="clear" />
      </div>
      <div className="clear" />
      <div className="sub-header">
        <div className="logo">
          <a href="index.html"><img src="images/logo.png" title="logo" /></a>
        </div>
        <div className="sub-header-right">
          <ul>
            <li><a href="#">log in</a></li>
            <li><a href="#">Your account</a></li>
            <li><a href="#">CART: (EMPTY) <img src="images/cart.png" title="cart" /></a></li>
          </ul>
          <input type="text" /><input type="submit" value="search" />
        </div>
        <div className="clear" />
      </div>
      <div className="clear" />
      <div className="top-nav">
        <ul>
          <li><a href="carlights.html">car lights</a></li>
          <li><a href="carwheels.html">Car wheels</a></li>
          <li><a href="carbumpers.html">car bumpers</a></li>
          <li><a href="caradsystem.html">car audiosystem</a></li>
          <li><a href="truckbumpers.html">Truck bumpers</a></li>
          <li><a href="contact.html">Feedback</a></li>
          <div className="clear" />
        </ul>
      </div>
      
    </div>
  );
}


