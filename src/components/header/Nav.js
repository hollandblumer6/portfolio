import React from 'react'
import {Routes, Route, NavLink} from 'react-router-dom';


function Nav() {
  return (
    <div className="nav">
         <NavLink to="/" className="nav-item" activeClassName="active" >
          {" "}
          TUTORIALS
        </NavLink> 
        <NavLink to="/about-me" className="nav-item" activeClassName="active" >
          {" "}
          ABOUT
        </NavLink>
        <NavLink to="/projects" className="nav-item" activeClassName="active">
          {" "}
          PROJECTS
        </NavLink>
        <NavLink to="/wellness" className="nav-item" activeClassName="active" >
          {" "}
          WELLNESS
        </NavLink>
    </div>
  )
}

export default Nav 