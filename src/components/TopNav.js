import React from "react";

function TopNav (props) {
    return (
    <div className="top-nav">
    <ul>
      <li>
          <a href="#" onClick={
          (e) => {
            e.preventDefault();
            props.changeCategory("tires");
          }
        }>tires</a>
      </li>
      <li><a href="#" onClick={
          (e) => {
            e.preventDefault();
            props.changeCategory("bumpers");
          }
        }>bumpers</a>
      </li>
      <li><a href="#" onClick={
          (e) => {
            e.preventDefault();
            props.changeCategory("audio");
          }
        }>audio</a>
      </li>
      <li><a href="#" onClick={
          (e) => {
            e.preventDefault();
            props.changeCategory("engine");
          }
        }>engine</a>
      </li>
      <li><a href="#" onClick={
          (e) => {
            e.preventDefault();
            props.changeCategory("headlights");
          }
        }>headlights</a>
      </li>
      <div className="clear"> </div>
    </ul>
  </div>);

}
export default TopNav;
