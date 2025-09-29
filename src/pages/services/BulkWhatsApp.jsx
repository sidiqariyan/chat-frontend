import React from 'react'
import SEO from '../../utils/SEO'
import FAQSection from '../../components/FAQSection'

export default function BulkWhatsApp() {
  return (
    <>
      <SEO title="Bulk WhatsApp — Chatriox" description="Personalized WhatsApp sequences with compliance built in." />
      <section className="sec_padding"><div className="container"><div className="section_title text-center"><h2 className="title-animation">Bulk WhatsApp</h2><p>Rich messaging, media, and tracking.</p></div></div></section>
      <section className="saas_features_area"><div className="container"><div className="row saas_features_item"><div className="col-lg-6"><div className="saas_features_img" data-bg-color="#ADDEF0"><img src="/assets/img/home-one/analytic_img.png" alt="" /></div></div><div className="col-lg-6"><div className="saas_features_content"><h3>Templates & Compliance</h3><ul className="saas_list list-unstyled"><li><div className="icon"><img src="/assets/img/home-one/check.png" alt="" /></div>Approvals</li><li><div className="icon"><img src="/assets/img/home-one/check.png" alt="" /></div>Opt-outs</li></ul></div></div></div></div></section>
      <section className="sec_padding"><div className="container"><div className="promo_content promo_content_bg text-center"><h2 className="title-animation">Scale WhatsApp</h2><a href="/signup" className="saas_btn"><div className="btn_text"><span>Try Free</span><span>Try Free</span></div></a></div></div></section>
      <FAQSection id="faq-bulkwhatsapp" />
    </>
  )
}
