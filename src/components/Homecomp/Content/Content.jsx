import React from 'react';
import VideoSrc from '../../../assets/Final Edit.mp4';
import { withTranslation } from 'react-i18next';
import i18n from 'i18next';

const Content = ({ t }) => {
  const currentLanguage = i18n.language || i18n.options.fallbackLng[0];

  return (
    <div className="flex flex-col items-center justify-center p-8 bg-gray-100">
      {/* النص الأساسي */}
      <div
        dir={currentLanguage === 'ar' ? 'rtl' : 'ltr'}
        className="w-full md:w-2/3 lg:w-1/2 text-center mb-8"
      >
        <h1 className="text-3xl sm:text-4xl font-bold text-main mb-4">{t('h1')}</h1>
        <p className="text-xl sm:text-2xl text-gray-800">{t('content')}</p>
      </div>

      {/* الفيديو */}
      <div className="w-screen md:w-2/3 lg:w-2/2 px-4"> 
        <video
          src={VideoSrc}
          autoPlay
          loop
          muted
          playsInline
          className=" rounded-lg shadow-lg w-full"
        />
      </div>

      {/* فقرة إضافية تحت الفيديو */}
      <div
        dir={currentLanguage === 'ar' ? 'rtl' : 'ltr'}
        className="w-full md:w-2/3 lg:w-1/2 text-center mt-8"
      >
        <p className="text-xl sm:text-2xl text-gray-800">{t('content2')}</p>
      </div>
    </div>
  );
};

export default withTranslation()(Content);
