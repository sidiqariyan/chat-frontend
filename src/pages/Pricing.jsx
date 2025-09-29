import React from 'react'
import { Link } from 'react-router-dom'
import SEO from '../utils/SEO'
import FAQSection from '../components/FAQSection'

const plans = [
  { name: 'Starter', price: '$0', features: ['1,000 emails/mo', 'Basic validation', 'Community support'] },
  { name: 'Growth', price: '$99', features: ['50,000 emails/mo', 'WhatsApp sequences', 'Team roles', 'Priority support'] },
  { name: 'Enterprise', price: 'Custom', features: ['Custom limits', 'SLA & SSO', 'DPA & Compliance', 'Dedicated manager'] },
]

export default function Pricing() {
  return (
    <>
      <SEO title="Chatriox Pricing" description="Simple plans for teams of all sizes. Start free." />
      <section className="sec_padding">
        <div className="container">
          <div className="section_title text-center"><h2 className="title-animation">Choose Your Plan</h2></div>
          <div className="row">
            {plans.map((p) => (
              <div className="col-md-6 col-lg-4" key={p.name}>
                <div className="price_item">
                  <h3>{p.name}</h3>
                  <h2>{p.price}</h2>
                  <ul className="list-unstyled">
                    {p.features.map(f => <li key={f}>{f}</li>)}
                  </ul>
                  <Link to="/signup" className="saas_btn"><div className="btn_text"><span>Start Free Trial</span><span>Start Free Trial</span></div></Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="sec_padding"><div className="container"><div className="service_item"><h3>Compare plans</h3><ul className="list-unstyled mb-0"><li>API access: Growth, Enterprise</li><li>SSO & DPA: Enterprise</li><li>Priority support: Growth, Enterprise</li></ul></div></div></section>
      <section className="sec_padding"><div className="container"><div className="promo_content promo_content_bg text-center"><h2 className="title-animation">Questions about pricing?</h2><a href="/contact" className="saas_btn"><div className="btn_text"><span>Talk to Sales</span><span>Talk to Sales</span></div></a></div></div></section>
      <FAQSection id="faq-pricing" />
    </>
  )
}
