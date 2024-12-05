import { Link } from 'react-router-dom';
import { withTranslation } from 'react-i18next';
import i18n from 'i18next';
import Kero from '../../assets/Asset4.png'
import { FiPhone } from 'react-icons/fi'; 
import { FaLocationDot } from "react-icons/fa6";

function Footer({ t }) {

    const currentLanguage = i18n.language || i18n.options.fallbackLng[0];

    return ( 
        <footer dir={currentLanguage === 'ar' ? 'rtl' : 'ltr'} className="text-white body-font bg-main"  >
<div className="container px-5 py-24 mx-auto" >
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:text-start text-center">
    {/* العمود الأول: الصورة */}
    <div className="lg:w-auto w-full px-4 ">
      <img className="mx-auto" src={Kero} alt="Kero" />
    </div>

    {/* العمود الثاني: الروابط */}
    <div className="lg:w-auto w-full px-4 lg:ms-20">
      <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">
        {t('Explore')}
      </h2>
      <nav className="list-none mb-10">
        <li>
          <Link to={'/'}  aria-label="Home page" className="text-white hover:text-gray-300">
            {t('Home')}
          </Link>
        </li>
        <li>
          <Link to={'/about'} aria-label="Learn more about us" className="text-white hover:text-gray-300">
            {t('About')}
          </Link>
        </li>
        <li>
          <Link to={'/products'} aria-label="Our Products" className="text-white hover:text-gray-300">
            {t('Products')}
          </Link>
        </li>
        <li>
          <Link to={'/contact'} aria-label="Contact us" className="text-white hover:text-gray-300">
            {t('Contact')}
          </Link>
        </li>
      </nav>
    </div>

    {/* العمود الثالث: الاتصال */}
    <div className="lg:w-auto w-full px-4">
  <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3 ">
    {t('Contact')}
  </h2>
  <nav className="list-none mb-10">
    <li className="flex items-center justify-center md:justify-start gap-1 text-white">
      <FiPhone className="mr-2 text-lg" />
      <span>0224949473</span>
    </li>
    <li className="flex items-center justify-center md:justify-start gap-1 text-white py-2">
      <FaLocationDot className="mr-2 text-lg" />
      <span className='text-sm sm:text-md'>{t('location1')}</span>
    </li>
    <li className="flex items-center justify-center md:justify-start gap-1 text-white">
      <FaLocationDot className="mr-2 text-lg" />
      <span className='text-sm sm:text-md'>{t('location2')}</span>
    </li>
  </nav>
</div>

  </div>
</div>

{/* 
            <div className="bg-main" >
                <div className="container px-5 py-3 mx-auto flex items-center sm:flex-row flex-col">
                    <Link to={'/'} className='flex'>
                        <div className="flex ">
                            <h1 className=' text-2xl font-bold text-transparent bg-clip-text bg-white px-2 pb-1 rounded' >SIVIN STEEL</h1>
                        </div>
                    </Link>
                    <span className="inline-flex sm:ms-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                        <a  className="text-white">
                            <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
                                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                            </svg>
                        </a>
                        <a  className="ms-3 text-white">
                            <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
                                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                            </svg>
                        </a>
                        <a  className="ms-3 text-white">
                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
                                <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
                                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
                            </svg>
                        </a>
                        <a  className="ms-3 text-white">
                            <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={0} className="w-5 h-5" viewBox="0 0 24 24">
                                <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                                <circle cx={4} cy={4} r={2} stroke="none" />
                            </svg>
                        </a>
                    </span>
                </div>
            </div> */}
        </footer>
    );
}

export default withTranslation()(Footer);