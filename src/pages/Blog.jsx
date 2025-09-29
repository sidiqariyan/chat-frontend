import React from 'react'
import { Link } from 'react-router-dom'
import SEO from '../utils/SEO'
import FAQSection from '../components/FAQSection'

const posts = [
  { slug: 'email-warmup', title: 'Email Warm-up Myths', excerpt: 'What actually improves deliverability and what does not.' },
  { slug: 'whatsapp-compliance', title: 'WhatsApp Compliance 101', excerpt: 'Templates, opt-ins, and best practices.' },
  { slug: 'ai-subjects', title: 'AI for Subject Lines', excerpt: 'How to test faster and better with AI.' },
]

export default function Blog() {
  return (
    <>
      <SEO title="Chatriox Blog" description="Articles and insights for modern outreach teams." />
      <section className="sec_padding">
        <div className="container">
          <div className="section_title text-center"><h2 className="title-animation">Resources</h2></div>
          <div className="row">
            {posts.map(p => (
              <div className="col-md-6 col-lg-4" key={p.slug}>
                <div className="blog_item">
                  <div className="blog_img"><img src="assets/img/home-one/tab_img.jpg" alt="" /></div>
                  <div className="blog_content p-3">
                    <h4>{p.title}</h4>
                    <p>{p.excerpt}</p>
                    <Link to="/blog" className="saas_btn"><div className="btn_text"><span>Read</span><span>Read</span></div></Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <FAQSection id="faq-blog" />
    </>
  )
}
