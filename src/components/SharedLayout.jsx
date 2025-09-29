import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import React, { useEffect } from 'react'
import NavBar from './NavBar'
import Footer from './Footer'

export default function SharedLayout() {
  const location = useLocation()

  useEffect(() => {
    const $ = window.jQuery || window.$
    // Re-apply background attributes for dynamically rendered nodes
    const applyBgAttrs = () => {
      document.querySelectorAll('[data-bg-color]').forEach(el => {
        const c = el.getAttribute('data-bg-color')
        if (c) el.style.backgroundColor = c
      })
      document.querySelectorAll('[data-bg-image]').forEach(el => {
        const bg = el.getAttribute('data-bg-image')
        if (bg) el.style.background = `no-repeat center 0/cover url(${bg})`
      })
    }
    applyBgAttrs()
    // Ensure sticky class recalculates
    if ($ && $('.sticky_nav').length) {
      const scroll = $(window).scrollTop()
      $('.sticky_nav').toggleClass('navbar_fixed', scroll > 0)
    }
  }, [location.pathname])

  return (
    <div className="body_wrapper">
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  )
}
