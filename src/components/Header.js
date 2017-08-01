import React from "react";
import TopNav from "./TopNav";
import SubHeader from "./SubHeader";

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
     
      {/*sub-header  */}
      <SubHeader />
     
      <div className="clear" />
     {/*topnav  */}
      <TopNav changeCategory={props.changeCategory} />
    </div>
  );
}


