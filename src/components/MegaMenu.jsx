import React, { useState, useRef, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { FiHexagon, FiChevronDown } from 'react-icons/fi'

const menuData = {
  Products: {
    title: 'Products',
    sections: [
      {
        title: 'Core Services',
        items: [
          { name: 'Bulk Email Sending', href: '/services/bulk-email', desc: 'High-deliverability email campaigns' },
          { name: 'Bulk WhatsApp', href: '/services/bulk-whatsapp', desc: 'Personalized WhatsApp sequences' },
          { name: 'Email Validation', href: '/services/email-validation', desc: 'Real-time email verification' },
          { name: 'Lead Scraper', href: '/services/lead-scraper', desc: 'Capture and enrich leads' },
          { name: 'Template Builder', href: '/services/template-builder', desc: 'AI-powered template creation' },
          { name: 'AI Analyzer', href: '/services/ai-analyzer', desc: 'Campaign insights and optimization' }
        ]
      }
    ]
  },
  Solutions: {
    title: 'Solutions',
    sections: [
      {
        title: 'By Industry',
        items: [
          { name: 'Digital Agencies', href: '/solutions/agencies', desc: 'Multi-client campaign management' },
          { name: 'SaaS Companies', href: '/solutions/saas', desc: 'Lifecycle and growth campaigns' },
          { name: 'E-commerce', href: '/solutions/ecommerce', desc: 'Promotional and retention flows' },
          { name: 'B2B Services', href: '/solutions/b2b', desc: 'Lead generation and nurturing' }
        ]
      },
      {
        title: 'By Use Case',
        items: [
          { name: 'Lead Generation', href: '/solutions/lead-gen', desc: 'Outbound prospecting' },
          { name: 'Customer Retention', href: '/solutions/retention', desc: 'Lifecycle campaigns' },
          { name: 'Event Marketing', href: '/solutions/events', desc: 'Registration and follow-up' }
        ]
      }
    ]
  },
  Resources: {
    title: 'Resources',
    sections: [
      {
        title: 'Learn',
        items: [
          { name: 'Blog', href: '/blog', desc: 'Latest insights and best practices' },
          { name: 'Guides', href: '/resources', desc: 'Step-by-step tutorials' },
          { name: 'Case Studies', href: '/case-studies', desc: 'Real customer success stories' },
          { name: 'Documentation', href: '/docs', desc: 'API and integration guides' }
        ]
      },
      {
        title: 'Support',
        items: [
          { name: 'Help Center', href: '/support', desc: 'Find answers quickly' },
          { name: 'Integrations', href: '/integrations', desc: 'Connect your tools' },
          { name: 'Status Page', href: '/status', desc: 'System status and uptime' }
        ]
      }
    ]
  },
  Company: {
    title: 'Company',
    sections: [
      {
        title: 'About',
        items: [
          { name: 'About Us', href: '/about', desc: 'Our mission and story' },
          { name: 'Careers', href: '/careers', desc: 'Join our team' },
          { name: 'Contact', href: '/contact', desc: 'Get in touch' }
        ]
      },
      {
        title: 'Legal',
        items: [
          { name: 'Privacy Policy', href: '/privacy', desc: 'How we protect your data' },
          { name: 'Terms of Service', href: '/terms', desc: 'Usage terms and conditions' },
          { name: 'Security', href: '/security', desc: 'Enterprise security practices' }
        ]
      }
    ]
  }
}

export default function MegaMenu() {
  const [activeMenu, setActiveMenu] = useState(null)
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const timeoutRef = useRef(null)

  const handleMouseEnter = (menu) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
    setActiveMenu(menu)
  }

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveMenu(null)
    }, 150)
  }

  const handleKeyDown = (e, menu) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      setActiveMenu(activeMenu === menu ? null : menu)
    }
  }

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [])

  return (
    <nav className="navbar navbar-expand-lg sticky_nav navbar_fixed bg-white shadow-sm" style={{ position: 'sticky', top: 0, zIndex: 1050 }}>
      <div className="container">
        <Link className="navbar-brand d-flex align-items-center gap-2" to="/">
          <FiHexagon className="text-primary" size={28} />
          <span className="fw-bold brand-wordmark text-dark">Chatriox</span>
        </Link>

        {/* Desktop Menu */}
        <div className="d-none d-lg-flex align-items-center justify-content-center flex-grow-1">
          <ul className="navbar-nav d-flex align-items-center gap-4">
            {Object.entries(menuData).map(([key, menu]) => (
              <li 
                key={key}
                className="nav-item dropdown position-static"
                onMouseEnter={() => handleMouseEnter(key)}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  className="nav-link dropdown-toggle btn btn-link text-dark fw-semibold p-0 border-0 bg-transparent d-flex align-items-center gap-1"
                  onKeyDown={(e) => handleKeyDown(e, key)}
                  aria-expanded={activeMenu === key}
                  aria-haspopup="true"
                >
                  {menu.title}
                  <FiChevronDown 
                    className={`transition-transform duration-200 ${activeMenu === key ? 'rotate-180' : ''}`}
                    size={16}
                  />
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Desktop Auth Buttons */}
        <div className="d-none d-lg-flex align-items-center gap-3">
          <NavLink to="/login" className="btn btn-outline-primary">Login</NavLink>
          <NavLink to="/signup" className="btn btn-primary">Start Free Trial</NavLink>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="navbar-toggler d-lg-none border-0"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Mega Menu Dropdown */}
        <AnimatePresence>
          {activeMenu && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="position-absolute w-100 bg-white shadow-lg border-top"
              style={{ 
                top: '100%', 
                left: 0, 
                zIndex: 1040,
                minHeight: '300px'
              }}
              onMouseEnter={() => handleMouseEnter(activeMenu)}
              onMouseLeave={handleMouseLeave}
            >
              <div className="container py-5">
                <div className="row">
                  {menuData[activeMenu].sections.map((section, idx) => (
                    <div key={idx} className="col-md-6 col-lg-3">
                      <h6 className="text-primary fw-bold mb-3">{section.title}</h6>
                      <ul className="list-unstyled">
                        {section.items.map((item, itemIdx) => (
                          <li key={itemIdx} className="mb-2">
                            <Link 
                              to={item.href}
                              className="text-decoration-none d-block p-2 rounded hover-bg-light transition-colors"
                              onClick={() => setActiveMenu(null)}
                            >
                              <div className="fw-semibold text-dark">{item.name}</div>
                              <small className="text-muted">{item.desc}</small>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="d-lg-none position-absolute w-100 bg-white shadow-lg"
              style={{ top: '100%', left: 0, zIndex: 1040 }}
            >
              <div className="container py-4">
                {Object.entries(menuData).map(([key, menu]) => (
                  <div key={key} className="mb-4">
                    <h6 className="text-primary fw-bold mb-2">{menu.title}</h6>
                    {menu.sections.map((section, idx) => (
                      <div key={idx} className="mb-3">
                        <div className="fw-semibold text-dark mb-2">{section.title}</div>
                        <ul className="list-unstyled ps-3">
                          {section.items.map((item, itemIdx) => (
                            <li key={itemIdx} className="mb-1">
                              <Link 
                                to={item.href}
                                className="text-decoration-none text-dark"
                                onClick={() => setIsMobileOpen(false)}
                              >
                                {item.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                ))}
                <div className="d-flex flex-column gap-2 mt-4">
                  <NavLink to="/login" className="btn btn-outline-primary" onClick={() => setIsMobileOpen(false)}>
                    Login
                  </NavLink>
                  <NavLink to="/signup" className="btn btn-primary" onClick={() => setIsMobileOpen(false)}>
                    Start Free Trial
                  </NavLink>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  )
}