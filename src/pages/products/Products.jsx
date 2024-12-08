import Headerps from '../../components/Header/Headerps'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import Bg from '../../assets/background.jpg'
import { useTranslation } from 'react-i18next';
import PSection from './PSection';
import Productdet from './Productdet';
import Gold from './Gold';
import Silver from './Silver';
import Diamond from './Diamond';

const Products = () => {
    const { t } = useTranslation();
  return (
    <>
      <Navbar/>
      <Headerps name={t('Products')} Carbg={Bg}/> 
      <Gold/>
      <Silver/>
      <Diamond/>
      <Footer/>
    </>
  )
}

export default Products
