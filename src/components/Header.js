import React from "react";
import GlobalHeader from "./GlobalHeader";
import SubHeader from "./SubHeader";
import TopNav from "./TopNav";

function Header() {
    return (<div className="header bg-blue">
        <GlobalHeader />
        <SubHeader />
        <TopNav />
    </div>);
}

export default Header;
