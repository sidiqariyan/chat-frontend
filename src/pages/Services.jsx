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
      <FAQSection id="faq-services" />
    </>
  )
}
