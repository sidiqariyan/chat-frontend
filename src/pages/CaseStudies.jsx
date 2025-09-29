import React from 'react'
import SEO from '../utils/SEO'
import FAQSection from '../components/FAQSection'

export default function CaseStudies() {
  return (
    <>
      <SEO title="Chatriox Case Studies" description="Real-world results from teams using Chatriox." />
      <section className="sec_padding">
        <div className="container">
          <div className="section_title text-center"><h2 className="title-animation">Success Stories</h2><p>Campaigns delivered, replies increased, teams aligned.</p></div>
          <div className="row">
            <div className="col-lg-4"><div className="portfolio_item"><div className="portfolio_img"><img src="assets/img/home-one/analytic_small.png" alt="" /></div><div className="p-3"><h4>+2x Reply Rate</h4><p>Migration to Chatriox improved warm-up and follow-ups.</p><ul className="list-unstyled mb-0"><li>Problem: Low inbox placement</li><li>Solution: Warm-up + validation</li><li>Results: 2x replies</li></ul></div></div></div>
            <div className="col-lg-4"><div className="portfolio_item"><div className="portfolio_img"><img src="assets/img/home-one/features_img_two.png" alt="" /></div><div className="p-3"><h4>Clean Data</h4><p>Validation and enrichment boosted deliverability.</p><ul className="list-unstyled mb-0"><li>Problem: Bounces</li><li>Solution: Real-time validation</li><li>Results: +12% open</li></ul></div></div></div>
            <div className="col-lg-4"><div className="portfolio_item"><div className="portfolio_img"><img src="assets/img/home-one/12.png" alt="" /></div><div className="p-3"><h4>One Inbox</h4><p>Consolidated email and WhatsApp replies for faster SLAs.</p><ul className="list-unstyled mb-0"><li>Problem: Fragmented replies</li><li>Solution: Unified inbox</li><li>Results: 50% faster</li></ul></div></div></div>
          </div>
        </div>
      </section>
      <section className="sec_padding"><div className="container"><div className="row g-4"><div className="col-md-4"><div className="service_item"><h4>Methodology</h4><p>We compare cohorts pre/post migration and normalize by volume.</p></div></div><div className="col-md-4"><div className="service_item"><h4>Guardrails</h4><p>Sampling, A/A tests, and outlier controls to ensure accuracy.</p></div></div><div className="col-md-4"><div className="service_item"><h4>Attribution</h4><p>We attribute outcomes to channels using first-touch and multi-touch models.</p></div></div></div></div></section>
      <section className="sec_padding"><div className="container"><div className="row g-4 text-center"><div className="col-md-12"><div className="service_item"><h4>Industries</h4><p>Agencies, SaaS, eCommerce, and B2B services.</p></div></div></div></div></section>
      <section className="sec_padding"><div className="container"><div className="promo_content promo_content_bg text-center"><h2 className="title-animation">See similar results</h2><a href="/contact" className="saas_btn"><div className="btn_text"><span>Book a Demo</span><span>Book a Demo</span></div></a></div></div></section>
      <FAQSection id="faq-casestudies" />
    </>
  )
}
