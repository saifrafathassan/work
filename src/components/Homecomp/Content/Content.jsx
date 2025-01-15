import React from 'react';
import { motion } from 'framer-motion';
import { withTranslation } from 'react-i18next';
import i18n from 'i18next';

const Content = ({ t }) => {
  const currentLanguage = i18n.language || i18n.options.fallbackLng[0];

  // إعدادات الأنيميشن
  const textAnimation = {
    hidden: { x: '-50%', opacity: 0 }, // البداية: خارج الشاشة من اليسار
    visible: { x: 0, opacity: 1 }, // النهاية: في مكانه الطبيعي
  };

  return (
    <div className="flex flex-col items-center justify-center p-8 bg-gray-100">
      {/* النص الأساسي */}
      <motion.div
        dir={currentLanguage === 'ar' ? 'rtl' : 'ltr'}
        className="w-full md:w-2/3 lg:w-1/2 text-center mb-8"
        initial="hidden" // حالة البداية
        animate="visible" // حالة النهاية
        variants={{
          hidden: { x: '50%', opacity: 0 }, // البداية من اليمين
          visible: { x: 0, opacity: 1 }, // النهاية في مكانها الطبيعي
        }}
        transition={{ duration: 1.5, ease: 'easeInOut' }} // مدة الحركة
      >
        <h1 className="text-3xl sm:text-4xl font-bold text-main mb-4">
          {t('h1')}
        </h1>
        <p className="text-xl sm:text-2xl text-gray-800">{t('content')}</p>
      </motion.div>

      {/* الفيديو */}
      <div className="w-screen md:w-2/3 lg:w-2/2 px-4">
        <video
          src="/FinalEdit.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="rounded-lg shadow-lg w-full"
        />
      </div>

      {/* فقرة إضافية تحت الفيديو */}
      <motion.div
        dir={currentLanguage === 'ar' ? 'rtl' : 'ltr'}
        className="w-full md:w-2/3 lg:w-1/2 text-center mt-8"
        initial="hidden" // حالة البداية
        whileInView="visible" // حالة النهاية عند دخول العنصر في الشاشة
        viewport={{ once: true, amount: 0.5 }} // الحركة تحدث مرة واحدة فقط
        variants={textAnimation} // تطبيق الأنيميشن
        transition={{ duration: 1.5, ease: 'easeInOut' }} // مدة الحركة
      >
        <p className="text-xl sm:text-2xl text-gray-800">
          {t('content2')}
        </p>
      </motion.div>
    </div>
  );
};

export default withTranslation()(Content);
