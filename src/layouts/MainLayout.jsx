import React, { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import BreadCrumb from '../components/BreadCrumb'

const MainLayout = () => {
  const location = useLocation()
  const HomePage = location.pathname === '/'
  useEffect(()=> {
    window.scrollTo(0, 0)
  },[location.pathname])
  return (
    <>
    <Header/>
    <main className='bg-grey'>
    {!HomePage &&  
          <div className='w-full max-w-base mx-auto px-5 pt-10 mb-5'>
          <BreadCrumb/>
        </div>
    }
    <Outlet/>
    </main>
    <Footer/>
    </>
  )
}

export default MainLayout