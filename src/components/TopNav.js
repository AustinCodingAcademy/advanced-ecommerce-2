import React from "react";

function TopNav(props) {
  return (

    <div className="top-nav">
      <ul>
        <li><a href="#" onClick={(e) => {
          e.preventDefault();
          props.changeCategory("tires");
        }
      }>Car Wheels</a></li>

        <li><a href="#" onClick={(e) => {
          e.preventDefault();
          props.changeCategory("headlights");
        }
      }>Car Lights</a></li>

        <li><a href="#" onClick={(e) => {
          e.preventDefault();
          props.changeCategory("engine");
        }
      }>Car Engines</a></li>

      <li><a href="#" onClick={(e) => {
        e.preventDefault();
        props.changeCategory("bumpers");
      }
      }>Car Bumpers</a></li>

      <li><a href="#" onClick={(e) => {
        e.preventDefault();
        props.changeCategory("audio");
      }
      }>Car Audiosystem</a></li>

      <li><a href="#" onClick={(e) => {
        e.preventDefault();
        props.changeCategory("bumpers");
      }
      }>Truck Bumpers</a></li>

        <li><a href="contact.html">Feedback</a></li>
        <div className="clear" />
      </ul>
    </div>

  );
}

export default TopNav;

// Previous
/*
<div className="top-nav">
  <ul>
    <li><a href="carlights.html">car lights</a></li>
    <li><a href="carwheels.html">Car wheels</a></li>
    <li><a href="carbumpers.html">car bumpers</a></li>
    <li><a href="caradsystem.html">car audiosystem</a></li>
    <li><a href="truckbumpers.html">Truck bumpers</a></li>
    <li><a href="contact.html">Feedback</a></li>
    <div className="clear" />
  </ul>
</div>
*/
