import React from 'react';


function TopNav(props) {

  function changeIt(e) {
    e.preventDefault();
    props.changeCategory('headlights');
  }

  return(
    <ul>
      <li><a onClick={changeIt} href="#">car lights</a></li>
      <li><a href="#">Car wheels</a></li>
      <li><a href="#">car bumpers</a></li>
      <li><a href="#">car audiosystem</a></li>
      <li><a href="#">Truck bumpers</a></li>
      <li><a href="#">Feedback</a></li>
      <div className="clear"> </div>
    </ul>

  )
}

export default TopNav;
