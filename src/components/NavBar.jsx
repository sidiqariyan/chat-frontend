import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg sticky_nav">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <span className="fw-bold brand-wordmark">Chatriox</span>
        </Link>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav menu me-lg-auto ms-lg-auto">
            <li className="nav-item dropdown submenu active">
              <NavLink to="/" className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Home</NavLink>
              <i className="fa fa-angle-down mobile_dropdown_icon"></i>
              <ul className="dropdown-menu">
                <li className="nav-item active"><NavLink to="/" className="nav-link">Home</NavLink></li>
              </ul>
            </li>
            <li className="nav-item dropdown submenu">
              <a className="nav-link dropdown-toggle" href="/services" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Menu</a>
              <i className="fa fa-angle-down mobile_dropdown_icon"></i>
              <ul className="dropdown-menu p-4 mega_menu">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-3 col-md-6">
                      <h6 className="mb-2">Company</h6>
                      <ul className="list-unstyled">
                        <li><NavLink to="/about" className="nav-link">About Us</NavLink></li>
                        <li><NavLink to="/pricing" className="nav-link">Pricing</NavLink></li>
                        <li><NavLink to="/faqs" className="nav-link">FAQs</NavLink></li>
                        <li><NavLink to="/contact" className="nav-link">Contact</NavLink></li>
                      </ul>
                    </div>
                    <div className="col-lg-3 col-md-6">
                      <h6 className="mb-2">Services</h6>
                      <ul className="list-unstyled">
                        <li><NavLink to="/services/bulk-email" className="nav-link">Bulk Email Sending</NavLink></li>
                        <li><NavLink to="/services/bulk-whatsapp" className="nav-link">Bulk WhatsApp Sending</NavLink></li>
                        <li><NavLink to="/services/email-validation" className="nav-link">Email Validation</NavLink></li>
                        <li><NavLink to="/services/lead-scraper" className="nav-link">Lead Scraper</NavLink></li>
                        <li><NavLink to="/services/template-builder" className="nav-link">Template Builder</NavLink></li>
                        <li><NavLink to="/services/ai-analyzer" className="nav-link">AI Analyzer</NavLink></li>
                      </ul>
                    </div>
                    <div className="col-lg-3 col-md-6">
                      <h6 className="mb-2">Resources</h6>
                      <ul className="list-unstyled">
                        <li><NavLink to="/blog" className="nav-link">Blog</NavLink></li>
                        <li><NavLink to="/resources" className="nav-link">Guides</NavLink></li>
                        <li><NavLink to="/integrations" className="nav-link">Integrations</NavLink></li>
                        <li><NavLink to="/support" className="nav-link">Help Center</NavLink></li>
                      </ul>
                    </div>
                    <div className="col-lg-3 col-md-6">
                      <h6 className="mb-2">Account</h6>
                      <ul className="list-unstyled">
                        <li><NavLink to="/login" className="nav-link">Login</NavLink></li>
                        <li><NavLink to="/signup" className="nav-link">Create Free Account</NavLink></li>
                        <li><NavLink to="/dashboard" className="nav-link">Dashboard</NavLink></li>
                        <li><NavLink to="/careers" className="nav-link">Careers</NavLink></li>
                        <li><NavLink to="/terms" className="nav-link">Terms</NavLink></li>
                        <li><NavLink to="/privacy" className="nav-link">Privacy</NavLink></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </ul>
            </li>
            <li className="nav-item"><NavLink to="/case-studies" className="nav-link">Case Studies</NavLink></li>
            <li className="nav-item"><NavLink to="/blog" className="nav-link">Blog</NavLink></li>
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
