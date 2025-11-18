import React, { useState, useRef  } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import Headerps from '../../components/Header/Headerps';
import Back from '../../assets/background.webp';
import ProductImage1 from '../../assets/Smart.webp';
import ProductImage2 from '../../assets/semi.webp';
import Semi1 from '../../assets/semi1.webp';
import Semi2 from '../../assets/semi2.webp';
import Semi3 from '../../assets/semi3.webp';
import Semi4 from '../../assets/semi4.webp';
import Semi5 from '../../assets/semi5.webp';
import Smart1 from '../../assets/smart1.webp';
import Smart2 from '../../assets/smart2.webp';
import Smart3 from '../../assets/smart3.webp';
import Smart4 from '../../assets/smart4.webp';
import Smart5 from '../../assets/smart5.webp';
import { useTranslation } from 'react-i18next';
import i18n from 'i18next';
import {FaTimes} from 'react-icons/fa'
import {IoMdArrowDropleft, IoMdArrowDropright} from 'react-icons/io'
import Modal from 'react-modal';

const images = [ProductImage1, Smart1, Smart2, Smart3, Smart4, Smart5];
const images1 = [ProductImage2,  Semi1, Semi2, Semi3, Semi4, Semi5];

const Smart = () => {
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
            <Headerps name={t('Smart')} Carbg={Back} />

            {/* قسم المنتجات */}
            <div dir={currentLanguage === 'ar' ? 'rtl' : 'ltr'} className="container mx-auto px-2 py-24">
                <div className="grid grid-cols-1 gap-10 lg:mx-14">
                    {/* المنتج الأول */}
                    <div className="flex flex-col md:flex-row gap-6 pb-32">
                        <div className="md:w-1/2 relative">
                        {/* الصورة الرئيسية */}
                        <div className='w-full sm:h-[500px] justify-center mx-auto flex items-center'>

                            <img 
                                onClick={() => openModalProduct1(images.indexOf(currentImage))}
                                src={currentImage} 
                                alt="Product 1" 
                                className="w-full h-[300px] lg:pt-36 sm:h-auto sm:w-auto p-8 mx-auto object-contain sm:object-cover rounded-lg z-50 relative cursor-pointer" 
                                loading="lazy"
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
                        <div className="absolute bottom-[-80px] sm:top-24 sm:start-[-100px] flex sm:flex-col gap-[5px] w-full justify-center sm:justify-normal">
                            {[ProductImage1,  Smart1, Smart2, Smart3, Smart4, Smart5].map((thumb, index) => (
                                <img 
                                loading="lazy"
                                    key={index} 
                                    src={thumb} 
                                    alt={`Thumbnail ${index + 1}`} 
                                    onClick={() => setCurrentImage(thumb)} 
                                    className={`cursor-pointer hover:scale-125 duration-200 border-2 rounded-md ${
                                        currentImage === thumb 
                                            ? 'border-main w-[52px] h-14 object-contain' 
                                            : 'border-gray-300 w-[52px] h-14 object-cover'
                                    }`}
                                />
                            ))}
                        </div>
                    </div>



                    <div className="md:w-1/2 text-center sm:text-start sm:px-12 sm:mt-0 mt-20">
                    {/* العنوان مع خط رمادي */}
                    <h2 className="text-2xl sm:text-3xl font-bold text-main mb-4 hover:text-blue-500 duration-200 border-b-[1px] border-gray-300 pb-5">
                        {t('Smart stainless steel')} 23x50x78{t('cm')}
                    </h2>

                    {/* الفقرة مع خط رمادي */}
                    <p className="text-gray-700 text-lg sm:text-xl border-b-[1px] border-gray-300 pb-5 mb-4">
                        {t('Smart info')}
                    </p>
                    <p className="text-gray-700 text-xl border-b-[1px] border-gray-300 pb-5 mb-4"><span className='font-bold text-black pe-2'>{t('Size')}</span>  23x50x78{t('cm')}</p>
                    <p className="text-gray-700 text-xl border-b-[1px] border-gray-300 pb-5 mb-4"><span className='font-bold text-black pe-2'>{t('color')}</span> {t('gray')}</p>
                    <p className="text-gray-700 text-xl border-b-[1px] border-gray-300 pb-5 mb-4"><span className='font-bold text-black pe-2'>{t('Exchangetype')}</span> {t('network')}</p>
                    <p className="text-gray-700 text-xl border-b-[1px] border-gray-300 pb-5 mb-4"><span className='font-bold text-black pe-2'>{t('Drainer size:')}</span>  {t('smart size')}</p>
                    <p className="text-gray-700 text-xl border-b-[1px] border-gray-300 pb-5 mb-4"><span className='font-bold text-black pe-2'>{t('Materials')}</span> {t('smart material')}</p>
                    <p className="text-gray-700 text-xl border-b-[1px] border-gray-300 pb-5 mb-4"><span className='font-bold text-black pe-2'>{t('Warranty')}</span> {t('Lifetime')}</p>
                    <h3 className='text-gray-700 text-lg sm:text-2xl mt-12 border-b-[1px] border-gray-300 pb-3 mb-2'>{t('Features')}</h3>
                    <p className="text-black text-lg border-b-[1px] border-gray-300 pb-3 mb-2 font-bold">{t('Featursmart1')}</p>
                    <p className="text-black text-lg border-b-[1px] border-gray-300 pb-3 mb-2 font-bold">{t('Featursmart2')}</p>
                    <p className="text-black text-lg border-b-[1px] border-gray-300 pb-3 mb-2 font-bold">{t('Featursmart3')}</p>
                    <p className="text-black text-lg border-b-[1px] border-gray-300 pb-3 mb-2 font-bold">{t('Featursmart4')}</p>
                    <p className="text-black text-lg border-b-[1px] border-gray-300 pb-3 mb-2 font-bold">{t('Featursmart5')}</p>
                    <p className="text-black text-lg border-b-[1px] border-gray-300 pb-3 mb-2 font-bold">{t('Featursmart6')}</p>
                    </div>

                    </div>

                    {/* المنتج التاني */}
                    <div className="flex flex-col md:flex-row gap-6 pb-32">
                        <div className="md:w-1/2 relative">
                        {/* الصورة الرئيسية */}
                        <div className='w-full sm:h-[500px] justify-center mx-auto flex items-center'>

                            <img 
                            loading="lazy"
                                onClick={() => openModalProduct2(images1.indexOf(currentImage1))}
                                src={currentImage1} 
                                alt="Product 1" 
                                className="w-full h-[300px] lg:pt-36 sm:h-auto sm:w-auto p-8 mx-auto object-contain sm:object-cover rounded-lg z-50 relative cursor-pointer" 
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
                        <div className="absolute bottom-[-80px] sm:top-24 sm:start-[-100px] flex sm:flex-col gap-[5px] w-full justify-center sm:justify-normal">
                            {[ProductImage2, Semi1, Semi2, Semi3, Semi4, Semi5].map((thumb, index) => (
                                <img 
                                loading="lazy"
                                    key={index} 
                                    src={thumb} 
                                    alt={`Thumbnail ${index + 1}`} 
                                    onClick={() => setCurrentImage1(thumb)} 
                                    className={`cursor-pointer hover:scale-125 duration-200 border-2 rounded-md ${
                                        currentImage1 === thumb 
                                            ? 'border-main w-[52px] h-14 object-contain' 
                                            : 'border-gray-300 w-[52px] h-14 object-cover'
                                    }`}
                                />
                            ))}
                        </div>
                    </div>



                    <div className="md:w-1/2 text-center sm:text-start sm:px-12 sm:mt-0 mt-20">
                    {/* العنوان مع خط رمادي */}
                    <h2 className="text-2xl sm:text-3xl font-bold text-main mb-4 hover:text-blue-500 duration-200 border-b-[1px] border-gray-300 pb-5">
                        {t('Semi Smart')} 78*50{t('cm')}
                    </h2>

                    {/* الفقرة مع خط رمادي */}
                    <p className="text-gray-700 text-lg sm:text-xl border-b-[1px] border-gray-300 pb-5 mb-4">
                        {t('Smart info')}
                    </p>
                    <p className="text-gray-700 text-xl border-b-[1px] border-gray-300 pb-5 mb-4"><span className='font-bold text-black pe-2'>{t('Size')}</span>  78*50{t('cm')}</p>
                    <p className="text-gray-700 text-xl border-b-[1px] border-gray-300 pb-5 mb-4"><span className='font-bold text-black pe-2'>{t('color')}</span> {t('gray')}</p>
                    <p className="text-gray-700 text-xl border-b-[1px] border-gray-300 pb-5 mb-4"><span className='font-bold text-black pe-2'>{t('Exchangetype')}</span> {t('network')}</p>
                    <p className="text-gray-700 text-xl border-b-[1px] border-gray-300 pb-5 mb-4"><span className='font-bold text-black pe-2'>{t('Drainer size:')}</span>  110{t('mm')}</p>
                    <p className="text-gray-700 text-xl border-b-[1px] border-gray-300 pb-5 mb-4"><span className='font-bold text-black pe-2'>{t('Materials')}</span> {t('smart material')}</p>
                    <p className="text-gray-700 text-xl border-b-[1px] border-gray-300 pb-5 mb-4"><span className='font-bold text-black pe-2'>{t('Warranty')}</span> {t('Lifetime')}</p>
                    <h3 className='text-gray-700 text-lg sm:text-2xl mt-12 border-b-[1px] border-gray-300 pb-5 mb-4'>{t('Features')}</h3>
                    <p className="text-black text-xl border-b-[1px] border-gray-300 pb-5 mb-4 font-bold">{t('Features1')}</p>
                    <p className="text-black text-xl border-b-[1px] border-gray-300 pb-5 mb-4 font-bold">{t('Features2')}</p>
                    <p className="text-black text-xl border-b-[1px] border-gray-300 pb-5 mb-4 font-bold">{t('Features3')}</p>
                    <p className="text-black text-xl border-b-[1px] border-gray-300 pb-5 mb-4 font-bold">{t('Features4')}</p>
                    </div>

                    </div>

                </div>
            </div>

            <Footer />
        </>
    );
};

export default Smart;




