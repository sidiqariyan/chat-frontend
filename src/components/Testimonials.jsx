import React from 'react'
import { motion } from 'framer-motion'

const items = [
  { name:'Dylan Schiemann', role:'COO', company:'SitePen', img:'/assets/img/home-two/author_img_1.png', text:'Deliverability improved, replies doubled. Rolling out WhatsApp sequences was effortless.' },
  { name:'Amritansh Raghav', role:'Product Lead', company:'Gainsight', img:'/assets/img/home-two/author_img_2.png', text:'Clean data + AI suggestions = campaigns we can trust at scale.' },
  { name:'Sara Nguyen', role:'Head of Growth', company:'Lumina', img:'/assets/img/home-two/author_img_3.png', text:'Template Builder let design and growth ship variants quickly with guardrails.' },
  { name:'Marcus Lee', role:'VP Marketing', company:'NorthPeak', img:'/assets/img/home-two/author_img_4.png', text:'Unified inbox cut our response time by half. The analytics are clear and actionable.' },
  { name:'Priya Desai', role:'Engineering Manager', company:'Strivio', img:'/assets/img/home-two/author_img_5.png', text:'The API and webhooks made integration simple. Observability is excellent.' }
]

export default function Testimonials() {
  return (
    <section className="sec_padding">
      <div className="container">
        <div className="section_title text-center"><h2 className="title-animation">What Our Customers Say</h2></div>
        <div className="row g-4">
          {items.map((t, i) => (
            <div className="col-md-6 col-lg-4" key={t.name}>
              <motion.div className="service_item h-100" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: .45, delay: i * 0.05 }} whileHover={{ y: -4 }}>
                <div className="d-flex align-items-center gap-3 mb-3">
                  <img src={t.img} alt={t.name} width={48} height={48} style={{borderRadius: '50%'}} />
                  <div>
                    <h5 className="mb-0">{t.name}</h5>
                    <small className="text-muted">{t.role} · {t.company}</small>
                  </div>
                </div>
                <p className="mb-0">“{t.text}”</p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
