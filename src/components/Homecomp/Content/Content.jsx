import React from 'react';
import IMG from '../../../assets/steelfactory.jpg'
import { withTranslation  } from 'react-i18next';

const Content = ({t}) => {
  return (
    <div className="flex flex-col items-center justify-center p-8 bg-gray-100">
      {/* النص الأساسي */}
      <div className="w-full md:w-2/3 lg:w-1/2 text-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
        {t('h1')}
        </h1>
        <p className="text-lg text-gray-600">
        {t('content')}
        </p>
      </div>

      {/* الصورة */}
      <div className="w-full md:w-2/3 lg:w-1/2">
        <img
          src={IMG}
          alt="منتجات المصنع"
          className="rounded-lg shadow-lg w-full"
        />
      </div>

      {/* فقرة إضافية تحت الصورة */}
      <div className="w-full md:w-2/3 lg:w-1/2 text-center mt-6">
        <p className="text-lg text-gray-600">
        {t('content2')}
        </p>
      </div>
    </div>
  );
};

export default withTranslation()(Content);
