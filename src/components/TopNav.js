import React from "react";

function TopNav(props) {
  return(
<div className="top-nav">
<ul>
  <li><a href="#" onClick={
    ()=>{
      props.changeCategory("headlights")
    }
  }>car lights</a></li>
  <li><a href="#" onClick={
    ()=>{
      props.changeCategory("tires")
    }
  }>Car wheels</a></li>
  <li><a href="#" onClick={
    ()=>{
      props.changeCategory("bumpers")
    }
  }>car bumpers</a></li>
  <li><a href="#" onClick={
    ()=>{
      props.changeCategory("audio")
    }
  }>car audiosystem</a></li>
  <li><a href="#" onClick={
    ()=>{
      props.changeCategory("bumpers")
    }
  }>Truck bumpers</a></li>
  <li><a href="#" onClick={
    ()=>{
      props.changeCategory("headlights")
    }
  }>Feedback</a></li>
  <div className="clear"> </div>
</ul>
</div>
)};

export default TopNav;
