import React from "react";
import GlobalHeader from "./GlobalHeader";
import SubHeader from "./SubHeader";
import TopNav from "./TopNav";

function Header(props) {
    

    return (<div className="header bg-blue">
        <GlobalHeader />
        <SubHeader cartCount={props.cartCount} />
        <TopNav navItems={props.navItems} changeCategory={props.changeCategory} />
    </div>);
}

export default Header;
