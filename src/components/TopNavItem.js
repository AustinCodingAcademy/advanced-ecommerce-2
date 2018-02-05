import React from "react";

function TopNavItem(props){
    return (<li className="inline-block">
        <a className="btn btn-primary fz2 py3 bg-clear h-bg-black-lighten-2" href="#" onClick={()=>{
            props.changeCategory(props.slug);
        }}>
            {props.name}
        </a>
    </li>)
}

export default TopNavItem;