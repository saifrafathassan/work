import React, { useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import Headerps from '../../components/Header/Headerps';
import Back from '../../assets/background.jpg';
import ProductImage1 from '../../assets/slide3.webp';
import ProductImage2 from '../../assets/slide3.webp';
import Thumbnail1 from '../../assets/thb1.png'; // الصورة المصغرة الأولى
import Thumbnail2 from '../../assets/thb2.png'; // الصورة المصغرة الثانية
import Thumbnail3 from '../../assets/thb3.png'; // الصورة المصغرة الثالثة
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
            <div dir={currentLanguage === 'ar' ? 'rtl' : 'ltr'} className="container mx-auto px-4 py-24">
                <div className="grid grid-cols-1 gap-10">
                    {/* المنتج الأول */}
                    <div className="flex flex-col md:flex-row gap-6 pb-32">
                        <div className="md:w-1/2 shadow-3xl relative">
                        {/* الصورة الرئيسية */}
                        <div className='w-auto sm:h-[600px] justify-center flex items-center'>
                            <img 
                                src={currentImage} 
                                alt="Product 1" 
                                className="w-auto hover:scale-110 p-8 mx-auto object-cover duration-200 rounded-lg z-50 relative" 
                            />
                        </div>

                        {/* الصور المصغرة */}
                        <div className="absolute bottom-[-80px] w-full flex justify-center sm:justify-start gap-1">
                            {[ProductImage1, Thumbnail1, Thumbnail2, Thumbnail3].map((thumb, index) => (
                                <img 
                                    key={index} 
                                    src={thumb} 
                                    alt={`Thumbnail ${index + 1}`} 
                                    onClick={() => setCurrentImage(thumb)} 
                                    className={`cursor-pointer hover:scale-125 duration-200 border-2 rounded-md ${
                                        currentImage === thumb 
                                            ? 'border-main w-20 h-16 object-contain' 
                                            : 'border-gray-300 w-16 h-16 object-cover'
                                    }`}
                                />
                            ))}
                        </div>
                    </div>



                        <div className="md:w-1/2 text-center sm:text-start pt-20 sm:px-12">
                            <h2 className="text-4xl font-bold text-main mb-4 hover:text-blue-500 duration-200">44x39x21cm</h2>
                            <p className="text-gray-700 text-2xl">
                                {t('info')}
                            </p>
                        </div>
                    </div>

                    {/* المنتج الثاني */} 
                    <div className="flex flex-col md:flex-row gap-6 pb-12">
                    <div className="md:w-1/2 shadow-3xl relative ">
                        {/* الصورة الرئيسية */}
                        <div className='w-auto sm:h-[600px] justify-center flex items-center'>
                            <img 
                                src={currentImage2} 
                                alt="Product 1" 
                                className="w-auto hover:scale-110 p-8 mx-auto object-cover duration-200 rounded-lg z-50 relative" 
                            />
                        </div>

                        {/* الصور المصغرة */}
                        <div className="absolute bottom-[-80px] w-full flex justify-center sm:justify-start gap-1">
                            {[ProductImage2, Thumbnail1, Thumbnail2, Thumbnail3].map((thumb, index) => (
                                <img 
                                    key={index} 
                                    src={thumb} 
                                    alt={`Thumbnail ${index + 1}`} 
                                    onClick={() => setCurrentImage2(thumb)} 
                                    className={`cursor-pointer hover:scale-125 duration-200 border-2 rounded-md ${
                                        currentImage2 === thumb 
                                            ? 'border-main w-20 h-16 object-contain' 
                                            : 'border-gray-300 w-16 h-16 object-cover'
                                    }`}
                                />
                            ))}
                        </div>
                    </div>
                        <div className="md:w-1/2 text-center sm:text-start pt-20 sm:px-12">
                            <h2 className="text-4xl font-bold text-main mb-4 hover:text-blue-500 duration-200">50x43x21cm</h2>
                            <p className="text-gray-700 text-2xl">
                                {t('info')}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
};

export default Silver;


