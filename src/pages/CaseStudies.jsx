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
            <div className="col-lg-4"><div className="portfolio_item"><div className="portfolio_img"><img src="assets/img/home-one/analytic_small.png" alt="" /></div><div className="p-3"><h4>+2x Reply Rate</h4><p>Migration to Chatriox improved warm-up and follow-ups.</p></div></div></div>
            <div className="col-lg-4"><div className="portfolio_item"><div className="portfolio_img"><img src="assets/img/home-one/features_img_two.png" alt="" /></div><div className="p-3"><h4>Clean Data</h4><p>Validation and enrichment boosted deliverability.</p></div></div></div>
            <div className="col-lg-4"><div className="portfolio_item"><div className="portfolio_img"><img src="assets/img/home-one/12.png" alt="" /></div><div className="p-3"><h4>One Inbox</h4><p>Consolidated email and WhatsApp replies for faster SLAs.</p></div></div></div>
          </div>
        </div>
      </section>
      <FAQSection id="faq-casestudies" />
    </>
  )
}
