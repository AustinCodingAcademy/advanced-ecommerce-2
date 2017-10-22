import React from "react";

function TopNav(props) {
  const { changeCategory } = props;

  return (
    <div className="top-nav">
      <ul>
        <li>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              changeCategory("headlights");
            }}>car lights
          </a>
        </li>
        <li>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              changeCategory("tires");
            }}>Car wheels
          </a>
        </li>
        <li>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              changeCategory("bumpers");
            }}>Bumpers
          </a>
        </li>
        <li>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              changeCategory("audio");
            }}>car audiosystem
          </a>
        </li>
        <li>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              changeCategory("engine");
            }}>Engine
          </a>
        </li>
        <li><a href="contact.html">Feedback</a></li>
        <div className="clear"> </div>
      </ul>
    </div>

  );
}

export default TopNav;
