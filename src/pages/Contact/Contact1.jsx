import React from 'react';
import { motion } from 'framer-motion';
import { withTranslation } from 'react-i18next';
import { FaLocationDot } from "react-icons/fa6";
import { FiPhone } from 'react-icons/fi'; 
import i18n from 'i18next';
import { SlEarphonesAlt } from "react-icons/sl";
import { TbPlaneTilt } from "react-icons/tb";

const Contact1 = ({t}) => {
    const currentLanguage = i18n.language || i18n.options.fallbackLng[0];

  return (
    <div className="flex justify-between my-32 items-center bg-white"
    dir={currentLanguage === 'ar' ? 'rtl' : 'ltr'}
    >
      {/* النص الذي يظهر من الأسفل والخريطة */}
      <motion.div
        className="text-start ps-2 xl:px-[100px] w-full md:py-8 bg-white flex flex-col xl:flex-row justify-between"
        initial={{ opacity: 0, y: 120 }}  
        animate={{ opacity: 1, y: 0 }}   
        transition={{ duration: 1 }}
      >
        {/* النص */}
        <div className="w-full sm:mt-16 mb-12 md:mb-0  lg:ps-12">
            <h1 className="text-4xl font-bold mb-4">{t('Contact Us')}</h1>
            <div className='pb-4'>
                <h2 className='font-bold text-2xl py-2'>{t('Address')}</h2>
                <p className="sm:text-lg text-sm font-semibold py-1 pt-4 flex items-center gap-1">
                <FaLocationDot/>{t('location1')}
                </p>
            </div>
            <div className='pb-4'>
                <h2 className='font-bold text-2xl py-1 pt-2'>{t("Head Office")}</h2>
                <p className="sm:text-lg text-sm font-semibold py-2 pt-4 flex items-center gap-1">
                <FaLocationDot/>{t('location2')}
                </p>
                <p className="sm:text-lg text-sm font-semibold py-2 flex items-center gap-1">
                <FiPhone/>{t('Contactp')}
                </p>
                <p className="sm:text-lg text-sm font-semibold py-2 flex items-center gap-2">
                <SlEarphonesAlt/>{t('Contactp2')}
                </p>
                <p className="sm:text-lg text-sm font-semibold py-2 flex items-center gap-2">
                <TbPlaneTilt/>{t('Contactp3')}
                </p>
            </div>
        </div>

        {/* خريطة جوجل */}
        <div className="w-full lg:mb-0 mb-10 lg:mx-10">
            {/* عنوان المعرض */}
            <div className="mb-4">
                <a 
                    href="https://www.google.com/maps/place/30.13751407487679,31.334234275557307" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-2xl font-bold text-blue-600 hover:underline"
                >
                    {t("Gallery Location")}
                </a>
            </div>

            <iframe
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3450.486146316989!2d31.334234275557307!3d30.13751407487679!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzDCsDA4JzE1LjEiTiAzMcKwMjAnMTIuNSJF!5e0!3m2!1sen!2seg!4v1734134645477!5m2!1sen!2seg"
                width="100%"
                height="500px"
                style={{ border: 0 }}
                allowFullScreen
                aria-hidden="false"
                tabIndex="0"
            />
        </div>
        {/* خريطة جوجل */}
        <div className="w-full ">
            {/* عنوان المعرض */}
            <div className="mb-4">
                <a 
                    href="https://www.google.com/maps/place/30.13751407487679,31.334234275557307" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-2xl font-bold text-blue-600 hover:underline"
                >
                    {t("Factory Location")}
                </a>
            </div>

            <iframe
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3450.486146316989!2d31.334234275557307!3d30.13751407487679!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzDCsDA4JzE1LjEiTiAzMcKwMjAnMTIuNSJF!5e0!3m2!1sen!2seg!4v1734134645477!5m2!1sen!2seg"
                width="100%"
                height="500px"
                style={{ border: 0 }}
                allowFullScreen
                aria-hidden="false"
                tabIndex="0"
            />
        </div>
      </motion.div>
    </div>
  );
};

export default withTranslation()(Contact1);
