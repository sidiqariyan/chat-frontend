import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import SEO from '../utils/SEO'
import StatsSection from '../components/StatsSection'
import Testimonials from '../components/Testimonials'

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
              <div className="saas_banner_img wow fadeInRight" data-wow-delay="0.2s">
                <img src="assets/img/home-one/dash.png" alt="" />
                <a href="https://www.youtube.com/watch?v=ok-plXXHlWw&pp=ygUEaHRtbA%3D%3D" className="video_popup popup-youtube"><i className="fa fa-play"></i></a>
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

      <section className="saas_features_area">
        <div className="container">
          <div className="section_title text-center">
            <h2 className="title-animation">Powerful Features That Set Us Apart and Ahead</h2>
            <p className="wow fadeInUp" data-wow-delay="0.4s">Operate at scale with dependable deliverability, precise targeting, and AI-enriched analytics—without changing your stack.</p>
          </div>
          <div className="row flex-row-reverse saas_features_item one">
            <div className="col-lg-6">
              <div className="saas_features_img" data-bg-color="#E6D8F5">
                <img src="assets/img/home-one/features_img_one.png" alt="" />
                <div className="img_small wow fadeInUp"><img data-parallax='{"y": 40}' src="assets/img/home-one/features_img_two.png" alt="" /></div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="saas_features_content wow fadeInLeft" data-wow-delay="0.2s">
                <h6>Bulk Email Sending</h6>
                <h2>Accelerate your outreach with reliable deliverability</h2>
                <p>Warm-up friendly sending, smart throttling, and templates to engage at scale without hurting domain reputation.</p>
                <ul className="list-unstyled saas_list">
                  <li><div className="icon"><img src="assets/img/home-one/check.png" alt="" /></div>Customizable templates and variables</li>
                  <li><div className="icon"><img src="assets/img/home-one/check.png" alt="" /></div>Automatic scheduling and throttling</li>
                  <li><div className="icon"><img src="assets/img/home-one/check.png" alt="" /></div>Team approvals and roles</li>
                </ul>
                <Link to="/pricing" className="saas_btn"><div className="btn_text"><span>Try Free Version</span><span>Try Free Version</span></div></Link>
              </div>
            </div>
          </div>

          <div className="row saas_features_item two">
            <div className="col-lg-6">
              <div className="saas_features_img" data-bg-color="#ADDEF0">
                <img src="assets/img/home-one/analytic_img.png" alt="" />
                <div className="img_small wow fadeInUp" data-wow-delay="0.2s"><img data-parallax='{"y": 40}' src="assets/img/home-one/analytic_small.png" alt="" /></div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="saas_features_content wow fadeInRight" data-wow-delay="0.1s">
                <h6>Bulk WhatsApp Sending</h6>
                <h2>Personalized WhatsApp sequences at scale</h2>
                <p>Rich messaging, media support, and reply tracking across campaigns—compliant and secure.</p>
                <ul className="list-unstyled saas_list">
                  <li><div className="icon"><img src="assets/img/home-one/check.png" alt="" /></div>Template approvals and localization</li>
                  <li><div className="icon"><img src="assets/img/home-one/check.png" alt="" /></div>Smart routing and deduplication</li>
                  <li><div className="icon"><img src="assets/img/home-one/check.png" alt="" /></div>Unified inbox and labels</li>
                </ul>
                <Link to="/pricing" className="saas_btn"><div className="btn_text"><span>Try Free Version</span><span>Try Free Version</span></div></Link>
              </div>
            </div>
          </div>

          <div className="row flex-row-reverse saas_features_item three">
            <div className="col-lg-6">
              <div className="saas_features_img" data-bg-color="#B3F7D5">
                <img src="assets/img/home-one/Chart.png" alt="" />
                <img className="img_small wow fadeInUp" data-wow-delay="0.3s" src="assets/img/home-one/12.png" alt="" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="saas_features_content wow fadeInLeft" data-wow-delay="0.2s">
                <h6>Email Validation</h6>
                <h2>Keep your lists clean with real‑time checks</h2>
                <p>Syntax, MX/DNS, disposable, and role detection—all built in.</p>
                <ul className="list-unstyled saas_list">
                  <li><div className="icon"><img src="assets/img/home-one/check.png" alt="" /></div>Hard/soft bounce prediction</li>
                  <li><div className="icon"><img src="assets/img/home-one/check.png" alt="" /></div>Suppression and dedupe</li>
                  <li><div className="icon"><img src="assets/img/home-one/check.png" alt="" /></div>Scoring and enrichment</li>
                </ul>
                <Link to="/services/email-validation" className="saas_btn"><div className="btn_text"><span>Learn More</span><span>Learn More</span></div></Link>
              </div>
            </div>
          </div>

          <div className="row saas_features_item four">
            <div className="col-lg-6">
              <div className="saas_features_img" data-bg-color="#E6D8F5">
                <img src="assets/img/home-one/features_img_two.png" alt="" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="saas_features_content wow fadeInRight" data-wow-delay="0.1s">
                <h6>AI Template Builder</h6>
                <h2>Create high‑performing templates in minutes</h2>
                <p>Variables, approvals, locales, and AI suggestions that learn from results.</p>
                <ul className="list-unstyled saas_list">
                  <li><div className="icon"><img src="assets/img/home-one/check.png" alt="" /></div>Multi-channel blocks (Email/WhatsApp)</li>
                  <li><div className="icon"><img src="assets/img/home-one/check.png" alt="" /></div>Versioning and experiments</li>
                  <li><div className="icon"><img src="assets/img/home-one/check.png" alt="" /></div>Brand-safe guardrails</li>
                </ul>
                <Link to="/services/template-builder" className="saas_btn"><div className="btn_text"><span>Learn More</span><span>Learn More</span></div></Link>
              </div>
            </div>
          </div>

          <div className="row flex-row-reverse saas_features_item five">
            <div className="col-lg-6">
              <div className="saas_features_img" data-bg-color="#ADDEF0">
                <img src="assets/img/home-one/analytic_img.png" alt="" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="saas_features_content wow fadeInLeft" data-wow-delay="0.2s">
                <h6>AI Campaign Analyzer</h6>
                <h2>Turn signals into clear next steps</h2>
                <p>Automated insights on copy, timing, targeting, and deliverability health.</p>
                <ul className="list-unstyled saas_list">
                  <li><div className="icon"><img src="assets/img/home-one/check.png" alt="" /></div>Smart alerts and anomaly detection</li>
                  <li><div className="icon"><img src="assets/img/home-one/check.png" alt="" /></div>Recommendation feed</li>
                  <li><div className="icon"><img src="assets/img/home-one/check.png" alt="" /></div>Attribution and cohorts</li>
                </ul>
                <Link to="/services/ai-analyzer" className="saas_btn"><div className="btn_text"><span>Learn More</span><span>Learn More</span></div></Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <StatsSection />

      <section className="sec_padding">
        <div className="container">
          <div className="section_title text-center"><h2 className="title-animation">Case Studies</h2></div>
          <div className="row">
            <div className="col-lg-4"><div className="portfolio_item"><div className="portfolio_img"><img src="assets/img/home-one/analytic_small.png" alt="" /></div><div className="p-3"><h4>+2x Reply Rate</h4><p>Warm-up and templates increased replies with fewer bounces.</p></div></div></div>
            <div className="col-lg-4"><div className="portfolio_item"><div className="portfolio_img"><img src="assets/img/home-one/12.png" alt="" /></div><div className="p-3"><h4>Cleaner Data</h4><p>Validation pipeline reduced invalid contacts and spam traps.</p></div></div></div>
            <div className="col-lg-4"><div className="portfolio_item"><div className="portfolio_img"><img src="assets/img/home-one/features_img_two.png" alt="" /></div><div className="p-3"><h4>Faster Iteration</h4><p>AI suggestions accelerated testing across markets.</p></div></div></div>
          </div>
        </div>
      </section>

      <section className="sec_padding">
        <div className="container">
          <div className="section_title text-center"><h2 className="title-animation">From the Blog</h2></div>
          <div className="row">
            <div className="col-md-4"><div className="blog_item"><div className="blog_img"><img src="assets/img/home-one/tab_img.jpg" alt="" /></div><div className="blog_content p-3"><h4>Email Warm-up Myths</h4><p>What actually improves deliverability and what does not.</p><Link to="/blog" className="saas_btn"><div className="btn_text"><span>Read</span><span>Read</span></div></Link></div></div></div>
            <div className="col-md-4"><div className="blog_item"><div className="blog_img"><img src="assets/img/home-one/features_img_one.png" alt="" /></div><div className="blog_content p-3"><h4>WhatsApp Compliance 101</h4><p>Templates, opt-ins, and best practices.</p><Link to="/blog" className="saas_btn"><div className="btn_text"><span>Read</span><span>Read</span></div></Link></div></div></div>
            <div className="col-md-4"><div className="blog_item"><div className="blog_img"><img src="assets/img/home-one/analytic_img.png" alt="" /></div><div className="blog_content p-3"><h4>AI for Subject Lines</h4><p>How to test faster and better with AI.</p><Link to="/blog" className="saas_btn"><div className="btn_text"><span>Read</span><span>Read</span></div></Link></div></div></div>
          </div>
        </div>
      </section>

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

      <Testimonials />

      <section className="saas_faq_area sec_padding">
        <div className="container">
          <div className="section_title text-center">
            <h2 className="title-animation">Frequently Asked Questions</h2>
            <p className="wow fadeInUp" data-wow-delay="0.4s">Find answers about plans, sending limits, validation, and support.</p>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="accordion faq_inner faq_inner_two ps-4" id="accordionExampleTwo">
                <div className="accordion-item wow fadeInUp" data-wow-delay="0.5s">
                  <h2 className="accordion-header" id="headingSeven">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="true" aria-controls="collapseSeven">1. How does Chatriox handle deliverability?</button>
                  </h2>
                  <div id="collapseSeven" className="accordion-collapse collapse show" aria-labelledby="headingSeven" data-bs-parent="#accordionExampleTwo">
                    <div className="accordion-body"><p>We use throttling, warm-up guidance, suppression lists, and validation to maximize deliverability and protect sender reputation.</p></div>
                  </div>
                </div>
                <div className="accordion-item wow fadeInUp" data-wow-delay="0.6s">
                  <h2 className="accordion-header" id="headingEight">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight">2. Is WhatsApp sending compliant?</button>
                  </h2>
                  <div id="collapseEight" className="accordion-collapse collapse" aria-labelledby="headingEight" data-bs-parent="#accordionExampleTwo">
                    <div className="accordion-body"><p>Yes. We support template approvals, opt-outs, and rate controls aligned with platform policies.</p></div>
                  </div>
                </div>
              </div>
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
