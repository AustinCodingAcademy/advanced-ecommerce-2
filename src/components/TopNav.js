import React from "react";
import TopNavItem from "./TopNavItem";

function TopNav(props) {

    let navItemMarkup = props.navItems.map(function(item){
        
        let navClass = (props.currentCategory === item.slug) ? 'current' : '';

        return <TopNavItem slug={item.slug} name={item.name} key={item.id} changeCategory={props.changeCategory} navClass={navClass} />
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
