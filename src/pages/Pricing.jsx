import React from 'react'
import SEO from '../utils/SEO'

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
                  <a href="#" className="saas_btn"><div className="btn_text"><span>Start Free Trial</span><span>Start Free Trial</span></div></a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
