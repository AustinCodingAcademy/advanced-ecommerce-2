import React from "react";
import TopNavItem from "./TopNavItem";

function TopNav(props) {

    let navItemMarkup = props.navItems.map(function(item){
        return <TopNavItem slug={item.slug} name={item.name} key={item.id} changeCategory={props.changeCategory} />
    });

    return (<div className="top-nav  px3">
        <div className="max-width-4 mx-auto bg-black">
            <ul className="list-reset m0">
                {navItemMarkup}
            </ul>
        </div>
    </div>);
}

export default TopNav;
