import { withTranslation } from 'react-i18next';
import i18n from 'i18next';
import { motion } from 'framer-motion';
import factoryimg from '../../assets/factory7.jpg';

const Section1 = ({ t }) => {
  const currentLanguage = i18n.language || i18n.options.fallbackLng[0];
  const isArabic = currentLanguage === 'ar';

  // إعدادات الأنيميشن
  const textVariants = {
    hidden: { opacity: 0, x: isArabic ? 100 : -100 }, // يتحرك من الجهة المعاكسة
    visible: { opacity: 1, x: 0 }, // الموضع النهائي
  };

  return (
    <section
      dir={isArabic ? 'rtl' : 'ltr'}
      className="bg-white h-full flex flex-col justify-center items-center overflow-hidden"
    >
      {/* الصورة */}
      <div className="w-full relative">
        {/* الصورة الرئيسية */}
        <img
          src={factoryimg}
          alt="Example"
          className="w-full h-auto object-cover"
        />

        {/* Overlay لتغميق الصورة */}
        <div className="absolute inset-0 bg-black bg-opacity-40 z-10"></div>

        {/* النص على الصورة */}
        <motion.div
          className={`absolute w-full sm:w-auto sm:px-20 top-[10%] sm:top-1/3 ${
            isArabic ? 'right-5' : 'left-5'
          } transform -translate-y-1/2 sm:translate-y-0 text-white text-${
            isArabic ? 'right' : 'left'
          } z-20`}
          initial="hidden"
          animate="visible"
          variants={textVariants}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          <motion.h1
            className="text-1xl sm:md:text-3xl font-semibold"
            variants={textVariants}
            transition={{ duration: 1.2, delay: 0.2 }}
          >
            {t('abouth')}
          </motion.h1>
          <motion.p
            className="text-base w-[300px] sm:pt-5 sm:md:text-lg font-semibold sm:w-full" 
            variants={textVariants}
            transition={{ duration: 1.4, delay: 0.4 }}
          >
            {t('aboutp')}
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default withTranslation()(Section1);
