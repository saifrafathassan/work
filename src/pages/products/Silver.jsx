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
import {FaTimes} from 'react-icons/fa'
import {IoMdArrowDropleft, IoMdArrowDropright} from 'react-icons/io'
import Modal from 'react-modal';

const images = [ProductImage1, Thumbnail1, Thumbnail2, Thumbnail3, Thumbnail4];

const Silver = () => {
    const { t } = useTranslation();
    const currentLanguage = i18n.language || i18n.options.fallbackLng[0];

    // حالة لتخزين الصورة الحالية
    const [currentImage, setCurrentImage] = useState(ProductImage1);

    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [selectedImageIndex, setSelectedImageIndex] = useState(null);
    
    
    const openModal = (index) => {
        setSelectedImageIndex(index);
        setModalIsOpen(true);
        document.body.style.overflow = 'hidden'; // تعطيل التمرير
    };
    
    const closeModal = () => {
        setModalIsOpen(false);
        document.body.style.overflow = 'auto'; // استعادة التمرير
    };
    
      const nextImage = () => {
        setSelectedImageIndex((selectedImageIndex + 1) % images.length);
      }
    
      const prevImage = () => {
        setSelectedImageIndex((selectedImageIndex + images.length - 1) % images.length);
      }

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

                            <img 
                                onClick={() => openModal(images.indexOf(currentImage))}
                                src={currentImage} 
                                alt="Product 1" 
                                className="w-auto p-8 mx-auto object-cover rounded-lg z-50 relative cursor-pointer" 
                            />
            <Modal
        isOpen={modalIsOpen} 
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
  <button className='bg-black rounded-md py-2 px-3 text-gray-400 z-40' style={{position: 'absolute', top: '20px', left: '20px'}} onClick={closeModal}>
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
    <button className='bg-black rounded-md sm:py-1 sm:px-1 text-gray-400' onClick={prevImage}>
      <IoMdArrowDropleft size={30}/>
    </button>
    <img className='w-[280px] md:w-[800px] md:pb-20' src={images[selectedImageIndex]} alt='/'/>
    <button className='bg-black rounded-md sm:py-1 sm:px-1 text-gray-400' onClick={nextImage}>
      <IoMdArrowDropright size={30}/>
    </button>
  </div>
            </Modal>


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


                </div>
            </div>

            <Footer />
        </>
    );
};

export default Silver;


