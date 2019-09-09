import React from "react";

function GlobalHeader() {
    return (<div className="top-header  px3 bg-darken-2">
        <div className="max-width-4  py1 mx-auto md-flex justify-between">
            <div className="top-header-left">
                <ul className="list-reset m0 fz1">
                    <li className="inline-block"><a className="btn px2 bold white" href="#">Home</a></li>
                    <li className="inline-block"><a className="btn px2 bold white" href="#">Specials</a></li>
                    <li className="inline-block"><a className="btn px2 bold white" href="#">Delivery</a></li>
                    <li className="inline-block"><a className="btn px2 bold white" href="#">Contact</a></li>
                </ul>
            </div>
            <div className="top-header-right">
                <ul className="list-reset m0 fz1">
                    <li className="inline-block"><a className="label bold white no-underline" href="#">CURRENCY:</a></li>
                    <li className="inline-block">
                        <select className="select mb0 py1">
                            <option>Dollar</option>
                            <option>Euro</option>
                            <option>Pound</option>
                        </select>
                    </li>
                </ul>
            </div>
        </div>
    </div>);
}

export default GlobalHeader;
