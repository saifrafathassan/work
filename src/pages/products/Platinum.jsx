import React, { useState, useRef  } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import Headerps from '../../components/Header/Headerps';
import Back from '../../assets/background.jpg';
import ProductImage1 from '../../assets/plat.webp';
import ProductImage2 from '../../assets/plat1.webp';
import Thumbnail1 from '../../assets/Acs1.jpg'; // الصورة المصغرة الأولى
import { useTranslation } from 'react-i18next';
import i18n from 'i18next';
import {FaTimes} from 'react-icons/fa'
import {IoMdArrowDropleft, IoMdArrowDropright} from 'react-icons/io'
import Modal from 'react-modal';

const images = [ProductImage1, Thumbnail1];
const images1 = [ProductImage2, Thumbnail1];

const Platinum = () => {
    const { t } = useTranslation();
    const currentLanguage = i18n.language || i18n.options.fallbackLng[0];

    // حالة لتخزين الصورة الحالية
    const [currentImage, setCurrentImage] = useState(ProductImage1);
    const [currentImage1, setCurrentImage1] = useState(ProductImage2);

    const [modalIsOpenProduct1, setModalIsOpenProduct1] = useState(false);
    const [selectedImageIndexProduct1, setSelectedImageIndexProduct1] = useState(0);
    
    const [modalIsOpenProduct2, setModalIsOpenProduct2] = useState(false);
    const [selectedImageIndexProduct2, setSelectedImageIndexProduct2] = useState(0);
    
    // فتح المودال للمنتج الأول
    const openModalProduct1 = (index) => {
        setSelectedImageIndexProduct1(index);
        setModalIsOpenProduct1(true);
        document.body.style.overflow = 'hidden'; // تعطيل التمرير
    };
    
    // فتح المودال للمنتج الثاني
    const openModalProduct2 = (index) => {
        setSelectedImageIndexProduct2(index);
        setModalIsOpenProduct2(true);
        document.body.style.overflow = 'hidden'; // تعطيل التمرير
    };
    
    // إغلاق المودال
    const closeModal = () => {
        setModalIsOpenProduct1(false);
        setModalIsOpenProduct2(false);
        document.body.style.overflow = 'auto'; // استعادة التمرير
    };
    
    // الانتقال إلى الصورة التالية
    const nextImageProduct1 = () => {
        setSelectedImageIndexProduct1((selectedImageIndexProduct1 + 1) % images.length);
    };
    const nextImageProduct2 = () => {
        setSelectedImageIndexProduct2((selectedImageIndexProduct2 + 1) % images1.length);
    };
    
    // الانتقال إلى الصورة السابقة
    const prevImageProduct1 = () => {
        setSelectedImageIndexProduct1((selectedImageIndexProduct1 + images.length - 1) % images.length);
    };
    const prevImageProduct2 = () => {
        setSelectedImageIndexProduct2((selectedImageIndexProduct2 + images1.length - 1) % images1.length);
    };
    

    return (
        <>
            <Navbar />
            <Headerps name={t('Platinum')} Carbg={Back} />

            {/* قسم المنتجات */}
            <div dir={currentLanguage === 'ar' ? 'rtl' : 'ltr'} className="container mx-auto px-2 py-24">
                <div className="grid grid-cols-1 gap-10 lg:mx-14">
                    {/* المنتج الأول */}
                    <div className="flex flex-col md:flex-row gap-6 pb-32">
                        <div className="md:w-1/2 relative">
                        {/* الصورة الرئيسية */}
                        <div className='w-full sm:h-[500px] justify-center mx-auto flex items-center'>

                            <img 
                                          loading='lazy'
                                onClick={() => openModalProduct1(images.indexOf(currentImage))}
                                src={currentImage} 
                                alt="Product 1" 
                                className="w-[400px] h-[280px] sm:h-auto sm:w-auto p-8 mx-auto object-cover rounded-lg z-50 relative cursor-pointer" 
                            />
            <Modal
        isOpen={modalIsOpenProduct1} 
        onRequestClose={closeModal}
        contentLabel="Example Modal"
        style={{
            content: {
                backgroundColor: '#fff',
            display: 'flex',  
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '100%',
            height: '100%',
            boxShadow: 'none',
            border: 'none',
            },
            overlay: {
            position: 'fixed',
            top: 0,
            left: 0, 
            right: 0,
            bottom: 0,
            zIndex: '1500'
            },
        }}
        >
  <button className='bg-main rounded-md py-2 px-3 text-white z-40' style={{position: 'absolute', top: '20px', right: '20px'}} onClick={closeModal}>
    <FaTimes size={30}/>
  </button>
  <div 
    style={{
      position: 'relative',
      height: '100%',
      display: 'flex',
      width: '100%',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: "0px"
    }}
  >
    <button className='bg-main rounded-md sm:py-1 sm:px-1 text-white' onClick={prevImageProduct1}>
      <IoMdArrowDropleft size={30}/>
    </button>
    <img className='w-[280px] md:w-[800px] md:pb-20' src={images[selectedImageIndexProduct1]} alt='/'/>
    <button className='bg-main rounded-md sm:py-1 sm:px-1 text-white' onClick={nextImageProduct1}>
      <IoMdArrowDropright size={30}/>
    </button>
  </div>
            </Modal>


                        </div>

                        {/* الصور المصغرة */} 
                        <div className="absolute bottom-[-80px] sm:top-20 sm:start-[-100px] flex sm:flex-col gap-1 w-full justify-center sm:justify-normal">
                            {[ProductImage1, Thumbnail1].map((thumb, index) => (
                                <img 
                                              loading='lazy'
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
                    <h2 className="text-2xl sm:text-3xl font-bold text-main mb-4 hover:text-blue-500 duration-200 border-b-[1px] border-gray-300 pb-5">
                        {t('Kiro Stainless steel')} 72x45{t('cm')}
                    </h2>

                    {/* الفقرة مع خط رمادي */}
                    <p className="text-gray-700 text-lg sm:text-xl border-b-[1px] border-gray-300 pb-5 mb-4">
                        {t('info')}
                    </p>
                    <p className="text-gray-700 text-xl border-b-[1px] border-gray-300 pb-5 mb-4"><span className='font-bold text-black pe-2'>{t('Size')}</span>  72x45x23{t('cm')}</p>
                    <p className="text-gray-700 text-xl border-b-[1px] border-gray-300 pb-5 mb-4"><span className='font-bold text-black pe-2'>{t('color')}</span> {t('gray')}</p>
                    <p className="text-gray-700 text-xl border-b-[1px] border-gray-300 pb-5 mb-4"><span className='font-bold text-black pe-2'>{t('Exchangetype')}</span> {t('network')}</p>
                    <p className="text-gray-700 text-xl border-b-[1px] border-gray-300 pb-5 mb-4"><span className='font-bold text-black pe-2'>{t('Drainer size:')}</span>  110{t('mm')}</p>
                    <p className="text-gray-700 text-xl border-b-[1px] border-gray-300 pb-5 mb-4"><span className='font-bold text-black pe-2'>{t('Materials')}</span> {t('stainless steel high-quality')}</p>
                    <p className="text-gray-700 text-xl border-b-[1px] border-gray-300 pb-5 mb-4"><span className='font-bold text-black pe-2'>{t('Warranty')}</span> {t('Lifetime')}</p>
                    </div>

                    </div>

                    {/* المنتج التاني */}
                    <div className="flex flex-col md:flex-row gap-6 pb-32">
                        <div className="md:w-1/2 relative">
                        {/* الصورة الرئيسية */}
                        <div className='w-full sm:h-[500px] justify-center mx-auto flex items-center'>

                            <img 
                                          loading='lazy'
                                onClick={() => openModalProduct2(images1.indexOf(currentImage1))}
                                src={currentImage1} 
                                alt="Product 1" 
                                className="w-[400px] h-[300px] sm:h-auto sm:w-auto p-8 mx-auto object-cover rounded-lg z-50 relative cursor-pointer" 
                            />
            <Modal
        isOpen={modalIsOpenProduct2} 
        onRequestClose={closeModal}
        contentLabel="Example Modal"
        style={{
            content: {
                backgroundColor: '#fff',
            display: 'flex',  
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '100%',
            height: '100%',
            boxShadow: 'none',
            border: 'none',
            },
            overlay: {
            position: 'fixed',
            top: 0,
            left: 0, 
            right: 0,
            bottom: 0,
            zIndex: '1500'
            },
        }}
        >
  <button className='bg-main rounded-md py-2 px-3 text-white z-40' style={{position: 'absolute', top: '20px', right: '20px'}} onClick={closeModal}>
    <FaTimes size={30}/>
  </button>
  <div 
    style={{
      position: 'relative',
      height: '100%',
      display: 'flex',
      width: '100%',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: "0px"
    }}
  >
    <button className='bg-main rounded-md sm:py-2 sm:px-4 text-white' onClick={prevImageProduct2}>
      <IoMdArrowDropleft size={30}/>
    </button>
    <img className='w-[280px] md:w-[800px] md:pb-20' src={images1[selectedImageIndexProduct2]} alt='/'/>
    <button className='bg-main rounded-md sm:py-2 sm:px-4 text-white' onClick={nextImageProduct2}>
      <IoMdArrowDropright size={30}/>
    </button>
  </div>
            </Modal>


                        </div>

                        {/* الصور المصغرة */} 
                        <div className="absolute bottom-[-80px] sm:top-20 sm:start-[-100px] flex sm:flex-col gap-1 w-full justify-center sm:justify-normal">
                            {[ProductImage2, Thumbnail1].map((thumb, index) => (
                                <img 
                                              loading='lazy'
                                    key={index} 
                                    src={thumb} 
                                    alt={`Thumbnail ${index + 1}`} 
                                    onClick={() => setCurrentImage1(thumb)} 
                                    className={`cursor-pointer hover:scale-125 duration-200 border-2 rounded-md ${
                                        currentImage1 === thumb 
                                            ? 'border-main w-16 h-16 object-contain' 
                                            : 'border-gray-300 w-16 h-16 object-cover'
                                    }`}
                                />
                            ))}
                        </div>
                    </div>



                    <div className="md:w-1/2 text-center sm:text-start sm:px-12 sm:mt-0 mt-20">
                    {/* العنوان مع خط رمادي */}
                    <h2 className="text-2xl sm:text-3xl font-bold text-main mb-4 hover:text-blue-500 duration-200 border-b-[1px] border-gray-300 pb-5">
                        {t('Kiro Stainless steel')} 57x43{t('cm')}
                    </h2>

                    {/* الفقرة مع خط رمادي */}
                    <p className="text-gray-700 text-lg sm:text-xl border-b-[1px] border-gray-300 pb-5 mb-4">
                        {t('info')}
                    </p>
                    <p className="text-gray-700 text-xl border-b-[1px] border-gray-300 pb-5 mb-4"><span className='font-bold text-black pe-2'>{t('Size')}</span>  57x43x21{t('cm')}</p>
                    <p className="text-gray-700 text-xl border-b-[1px] border-gray-300 pb-5 mb-4"><span className='font-bold text-black pe-2'>{t('color')}</span> {t('gray')}</p>
                    <p className="text-gray-700 text-xl border-b-[1px] border-gray-300 pb-5 mb-4"><span className='font-bold text-black pe-2'>{t('Exchangetype')}</span> {t('network')}</p>
                    <p className="text-gray-700 text-xl border-b-[1px] border-gray-300 pb-5 mb-4"><span className='font-bold text-black pe-2'>{t('Drainer size:')}</span>  110{t('mm')}</p>
                    <p className="text-gray-700 text-xl border-b-[1px] border-gray-300 pb-5 mb-4"><span className='font-bold text-black pe-2'>{t('Materials')}</span> {t('stainless steel high-quality')}</p>
                    <p className="text-gray-700 text-xl border-b-[1px] border-gray-300 pb-5 mb-4"><span className='font-bold text-black pe-2'>{t('Warranty')}</span> {t('Lifetime')}</p>
                    </div>

                    </div>

                </div>
            </div>

            <Footer />
        </>
    );
};

export default Platinum;




