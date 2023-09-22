import React from 'react'

const Header = (props) => {
  return (
    <header>
    <div className="page_width">
      <div className="nav_desktop">
       <div className="logo"><img src={props.logo} alt="" /></div>
       <nav>
        <ul>
          <li><a href="https://www.google.com/">Home</a></li>
          <li><a href="https://www.google.com/">Services</a></li>
          <li><a href="https://www.google.com/">Contact Us</a></li>
          <li><a href="tel:+971586747123">{props.icon}<span>+971 58 67 47 123</span></a></li>
        </ul>
       </nav>
    </div>  
    </div>   
    </header>
  )
}
export default Header