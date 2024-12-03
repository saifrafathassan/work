import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import Headerps from '../../components/Header/Headerps'
import Bg from '../../assets/background.jpg'
import { useTranslation } from 'react-i18next';

const Contactus = () => {
  const { t } = useTranslation();

  return (
    <>
      <Navbar/>
      <Headerps name={t('Contact')} Carbg={Bg}/> 
      <Footer/>
    </>
  )
}

export default Contactus

