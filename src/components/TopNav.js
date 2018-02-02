import React from "react";

function TopNav(props) {
    return(
        <div className="top-nav">
            <ul>
                <li><a onClick={(e) => { e.preventDefault(); props.changeCat("headlights") }} href="#">Headlights</a></li>
                <li><a onClick={(e) => { e.preventDefault(); props.changeCat("tires") }} href="#">Tires</a></li>
                <li><a onClick={(e) => { e.preventDefault(); props.changeCat("bumpers") }} href="#">Bumpers</a></li>
                <li><a onClick={(e) => { e.preventDefault(); props.changeCat("audio") }} href="#">Audio</a></li>
                <li><a onClick={(e) => { e.preventDefault(); props.changeCat("engine") }} href="#">Engine</a></li>
                <li><a href="contact.html">Feedback</a></li>
                <div className="clear"> </div>
            </ul>
        </div>
    )
}

export default TopNav;