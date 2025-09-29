import React from 'react'
import SEO from '../../utils/SEO'
import FAQSection from '../../components/FAQSection'

export default function LeadScraper() {
  return (
    <>
      <SEO title="Lead Scraper — Chatriox" description="Capture, deduplicate, and enrich leads from multiple sources." />
      <section className="sec_padding"><div className="container"><div className="section_title text-center"><h2 className="title-animation">Lead Scraper</h2><p>Build clean, enriched pipelines.</p></div></div></section>
      <section className="saas_features_area"><div className="container"><div className="row saas_features_item"><div className="col-lg-6"><div className="saas_features_img" data-bg-color="#B3F7D5"><img src="/assets/img/home-one/Chart.png" alt="" /></div></div><div className="col-lg-6"><div className="saas_features_content"><h3>Capture & Enrich</h3><ul className="saas_list list-unstyled"><li><div className="icon"><img src="/assets/img/home-one/check.png" alt="" /></div>Deduplication</li><li><div className="icon"><img src="/assets/img/home-one/check.png" alt="" /></div>Scoring</li></ul></div></div></div></div></section>
      <section className="sec_padding"><div className="container"><div className="promo_content promo_content_bg text-center"><h2 className="title-animation">Grow your pipeline</h2><a href="/signup" className="saas_btn"><div className="btn_text"><span>Start Free</span><span>Start Free</span></div></a></div></div></section>
      <FAQSection id="faq-leadscraper" />
    </>
  )
}
