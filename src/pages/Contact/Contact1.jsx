import React from 'react';
import { motion } from 'framer-motion';
import { withTranslation } from 'react-i18next';
import { FaLocationDot } from "react-icons/fa6";
import { FiPhone } from 'react-icons/fi'; 
import i18n from 'i18next';
import { SlEarphonesAlt } from "react-icons/sl";

const Contact1 = ({t}) => {
    const currentLanguage = i18n.language || i18n.options.fallbackLng[0];

  return (
    <div className="flex justify-center items-center h-[700px] bg-gray-100"
    dir={currentLanguage === 'ar' ? 'rtl' : 'ltr'}
    >
      {/* النص الذي يظهر من الأسفل */}
      <motion.div
        className="text-start ps-10 md:ps-[200px] py-32 w-full p-8 bg-white rounded-lg shadow-lg"
        initial={{ opacity: 0, y: 100 }}  
        animate={{ opacity: 1, y: 0 }}   
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl font-bold mb-4">{t('Contact Us')}</h1>
        <div className='pb-4'>
            <h2 className='font-bold text-2xl py-2'>{t('Address')}</h2>
            <p className="text-lg font-semibold py-1 pt-4 flex items-center gap-1">
            <FaLocationDot/>{t('location1')}
            </p>
        </div>
        <div className='pb-4'>
            <h2 className='font-bold text-2xl py-1 pt-2'>{t("Head Office")}</h2>
            <p className="text-lg font-semibold py-2 pt-4 flex items-center gap-1">
            <FaLocationDot/>{t('location2')}
            </p>
            <p className="text-lg font-semibold py-2 flex items-center gap-1">
            <FiPhone/>{t('Contactp')}
            </p>
            <p className="text-lg font-semibold py-2 flex items-center gap-2">
            <SlEarphonesAlt/>{t('Contactp2')}
            </p>
        </div>
      </motion.div>
    </div>
  );
};

export default withTranslation()(Contact1);
