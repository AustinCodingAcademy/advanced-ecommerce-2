import React from "react";

function link(name, props) {
    let links = name.map((link) => {
        return (
            <li>
                <a
                    href="#"
                    onClick={
                        (e) => {
                            e.preventDefault();
                            props.changeCategory(link[1])
                        }
                    }
                >
                        {link[0]}
                </a>
            </li>
        );
    });
    return links;
}

function TopNav(props) {
    return (
        <div className="top-nav">
            <ul>
                {
                    link([
                            ['car lights', 'headlights'],
                            ['car wheels', 'tires'],
                            ['car bumpers', 'bumpers'],
                            ['car audiosystem', 'audio'],
                            ['truck bumpers', 'bumpers'],
                            ['feedback', '']
                    ], props)
                }
                <div className="clear"> </div>
            </ul>
        </div>
    );
}

export default TopNav;