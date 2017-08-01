import React from "react";

export default function TopNav(props) {
  function onClick(e) {
    props.changeCategory(e.target.value);
  }
  return (
    <div className="top-nav">
      <ul>
        <li><a href="#" onClick={onClick} >car lights</a></li>
        <li><a href="carwheels.html">Car wheels</a></li>
        <li><a href="carbumpers.html">car bumpers</a></li>
        <li><a href="caradsystem.html">car audiosystem</a></li>
        <li><a href="truckbumpers.html">Truck bumpers</a></li>
        <li><a href="contact.html">Feedback</a></li>
        <div className="clear" />
      </ul>
    </div>


  );
}

