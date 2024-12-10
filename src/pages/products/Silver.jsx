import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import Headerps from '../../components/Header/Headerps';
import Back from '../../assets/background.jpg';
import ProductImage1 from '../../assets/slide1.webp'; 
import ProductImage2 from '../../assets/slide2.webp'; 
import { useTranslation } from 'react-i18next';

const Silver = () => {
    const { t } = useTranslation();

    return (
        <>
            <Navbar />
            <Headerps name={t('Silver')} Carbg={Back} />

            {/* قسم المنتجات */}
            <div className="container mx-auto px-4 py-24">
                <div className="grid grid-cols-1 gap-10">
                    {/* المنتج الأول */}
                    <div className="flex flex-col md:flex-row gap-6 pb-20">
                        <div className="md:w-1/2 shadow-3xl">
                            <img 
                                src={ProductImage1} 
                                alt="Product 1" 
                                className="w-full rounded-lg shadow-lg" 
                            />
                        </div>
                        <div className="md:w-1/2 text-start pt-12 sm:px-12">
                            <h2 className="text-4xl font-bold text-main mb-4 hover:text-blue-500 duration-200">72x45x23</h2>
                            <p className="text-gray-700 text-2xl">
                                {t('info')}
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
                        <div className="md:w-1/2 text-start pt-12 sm:px-12">
                            <h2 className="text-4xl font-bold text-main mb-4 hover:text-blue-500 duration-200">72x45x23</h2>
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
