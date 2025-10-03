import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import SEO from '../utils/SEO'
import TrustSection from '../components/TrustSection'
import TestimonialSlider from '../components/TestimonialSlider'
import FeatureGrid from '../components/FeatureGrid'
import CaseStudyPreview from '../components/CaseStudyPreview'
import BlogPreview from '../components/BlogPreview'
import FAQAccordion from '../components/FAQAccordion'
import Globe from '../components/Globe'
import AnimatedCounter from '../components/AnimatedCounter'
import {
  FiMail,
  FiMessageSquare,
  FiCheckCircle,
  FiUsers,
  FiEdit3,
  FiCpu,
  FiTrendingUp,
  FiShield,
  FiGlobe,
  FiZap,
  FiTarget,
  FiAward,
  FiCode
} from 'react-icons/fi'

const homepageFAQs = [
  {
    question: 'How does Chatriox improve email deliverability?',
    answer: 'We use smart throttling, warm-up guidance, suppression lists, and real-time validation to maximize inbox placement and protect your sender reputation.'
  },
  {
    question: 'Can I run WhatsApp and Email campaigns together?',
    answer: 'Yes. Our unified platform lets you manage cross-channel sequences with shared suppression lists and a combined inbox for replies.'
  },
  {
    question: 'What integrations does Chatriox support?',
    answer: 'Connect SMTP providers, CRMs, APIs, webhooks, and more. Enterprise plans include SSO and DPA options.'
  },
  {
    question: 'How customizable are the templates?',
    answer: 'Fully customizable with variables, approvals, localization, and AI suggestions. Create once, reuse everywhere.'
  },
  {
    question: 'Do you offer analytics exports?',
    answer: 'Yes. CSV/JSON exports are available on paid plans, with custom dashboards and advanced analytics on Enterprise.'
  }
]

const features = [
  {
    icon: FiMail,
    title: 'Bulk Email Sending',
    description: 'Enterprise-grade email campaigns with 98.5% average deliverability',
    href: '/services/bulk-email',
    stats: '120M+ emails sent',
    color: 'blue'
  },
  {
    icon: FiMessageSquare,
    title: 'Bulk WhatsApp',
    description: 'Compliant WhatsApp campaigns with rich media and automation',
    href: '/services/bulk-whatsapp',
    stats: '3x higher engagement',
    color: 'green'
  },
  {
    icon: FiCheckCircle,
    title: 'Email Validation',
    description: 'Real-time verification with 99.2% accuracy and spam protection',
    href: '/services/email-validation',
    stats: '99.2% accuracy rate',
    color: 'purple'
  },
  {
    icon: FiUsers,
    title: 'Lead Scraper',
    description: 'Intelligent lead capture with enrichment and deduplication',
    href: '/services/lead-scraper',
    stats: '40% more qualified leads',
    color: 'orange'
  },
  {
    icon: FiEdit3,
    title: 'Template Builder',
    description: 'AI-powered templates with variables and approval workflows',
    href: '/services/template-builder',
    stats: '80% faster creation',
    color: 'pink'
  },
  {
    icon: FiCpu,
    title: 'AI Analyzer',
    description: 'Campaign optimization with predictive insights and recommendations',
    href: '/services/ai-analyzer',
    stats: '2x better performance',
    color: 'indigo'
  }
]

const trustMetrics = [
  { label: 'Emails Delivered', value: 120000000, suffix: '+', icon: FiMail },
  { label: 'Average Deliverability', value: 98.5, suffix: '%', icon: FiTarget },
  { label: 'Client Growth YoY', value: 240, suffix: '%', icon: FiTrendingUp },
  { label: 'Enterprise Clients', value: 500, suffix: '+', icon: FiAward }
]

export default function Home() {
  useEffect(() => {
    const $ = window.jQuery || window.$
    if ($ && $('.testimonial_slider_two').length && typeof $('.testimonial_slider_two').slick === 'function') {
      $('.testimonial_slider_two').not('.slick-initialized').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 4000,
        responsive: [
          { breakpoint: 992, settings: { slidesToShow: 1 } }
        ]
      })
    }
  }, [])

  return (
    <>
      <SEO 
        title="Chatriox — Enterprise Outreach Automation Platform" 
        description="Scale outreach with Chatriox: Bulk Email, Bulk WhatsApp, Email Validation, Lead Scraper, Template Builder, AI Analyzer. Trusted by 500+ companies worldwide." 
        image="/assets/img/home-one/dash.png" 
        schema={{
          '@context':'https://schema.org', 
          '@type':'Organization', 
          name:'Chatriox', 
          url:typeof window!=='undefined'?window.location.origin:'',
          sameAs:[], 
          logo:'/assets/img/home-one/1.png',
          contactPoint:[{ '@type':'ContactPoint', contactType:'sales', email:'sales@chatriox.example' }]
        }} 
      />

      {/* Hero Section - White Background */}
      <section className="bg-white py-5" style={{ paddingTop: '120px', paddingBottom: '120px' }}>
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
              >
                <div className="mb-4">
                  <span className="badge bg-primary bg-opacity-10 text-primary px-3 py-2 rounded-pill fw-semibold">
                    <FiZap className="me-2" size={14} />
                    Trusted by 500+ Enterprise Teams
                  </span>
                </div>
                <h1 className="display-4 fw-bold text-dark mb-4" style={{ lineHeight: '1.2' }}>
                  Scale Your Outreach with 
                  <span className="text-primary d-block">Enterprise Reliability</span>
                </h1>
                <p className="fs-5 text-muted mb-5" style={{ lineHeight: '1.6' }}>
                  Chatriox unifies Bulk Email, WhatsApp, Validation, Lead Scraping, Templates, and AI Analytics 
                  into one powerful platform trusted by growth teams worldwide.
                </p>
                <div className="d-flex flex-column flex-sm-row gap-3 mb-5">
                  <Link to="/signup" className="btn btn-primary btn-lg px-5 py-3 fw-semibold shadow-sm">
                    Start Free Trial
                  </Link>
                  <Link to="/contact" className="btn btn-outline-primary btn-lg px-5 py-3 fw-semibold">
                    Book a Demo
                  </Link>
                </div>
                <div className="d-flex align-items-center gap-4 text-muted">
                  <div className="d-flex align-items-center gap-2">
                    <FiCheckCircle className="text-success" size={16} />
                    <small>14-day free trial</small>
                  </div>
                  <div className="d-flex align-items-center gap-2">
                    <FiCheckCircle className="text-success" size={16} />
                    <small>No credit card required</small>
                  </div>
                  <div className="d-flex align-items-center gap-2">
                    <FiCheckCircle className="text-success" size={16} />
                    <small>Cancel anytime</small>
                  </div>
                </div>
              </motion.div>
            </div>
            <div className="col-lg-6">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
                className="position-relative"
              >
                <div className="text-center">
                  <img 
                    src="assets/img/home-one/dash.png" 
                    alt="Chatriox Dashboard" 
                    className="img-fluid rounded-4 shadow-lg"
                    style={{ maxWidth: '100%' }}
                  />
                  {/* Floating Elements */}
                  <motion.div
                    className="position-absolute bg-white rounded-4 shadow-lg p-3"
                    style={{ top: '10%', right: '-10%', zIndex: 10 }}
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                  >
                    <div className="d-flex align-items-center gap-2">
                      <div className="bg-success rounded-circle" style={{ width: '8px', height: '8px' }}></div>
                      <small className="fw-semibold text-dark">98.5% Delivered</small>
                    </div>
                  </motion.div>
                  <motion.div
                    className="position-absolute bg-white rounded-4 shadow-lg p-3"
                    style={{ bottom: '20%', left: '-10%', zIndex: 10 }}
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                  >
                    <div className="d-flex align-items-center gap-2">
                      <FiTrendingUp className="text-primary" size={16} />
                      <small className="fw-semibold text-dark">+240% ROI</small>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Logos - Light Gray Background */}
      <section className="py-5" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <p className="text-muted mb-4 fw-semibold">Trusted by leading companies worldwide</p>
            <div className="d-flex justify-content-center align-items-center gap-5 flex-wrap">
              {[1, 2, 3, 4, 5, 6, 7].map((num) => (
                <motion.img
                  key={num}
                  src={`/assets/img/home-one/${num}.png`}
                  alt={`Partner ${num}`}
                  className="img-fluid opacity-75"
                  style={{ maxHeight: '40px', filter: 'grayscale(100%)' }}
                  whileHover={{ filter: 'grayscale(0%)', opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section - White Background */}
      <section className="bg-white py-5" style={{ paddingTop: '120px', paddingBottom: '120px' }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-5"
          >
            <h2 className="display-5 fw-bold text-dark mb-4">Complete Outreach Platform</h2>
            <p className="fs-5 text-muted mb-0 mx-auto" style={{ maxWidth: '600px' }}>
              Everything you need to scale outreach campaigns with enterprise-grade reliability and intelligence
            </p>
          </motion.div>

          <div className="row g-4">
            {features.map((feature, index) => {
              const IconComponent = feature.icon
              const colorClasses = {
                blue: 'border-primary bg-primary bg-opacity-5',
                green: 'border-success bg-success bg-opacity-5',
                purple: 'border-info bg-info bg-opacity-5',
                orange: 'border-warning bg-warning bg-opacity-5',
                pink: 'border-danger bg-danger bg-opacity-5',
                indigo: 'border-dark bg-dark bg-opacity-5'
              }
              
              return (
                <div key={index} className="col-md-6 col-lg-4">
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ y: -8, scale: 1.02 }}
                    className={`bg-white rounded-4 p-4 h-100 border-2 ${colorClasses[feature.color]} position-relative overflow-hidden`}
                    style={{ minHeight: '280px' }}
                  >
                    <div className="d-flex align-items-center gap-3 mb-3">
                      <div className={`rounded-3 p-3 bg-${feature.color === 'blue' ? 'primary' : feature.color === 'green' ? 'success' : feature.color === 'purple' ? 'info' : feature.color === 'orange' ? 'warning' : feature.color === 'pink' ? 'danger' : 'dark'} bg-opacity-10`}>
                        <IconComponent className={`text-${feature.color === 'blue' ? 'primary' : feature.color === 'green' ? 'success' : feature.color === 'purple' ? 'info' : feature.color === 'orange' ? 'warning' : feature.color === 'pink' ? 'danger' : 'dark'}`} size={28} />
                      </div>
                      <div>
                        <h4 className="fw-bold text-dark mb-1">{feature.title}</h4>
                        <small className="text-success fw-semibold">{feature.stats}</small>
                      </div>
                    </div>
                    
                    <p className="text-muted mb-4">{feature.description}</p>
                    
                    <div className="mt-auto">
                      <Link 
                        to={feature.href}
                        className={`btn btn-${feature.color === 'blue' ? 'primary' : feature.color === 'green' ? 'success' : feature.color === 'purple' ? 'info' : feature.color === 'orange' ? 'warning' : feature.color === 'pink' ? 'danger' : 'dark'} btn-sm fw-semibold`}
                      >
                        Learn More
                      </Link>
                    </div>

                    {/* Decorative Element */}
                    <div 
                      className={`position-absolute opacity-10 bg-${feature.color === 'blue' ? 'primary' : feature.color === 'green' ? 'success' : feature.color === 'purple' ? 'info' : feature.color === 'orange' ? 'warning' : feature.color === 'pink' ? 'danger' : 'dark'}`}
                      style={{
                        top: '-30px',
                        right: '-30px',
                        width: '100px',
                        height: '100px',
                        borderRadius: '50%',
                        zIndex: -1
                      }}
                    />
                  </motion.div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Chatriox - Dark Blue Background */}
      <section className="py-5" style={{ backgroundColor: '#0f172a', paddingTop: '120px', paddingBottom: '120px' }}>
        <div className="container">
          <div className="row align-items-center g-5">
            {/* Left: Trust Copy */}
            <div className="col-lg-4">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="mb-4">
                  <span className="badge bg-primary bg-opacity-20 text-primary px-3 py-2 rounded-pill fw-semibold">
                    <FiShield className="me-2" size={14} />
                    Enterprise Grade
                  </span>
                </div>
                <h2 className="display-5 fw-bold text-white mb-4">
                  Why Global Teams Choose Chatriox
                </h2>
                <p className="text-white text-opacity-75 mb-4 fs-5">
                  Join 500+ companies that trust our platform for mission-critical outreach campaigns.
                </p>
                <div className="d-flex flex-column gap-3">
                  {[
                    'Enterprise security & compliance',
                    'Dedicated customer success manager',
                    '99.9% uptime SLA guarantee'
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      className="d-flex align-items-center gap-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    >
                      <div className="bg-primary rounded-circle d-flex align-items-center justify-content-center" style={{ width: '24px', height: '24px' }}>
                        <FiCheckCircle className="text-white" size={14} />
                      </div>
                      <span className="text-white fw-semibold">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Center: KPI Cards */}
            <div className="col-lg-4">
              <div className="row g-3">
                {trustMetrics.map((metric, index) => {
                  const IconComponent = metric.icon
                  return (
                    <div key={index} className="col-6">
                      <motion.div
                        className="bg-white rounded-4 p-4 text-center h-100 shadow-sm"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        whileHover={{ y: -5, scale: 1.05 }}
                      >
                        <div className="bg-primary bg-opacity-10 rounded-3 p-2 d-inline-flex mb-3">
                          <IconComponent className="text-primary" size={24} />
                        </div>
                        <h3 className="fw-bold text-primary mb-2">
                          <AnimatedCounter
                            from={0}
                            to={metric.value}
                            duration={2.5}
                            suffix={metric.suffix}
                          />
                        </h3>
                        <p className="small text-muted mb-0 fw-semibold">{metric.label}</p>
                      </motion.div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Right: Interactive Elements */}
            <div className="col-lg-4">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-center"
              >
                <div className="bg-white rounded-4 p-4 shadow-lg mb-4">
                  <h5 className="fw-bold text-dark mb-3">Global Reach</h5>
                  <Globe size={200} color={0x2563eb} />
                  <p className="small text-muted mt-3 mb-0">
                    Delivering campaigns across 50+ countries
                  </p>
                </div>
                <div className="bg-primary bg-opacity-10 rounded-4 p-4">
                  <div className="d-flex justify-content-between align-items-center text-white">
                    <div>
                      <div className="fw-bold fs-4">
                        <AnimatedCounter from={0} to={99.9} duration={2} suffix="%" />
                      </div>
                      <small className="text-white text-opacity-75">Uptime SLA</small>
                    </div>
                    <FiShield className="text-primary" size={32} />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Preview - Light Background */}
      <section className="py-5" style={{ backgroundColor: '#f1f5f9', paddingTop: '120px', paddingBottom: '120px' }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-5"
          >
            <h2 className="display-5 fw-bold text-dark mb-4">Success Stories</h2>
            <p className="fs-5 text-muted mb-0">Real results from companies scaling with Chatriox</p>
          </motion.div>
          <CaseStudyPreview />
        </div>
      </section>

      {/* Testimonials - White Background */}
      <section className="bg-white py-5" style={{ paddingTop: '120px', paddingBottom: '120px' }}>
        <div className="container">
          <TestimonialSlider />
        </div>
      </section>

      {/* Blog Preview - Soft Blue Background */}
      <section className="py-5" style={{ backgroundColor: '#eff6ff', paddingTop: '120px', paddingBottom: '120px' }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-5"
          >
            <h2 className="display-5 fw-bold text-dark mb-4">Latest Insights</h2>
            <p className="fs-5 text-muted mb-0">Best practices and industry insights for modern outreach teams</p>
          </motion.div>
          <BlogPreview />
        </div>
      </section>

      {/* Service Tabs - White Background */}
      <section className="bg-white py-5" style={{ paddingTop: '120px', paddingBottom: '120px' }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-5"
          >
            <h2 className="display-5 fw-bold text-dark mb-4">Built for Every Team</h2>
            <p className="fs-5 text-muted mb-0">From agencies to enterprise growth teams—Chatriox adapts to your workflows</p>
          </motion.div>

          <div className="service_tab_inner">
            <ul className="nav nav-pills justify-content-center mb-5 gap-2">
              <li className="nav-item">
                <a className="nav-link service_tab_button active px-4 py-3 fw-semibold" data-bs-toggle="tab" href="#tab-agency">
                  <FiTrendingUp className="me-2" size={18} />
                  Digital Marketing
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link service_tab_button px-4 py-3 fw-semibold" data-bs-toggle="tab" href="#tab-content">
                  <FiEdit3 className="me-2" size={18} />
                  Content Teams
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link service_tab_button px-4 py-3 fw-semibold" data-bs-toggle="tab" href="#tab-dev">
                  <FiCode className="me-2" size={18} />
                  Development
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link service_tab_button px-4 py-3 fw-semibold" data-bs-toggle="tab" href="#tab-design">
                  <FiEdit3 className="me-2" size={18} />
                  Design
                </a>
              </li>
            </ul>

            <div className="tab-content">
              <div id="tab-agency" className="tab-pane fade show active">
                <div className="row align-items-center g-5">
                  <div className="col-lg-6">
                    <img className="img-fluid rounded-4 shadow-lg" src="assets/img/home-one/tab_img.jpg" alt="Campaign Operations" />
                  </div>
                  <div className="col-lg-6">
                    <h3 className="fw-bold text-dark mb-4">Campaign Operations Made Simple</h3>
                    <p className="text-muted mb-4">Plan, launch, and measure multi-channel sequences with enterprise controls and real-time insights.</p>
                    <div className="row g-3">
                      <div className="col-sm-6">
                        <div className="bg-light rounded-3 p-3">
                          <h5 className="fw-semibold text-dark mb-2">Quick Onboarding</h5>
                          <p className="text-muted mb-0 small">Role-based access and preflight checks</p>
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="bg-light rounded-3 p-3">
                          <h5 className="fw-semibold text-dark mb-2">QA & Approvals</h5>
                          <p className="text-muted mb-0 small">Built-in review workflows</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="tab-content" className="tab-pane fade">
                <div className="row align-items-center g-5">
                  <div className="col-lg-6">
                    <h3 className="fw-bold text-dark mb-4">Content & Editorial Workflows</h3>
                    <p className="text-muted mb-4">Manage topics, variants, and experiments with AI-powered suggestions and localization support.</p>
                    <div className="row g-3">
                      <div className="col-sm-6">
                        <div className="bg-light rounded-3 p-3">
                          <h5 className="fw-semibold text-dark mb-2">Localization</h5>
                          <p className="text-muted mb-0 small">Multi-language template management</p>
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="bg-light rounded-3 p-3">
                          <h5 className="fw-semibold text-dark mb-2">AI Insights</h5>
                          <p className="text-muted mb-0 small">Performance recommendations</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <img className="img-fluid rounded-4 shadow-lg" src="assets/img/home-one/features_img_two.png" alt="Content Management" />
                  </div>
                </div>
              </div>
              <div id="tab-dev" className="tab-pane fade">
                <div className="row align-items-center g-5">
                  <div className="col-lg-6">
                    <img className="img-fluid rounded-4 shadow-lg" src="assets/img/home-one/analytic_img.png" alt="Developer Tools" />
                  </div>
                  <div className="col-lg-6">
                    <h3 className="fw-bold text-dark mb-4">Developer-Friendly Integration</h3>
                    <p className="text-muted mb-4">Connect APIs, CRMs, and webhooks with comprehensive documentation and SDKs.</p>
                    <div className="row g-3">
                      <div className="col-sm-6">
                        <div className="bg-light rounded-3 p-3">
                          <h5 className="fw-semibold text-dark mb-2">API Testing</h5>
                          <p className="text-muted mb-0 small">Sandbox environment and safe rollouts</p>
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="bg-light rounded-3 p-3">
                          <h5 className="fw-semibold text-dark mb-2">Monitoring</h5>
                          <p className="text-muted mb-0 small">Real-time health dashboards</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="tab-design" className="tab-pane fade">
                <div className="row align-items-center g-5">
                  <div className="col-lg-6">
                    <h3 className="fw-bold text-dark mb-4">Creative Design Tools</h3>
                    <p className="text-muted mb-4">Design beautiful templates once and reuse everywhere with modular components and brand guidelines.</p>
                    <div className="row g-3">
                      <div className="col-sm-6">
                        <div className="bg-light rounded-3 p-3">
                          <h5 className="fw-semibold text-dark mb-2">Components</h5>
                          <p className="text-muted mb-0 small">Reusable design blocks</p>
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="bg-light rounded-3 p-3">
                          <h5 className="fw-semibold text-dark mb-2">Brand Safety</h5>
                          <p className="text-muted mb-0 small">Automated consistency checks</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <img className="img-fluid rounded-4 shadow-lg" src="assets/img/home-one/features_img_one.png" alt="Design Tools" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section - Soft Gray Background */}
      <section className="py-5" style={{ backgroundColor: '#f8fafc', paddingTop: '120px', paddingBottom: '120px' }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-5"
          >
            <h2 className="display-5 fw-bold text-dark mb-4">Frequently Asked Questions</h2>
            <p className="fs-5 text-muted mb-0">Find answers about plans, sending limits, validation, and support</p>
          </motion.div>
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <FAQAccordion faqs={homepageFAQs} id="homepage-faq" />
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA - Primary Blue Background */}
      <section className="py-5" style={{ backgroundColor: '#2563eb', paddingTop: '120px', paddingBottom: '120px' }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <h2 className="display-5 fw-bold text-white mb-4">
                  Ready to Transform Your Outreach?
                </h2>
                <p className="fs-5 text-white text-opacity-75 mb-5">
                  Join thousands of companies already scaling their growth with Chatriox. 
                  Start your free trial today—no credit card required.
                </p>
                <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center">
                  <Link to="/signup" className="btn btn-light btn-lg px-5 py-3 fw-semibold">
                    Start Free Trial
                  </Link>
                  <Link to="/contact" className="btn btn-outline-light btn-lg px-5 py-3 fw-semibold">
                    Schedule Demo
                  </Link>
                </div>
                <div className="mt-4">
                  <small className="text-white text-opacity-75">
                    ✓ 14-day free trial &nbsp;&nbsp; ✓ No setup fees &nbsp;&nbsp; ✓ Cancel anytime
                  </small>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}