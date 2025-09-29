import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="footer_area_two footer_area_three footer_shap" data-bg-color="#12141D">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-sm-6">
            <div className="f_widget f_about_widget wow fadeInUp" data-wow-delay="0.2s">
              <Link to="/" className="f_logo"><span className="text-white fw-semibold">Chatriox</span></Link>
              <p>Scale outreach with enterprise-grade reliability. Bulk Email, Bulk WhatsApp, Email Validation, Lead Scraper, Template Builder, and AI Analyzer.</p>
              <ul className="list-unstyled f_social_icon">
                <li><a href="#"><i className="ti-facebook"></i></a></li>
                <li><a href="#"><i className="ti-twitter-alt"></i></a></li>
                <li><a href="#"><i className="ti-vimeo-alt"></i></a></li>
                <li><a href="#"><i className="ti-linkedin"></i></a></li>
              </ul>
            </div>
          </div>
          <div className="col-lg-2 col-sm-6">
            <div className="f_widget f_link_widget wow fadeInUp" data-wow-delay="0.3s">
              <h3 className="f_title">COMPANY</h3>
              <ul className="list-unstyled link_widget">
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/services">Service</Link></li>
                <li><Link to="/pricing">Pricing</Link></li>
                <li><Link to="/case-studies">Case Studies</Link></li>
                <li><Link to="/resources">Resources</Link></li>
                <li><Link to="/careers">Careers</Link></li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <div className="f_widget f_link_widget wow fadeInUp" data-wow-delay="0.4s">
              <h3 className="f_title">HELP</h3>
              <ul className="list-unstyled link_widget">
                <li><Link to="/support">Help Center</Link></li>
                <li><Link to="/terms">Terms & Conditions</Link></li>
                <li><Link to="/privacy">Privacy Policy</Link></li>
                <li><Link to="/integrations">Integrations</Link></li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <div className="f_widget f_newsletter_widget wow fadeInUp" data-wow-delay="0.5s">
              <h3 className="f_title">SUBSCRIBE TO NEWSLETTER</h3>
              <form action="#" className="newsletter_form newsletter_form_two">
                <input className="form-control" type="email" placeholder="Enter your email" required />
                <button type="submit" className="theme_btn">Subscribe</button>
              </form>
            </div>
          </div>
        </div>
        <div className="footer_bottom text-center">
          <div className="row"><div className="col-lg-12"><p className="mb-0 wow fadeInUp" data-wow-delay="0.3s">© {new Date().getFullYear()} Chatriox</p></div></div>
        </div>
      </div>
    </footer>
  )
}
