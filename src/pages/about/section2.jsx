import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { withTranslation } from 'react-i18next';
import img1 from '../../assets/1.jpg';
import img2 from '../../assets/2.jpg';
import img3 from '../../assets/3.jpg';
import img4 from '../../assets/5.jpg';
import img5 from '../../assets/4.jpg';
import img6 from '../../assets/7.jpg';
import img7 from '../../assets/8.jpg';

const Section2 = ({t}) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 3, // عرض 5 صور على الشاشات الكبيرة
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1200,
    arrows: false,
    pauseOnHover: false, // تعطيل التوقف عند التمرير فوق السلايدر
    pauseOnFocus: false, // تعطيل التوقف عند التركيز على السلايدر
    centerMode: true, // تفعيل عرض الصورة في المنتصف على الشاشات الكبيرة
    responsive: [
      {
        breakpoint: 768, // عند عرض الشاشة أقل من 768px (الهاتف)
        settings: {
          slidesToShow: 1, // صورة واحدة فقط تظهر على الهاتف
          centerPadding: '0', // إزالة padding
        }
      }
    ]
  };

  return (
    <div className="h-full w-full md:py-12 py-5 flex justify-center">
      <div className="w-full text-center">
        {/* العنوان والسطر */}
        <div className="my-10 ">
          <h2 className="text-4xl font-semibold text-main">{t('Our Gallery')}</h2>
          <div className="w-20 h-1 bg-main mx-auto mt-2"></div> {/* السطر تحت العنوان */}
        </div>
        <Slider {...settings}>
          {[img1, img2, img3, img4, img5, img6, img7].map((img, index) => (
            <div key={index} className="px-5 sm:pt-0 pt-5 sm:pb-10"> {/* مسافة بين الصور */}
              <img 
                src={img} 
                alt={`Slide ${index + 1}`} 
                className="w-full rounded-lg
                           h-[220px] md:h-[200px] lg:h-[300px]
                          object-fill sm:object-cover transform transition-transform duration-500"
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default withTranslation()(Section2);
