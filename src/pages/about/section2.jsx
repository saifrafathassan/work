import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import img1 from '../../assets/factory1.jpg';
import img2 from '../../assets/factory2.jpg';
import img3 from '../../assets/factory6.jpg';
import img4 from '../../assets/factory4.jpg';
import img5 from '../../assets/factory5.jpg';
import img6 from '../../assets/factory8.jpg';
import img7 from '../../assets/factory9.jpg';

const Section2 = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 5, // عرض 5 صور على الشاشات الكبيرة
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
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
      <div className="w-full ">
        <Slider {...settings}>
          {[img1, img2, img3, img4, img5, img6, img7].map((img, index) => (
            <div key={index} className="px-1 pb-10"> {/* مسافة بين الصور */}
              <img 
                src={img} 
                alt={`Slide ${index + 1}`} 
                className="w-full rounded-lg
                           h-[200px] md:h-[200px] lg:h-[450px]
                           object-cover transform transition-transform duration-500"
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Section2;
