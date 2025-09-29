import React from 'react'
import { motion } from 'framer-motion'
import Testimonials from './Testimonials'
import FAQSection from './FAQSection'

export default function ServiceDetail({
  id,
  title,
  subtitle,
  heroImg,
  overview,
  features = [],
  steps = [],
  benefits = [],
  useCases = [],
  comparison = [],
  testimonials = [],
  faqs = [],
  cta = { label: 'Get Started', href: '/signup' }
}) {
  return (
    <>
      <section className="sec_padding" data-bg-color="#F7F8FA">
        <div className="container">
          <div className="row align-items-center g-4">
            <div className="col-lg-7">
              <div className="section_title"><h1 className="title-animation mb-2">{title}</h1><p className="mb-0">{subtitle}</p></div>
              <a href={cta.href} className="saas_btn mt-3 d-inline-block"><div className="btn_text"><span>{cta.label}</span><span>{cta.label}</span></div></a>
            </div>
            <div className="col-lg-5">
              <div className="saas_banner_img text-center"><img src={heroImg} alt={title} className="img-fluid" /></div>
            </div>
          </div>
        </div>
      </section>

      <section className="sec_padding">
        <div className="container">
          <div className="row g-4 align-items-center">
            <div className="col-lg-6">
              <div className="service_item"><h3>Overview</h3><p>{overview}</p></div>
            </div>
            <div className="col-lg-6">
              <div className="row g-3">
                {features.map((f, i) => (
                  <div className="col-sm-6" key={i}>
                    <motion.div className="service_item h-100" initial={{opacity:0, y:12}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:.4, delay:i*0.05}}>
                      <h5 className="mb-1">{f.title}</h5>
                      <p className="mb-0">{f.desc}</p>
                    </motion.div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {steps.length > 0 && (
        <section className="sec_padding" data-bg-color="#0B1020">
          <div className="container">
            <div className="section_title text-center text-white"><h2 className="title-animation">How It Works</h2></div>
            <div className="row g-4">
              {steps.map((s, i) => (
                <div className="col-md-6 col-lg-3" key={i}>
                  <div className="service_item h-100">
                    <div className="badge bg-primary mb-2">{i+1}</div>
                    <h5 className="text-white mb-1">{s.title}</h5>
                    <p className="text-white-50 mb-0">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {benefits.length > 0 && (
        <section className="sec_padding">
          <div className="container">
            <div className="section_title text-center"><h2 className="title-animation">Benefits</h2></div>
            <div className="row g-4">
              {benefits.map((b, i) => (
                <div className="col-md-6 col-lg-3" key={i}><div className="service_item h-100"><h5 className="mb-1">{b.title}</h5><p className="mb-0">{b.desc}</p></div></div>
              ))}
            </div>
          </div>
        </section>
      )}

      {useCases.length > 0 && (
        <section className="sec_padding">
          <div className="container">
            <div className="section_title text-center"><h2 className="title-animation">Use Cases</h2></div>
            <div className="row g-4">
              {useCases.map((u, i) => (
                <div className="col-md-6 col-lg-4" key={i}><div className="service_item h-100"><h5 className="mb-1">{u.title}</h5><p className="mb-0">{u.desc}</p></div></div>
              ))}
            </div>
          </div>
        </section>
      )}

      {comparison.length > 0 && (
        <section className="sec_padding">
          <div className="container">
            <div className="section_title text-center"><h2 className="title-animation">Why Chatriox</h2></div>
            <div className="row g-4">
              {comparison.map((c, i) => (
                <div className="col-md-6" key={i}><div className="service_item h-100"><h5 className="mb-1">{c.title}</h5><p className="mb-0">{c.desc}</p></div></div>
              ))}
            </div>
          </div>
        </section>
      )}

      {testimonials.length > 0 && <Testimonials />}

      {faqs.length > 0 && <FAQSection id={`faq-${id}`} title={`${title} — FAQs`} />}

      <section className="sec_padding">
        <div className="container">
          <div className="promo_content promo_content_bg text-center">
            <h2 className="title-animation">{cta.label}</h2>
            <a href={cta.href} className="saas_btn"><div className="btn_text"><span>Try Now</span><span>Try Now</span></div></a>
          </div>
        </div>
      </section>
    </>
  )
}
