import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import SEO from '../utils/SEO'
import TrustSection from '../components/TrustSection'
import TestimonialSlider from '../components/TestimonialSlider'
import FeatureGrid from '../components/FeatureGrid'
import CaseStudyPreview from '../components/CaseStudyPreview'
import BlogPreview from '../components/BlogPreview'
import FAQAccordion from '../components/FAQAccordion'
import Globe from '../components/Globe'

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
      <SEO title="Chatriox — Manage clients & teams in your digital Business" description="Scale outreach with Chatriox: Bulk Email, Bulk WhatsApp, Email Validation, Lead Scraper, Template Builder, AI Analyzer." image="/assets/img/home-one/dash.png" schema={{
        '@context':'https://schema.org', '@type':'Organization', name:'Chatriox', url:typeof window!=='undefined'?window.location.origin:'',
        sameAs:[], logo:'/assets/img/home-one/1.png',
        contactPoint:[{ '@type':'ContactPoint', contactType:'sales', email:'sales@chatriox.example' }]
      }} />
      <section className="saas_banner_area" data-bg-color="#F7F8FA">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5">
              <div className="saas_banner_content">
                <h1 className="wow fadeInLeft">Manage clients &amp; teams in your digital Business</h1>
                <p className="wow fadeInLeft">Chatriox unifies Bulk Email, Bulk WhatsApp, Email Validation, Lead Scraper, Template Builder, and AI Analyzer into one enterprise-ready platform.</p>
                <Link to="/signup" className="saas_btn wow fadeInUp" data-wow-delay="0.2s">
                  <div className="btn_text"><span>Get Started for Free</span><span>Get Started for Free</span></div>
                </Link>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="saas_banner_img wow fadeInRight d-flex align-items-center justify-content-center gap-3" data-wow-delay="0.2s">
                <img src="assets/img/home-one/dash.png" alt="Chatriox dashboard" />
                <div className="d-none d-md-block">
                  <div className="service_item p-2" style={{background:'rgba(255,255,255,.6)'}}>
                    <strong className="d-block text-center mb-2">Global Signals</strong>
                    {/* 3D decorative globe */}
                    <div>
                      <Globe size={180} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="saas_client_logo_area">
          <h2 className="client_title text-center title-animation">Trusted by agencies managing <span>100+</span> client projects daily</h2>
          <div className="min_client_area">
            <a href="#" className="item wow fadeInLeft" data-wow-delay="0.3s"><img src="assets/img/home-one/1.png" alt="" /></a>
            <a href="#" className="item wow fadeInLeft" data-wow-delay="0.5s"><img src="assets/img/home-one/2.png" alt="" /></a>
            <a href="#" className="item wow fadeInLeft" data-wow-delay="0.7s"><img src="assets/img/home-one/3.png" alt="" /></a>
            <a href="#" className="item wow fadeInLeft" data-wow-delay="0.9s"><img src="assets/img/home-one/4.png" alt="" /></a>
            <a href="#" className="item wow fadeInLeft" data-wow-delay="1.1s"><img src="assets/img/home-one/5.png" alt="" /></a>
            <a href="#" className="item wow fadeInLeft" data-wow-delay="1.3s"><img src="assets/img/home-one/6.png" alt="" /></a>
            <a href="#" className="item wow fadeInLeft" data-wow-delay="1.5s"><img src="assets/img/home-one/7.png" alt="" /></a>
          </div>
        </div>
      </section>

      <FeatureGrid />

      <TrustSection />

      <CaseStudyPreview />

      <BlogPreview />

      <section className="service_tab_area">
        <div className="container">
          <div className="section_title text-center">
            <h2 className="title-animation">Built For Service Businesses From All Types And Shapes</h2>
            <p className="wow fadeInUp" data-wow-delay="0.4s">From agencies to growth teams—Chatriox adapts to your workflows.</p>
          </div>
          <div className="service_tab_inner wow fadeInUp" data-wow-delay="0.5s">
            <ul className="nav nav-tabs justify-content-center">
              <li className="nav-item"><a className="nav-link service_tab_button active" data-bs-toggle="tab" href="#tab-agency">Digital Marketing</a></li>
              <li className="nav-item"><a className="nav-link service_tab_button" data-bs-toggle="tab" href="#tab-content">Content</a></li>
              <li className="nav-item"><a className="nav-link service_tab_button" data-bs-toggle="tab" href="#tab-dev">Development</a></li>
              <li className="nav-item"><a className="nav-link service_tab_button" data-bs-toggle="tab" href="#tab-design">Design</a></li>
            </ul>
            <div className="tab-content service_tab_content accordion accordion-flush">
              <div id="tab-agency" className="tab-pane fade show active">
                <div className="row align-items-center"><div className="col-lg-6"><img className="tab_img" src="assets/img/home-one/tab_img.jpg" alt="" /></div><div className="col-lg-6"><div className="tab_item_content"><h3>Campaign Ops</h3><p>Plan, launch, and measure multi-channel sequences.</p><div className="service_tab_item"><h4>Onboarding</h4><p>Move fast with role-based access and preflight checks.</p></div><div className="service_tab_item"><h4>QA & Approvals</h4><p>Templates and targeting with built-in reviews.</p></div></div></div></div>
              </div>
              <div id="tab-content" className="tab-pane fade">
                <div className="row align-items-center"><div className="col-lg-6 text-end"><img className="tab_img" src="assets/img/home-one/tab_img.jpg" alt="" /></div><div className="col-lg-6"><div className="tab_item_content"><h3>Editorial</h3><p>Manage topics, variants, and experiments.</p><div className="service_tab_item"><h4>Localization</h4><p>Translate and adapt with variable-safe templates.</p></div><div className="service_tab_item"><h4>Insights</h4><p>Recommendations powered by AI Analyzer.</p></div></div></div></div>
              </div>
              <div id="tab-dev" className="tab-pane fade">
                <div className="row align-items-center"><div className="col-lg-6 text-end"><img className="tab_img" src="assets/img/home-one/tab_img.jpg" alt="" /></div><div className="col-lg-6"><div className="tab_item_content"><h3>Integrations</h3><p>Connect APIs, CRMs, and webhooks.</p><div className="service_tab_item"><h4>Testing</h4><p>Sandbox keys and safe rollout controls.</p></div><div className="service_tab_item"><h4>Monitoring</h4><p>Health dashboards and alerting.</p></div></div></div></div>
              </div>
              <div id="tab-design" className="tab-pane fade">
                <div className="row align-items-center"><div className="col-lg-6"><img className="tab_img" src="assets/img/home-one/tab_img.jpg" alt="" /></div><div className="col-lg-6"><div className="tab_item_content"><h3>Creative</h3><p>Design blocks once, reuse everywhere.</p><div className="service_tab_item"><h4>Components</h4><p>Modular sections for faster iterations.</p></div><div className="service_tab_item"><h4>Brand</h4><p>Guardrails ensure consistency and safety.</p></div></div></div></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <TestimonialSlider />

      <section className="saas_faq_area sec_padding">
        <div className="container">
          <div className="section_title text-center">
            <h2 className="title-animation">Frequently Asked Questions</h2>
            <p className="wow fadeInUp" data-wow-delay="0.4s">Find answers about plans, sending limits, validation, and support.</p>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <FAQAccordion faqs={homepageFAQs} id="homepage-faq" />
            </div>
          </div>
          <div className="promo_content promo_content_bg text-center">
            <img className="shap_one" src="assets/img/home-one/shapes.png" alt="" />
            <img className="shap_two" src="assets/img/home-one/zigzag.png" alt="" />
            <h2 className="title-animation">Take The Next Step Toward Predictable Growth</h2>
            <p className="wow fadeInUp" data-wow-delay="0.5s">Start your free trial. Launch your first campaign in minutes.</p>
            <Link to="/contact" className="saas_btn wow fadeInUp" data-wow-delay="0.6s"><div className="btn_text"><span>Get a Free Consultation</span><span>Get a Free Consultation</span></div></Link>
          </div>
        </div>
      </section>
    </>
  )
}
