import React from "react";

function TopNav(props) {
    return (
      <div className="top-nav">
				<ul>
					<li><a href="#" onClick={(e) => {
             e.preventDefault();
            props.setCategory("headlights");
          }}>car lights</a></li>
					<li><a href="#" onClick={(e) => {
              e.preventDefault();
            props.setCategory("tires");
          }}>Car wheels</a></li>
					<li><a href="#" onClick={(e) => {
              e.preventDefault();
            props.setCategory("bumpers");
          }}>car bumpers</a></li>
					<li><a href="#" onClick={(e) => {
              e.preventDefault();
            props.setCategory("audio");
          }}>car audiosystem</a></li>
					<li><a href="#" onClick={(e) => {
              e.preventDefault();
            props.setCategory("bumpers");
          }}>Truck Bumpers</a></li>
					<li><a href="#">Feedback</a></li>
					<div className="clear"> </div>
				</ul>
			</div>
    );

  }




export default TopNav;
