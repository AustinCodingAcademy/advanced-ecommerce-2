import React from "react";

function TopNav (props) {
    return (
        <div className="top-nav">
        <ul>
            <li><a href="#" onClick={(e) => {
                props.changeCategory("tires");
            }
            }>car tires</a></li>
            <li><a href="#" onClick={(e) => {
                props.changeCategory("headlights");
            }
            }>car lights</a></li>
            <li><a href="#" onClick={(e) => {
                props.changeCategory("bumpers");
            }
            }>Bumpers</a></li>
            <li><a href="#" onClick={(e) => {
                props.changeCategory("audio");
            }
            }>car audiosystem</a></li>
            <li><a href="#" onClick={(e) => {
                props.changeCategory("engine");
            }
            }>Engine</a></li>
            <li><a href="#">Feedback</a></li>
            <div className="clear"> </div>
        </ul>
    </div>
    );
}

export default TopNav;