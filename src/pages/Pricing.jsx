import React from 'react'
import { Link } from 'react-router-dom'
import SEO from '../utils/SEO'
import FAQSection from '../components/FAQSection'
import Testimonials from '../components/Testimonials'
import StatsSection from '../components/StatsSection'

const monthly = [
  { name: 'Starter', price: 0, features: ['1,000 emails/mo', 'Basic validation', 'Community support'] },
  { name: 'Growth', price: 99, features: ['50,000 emails/mo', 'WhatsApp sequences', 'Team roles', 'Priority support'] },
  { name: 'Enterprise', price: null, features: ['Custom limits', 'SLA & SSO', 'DPA & Compliance', 'Dedicated manager'] },
]

export default function Pricing() {
  const [yearly, setYearly] = React.useState(true)
  const plans = monthly.map(p => ({
    ...p,
    price: p.price === null ? 'Custom' : yearly ? Math.round(p.price * 10) : p.price,
    suffix: p.price === null ? '' : yearly ? '/yr' : '/mo'
  }))

  return (
    <>
      <SEO title="Chatriox Pricing" description="Simple plans for teams of all sizes. Start free." />
      <section className="sec_padding">
        <div className="container">
          <div className="section_title text-center">
            <h2 className="title-animation">Choose Your Plan</h2>
            <div className="d-inline-flex align-items-center gap-2 mt-2">
              <span>Monthly</span>
              <div className="form-check form-switch">
                <input className="form-check-input" type="checkbox" id="toggle" checked={yearly} onChange={()=>setYearly(v=>!v)} />
                <label className="form-check-label" htmlFor="toggle">Yearly <span className="badge bg-success ms-1">Save ~2 months</span></label>
              </div>
            </div>
          </div>
          <div className="row g-4">
            {plans.map((p) => (
              <div className="col-md-6 col-lg-4" key={p.name}>
                <div className="price_item h-100">
                  <h3>{p.name}</h3>
                  <h2>{typeof p.price === 'number' ? `$${p.price}` : p.price} <small className="text-muted fs-6">{p.suffix}</small></h2>
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

      <section className="sec_padding">
        <div className="container"><div className="service_item"><h3>Compare plans</h3><ul className="list-unstyled mb-0"><li>API access: Growth, Enterprise</li><li>SSO & DPA: Enterprise</li><li>Priority support: Growth, Enterprise</li><li>WhatsApp sequences: Growth, Enterprise</li></ul></div></div>
      </section>

      <section className="sec_padding" data-bg-color="#0B1020">
        <div className="container"><div className="service_item text-center"><h3 className="text-white mb-2">Payment Methods</h3><p className="text-white-50 mb-0">All major credit cards, invoices for Enterprise.</p></div></div>
      </section>

      <section className="sec_padding">
        <div className="container"><div className="service_item text-center"><h3 className="mb-2">Money-back Guarantee</h3><p className="mb-0">Try Chatriox for 14 days. Cancel anytime—no questions asked.</p></div></div>
      </section>

      <Testimonials />
      <StatsSection />
      <section className="sec_padding"><div className="container"><div className="promo_content promo_content_bg text-center"><h2 className="title-animation">Questions about pricing?</h2><a href="/contact" className="saas_btn"><div className="btn_text"><span>Talk to Sales</span><span>Talk to Sales</span></div></a></div></div></section>
      <FAQSection id="faq-pricing" />
    </>
  )
}
