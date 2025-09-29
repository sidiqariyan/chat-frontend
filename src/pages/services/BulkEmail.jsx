import React from 'react'
import SEO from '../../utils/SEO'
import FAQSection from '../../components/FAQSection'

export default function BulkEmail() {
  return (
    <>
      <SEO title="Bulk Email — Chatriox" description="Scale outreach with reliable deliverability and templates." />
      <section className="sec_padding"><div className="container"><div className="section_title text-center"><h2 className="title-animation">Bulk Email</h2><p>Warm-up friendly sending with smart throttling.</p></div></div></section>
      <section className="saas_features_area"><div className="container"><div className="row saas_features_item"><div className="col-lg-6"><div className="saas_features_img" data-bg-color="#E6D8F5"><img src="/assets/img/home-one/features_img_one.png" alt="" /></div></div><div className="col-lg-6"><div className="saas_features_content"><h3>Templates & Scheduling</h3><ul className="saas_list list-unstyled"><li><div className="icon"><img src="/assets/img/home-one/check.png" alt="" /></div>Variables</li><li><div className="icon"><img src="/assets/img/home-one/check.png" alt="" /></div>Time windows</li></ul></div></div></div></div></section>
      <section className="sec_padding"><div className="container"><div className="promo_content promo_content_bg text-center"><h2 className="title-animation">Start sending</h2><a href="/signup" className="saas_btn"><div className="btn_text"><span>Try Free</span><span>Try Free</span></div></a></div></div></section>
      <FAQSection id="faq-bulkemail" />
    </>
  )
}
