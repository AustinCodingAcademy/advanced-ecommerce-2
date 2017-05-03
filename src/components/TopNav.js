import React from "react";

function TopNav(props) {
  console.log(props);
  return (
    <div className="top-nav">
      <ul>
        <li><a href="#" onClick={
          (e) => {
            e.preventDefault();
            props.changeCategory("headlights");
          }
        }>car lights</a></li>

        <li><a href="#" onClick={
          (e) => {
            e.preventDefault();
            props.changeCategory("tires");
          }
        }>car wheels</a></li>

        <li><a href="#" onClick={
          (e) => {
            e.preventDefault();
            props.changeCategory("bumpers");
          }
        }>car bumpers</a></li>

        <li><a href="#" onClick={
          (e) => {
            e.preventDefault();
            props.changeCategory("audio");
          }
        }>car audiosystem</a></li>

        <li><a href="#" onClick={
          (e) => {
            e.preventDefault();
            props.changeCategory("bumpers");
          }
        }>truck bumpers</a></li>

        <li><a href="#" onClick={
          (e) => {
            e.preventDefault();
            props.changeCategory("contact");
          }
        }>feedback</a></li>

        <div className="clear"> </div>
      </ul>
    </div>
  );
}

export default TopNav;
