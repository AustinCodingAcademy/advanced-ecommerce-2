import React from "react";

function TopNav(props) {
  return (
    
    <div className="top-nav">
				<ul>

					<li><a onClick={function(){
						props.changeCategory("headlights")
					}}
					href="#">car lights</a></li>
					<li><a onClick={function(){
						props.changeCategory("tires")
					}}
					href="#">tires</a></li>
					<li><a onClick={function(){
						props.changeCategory("bumpers")
					}}
					href="#">bumpers</a></li>
					<li><a onClick={function(){
						props.changeCategory("audio")
					}}
					href="#">audio</a></li>
					<li><a onClick={function(){
						props.changeCategory("engine")
					}}
					href="#">engine</a></li>
				</ul>
			</div>);
}

export default TopNav;