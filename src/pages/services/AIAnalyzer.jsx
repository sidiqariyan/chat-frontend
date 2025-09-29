import React from 'react'
import SEO from '../../utils/SEO'
import FAQSection from '../../components/FAQSection'

export default function AIAnalyzer() {
  return (
    <>
      <SEO title="AI Campaign Analyzer — Chatriox" description="Actionable insights for copy, timing, targeting, and health." />
      <section className="sec_padding"><div className="container"><div className="section_title text-center"><h2 className="title-animation">AI Campaign Analyzer</h2><p>Turn signals into next steps.</p></div></div></section>
      <section className="saas_features_area"><div className="container"><div className="row saas_features_item"><div className="col-lg-6"><div className="saas_features_img" data-bg-color="#ADDEF0"><img src="/assets/img/home-one/analytic_img.png" alt="" /></div></div><div className="col-lg-6"><div className="saas_features_content"><h3>Recommendations</h3><ul className="saas_list list-unstyled"><li><div className="icon"><img src="/assets/img/home-one/check.png" alt="" /></div>Timing</li><li><div className="icon"><img src="/assets/img/home-one/check.png" alt="" /></div>Copy</li></ul></div></div></div></div></section>
      <section className="sec_padding"><div className="container"><div className="row"><div className="col-md-4"><div className="service_item"><h4>Anomalies</h4><p>Spot and fix fast.</p></div></div><div className="col-md-4"><div className="service_item"><h4>Attribution</h4><p>Cohorts and paths.</p></div></div><div className="col-md-4"><div className="service_item"><h4>Exports</h4><p>Share with your team.</p></div></div></div></div></section>
      <section className="sec_padding"><div className="container"><div className="promo_content promo_content_bg text-center"><h2 className="title-animation">Analyze your campaigns</h2><a href="/signup" className="saas_btn"><div className="btn_text"><span>Start</span><span>Start</span></div></a></div></div></section>
      <FAQSection id="faq-aianalyzer" />
    </>
  )
}
