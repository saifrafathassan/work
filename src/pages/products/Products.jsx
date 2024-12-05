import Headerps from '../../components/Header/Headerps'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import Bg from '../../assets/background.jpg'
import { useTranslation } from 'react-i18next';

const Products = () => {
    const { t } = useTranslation();
  return (
    <>
      <Navbar/>
      <Headerps name={t('Products')} Carbg={Bg}/> 
      <Footer/>
    </>
  )
}

export default Products
