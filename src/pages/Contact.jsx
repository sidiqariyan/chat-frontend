import React from 'react'
import SEO from '../utils/SEO'

export default function Contact() {
  const onSubmit = (e) => { e.preventDefault(); alert('Thanks! We will get back to you shortly.') }
  return (
    <>
      <SEO title="Contact Chatriox" description="Get support or talk to sales." />
      <section className="sec_padding">
        <div className="container">
          <div className="section_title text-center"><h2 className="title-animation">Contact / Support</h2></div>
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <form onSubmit={onSubmit} className="contact_form">
                <div className="row g-3">
                  <div className="col-md-6"><input className="form-control" placeholder="Name" required /></div>
                  <div className="col-md-6"><input type="email" className="form-control" placeholder="Email" required /></div>
                  <div className="col-12"><input className="form-control" placeholder="Subject" required /></div>
                  <div className="col-12"><textarea className="form-control" rows="5" placeholder="Message" required /></div>
                  <div className="col-12"><button className="saas_btn"><div className="btn_text"><span>Send</span><span>Send</span></div></button></div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
