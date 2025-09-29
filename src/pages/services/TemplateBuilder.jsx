import React from 'react'
import SEO from '../../utils/SEO'
import FAQSection from '../../components/FAQSection'

export default function TemplateBuilder() {
  return (
    <>
      <SEO title="Template Builder — Chatriox" description="Fast, modular templates with AI suggestions and approvals." />
      <section className="sec_padding"><div className="container"><div className="section_title text-center"><h2 className="title-animation">Template Builder</h2><p>Build once, reuse across channels.</p></div></div></section>
      <section className="saas_features_area"><div className="container"><div className="row saas_features_item"><div className="col-lg-6"><div className="saas_features_img" data-bg-color="#E6D8F5"><img src="/assets/img/home-one/features_img_two.png" alt="" /></div></div><div className="col-lg-6"><div className="saas_features_content"><h3>Blocks & Variables</h3><ul className="saas_list list-unstyled"><li><div className="icon"><img src="/assets/img/home-one/check.png" alt="" /></div>Localization</li><li><div className="icon"><img src="/assets/img/home-one/check.png" alt="" /></div>Approvals</li></ul></div></div></div></div></section>
      <section className="sec_padding"><div className="container"><div className="row"><div className="col-md-4"><div className="service_item"><h4>Versioning</h4><p>Track and roll back safely.</p></div></div><div className="col-md-4"><div className="service_item"><h4>Experiments</h4><p>Run A/B tests quickly.</p></div></div><div className="col-md-4"><div className="service_item"><h4>Governance</h4><p>Brand guardrails by default.</p></div></div></div></div></section>
      <section className="sec_padding"><div className="container"><div className="promo_content promo_content_bg text-center"><h2 className="title-animation">Create your first template</h2><a href="/signup" className="saas_btn"><div className="btn_text"><span>Get Started</span><span>Get Started</span></div></a></div></div></section>
      <FAQSection id="faq-templatebuilder" />
    </>
  )
}
