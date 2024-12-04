import { withTranslation } from 'react-i18next';
import i18n from 'i18next';
import factoryimg from '../../assets/factory7.jpg'

const Section1 = ({t}) => {
  const currentLanguage = i18n.language || i18n.options.fallbackLng[0];
  
  return (
    <section 
      dir={currentLanguage === 'ar' ? 'rtl' : 'ltr'} 
      className="bg-white h-full py-12 flex flex-col justify-center items-center"
    >
      {/* النص */}
      <div className="w-full px-5 md:px-32 text-center">
        <h1 className='text-xl font-semibold pb-4'>{t("abouth")}</h1>
        <p className="text-lg text-gray-800 leading-relaxed">
        {t("aboutp")}
        </p>
      </div>

      {/* الصورة */}
      <div className="w-full pt-8">
        <img 
          src={factoryimg} 
          alt="Example" 
          className="w-full h-auto object-cover"
        />
      </div>
    </section> 
  );
};

export default withTranslation()(Section1);
