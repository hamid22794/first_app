import React from 'react'
import {Link} from 'react-router-dom'

const Header = (props) => {
  return (
    <header>
    <div className="page_width">
      <div className="nav_desktop">
       <div className="logo"><img src={props.logo} alt="" /></div>
       <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/contact-us">Contact Us</Link></li>
          <li><a href="tel:+971586747123">{props.icon}<span>+971 58 67 47 123</span></a></li>
        </ul>
       </nav>
    </div>  
    </div>   
    </header>
  )
}
export default Header