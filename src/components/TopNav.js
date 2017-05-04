import React from "react";

function TopNav(props) {
  return (
    <div className="top-nav">
      <ul>
        <li><a href="#" onClick={
          (e) => {
            e.preventDefault();
            props.changeCategory("headlights");
          }
        } >Headlights</a></li>
        <li><a href="#" onClick={
          (e) => {
            e.preventDefault();
            props.changeCategory("tires");
          }
        } >Tires</a></li>
        <li><a href="#" onClick={
          (e) => {
            e.preventDefault();
            props.changeCategory("bumpers");
          }
        } >Bumpers</a></li>
        <li><a href="#" onClick={
          (e) => {
            e.preventDefault();
            props.changeCategory("audio");
          }
        } >Audiosystems</a></li>
        <li><a href="#" onClick={
          (e) => {
            e.preventDefault();
            props.changeCategory("engine");
          }
        } >Engines</a></li>
        <li><a href="#">Feedback</a></li>
        <div className="clear" />
      </ul>
    </div>
  );
}

export default TopNav;
