import React from "react";

function TopNav() {
    return (<div className="top-nav  px3">
        <div className="max-width-4 mx-auto bg-black">
            <ul className="list-reset m0">
                <li className="inline-block"><a className="btn btn-primary fz2 py3 bg-clear h-bg-black-lighten-2" href="carlights.html">car lights</a></li>
                <li className="inline-block"><a className="btn btn-primary fz2 py3 bg-clear h-bg-black-lighten-2" href="carwheels.html">Car wheels</a></li>
                <li className="inline-block"><a className="btn btn-primary fz2 py3 bg-clear h-bg-black-lighten-2" href="carbumpers.html">car bumpers</a></li>
                <li className="inline-block"><a className="btn btn-primary fz2 py3 bg-clear h-bg-black-lighten-2" href="caradsystem.html">car audiosystem</a></li>
                <li className="inline-block"><a className="btn btn-primary fz2 py3 bg-clear h-bg-black-lighten-2" href="truckbumpers.html">Truck bumpers</a></li>
                <li className="inline-block"><a className="btn btn-primary fz2 py3 bg-clear h-bg-black-lighten-2" href="contact.html">Feedback</a></li>
            </ul>
        </div>
    </div>);
}

export default TopNav;
