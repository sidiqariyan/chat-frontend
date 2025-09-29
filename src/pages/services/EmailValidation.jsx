import React from 'react'
import SEO from '../../utils/SEO'
import FAQSection from '../../components/FAQSection'

export default function EmailValidation() {
  return (
    <>
      <SEO title="Email Validation — Chatriox" description="Real-time checks to keep lists clean and deliverability high." />
      <section className="sec_padding"><div className="container"><div className="section_title text-center"><h2 className="title-animation">Email Validation</h2><p>Syntax, MX/DNS, disposable, role, and spam trap signals.</p></div></div></section>
      <section className="saas_features_area"><div className="container"><div className="row saas_features_item"><div className="col-lg-6"><div className="saas_features_img" data-bg-color="#ADDEF0"><img src="/assets/img/home-one/analytic_img.png" alt="" /></div></div><div className="col-lg-6"><div className="saas_features_content"><h3>Real-time API</h3><ul className="saas_list list-unstyled"><li><div className="icon"><img src="/assets/img/home-one/check.png" alt="" /></div>Low latency checks</li><li><div className="icon"><img src="/assets/img/home-one/check.png" alt="" /></div>Bulk imports</li></ul></div></div></div></div></section>
      <section className="sec_padding"><div className="container"><div className="row"><div className="col-md-4"><div className="service_item"><h4>Suppression</h4><p>Protect your domains with rules.</p></div></div><div className="col-md-4"><div className="service_item"><h4>Enrichment</h4><p>Score and segment lists.</p></div></div><div className="col-md-4"><div className="service_item"><h4>Exports</h4><p>CSV/JSON and webhooks.</p></div></div></div></div></section>
      <section className="sec_padding"><div className="container"><div className="promo_content promo_content_bg text-center"><h2 className="title-animation">Start with clean data</h2><a href="/signup" className="saas_btn"><div className="btn_text"><span>Start Free</span><span>Start Free</span></div></a></div></div></section>
      <FAQSection id="faq-emailvalidation" />
    </>
  )
}
