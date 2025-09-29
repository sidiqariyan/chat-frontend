import React from 'react'
import { Link } from 'react-router-dom'
import SEO from '../utils/SEO'
import FAQSection from '../components/FAQSection'

const services = [
  { title: 'Bulk Email Sending', desc: 'High deliverability at scale with smart throttling and warm-up hints.' },
  { title: 'Bulk WhatsApp Sending', desc: 'Personalized sequences, media support, and reply tracking.' },
  { title: 'Email Validation', desc: 'Real-time checks: syntax, MX/DNS, disposable detection, suppression.' },
  { title: 'Lead Scraper', desc: 'Capture, deduplicate, and enrich leads from multiple sources.' },
  { title: 'Template Builder', desc: 'Flexible, modular templates with variables and approvals.' },
  { title: 'AI Analyzer', desc: 'Insights, scoring, and copy suggestions powered by AI.' },
]

export default function Services() {
  return (
    <>
      <SEO title="Chatriox Services" description="Explore our complete outreach stack for email and WhatsApp." />
      <section className="sec_padding"><div className="container"><div className="section_title text-center"><h2 className="title-animation">Everything you need to scale outreach</h2><p>Unified, compliant, and reliable.</p></div></div></section>
      <section className="saas_features_area sec_padding_two">
        <div className="container">
          <div className="section_title text-center"><h2 className="title-animation">Everything You Need to Scale</h2></div>
          <div className="row">
            {services.map((s) => (
              <div className="col-md-6 col-lg-4" key={s.title}>
                <div className="service_item">
                  <h4>{s.title}</h4>
                  <p>{s.desc}</p>
                  <Link to="/contact" className="saas_btn"><div className="btn_text"><span>Learn More</span><span>Learn More</span></div></Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="sec_padding"><div className="container"><div className="row g-4"><div className="col-md-4"><div className="service_item"><h4>How it works</h4><p>Connect, import, validate, and launch with approvals.</p></div></div><div className="col-md-4"><div className="service_item"><h4>Security</h4><p>SSO, RBAC, audit logs, regional data options.</p></div></div><div className="col-md-4"><div className="service_item"><h4>Integrations</h4><p>APIs, webhooks, and prebuilt connectors.</p></div></div></div></div></section>
      <section className="sec_padding"><div className="container"><div className="promo_content promo_content_bg text-center"><h2 className="title-animation">Ready to get started?</h2><a href="/signup" className="saas_btn"><div className="btn_text"><span>Create Free Account</span><span>Create Free Account</span></div></a></div></div></section>
      <FAQSection id="faq-services" />
    </>
  )
}
