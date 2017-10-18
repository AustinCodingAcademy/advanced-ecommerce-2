import React from "react"

function TopNav(props) {
    
    return (
        <div className="top-nav">
            <ul>
                <li><a onClick={()=>{props.change("headlights")}} href="#">car lights</a></li>
                <li><a onClick={()=>{props.change("tires")}} href="#">Car wheels</a></li>
                <li><a onClick={()=>{props.change("bumpers")}} href="#">car bumpers</a></li>
                <li><a onClick={()=>{props.change("audio")}} href="#">car audiosystem</a></li>
                <li><a onClick={()=>{props.change("engine")}} href="#">Engines</a></li>
                <li><a href="#">Feedback</a></li>
                <div className="clear"> </div>
            </ul>
        </div>
    )
}

export default TopNav;