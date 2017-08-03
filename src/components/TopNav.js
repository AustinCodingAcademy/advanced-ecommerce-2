import React from "react";

function TopNav(props) {
  const handleClick = event => {
    event.preventDefault();
    props.changeCategory(event.target.value);
  }
  return (
    <div className="top-nav">
      <ul>
        <li><a href="#" onClick={
            () => {
            event.preventDefault();
            props.changeCategory("headlights")
          }
        }>car lights</a></li>

        <li><a href="#" onClick={
          () => {
          event.preventDefault();
          props.changeCategory("tires")
        }
          }>Car wheels</a></li>

        <li><a href="#" onClick={
          () => {
          event.preventDefault();
          props.changeCategory("bumpers")
        }
          }>car bumpers</a></li>

        <li><a href="#" onClick={
          () => {
          event.preventDefault();
          props.changeCategory("audio")
        }
          }>car audiosystem</a></li>

        <li><a href="#" onClick={
          () => {
          event.preventDefault();
          props.changeCategory("bumpers")
        }
          }>Truck bumpers</a></li>

        <li><a href="#" onClick={
          () => {
          event.preventDefault();
          return props.changeCategory("engine")
        }
          }>Feedback</a></li>
        <div className="clear"> </div>
      </ul>
    </div>
  );
}

export default TopNav;
