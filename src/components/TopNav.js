import React from "react";
import propTypes from "prop-types";

function TopNav(props) {
  return (
    <div className="top-nav">
      <ul>
        <li><a href="#" onClick={() => {props.changeCategory("headlights")}}>car lights</a></li>
        <li><a href="#" onClick={() => {props.changeCategory("tires")}}>Car wheels</a></li>
        <li><a href="#" onClick={() => {props.changeCategory("bumpers")}}>car bumpers</a></li>
        <li><a href="#" onClick={() => {props.changeCategory("audio")}}>car audiosystem</a></li>
        <li><a href="#" onClick={() => {props.changeCategory("bumpers")}}>Truck bumpers</a></li>
        <li><a href="#">Feedback</a></li>
        <div className="clear" />
      </ul>
    </div>
  );
}

TopNav.propTypes = {
  changeCategory: propTypes.func,
};

export default TopNav;
