import React from "react";

function TopNav(props) {

  function handleClick(event) {
    // event.preventDefault();
    console.log(event.target.id);
    props.changeCategory(event.target.id);
  }

  function popLinks() {
    const categories = ["tires", "engine", "headlights", "bumpers", "audio"];

    return (
      categories.map(
        (ele, ind) => {
          return (
            <li><p href="#" key={ind} id={ele} onClick={(e) => handleClick(e)}>{ele}</p></li>
          );
        })
    );
  }

  return (
    <div>
      <div className="top-nav">
        <ul>
          {popLinks()}
          <div className="clear" />
        </ul>
      </div>
    </div>
  );
}

export default TopNav;
