// Write your JS code here
import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <div className="navbar-container">
    <nav className="navbar">
      <div className="logo-container">
        <img
          className="logo"
          alt="wave"
          src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
        />
        <p className="logo-text">Wave</p>
      </div>
      <ul className="list-container">
        <li>
          <Link className="nav-link" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/about">
            About
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/contact">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  </div>
)

export default Header
