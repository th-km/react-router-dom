import React from "react"
import { NavLink } from "react-router-dom"

const Header = () => {
  return (
    <header>
      <h1>Router</h1>
      <nav>
        <NavLink exact to="/" activeClassName="selected">
          Project
        </NavLink>
        <NavLink to="/about" activeClassName="selected">
          About
        </NavLink>
        <NavLink to="/contact" activeClassName="selected">
          Contact
        </NavLink>
      </nav>
    </header>
  )
}

export default Header
