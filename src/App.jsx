import React from 'react'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import Home from './pages/Home'
import ServicesLayout from './layouts/ServicesLayout'
import Services from './pages/Services'
import ServicesDetail from './pages/ServicesDetail'
import About from './pages/About'
import ElectricWorks from './pages/ElectricWorks'
import Certificates from './pages/Certificates'
import ContactsPage from './pages/ContactsPage'
import Reviews from './pages/Reviews'

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<MainLayout/>}>
        <Route index path='/' element={<Home/>}/>
        <Route element={<ServicesLayout/>}>
          <Route path='/services' element={<Services/>}/>
          <Route path='/services/:title' element={<ServicesDetail/>}/>
        </Route>
        <Route path='/about' element={<About/>}/>
        <Route path='/about/certificates'  element={<Certificates/>}/>
        <Route path='/electric-works' element={<ElectricWorks/>}/>
        <Route path='/reviews' element={<Reviews/>}/>
        <Route path='/contacts' element={<ContactsPage/>}/>
      </Route>
    )
  )
  
  return (
    <RouterProvider router={router}/>
  )
}

export default App