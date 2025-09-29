import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import SharedLayout from './components/SharedLayout'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Pricing from './pages/Pricing'
import CaseStudies from './pages/CaseStudies'
import Blog from './pages/Blog'
import FAQs from './pages/FAQs'
import Contact from './pages/Contact'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Dashboard from './pages/Dashboard'

const pageVariants = {
  initial: { opacity: 0, y: 10 },
  in: { opacity: 1, y: 0 },
  out: { opacity: 0, y: -10 }
}

function PageWrapper({ children }) {
  return (
    <motion.main initial="initial" animate="in" exit="out" variants={pageVariants} transition={{ duration: 0.35, ease: 'easeOut' }}>
      {children}
    </motion.main>
  )
}

export default function App() {
  const location = useLocation()
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route element={<SharedLayout />}> 
          <Route index element={<PageWrapper><Home /></PageWrapper>} />
          <Route path="about" element={<PageWrapper><About /></PageWrapper>} />
          <Route path="services" element={<PageWrapper><Services /></PageWrapper>} />
          <Route path="pricing" element={<PageWrapper><Pricing /></PageWrapper>} />
          <Route path="case-studies" element={<PageWrapper><CaseStudies /></PageWrapper>} />
          <Route path="blog" element={<PageWrapper><Blog /></PageWrapper>} />
          <Route path="faqs" element={<PageWrapper><FAQs /></PageWrapper>} />
          <Route path="contact" element={<PageWrapper><Contact /></PageWrapper>} />
          <Route path="login" element={<PageWrapper><Login /></PageWrapper>} />
          <Route path="signup" element={<PageWrapper><Signup /></PageWrapper>} />
          <Route path="dashboard" element={<PageWrapper><Dashboard /></PageWrapper>} />
        </Route>
      </Routes>
    </AnimatePresence>
  )
}
