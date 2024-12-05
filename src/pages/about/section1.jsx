import { withTranslation } from 'react-i18next';
import i18n from 'i18next';
import factoryimg from '../../assets/factory7.jpg'

const Section1 = ({t}) => {
  const currentLanguage = i18n.language || i18n.options.fallbackLng[0];
  
  return (
    <section 
      dir={currentLanguage === 'ar' ? 'rtl' : 'ltr'} 
      className="bg-white h-full  flex flex-col justify-center items-center"
    >

      {/* الصورة */}
      <div className="w-full relative">
        <img 
          src={factoryimg} 
          alt="Example" 
          className="w-full h-auto object-cover"
        />
        {/* النص على الصورة */}
        <div className="absolute w-full px-5 sm:w-auto sm:px-0 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center z-20">
          <h1 className="md:text-3xl font-semibold">{t("abouth")}</h1>
          <p className="md:text-lg">{t("aboutp")}</p>
        </div>
      </div>
    </section> 
  );
};

export default withTranslation()(Section1);
