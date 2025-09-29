import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FiHexagon } from 'react-icons/fi'

export default function NavBar() {
  const [open, setOpen] = useState(false)
  const onEnter = () => setOpen(true)
  const onLeave = () => setOpen(false)
  const onToggle = () => setOpen(v => !v)
  const dropdownStyle = open ? { display: 'block', opacity: 1, visibility: 'visible', transform: 'translateY(0)', zIndex: 1040, position: 'absolute', left: 0, right: 0, top: '100%' } : {}

  return (
    <nav className="navbar navbar-expand-lg sticky_nav navbar_fixed" style={{position:'sticky', top:0, zIndex:1030}}>
      <div className="container">
        <Link className="navbar-brand d-flex align-items-center gap-2" to="/">
          <FiHexagon />
          <span className="fw-bold brand-wordmark">Chatriox</span>
        </Link>
        <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="menu_toggle">
            <span className="hamburger"><span></span><span></span><span></span></span>
            <span className="hamburger-cross"><span></span><span></span></span>
          </span>
        </button>
        <div className="collapse navbar-collapse show" id="navbarSupportedContent">
          <ul className="navbar-nav menu me-lg-auto ms-lg-auto">
            <li className="nav-item"><NavLink to="/" className="nav-link">Home</NavLink></li>
            <li className={`nav-item dropdown submenu ${open?'show':''}`} onMouseEnter={onEnter} onMouseLeave={onLeave}>
              <button type="button" className="nav-link dropdown-toggle btn btn-link p-0" aria-haspopup="true" aria-expanded={open} onClick={onToggle} onTouchStart={onToggle}>
                Menu
              </button>
              <i className="fa fa-angle-down mobile_dropdown_icon"></i>
              <ul className={`dropdown-menu p-4 mega_menu ${open?'show':''}`} style={dropdownStyle}>
                <div className="container">
                  <div className="row">
                    <div className="col-lg-3 col-md-6">
                      <h6 className="mb-2">Company</h6>
                      <ul className="list-unstyled">
                        <li><NavLink to="/about" className="nav-link" onClick={()=>setOpen(false)}>About Us</NavLink></li>
                        <li><NavLink to="/pricing" className="nav-link" onClick={()=>setOpen(false)}>Pricing</NavLink></li>
                        <li><NavLink to="/faqs" className="nav-link" onClick={()=>setOpen(false)}>FAQs</NavLink></li>
                        <li><NavLink to="/contact" className="nav-link" onClick={()=>setOpen(false)}>Contact</NavLink></li>
                      </ul>
                    </div>
                    <div className="col-lg-3 col-md-6">
                      <h6 className="mb-2">Services</h6>
                      <ul className="list-unstyled">
                        <li><NavLink to="/services/bulk-email" className="nav-link" onClick={()=>setOpen(false)}>Bulk Email Sending</NavLink></li>
                        <li><NavLink to="/services/bulk-whatsapp" className="nav-link" onClick={()=>setOpen(false)}>Bulk WhatsApp Sending</NavLink></li>
                        <li><NavLink to="/services/email-validation" className="nav-link" onClick={()=>setOpen(false)}>Email Validation</NavLink></li>
                        <li><NavLink to="/services/lead-scraper" className="nav-link" onClick={()=>setOpen(false)}>Lead Scraper</NavLink></li>
                        <li><NavLink to="/services/template-builder" className="nav-link" onClick={()=>setOpen(false)}>Template Builder</NavLink></li>
                        <li><NavLink to="/services/ai-analyzer" className="nav-link" onClick={()=>setOpen(false)}>AI Analyzer</NavLink></li>
                      </ul>
                    </div>
                    <div className="col-lg-3 col-md-6">
                      <h6 className="mb-2">Resources</h6>
                      <ul className="list-unstyled">
                        <li><NavLink to="/blog" className="nav-link" onClick={()=>setOpen(false)}>Blog</NavLink></li>
                        <li><NavLink to="/resources" className="nav-link" onClick={()=>setOpen(false)}>Guides</NavLink></li>
                        <li><NavLink to="/integrations" className="nav-link" onClick={()=>setOpen(false)}>Integrations</NavLink></li>
                        <li><NavLink to="/support" className="nav-link" onClick={()=>setOpen(false)}>Help Center</NavLink></li>
                      </ul>
                    </div>
                    <div className="col-lg-3 col-md-6">
                      <h6 className="mb-2">Account</h6>
                      <ul className="list-unstyled">
                        <li><NavLink to="/login" className="nav-link" onClick={()=>setOpen(false)}>Login</NavLink></li>
                        <li><NavLink to="/signup" className="nav-link" onClick={()=>setOpen(false)}>Create Free Account</NavLink></li>
                        <li><NavLink to="/dashboard" className="nav-link" onClick={()=>setOpen(false)}>Dashboard</NavLink></li>
                        <li><NavLink to="/careers" className="nav-link" onClick={()=>setOpen(false)}>Careers</NavLink></li>
                        <li><NavLink to="/terms" className="nav-link" onClick={()=>setOpen(false)}>Terms</NavLink></li>
                        <li><NavLink to="/privacy" className="nav-link" onClick={()=>setOpen(false)}>Privacy</NavLink></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </ul>
            </li>
            <li className="nav-item"><NavLink to="/services" className="nav-link">Services</NavLink></li>
            <li className="nav-item"><NavLink to="/case-studies" className="nav-link">Case Studies</NavLink></li>
            <li className="nav-item"><NavLink to="/blog" className="nav-link">Blog</NavLink></li>
            <li className="nav-item"><NavLink to="/contact" className="nav-link">Contact Us</NavLink></li>
          </ul>
          <div className="nav_right">
            <NavLink to="/login" className="login_btn"><div className="btn_text"><span>Login</span><span>Login</span></div></NavLink>
            <NavLink to="/signup" className="signup_btn hover_effect"><div className="btn_text"><span>Create Free Account</span><span>Create Free Account</span></div></NavLink>
          </div>
        </div>
      </div>
    </nav>
  )
}
