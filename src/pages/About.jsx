import React from 'react'
import SEO from '../utils/SEO'
import FAQSection from '../components/FAQSection'
import StatsSection from '../components/StatsSection'
import Testimonials from '../components/Testimonials'

export default function About() {
  return (
    <>
      <SEO title="About Chatriox" description="Our story, mission, and the team behind Chatriox." />
      <section className="sec_padding">
        <div className="container">
          <div className="section_title text-center"><h2 className="title-animation">Our Story</h2><p>Chatriox was founded to make large-scale outreach dependable, compliant, and insightful.</p></div>
          <div className="row align-items-center">
            <div className="col-lg-6"><img className="about_img" src="assets/img/home-one/analytic_img.png" alt="" /></div>
            <div className="col-lg-6">
              <h3>Mission & Values</h3>
              <ul className="saas_list list-unstyled">
                <li><div className="icon"><img src="assets/img/home-one/check.png" alt=""/></div>Trustworthy deliverability</li>
                <li><div className="icon"><img src="assets/img/home-one/check.png" alt=""/></div>Security and compliance by default</li>
                <li><div className="icon"><img src="assets/img/home-one/check.png" alt=""/></div>AI to augment—not replace—teams</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="sec_padding"><div className="container"><div className="section_title text-center"><h2 className="title-animation">Our Team</h2><p>Operators, engineers, and designers focused on outcomes.</p></div><div className="row g-4"><div className="col-md-3"><img className="w-100 rounded" src="assets/img/about/team_1.jpg" alt="" /></div><div className="col-md-3"><img className="w-100 rounded" src="assets/img/about/team_2.jpg" alt="" /></div><div className="col-md-3"><img className="w-100 rounded" src="assets/img/about/team_3.jpg" alt="" /></div><div className="col-md-3"><img className="w-100 rounded" src="assets/img/about/team_4.jpg" alt="" /></div></div></div></section>
      <section className="sec_padding"><div className="container"><div className="row g-4"><div className="col-md-4"><div className="service_item"><h4>Principles</h4><p>Trust, clarity, and craftsmanship.</p></div></div><div className="col-md-4"><div className="service_item"><h4>Customers</h4><p>We listen and iterate quickly with real-world feedback.</p></div></div><div className="col-md-4"><div className="service_item"><h4>Impact</h4><p>We aim for meaningful, measurable improvements.</p></div></div></div></div></section>
      <FAQSection id="faq-about" />
    </>
  )
}
