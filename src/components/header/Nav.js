import React from "react";
import { NavLink } from "react-router-dom";
import "../../App.css";

function Nav() {
  let activeStyle = {
    textDecoration: "underline",
  };

  return (
    <ul className="nav">
      <li>
        {" "}
        <NavLink
          to="/tutorials"
          /*  style={({ isActive }) => ({
            color: isActive ? "greenyellow" : "white",
            fontWeight: isActive ? "700" : "400",
            textDecoration: isActive ? "green wavy underline" : "none",
          })} */
          className={({ isActive }) =>
            isActive ? "nav-item active" : "nav-item"
          }
        >
          TUTORIALS
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "nav-item active" : "nav-item"
          }
        >
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
