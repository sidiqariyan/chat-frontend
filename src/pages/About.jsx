import React from 'react'
import SEO from '../utils/SEO'

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
    </>
  )
}
