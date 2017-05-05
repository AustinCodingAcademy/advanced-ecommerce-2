import React from "react";

function TopNav(props) {
    return (
        <div className="top-nav">
            <ul>
                <li><a href="#" onClick={
                    (e) => {
                        e.preventDefault();
                        props.changeCategory("headlights");
                    }
                }>car lights</a></li>
                <li><a href="#" onClick={
                    (e) => {
                        e.preventDefault();
                        props.changeCategory("tires");
                    }
                }>Car wheels</a></li>
                <li><a href="#" onClick={
                    (e) => {
                        e.preventDefault();
                        props.changeCategory("bumpers");
                    }
                }>car bumpers</a></li>
                <li><a href="#" onClick={
                    (e) => {
                        e.preventDefault();
                        props.changeCategory("audio");
                    }
                }>car audiosystem</a></li>
                <li><a href="#" onClick={
                    (e) => {
                        e.preventDefault();
                        props.changeCategory("bumpers");
                    }
                }>Truck bumpers</a></li>
                <li><a href="#" onClick={
                    (e) => {
                        e.preventDefault();
                        props.changeCategory("contact");
                    }
                }>Feedback</a></li>
                <div className="#"> </div>
            </ul>
        </div>
		
    )
}

export default TopNav;