import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const blogPosts = [
  {
    title: 'Email Warm-up Myths Debunked',
    category: 'Deliverability',
    image: '/assets/img/home-one/tab_img.jpg',
    excerpt: 'What actually improves deliverability and what doesn\'t. Evidence-based insights.',
    readTime: '8 min read',
    date: 'Dec 15, 2024',
    href: '/blog/email-warmup-myths'
  },
  {
    title: 'WhatsApp Compliance 101',
    category: 'Compliance',
    image: '/assets/img/home-one/features_img_one.png',
    excerpt: 'Templates, opt-ins, and best practices for compliant WhatsApp marketing.',
    readTime: '6 min read',
    date: 'Dec 12, 2024',
    href: '/blog/whatsapp-compliance'
  },
  {
    title: 'AI for Better Subject Lines',
    category: 'AI & Optimization',
    image: '/assets/img/home-one/analytic_img.png',
    excerpt: 'How to test faster and achieve better open rates with AI-powered suggestions.',
    readTime: '5 min read',
    date: 'Dec 10, 2024',
    href: '/blog/ai-subject-lines'
  }
]

export default function BlogPreview() {
  return (
    <section className="sec_padding bg-light">
      <div className="container">
        <div className="section_title text-center mb-5">
          <h2 className="title-animation">Latest Insights</h2>
          <p className="text-muted">Best practices and industry insights for modern outreach teams</p>
        </div>

        <div className="row g-4">
          {blogPosts.map((post, index) => (
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
                    src={post.image} 
                    alt={post.title}
                    className="w-100 rounded-3"
                    style={{ height: '200px', objectFit: 'cover' }}
                  />
                  <div className="position-absolute top-0 end-0 m-2">
                    <span className="badge bg-secondary">{post.category}</span>
                  </div>
                </div>

                <h5 className="mb-3">{post.title}</h5>
                <p className="text-muted mb-3">{post.excerpt}</p>

                <div className="d-flex justify-content-between align-items-center mt-auto">
                  <div className="d-flex flex-column">
                    <small className="text-muted">{post.readTime}</small>
                    <small className="text-muted">{post.date}</small>
                  </div>
                  <Link 
                    to={post.href}
                    className="btn btn-sm btn-outline-primary"
                  >
                    Read Article
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
          <Link to="/blog" className="btn btn-primary btn-lg">
            View All Articles
          </Link>
        </motion.div>
      </div>
    </section>
  )
}