import React from 'react'
import SEO from '../utils/SEO'

export default function FAQs() {
  return (
    <>
      <SEO title="Chatriox FAQs" description="Common questions about Chatriox." />
      <section className="saas_faq_area sec_padding">
        <div className="container">
          <div className="section_title text-center"><h2 className="title-animation">Frequently Asked Questions</h2></div>
          <div className="row justify-content-center"><div className="col-lg-10">
            <div className="accordion faq_inner faq_inner_two ps-4" id="faq-acc">
              <div className="accordion-item"><h2 className="accordion-header" id="q1"><button className="accordion-button" data-bs-toggle="collapse" data-bs-target="#a1">What’s included in the free plan?</button></h2><div id="a1" className="accordion-collapse collapse show" data-bs-parent="#faq-acc"><div className="accordion-body">Starter quotas for email sending, validation, and templates.</div></div></div>
              <div className="accordion-item"><h2 className="accordion-header" id="q2"><button className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#a2">Can I export contacts and analytics?</button></h2><div id="a2" className="accordion-collapse collapse" data-bs-parent="#faq-acc"><div className="accordion-body">Yes, CSV and JSON exports are available in all paid plans.</div></div></div>
            </div>
          </div></div>
        </div>
      </section>
    </>
  )
}
