import React from "react";

function TopNav(props) {
  const handleClick = event => {
    event.preventDefault();
    props.changeCategory(event.target.value);
  }
  return (
    <div className="top-nav">
      <ul>
        <li><a href="#" onClick={handleClick}>car lights</a></li>
        <li><a href="#" onClick={handleClick}>Car wheels</a></li>
        <li><a href="#" onClick={handleClick}>car bumpers</a></li>
        <li><a href="#" onClick={handleClick}>car audiosystem</a></li>
        <li><a href="#" onClick={handleClick}>Truck bumpers</a></li>
        <li><a href="#" onClick={handleClick}>Feedback</a></li>
        <div className="clear"> </div>
      </ul>
    </div>
  );
}

export default TopNav;
