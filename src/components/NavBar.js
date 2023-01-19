import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div className="navbar">
      <NavLink to="/" exact4="true" activestyle={{background: "darkblue"}}>Home</NavLink>
      <NavLink to="/movies" exact="true" activestyle={{background: "darkblue"}}>Movies</NavLink>
      <NavLink to="/directors" exact="true" activestyle={{background: "darkblue"}}>Directors</NavLink>
      <NavLink to="/actors" exact="true" activestyle={{background: "darkblue"}}>Actors</NavLink>
    </div>
  )
}

export default NavBar;
