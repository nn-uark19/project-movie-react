import React from 'react';
import { Link, NavLink } from 'react-router-dom';
// css
import './1-Header.css';

class Header extends React.Component {
  render() {
    console.log('class Header- function render()');
    return (
      <div className='Header'>
        <nav className='fixed-top navbar navbar-expand-md navbar-dark Header-background'>
          <div className='container'>
            <Link to='/' className='navbar-brand'>
              <i className='fas fa-film mr-2' /> 
              NMovies
            </Link>

            <button
              className='navbar-toggler'
              type='button'
              data-toggle='collapse'
              data-target='#navbarSupportedContent'
              aria-controls='navbarSupportedContent'
              aria-expanded='false'
              aria-label='Toggle navigation'
            >
              <span className='navbar-toggler-icon' />
            </button>

            <div
              className='collapse navbar-collapse'
              id='navbarSupportedContent'
            >
              <ul className='navbar-nav mr-auto'>
                <li className='nav-item'>
                  <NavLink
                    exact
                    to='/'
                    activeClassName='Header-selected'
                    className='nav-link'
                  >
                    Home
                  </NavLink>
                </li>
                <li className='nav-item'>
                  <NavLink
                    exact
                    to='/contact'
                    activeClassName='Header-selected'
                    className='nav-link'
                  >
                    Contact
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
export default Header;

// React Semantic UI
// class Header extends React.Component {
//   render() {
//     console.log('class Header- function render()');
//     return (
//       <div className="ui huge inverted menu">
//         <div className="ui container">
//           <Link to='/' className="header item">
//             <i className="film icon" />UoA-movies
//           </Link>
//            ...Home....
//           <NavLink exact to="/contact" activeClassName="" className="item">
//             Contact
//           </NavLink>
//           <NavLink exact to="/about" activeClassName="" className="item">
//             About
//           </NavLink>
//         </div>
//       </div>
//     );
//   }
// }
