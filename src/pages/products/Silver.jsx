import React, { useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import Headerps from '../../components/Header/Headerps';
import Back from '../../assets/background.jpg';
import ProductImage1 from '../../assets/slide3.webp';
import ProductImage2 from '../../assets/slide3.webp';
import Thumbnail1 from '../../assets/1.png'; // الصورة المصغرة الأولى
import Thumbnail2 from '../../assets/2.png'; // الصورة المصغرة الثانية
import Thumbnail3 from '../../assets/3.png'; // الصورة المصغرة الثالثة
import Thumbnail4 from '../../assets/wht.jpeg'; // الصورة المصغرة الثالثة
import stage from '../../assets/stage.png'; // الصورة التي ستوضع تحت المنتج الأول
import { useTranslation } from 'react-i18next';
import i18n from 'i18next';

const Silver = () => {
    const { t } = useTranslation();
    const currentLanguage = i18n.language || i18n.options.fallbackLng[0];

    // حالة لتخزين الصورة الحالية
    const [currentImage, setCurrentImage] = useState(ProductImage1);
    const [currentImage2, setCurrentImage2] = useState(ProductImage2);

    return (
        <>
            <Navbar />
            <Headerps name={t('Silver')} Carbg={Back} />

            {/* قسم المنتجات */}
            <div dir={currentLanguage === 'ar' ? 'rtl' : 'ltr'} className="container mx-auto px-2 py-24">
                <div className="grid grid-cols-1 gap-10 lg:mx-14">
                    {/* المنتج الأول */}
                    <div className="flex flex-col md:flex-row gap-6 pb-32">
                        <div className="md:w-1/2 shadow-3xl relative">
                        {/* الصورة الرئيسية */}
                        <div className='w-[80%] sm:h-[500px] my-10 justify-center mx-auto flex items-center'>
                            <img 
                                src={currentImage} 
                                alt="Product 1" 
                                className="w-auto hover:scale-110 p-8 mx-auto object-cover duration-200 rounded-lg z-50 relative" 
                            />
                        </div>

                        {/* الصور المصغرة */} 
                        <div className="absolute bottom-[-80px] sm:top-0 sm:start-[-100px] flex sm:flex-col gap-1 w-full">
                            {[ProductImage1, Thumbnail1, Thumbnail2, Thumbnail3, Thumbnail4].map((thumb, index) => (
                                <img 
                                    key={index} 
                                    src={thumb} 
                                    alt={`Thumbnail ${index + 1}`} 
                                    onClick={() => setCurrentImage(thumb)} 
                                    className={`cursor-pointer hover:scale-125 duration-200 border-2 rounded-md ${
                                        currentImage === thumb 
                                            ? 'border-main w-16 h-16 object-contain' 
                                            : 'border-gray-300 w-16 h-16 object-cover'
                                    }`}
                                />
                            ))}
                        </div>
                    </div>



                    <div className="md:w-1/2 text-center sm:text-start sm:px-12 sm:mt-0 mt-20">
                    {/* العنوان مع خط رمادي */}
                    <h2 className="text-4xl font-bold text-main mb-4 hover:text-blue-500 duration-200 border-b-[1px] border-gray-300 pb-5">
                        {t('Kiro Stainless steel')}
                    </h2>

                    {/* الفقرة مع خط رمادي */}
                    <p className="text-gray-700 text-2xl border-b-[1px] border-gray-300 pb-5 mb-4">
                        {t('info')}
                    </p>
                    <p className="text-gray-700 text-2xl border-b-[1px] border-gray-300 pb-5 mb-4">{t('Size')} 44x39x21{t('cm')}</p>
                    <p className="text-gray-700 text-2xl border-b-[1px] border-gray-300 pb-5 mb-4">{t('Warranty: Lifetime')}</p>
                    <p className="text-gray-700 text-2xl pb-5 mb-4">{t('Brand: Kiro Stainless steel')}</p>
                    </div>

                    </div>

                    {/* المنتج الثاني */} 
                    <div className="flex flex-col md:flex-row gap-6 pb-12">
                    <div className="md:w-1/2 shadow-3xl relative ">
                        {/* الصورة الرئيسية */}
                        <div className='w-auto m-6 sm:h-[600px] justify-center flex items-center'>
                            <img 
                                src={currentImage2} 
                                alt="Product 1" 
                                className="w-auto hover:scale-110 p-8 mx-auto object-cover duration-200 rounded-lg z-50 relative" 
                            />
                        </div>

                        {/* الصور المصغرة */}
                        <div className="absolute bottom-[-80px] sm:top-0 sm:start-[-100px] flex sm:flex-col gap-1 w-full">
                            {[ProductImage2, Thumbnail1, Thumbnail2, Thumbnail3, Thumbnail4].map((thumb, index) => (
                                <img 
                                    key={index} 
                                    src={thumb} 
                                    alt={`Thumbnail ${index + 1}`} 
                                    onClick={() => setCurrentImage2(thumb)} 
                                    className={`cursor-pointer hover:scale-125 duration-200 border-2 rounded-md ${
                                        currentImage2 === thumb 
                                            ? 'border-main w-16 h-16 object-contain' 
                                            : 'border-gray-300 w-16 h-16 object-cover'
                                    }`}
                                />
                            ))}
                        </div>
                    </div>
                    <div className="md:w-1/2 text-center sm:text-start sm:px-12 sm:mt-0 mt-20">
                    {/* العنوان مع خط رمادي */}
                    <h2 className="text-4xl font-bold text-main mb-4 hover:text-blue-500 duration-200 border-b-[1px] border-gray-300 pb-5">
                        {t('Kiro Stainless steel')}
                    </h2>

                    {/* الفقرة مع خط رمادي */}
                    <p className="text-gray-700 text-2xl border-b-[1px] border-gray-300 pb-5 mb-4">
                        {t('info')}
                    </p>
                    <p className="text-gray-700 text-2xl border-b-[1px] border-gray-300 pb-5 mb-4">{t('Size')} 50x43x21{t('cm')}</p>
                    <p className="text-gray-700 text-2xl border-b-[1px] border-gray-300 pb-5 mb-4">{t('Warranty: Lifetime')}</p>
                    <p className="text-gray-700 text-2xl pb-5 mb-4">{t('Brand: Kiro Stainless steel')}</p>
                    </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
};

export default Silver;


