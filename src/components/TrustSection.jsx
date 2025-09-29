import React from 'react'
import { motion } from 'framer-motion'
import AnimatedCounter from './AnimatedCounter'
import AnalyticsChart from './AnalyticsChart'

const kpis = [
  { label: 'Emails Sent', value: 120000000, suffix: '+', prefix: '' },
  { label: 'Avg Deliverability', value: 98.5, suffix: '%', prefix: '' },
  { label: 'Client Growth YoY', value: 240, suffix: '%', prefix: '+' },
  { label: 'Avg ROI Uplift', value: 185, suffix: '%', prefix: '+' }
]

const microCases = [
  'TechFlow: +120% reply rate',
  'ScaleUp: 98.9% inbox placement',
  'CloudVenture: 3x WhatsApp engagement'
]

export default function TrustSection() {
  return (
    <section className="sec_padding bg-light">
      <div className="container">
        <div className="row align-items-center g-5">
          {/* Left: Trust Copy */}
          <div className="col-lg-4">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="title-animation mb-4">Why Companies Choose Chatriox</h2>
              <p className="text-muted mb-4">
                Enterprise-grade reliability meets intelligent automation. 
                See the metrics that matter to growth teams.
              </p>
              <div className="mb-4">
                {microCases.map((case_, index) => (
                  <motion.div
                    key={index}
                    className="d-flex align-items-center mb-2"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                  >
                    <div className="bg-success rounded-circle me-2" style={{ width: '8px', height: '8px' }}></div>
                    <small className="text-muted">{case_}</small>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Center: KPI Cards */}
          <div className="col-lg-4">
            <div className="row g-3">
              {kpis.map((kpi, index) => (
                <div key={index} className="col-6">
                  <motion.div
                    className="service_item text-center h-100"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                  >
                    <h3 className="text-primary mb-2">
                      <AnimatedCounter
                        from={0}
                        to={kpi.value}
                        duration={2}
                        prefix={kpi.prefix}
                        suffix={kpi.suffix}
                      />
                    </h3>
                    <p className="small text-muted mb-0">{kpi.label}</p>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Interactive Chart */}
          <div className="col-lg-4">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <AnalyticsChart />
              <div className="mt-3 text-center">
                <small className="text-muted">
                  Average improvement across 1,000+ campaigns
                </small>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Trust Logos */}
        <motion.div
          className="row mt-5 pt-4 border-top"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <div className="col-12 text-center">
            <p className="text-muted mb-3">Trusted by 500+ companies worldwide</p>
            <div className="d-flex justify-content-center align-items-center gap-4 flex-wrap opacity-75">
              {[1, 2, 3, 4, 5].map((num) => (
                <img
                  key={num}
                  src={`/assets/img/home-one/${num}.png`}
                  alt={`Partner ${num}`}
                  className="img-fluid"
                  style={{ maxHeight: '40px', filter: 'grayscale(100%)' }}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}