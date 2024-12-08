import React, { useState } from "react";
import { withTranslation } from 'react-i18next';
import Productdet from './Productdet';
import i18n from 'i18next';

const PSection = ({ t }) => {
  const [selectedCategory, setSelectedCategory] = useState("Diamond");
  const currentLanguage = i18n.language || i18n.options.fallbackLng[0];
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const categories = [
    t('Diamond'),
    t('Gold'),
    t('Silver')
  ];

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setIsDropdownOpen(false); // غلق القائمة بعد الاختيار
  };

  return (
    <div dir={currentLanguage === 'ar' ? 'rtl' : 'ltr'} className="flex flex-col items-center justify-center h-full bg-gray-100 py-10">
      <div className="relative flex flex-col items-center gap-6 pt-16">
        <h3 className="font-semibold text-2xl">{t('Select Category')}</h3>
        <button
          onClick={toggleDropdown}
          className="px-24 py-3 bg-blue-500 text-white font-medium rounded-md shadow-md focus:outline-none"
        >
          {t(selectedCategory)}
        </button>

        {/* قائمة منسدلة بدون تأثير على بقية الكومبوننتات */}
        {isDropdownOpen && (
          <ul className="absolute top-full mt-2 w-full bg-white border border-gray-300 rounded-md shadow-lg z-[10]">
            {categories.map((category) => (
              <li
                key={category}
                className="px-4 py-2 hover:bg-blue-100 cursor-pointer"
                onClick={() => handleCategorySelect(category)}
              >
                {category}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* إضافة المنتج بناءً على التصنيف المحدد */}
      <Productdet selectedCategory={selectedCategory} />
    </div>
  );
};

export default withTranslation()(PSection);
