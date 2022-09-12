import React from 'react'
import {Routes, Route, Link} from 'react-router-dom';


function Nav() {
  return (
    <div className="nav">
         <Link to="/" classname="nav-item">
          {" "}
          TUTORIALS
        </Link> 
        <Link to="/about-me" classname="nav-item">
          {" "}
          ABOUT
        </Link>
        <Link to="/about-me" classname="nav-item">
          {" "}
          ABOUT
        </Link>
        <Link to="/about-me" classname="nav-item">
          {" "}
          ABOUT
        </Link>
    </div>
  )
}

export default Nav