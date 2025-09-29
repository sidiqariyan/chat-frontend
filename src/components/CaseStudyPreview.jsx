import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const caseStudies = [
  {
    title: 'TechFlow: 2x Reply Rate Improvement',
    category: 'SaaS',
    image: '/assets/img/home-one/analytic_small.png',
    problem: 'Low inbox placement affecting outreach ROI',
    solution: 'Implemented warm-up protocols and validation',
    result: '+120% reply rate, 98.5% deliverability',
    readTime: '5 min read',
    href: '/case-studies/techflow'
  },
  {
    title: 'ScaleUp: Clean Data Pipeline',
    category: 'Agency',
    image: '/assets/img/home-one/features_img_two.png',
    problem: 'High bounce rates damaging sender reputation',
    solution: 'Real-time validation and list hygiene',
    result: '+45% open rate, 90% bounce reduction',
    readTime: '4 min read',
    href: '/case-studies/scaleup'
  },
  {
    title: 'CloudVenture: Unified Inbox Success',
    category: 'Enterprise',
    image: '/assets/img/home-one/12.png',
    problem: 'Fragmented communication across channels',
    solution: 'Unified inbox for email and WhatsApp',
    result: '50% faster response time, 3x engagement',
    readTime: '6 min read',
    href: '/case-studies/cloudventure'
  }
]

export default function CaseStudyPreview() {
  return (
    <section className="sec_padding">
      <div className="container">
        <div className="section_title text-center mb-5">
          <h2 className="title-animation">Success Stories</h2>
          <p className="text-muted">Real results from companies scaling with Chatriox</p>
        </div>

        <div className="row g-4">
          {caseStudies.map((study, index) => (
            <div key={index} className="col-md-6 col-lg-4">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="service_item h-100 position-relative overflow-hidden"
              >
                <div className="position-relative mb-3">
                  <img 
                    src={study.image} 
                    alt={study.title}
                    className="w-100 rounded-3"
                    style={{ height: '200px', objectFit: 'cover' }}
                  />
                  <div className="position-absolute top-0 end-0 m-2">
                    <span className="badge bg-primary">{study.category}</span>
                  </div>
                </div>

                <h5 className="mb-3">{study.title}</h5>
                
                <div className="mb-3">
                  <div className="row g-2 text-sm">
                    <div className="col-12">
                      <strong className="text-danger">Problem:</strong>
                      <p className="mb-1 text-muted small">{study.problem}</p>
                    </div>
                    <div className="col-12">
                      <strong className="text-warning">Solution:</strong>
                      <p className="mb-1 text-muted small">{study.solution}</p>
                    </div>
                    <div className="col-12">
                      <strong className="text-success">Result:</strong>
                      <p className="mb-0 text-muted small">{study.result}</p>
                    </div>
                  </div>
                </div>

                <div className="d-flex justify-content-between align-items-center mt-auto">
                  <small className="text-muted">{study.readTime}</small>
                  <Link 
                    to={study.href}
                    className="btn btn-sm btn-outline-primary"
                  >
                    Read Full Case Study
                  </Link>
                </div>
              </motion.div>
            </div>
          ))}
        </div>

        <motion.div
          className="text-center mt-5"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Link to="/case-studies" className="btn btn-primary btn-lg">
            View All Case Studies
          </Link>
        </motion.div>
      </div>
    </section>
  )
}