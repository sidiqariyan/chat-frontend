import React, { useEffect } from 'react'
import SEO from '../utils/SEO'

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
      <SEO title="Chatriox — Manage clients & teams in your digital Business" description="Scale outreach with Chatriox: Bulk Email, Bulk WhatsApp, Email Validation, Lead Scraper, Template Builder, AI Analyzer." image="/assets/img/home-one/dash.png" />
      <section className="saas_banner_area" data-bg-color="#F7F8FA">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5">
              <div className="saas_banner_content">
                <h1 className="wow fadeInLeft">Manage clients &amp; teams in your digital Business</h1>
                <p className="wow fadeInLeft">Chatriox unifies Bulk Email, Bulk WhatsApp, Email Validation, Lead Scraper, Template Builder, and AI Analyzer into one enterprise-ready platform.</p>
                <a href="#" className="saas_btn wow fadeInUp" data-wow-delay="0.2s">
                  <div className="btn_text"><span>Get Started for Free</span><span>Get Started for Free</span></div>
                </a>
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
                <a href="#" className="saas_btn"><div className="btn_text"><span>Try Free Version</span><span>Try Free Version</span></div></a>
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
                <a href="#" className="saas_btn"><div className="btn_text"><span>Try Free Version</span><span>Try Free Version</span></div></a>
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
                <h6>Email Validation • Lead Scraper • Template Builder • AI Analyzer</h6>
                <h2>Data you can trust, insights you can act on</h2>
                <p>Real-time validation, automated lead capture, flexible templates, and AI-powered analysis keep your pipeline clean and effective.</p>
                <ul className="list-unstyled saas_list">
                  <li><div className="icon"><img src="assets/img/home-one/check.png" alt="" /></div>MX/DNS checks and syntax rules</li>
                  <li><div className="icon"><img src="assets/img/home-one/check.png" alt="" /></div>Enrichment, scoring, and dedupe</li>
                  <li><div className="icon"><img src="assets/img/home-one/check.png" alt="" /></div>AI-assisted subject lines and copy</li>
                </ul>
                <a href="#" className="saas_btn"><div className="btn_text"><span>Try Free Version</span><span>Try Free Version</span></div></a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="testimonial_area_one sec_padding">
        <div className="container">
          <div className="section_title text-center">
            <h2 className="title-animation">Don't Just Take Our Word For It</h2>
            <p className="wow fadeInUp" data-wow-delay="0.4s">Teams use Chatriox to move fast with consistent quality across channels—email and WhatsApp.</p>
          </div>
        </div>
        <div className="testimonial_slider_two wow fadeInUp" data-wow-delay="0.2s">
          <div className="item"><div className="t_logo d-flex justify-content-between"><img src="assets/img/home-three/clutch.png" alt="" /><div className="ratting"><i className="fa fa-star"/><i className="fa fa-star"/><i className="fa fa-star"/><i className="fa fa-star"/><i className="fa fa-star"/></div></div><p>“Deliverability improved, replies doubled. Rolling out WhatsApp sequences was effortless.”</p><div className="client_info"><img src="assets/img/home-two/author_img_1.png" alt="" /><div className="text"><h5>Dylan Schiemann</h5><h6>COO</h6></div></div></div>
          <div className="item"><div className="t_logo d-flex justify-content-between"><img src="assets/img/home-three/google.png" alt="" /><div className="ratting"><i className="fa fa-star"/><i className="fa fa-star"/><i className="fa fa-star"/><i className="fa fa-star"/><i className="fa fa-star"/></div></div><p>“Clean data + AI suggestions = campaigns we can trust at scale.”</p><div className="client_info"><img src="assets/img/home-two/author_img_2.png" alt="" /><div className="text"><h5>Amritansh Raghav</h5><h6>Product Lead</h6></div></div></div>
        </div>
        <div className="service_tab_area">
          <div className="container">
            <div className="section_title text-center">
              <h2 className="title-animation">Built For Service Businesses From All Types And Shapes</h2>
              <p className="wow fadeInUp" data-wow-delay="0.4s">From agencies to growth teams—Chatriox adapts to your workflows.</p>
            </div>
          </div>
        </div>
      </section>

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
            <a href="#" className="saas_btn wow fadeInUp" data-wow-delay="0.6s"><div className="btn_text"><span>Get a Free Consultation</span><span>Get a Free Consultation</span></div></a>
          </div>
        </div>
      </section>
    </>
  )
}
