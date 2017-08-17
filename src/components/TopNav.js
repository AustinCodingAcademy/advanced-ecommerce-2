import React from "react";

const TopNav = (props) => {

  return (
    <div className="top-nav">
      <ul>
        <li><a href="#" onClick={(e) => {
          e.preventDefault();
          props.changeCategory("headlights");
        }}>car lights</a></li>
        <li><a href="#" onClick={(e) => {
          e.preventDefault();
          props.changeCategory("tires");
        }}>Car wheels</a></li>
        <li><a href="#" onClick={(e) => {
          e.preventDefault();
          props.changeCategory("engine");
        }}>car engine</a></li>
        <li><a href="#" onClick={(e) => {
          e.preventDefault();
          props.changeCategory("audio");
        }}>car audiosystem</a></li>
        <li><a href="#" onClick={(e) => {
          e.preventDefault();
          props.changeCategory("bumpers");
        }}>Truck bumpers</a></li>
        <li><a href="#">Feedback</a></li>
        <div className="clear" />
      </ul>
    </div>
  );
};

export default TopNav;
