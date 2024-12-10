import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import Headerps from '../../components/Header/Headerps';
import Back from '../../assets/background.jpg';
import ProductImage1 from '../../assets/slide1.webp'; 
import ProductImage2 from '../../assets/slide2.webp';
import stage from '../../assets/stage.png'; // الصورة التي ستوضع تحت المنتج الأول
import { useTranslation } from 'react-i18next';

const Gold = () => {
    const { t } = useTranslation();

    return (
        <>
            <Navbar />
            <Headerps name={t('Gold')} Carbg={Back} />

            {/* قسم المنتجات */}
            <div className="container mx-auto px-4 py-24">
                <div className="grid grid-cols-1 gap-10">
                    {/* المنتج الأول */}
                    <div className="flex flex-col md:flex-row gap-6 pb-20">
                        <div className="md:w-1/2 shadow-3xl relative">
                            <img 
                                src={ProductImage1} 
                                alt="Product 1" 
                                className="w-full hover:scale-110 duration-200 rounded-lg z-50 relative sm:h-[550px]" 
                            />

                            {/* وضع صورة "stage" تحت الصورة الأولى مع التأكد من التصاقها */}
                            <img 
                                src={stage} 
                                alt="Stage" 
                                className="absolute sm:ms-1 bottom-0 left-0 w-full rounded-lg object-cover"
                            />
                        </div>
                        <div className="md:w-1/2 text-start pt-12 sm:ps-12">
                            <h2 className="text-4xl font-bold text-main mb-4 hover:text-blue-500 duration-200">{t('Product 1')}</h2>
                            <p className="text-gray-700">
                                {t('This is a brief description of the first product.')}
                            </p>
                        </div>
                    </div>

                    {/* المنتج الثاني */}
                    <div className="flex flex-col md:flex-row gap-6">
                        <div className="md:w-1/2 shadow-3xl">
                            <img 
                                src={ProductImage2} 
                                alt="Product 2" 
                                className="w-full rounded-lg shadow-lg" 
                            />
                        </div>
                        <div className="md:w-1/2 text-start pt-12 sm:ps-12">
                            <h2 className="text-4xl font-bold text-main mb-4 hover:text-blue-500 duration-200">{t('Product 2')}</h2>
                            <p className="text-gray-700">
                                {t('This is a brief description of the second product.')}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
};

export default Gold;
