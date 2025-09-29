import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from './NavBar'
import Footer from './Footer'

export default function SharedLayout() {
  return (
    <div className="body_wrapper">
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  )
}
