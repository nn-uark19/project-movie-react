import React from "react";
import { Link, NavLink } from "react-router-dom";

class Header extends React.Component {
  render() {
    console.log("function render()- class Header");
    return (
      <div className="ui huge inverted menu">
        <div className="ui container">
          <Link to='/' className="header item">
            <i className="film icon" />UoA-movies
          </Link>
          <NavLink exact to="/" activeClassName="" className="item">
            Home
          </NavLink>
          <NavLink exact to="/contact" activeClassName="" className="item">
            Contact
          </NavLink>
          <NavLink exact to="/about" activeClassName="" className="item">
            About
          </NavLink>
        </div>
      </div>
    );
  }
}
export default Header;
{
  // <a class="active item">Home</a>
  // <a class="item">Messages</a>
  // <a class="item">Friends</a>
  /* <nav className='App-nav'>
          <NavLink exact to='/' activeClassName='App-activeLink'>Home</NavLink>
          <NavLink exact to='/contact' activeClassName='App-activeLink'>Contact</NavLink>
          <NavLink exact to='/about' activeClassName='App-activeLink'>About</NavLink>
        </nav> */
}
