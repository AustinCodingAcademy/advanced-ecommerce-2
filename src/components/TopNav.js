import React from "react";

function TopNav(props){
  return(
    <div className="top-nav">
      <ul>
        <li><a href="#" onClick={
          (e)=>{
          e.preventDefault();
          props.changeCategory("headlights");
          console.log("this worked");
        }
      }>Car Lights</a></li>
        <li><a href="#" onClick={
          (e)=>{
          e.preventDefault();
          props.changeCategory("tires");
        }}>Car Tire</a></li>
        <li><a href="#" onClick={
          (e)=>{
          e.preventDefault();
          props.changeCategory("bumpers");
        }}>Car Bumpers</a></li>
        <li><a href="#" onClick={
          (e)=>{
          e.preventDefault();
          props.changeCategory("audio");
        }}>Car Audio System</a></li>
        <li><a href="#" onClick={
          (e)=>{
          e.preventDefault();
          props.changeCategory("engine");
        }}>Car Engines</a></li>
        <li><a href="#">Feedback</a></li>
        <div className="clear"> </div>
      </ul>
    </div>
  );
}
export default TopNav;