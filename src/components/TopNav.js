import React from "react";
import PropTypes from "prop-types";

export default function TopNav(props) {
  function onClick(e) {
    props.changeCategory(e.target.innerHTML.toLowerCase());
  }
  return (
    <div className="top-nav">
      <ul>
        <li><a href="#" onClick={onClick}>Headlights</a></li>
        <li><a href="#" onClick={onClick}>Tires</a></li>
        <li><a href="#" onClick={onClick}>Bumpers</a></li>
        <li><a href="#" onClick={onClick}>Audio</a></li>
        <li><a href="#" onClick={onClick}>Engine</a></li>
        <li><a href="contact.html">Feedback</a></li>
        <div className="clear" />
      </ul>
    </div>


  );
}

TopNav.propTypes = {
  changeCategory: PropTypes.func.isRequired
};
