import React from "react";

function TopNav(props) {

  function noHash(e){
    e.preventDefault();
    alert("hi");
  }

  return (

    <div className="top-nav">
      <ul>
        <li><a href="#" onClick={//()=>{
          //props.changeCategory("headlights");
          noHash
        }>Car Lights</a></li>

        <li><a href="#" onClick={()=>{
          props.changeCategory("tires");
          noHash;
        }}>Car Wheels</a></li>

        <li><a href="#" onClick={()=>{
          props.changeCategory("bumpers");
          noHash;
        }}>Car Bumpers</a></li>

        <li><a href="#" onClick={()=>{
          props.changeCategory("audio");
          noHash;
        }}>Car Audiosystem</a></li>

        <li><a href="#" onClick={()=>{
          props.changeCategory("bumpers");
          noHash;
        }}>Truck Bumpers</a></li>

        <li><a href="contact.html">Feedback</a></li>
        {/*<li><a href="carlights.html">car lights</a></li>
        <li><a href="carwheels.html">Car wheels</a></li>
        <li><a href="carbumpers.html">car bumpers</a></li>
        <li><a href="caradsystem.html">car audiosystem</a></li>
        <li><a href="truckbumpers.html">Truck bumpers</a></li>
        <li><a href="contact.html">Feedback</a></li>*/}
        <div className="clear"> </div>
      </ul>
    </div>

    );
}

export default TopNav;
