import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg sticky_nav">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <span className="fw-bold" style={{letterSpacing:'.5px'}}>Chatriox</span>
        </Link>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav menu me-lg-auto ms-lg-auto">
            <li className="nav-item dropdown submenu active">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Home</a>
              <i className="fa fa-angle-down mobile_dropdown_icon"></i>
              <ul className="dropdown-menu">
                <li className="nav-item active"><NavLink to="/" className="nav-link">Home</NavLink></li>
              </ul>
            </li>
            <li className="nav-item dropdown submenu">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Pages</a>
              <i className="fa fa-angle-down mobile_dropdown_icon"></i>
              <ul className="dropdown-menu">
                <li className="nav-item"><NavLink to="/about" className="nav-link">About Us</NavLink></li>
                <li className="nav-item"><NavLink to="/services" className="nav-link">Service</NavLink></li>
                <li className="nav-item"><NavLink to="/pricing" className="nav-link">Pricing</NavLink></li>
                <li className="nav-item"><NavLink to="/faqs" className="nav-link">FAQs</NavLink></li>
              </ul>
            </li>
            <li className="nav-item dropdown submenu">
              <a className="nav-link dropdown-toggle" href="#">Portfolio</a>
              <i className="fa fa-angle-down mobile_dropdown_icon"></i>
              <ul className="dropdown-menu">
                <li className="nav-item"><NavLink to="/case-studies" className="nav-link">Case Studies</NavLink></li>
              </ul>
            </li>
            <li className="nav-item dropdown submenu">
              <a className="nav-link" href="#">Blogs</a>
              <i className="fa fa-angle-down mobile_dropdown_icon"></i>
              <ul className="dropdown-menu">
                <li className="nav-item"><NavLink to="/blog" className="nav-link">Blog</NavLink></li>
              </ul>
            </li>
            <li className="nav-item"><NavLink to="/contact" className="nav-link">Contact Us</NavLink></li>
          </ul>
          <div className="nav_right">
            <NavLink to="/login" className="login_btn"><div className="btn_text"><span>Login</span><span>Login</span></div></NavLink>
            <NavLink to="/signup" className="signup_btn hover_effect"><div className="btn_text"><span>Create Free Account</span><span>Create Free Account</span></div></NavLink>
          </div>
        </div>
        <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="menu_toggle">
            <span className="hamburger"><span></span><span></span><span></span></span>
            <span className="hamburger-cross"><span></span><span></span></span>
          </span>
        </button>
      </div>
    </nav>
  )
}
