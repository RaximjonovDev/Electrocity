import React, { Fragment } from 'react'
import Application from '../components/Application'
import ServicesList from '../components/ServicesList'
import About from '../components/About'
import ElectricalInstallation from '../components/ElectricalInstallation'

const Home = () => {
  return (
    <> 
    <Application/>
    <ServicesList/>
    <About/>
    <ElectricalInstallation/>
    </>
  )
}

export default Home