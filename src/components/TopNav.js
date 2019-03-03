import React from 'react';


function TopNav(props) {

  // returns clicked category to changeCategory (index.js)
  return(
    <ul>
      <li><a onClick={ () => props.changeCategory('headlights') } href="#">Car lights</a></li>
      <li><a onClick={ () => props.changeCategory('tires') } href="#">Car wheels</a></li>
      <li><a onClick={ () => props.changeCategory('bumpers') } href="#">Car bumpers</a></li>
      <li><a onClick={ () => props.changeCategory('audio') } href="#">Car audiosystem</a></li>
      <li><a onClick={ () => props.changeCategory('bumpers') } href="#">Truck bumpers</a></li>
      <li><a onClick={ () => props.changeCategory('headlights') } href="#">Feedback</a></li>
      <div className="clear"> </div>
    </ul>

  )
}

export default TopNav;
