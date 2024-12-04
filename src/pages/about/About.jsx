import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import Headerps from '../../components/Header/Headerps'
import Section1 from './section1'
import Section2 from './section2'
import Bg from '../../assets/background.jpg'
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();

  return (
    <>
      <Navbar/>
      <Headerps name={t('About')} Carbg={Bg}/> 
      <Section1/>
      <Section2/>
      <Footer/>
    </>
  )
}

export default About
