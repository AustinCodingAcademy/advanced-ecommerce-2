import React from 'react';
import PropTypes from 'prop-types';


const TopNav = (props) => {

  
  return (

    <div className="top-nav">
      <ul>
        <li><a href="#" onClick={(e) => {e.preventDefault(); props.changeCategory("headlights");}}>car lights</a></li>
        <li><a href="#" onClick={(e) => {e.preventDefault(); props.changeCategory("tires");}}>Car wheels</a></li>
        <li><a href="#" onClick={(e) => {e.preventDefault(); props.changeCategory("engine");}}>engines</a></li>
        <li><a href="#" onClick={(e) => {e.preventDefault(); props.changeCategory("audio");}}>car audiosystem</a></li>
        <li><a href="#" onClick={(e) => {e.preventDefault(); props.changeCategory("bumpers");}}>Truck bumpers</a></li>
        <li><a href="contact.html">Feedback</a></li>
        <div className="clear" />
      </ul>
    </div>
  );
};
 
TopNav.propTypes = {
  changeCategory: PropTypes.func.isRequired
};

export default TopNav;
