import React, { useState, useRef  } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import Headerps from '../../components/Header/Headerps';
import Back from '../../assets/background.jpg';
import ProductImage1 from '../../assets/slide12.png';
import ProductImage2 from '../../assets/slide3.webp';
import Thumbnail1 from '../../assets/04.png'; // الصورة المصغرة الأولى
import Thumbnail2 from '../../assets/03.png'; // الصورة المصغرة الثانية
import Thumbnail3 from '../../assets/01.png'; // الصورة المصغرة الثالثة
import Thumbnail4 from '../../assets/wht.jpeg'; // الصورة المصغرة الثالثة
import stage from '../../assets/stage.png'; // الصورة التي ستوضع تحت المنتج الأول
import { useTranslation } from 'react-i18next';
import i18n from 'i18next';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

const Silver = () => {
    const { t } = useTranslation();
    const currentLanguage = i18n.language || i18n.options.fallbackLng[0];

    // حالة لتخزين الصورة الحالية
    const [currentImage, setCurrentImage] = useState(ProductImage1);
    const [currentImage2, setCurrentImage2] = useState(ProductImage2);

    const [scale, setScale] = useState(1); 
    const [position, setPosition] = useState({ x: 0, y: 0 }); 
    const imageRef = useRef(null); 

    const handleMouseMove = (e) => {
        const { left, top, width, height } = imageRef.current.getBoundingClientRect();
        const mouseX = e.clientX - left;
        const mouseY = e.clientY - top;
        setPosition({
            x: (mouseX / width) * 100,
            y: (mouseY / height) * 100,
        });
    };

    const handleMouseEnter = () => {
        setScale(2); // تكبير الصورة عند دخول الماوس
    };

    const handleMouseLeave = () => {
        setScale(1); // إعادة الصورة لحجمها الأصلي عند مغادرة الماوس
    };

    return (
        <>
            <Navbar />
            <Headerps name={t('Silver')} Carbg={Back} />

            {/* قسم المنتجات */}
            <div dir={currentLanguage === 'ar' ? 'rtl' : 'ltr'} className="container mx-auto px-2 py-24">
                <div className="grid grid-cols-1 gap-10 lg:mx-14">
                    {/* المنتج الأول */}
                    <div className="flex flex-col md:flex-row gap-6 pb-32">
                        <div className="md:w-1/2 relative">
                        {/* الصورة الرئيسية */}
                        <div className='w-full sm:h-[500px] justify-center mx-auto flex items-center'>
                            <Zoom closeOnScroll={true}>
                            <img 
                                src={currentImage} 
                                alt="Product 1" 
                                className="w-auto p-8 mx-auto object-cover rounded-lg z-50 relative" 
                            />

                            </Zoom>
                        </div>

                        {/* الصور المصغرة */} 
                        <div className="absolute bottom-[-80px] sm:top-10 sm:start-[-100px] flex sm:flex-col gap-1 w-full">
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
                    <h2 className="text-3xl font-bold text-main mb-4 hover:text-blue-500 duration-200 border-b-[1px] border-gray-300 pb-5">
                        {t('Kiro Stainless steel')} 44x39x21{t('cm')}
                    </h2>

                    {/* الفقرة مع خط رمادي */}
                    <p className="text-gray-700 text-xl border-b-[1px] border-gray-300 pb-5 mb-4">
                        {t('info')}
                    </p>
                    <p className="text-gray-700 text-xl border-b-[1px] border-gray-300 pb-5 mb-4"><span className='font-bold text-black pe-2'>{t('Size')}</span>  44x39x21{t('cm')}</p>
                    <p className="text-gray-700 text-xl border-b-[1px] border-gray-300 pb-5 mb-4"><span className='font-bold text-black pe-2'>{t('Warranty')}</span> {t('Lifetime')}</p>
                    <p className="text-gray-700 text-xl border-b-[1px] border-gray-300 pb-5 mb-4"><span className='font-bold text-black pe-2'>{t('color')}</span> {t('gray')}</p>
                    <p className="text-gray-700 text-xl border-b-[1px] border-gray-300 pb-5 mb-4"><span className='font-bold text-black pe-2'>{t('Materials')}</span> {t('stainless steel high-quality')}</p>
                    <p className="text-gray-700 text-xl border-b-[1px] border-gray-300 pb-5 mb-4"><span className='font-bold text-black pe-2'>{t('Exchangetype')}</span> {t('network')}</p>
                    <p className="text-gray-700 text-xl pb-5 mb-4"><span className='font-bold text-black pe-2'>{t('Item shape')}</span> {t('rectangular')}</p>
                    </div>

                    </div>

                    {/* المنتج الثاني */} 
                    <div className="flex flex-col md:flex-row gap-6 pb-12">
                    <div className="md:w-1/2 relative ">
                        {/* الصورة الرئيسية */}
                        <div  className='w-[100%] overflow-hidden sm:h-[600px] justify-center flex items-center'>
                            <img 
                                    src={currentImage2} 
                                    alt="Product 1" 
                                    className="w-auto p-8 mx-auto object-cover rounded-lg z-50 relative" 
                                    onMouseMove={handleMouseMove} 
                                    onMouseEnter={handleMouseEnter} 
                                    onMouseLeave={handleMouseLeave} 
                                    ref={imageRef}
                                    style={{
                                        transform: `scale(${scale})`,
                                        transformOrigin: `${position.x}% ${position.y}%`, 
                                        transition: 'transform 0.2s ease', 
                                    }}
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


