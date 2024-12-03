import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import Hero from '../../components/Homecomp/Hero/Hero'
import Content from '../../components/Homecomp/Content/Content'
import Contact from '../../components/Homecomp/Contact/Contact'

const Home = () => {
  return (
    <>
    <Navbar/>
    <Hero/>
    <Content/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default Home
