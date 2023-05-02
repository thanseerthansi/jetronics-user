import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import Header from './Header'
import Scripts from './Scripts'

export default function Home() {
  
  
  useEffect(() => {
    Scripts()
    // localStoragehandler()
    window.scrollTo(0, 0);
  }, [])
  
  
  return (
    <div>
      <Header />
      <Outlet />
      <Footer/>
    </div>
  )
}
