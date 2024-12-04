import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import img1 from '../../assets/factory1.jpg';
import img2 from '../../assets/factory2.jpg';
import img3 from '../../assets/factory3.jpg';
import img4 from '../../assets/factory4.jpg';
import img5 from '../../assets/factory5.jpg';
import img6 from '../../assets/factory8.jpg';
import img7 from '../../assets/factory9.jpg';

const Section2 = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true
  };

  return (
    <div className="h-full pb-20 flex justify-center items-center ">
      <div className="w-full md:w-2/3 lg:w-1/2">
        <Slider {...settings}>
          {[img1, img2, img3, img4, img5, img6, img7].map((img, index) => (
            <div key={index}>
              <img 
                src={img} 
                alt={`Slide ${index + 1}`} 
                className="w-full object-cover rounded-lg
                           h-[200px] md:h-[300px] lg:h-[400px]"
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Section2;
