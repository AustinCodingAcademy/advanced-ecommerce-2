import React from "react";

function TopNav() {
    return(
    <div className="top-nav">
    <ul>
        <li><a href="#" onClick={
            (a) => {
                a.preventDefault();
                props.changeCategory("headlights");
            }}>car lights</a></li>

        <li><a href="#" onClick={
            (a) => {
                a.preventDefault();
                props.changeCategory("tires");
            }}>Car Wheels</a></li>

        <li><a href="#" onClick={
            (a) => {
                a.preventDefault();
                props.changeCategory("bumpers");
            }}>Car Bumpers</a></li>

        <li><a href="#" onClick={
            (a) => {
                a.preventDefault();
                props.changeCategory("audio");
            }}>car audiosystem</a></li>

        <li><a href="#" onClick={
            (a) => {
                a.preventDefault();
                props.changeCategory("bump=ers");
            }}>Truck Bumpers</a></li>
            
        <li><a href="contact.html">Feedback</a></li>
     
        <div className="clear"> </div>
    </ul>
</div>
    )
}

export default TopNav;