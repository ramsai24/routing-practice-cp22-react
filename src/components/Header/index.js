// Write your JS code here
import {Link} from 'react-router-dom'
// import Home from '../Home'
// import About from '../About'
// import Contact from '../Contact'
import './index.css'

const Header = () => (
  <div>
    <nav>
      <div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
          alt="wave"
        />
        <h1>Wave</h1>
      </div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  </div>
)

export default Header
