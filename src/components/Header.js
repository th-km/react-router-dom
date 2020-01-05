import React from "react"
import { NavLink } from "react-router-dom"

const Header = () => {
  return (
    <header>
      <nav>
        <NavLink exact to="/" activeClassName="selected">
          Home
        </NavLink>
        <NavLink to="/contact" activeClassName="selected">
          Contact
        </NavLink>
        <NavLink to="/about" activeClassName="selected">
          About
        </NavLink>
      </nav>
    </header>
  )
}

export default Header
