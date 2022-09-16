import React from "react";
import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <ul className="nav">
      <li>
        {" "}
        <NavLink to="/" className="nav-item" activeClassName="active">
          {" "}
          TUTORIALS
        </NavLink>
      </li>
      <li>
        <NavLink to="/about-me" className="nav-item" activeClassName="active">
          {" "}
          ABOUT
        </NavLink>
      </li>
      <li>
        <NavLink to="/projects" className="nav-item" activeClassName="active">
          {" "}
          PROJECTS
        </NavLink>
      </li>
      <li>
        <NavLink to="/wellness" className="nav-item" activeClassName="active">
          {" "}
          WELLNESS
        </NavLink>
      </li>
    </ul>
  );
}

export default Nav;
