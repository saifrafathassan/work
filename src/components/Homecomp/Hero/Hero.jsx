import React, { useRef, useState, useEffect } from 'react';
import Slider from 'react-slick';
import Slider1 from '../../../assets/slide1.webp';
import Slider2 from '../../../assets/slide3.webp';
import Slider3 from '../../../assets/slide2.webp';
import Slider4 from '../../../assets/slide4.webp';
import Slider5 from '../../../assets/slide5.webp';
import Slider6 from '../../../assets/slide6.webp';
import background from '../../../assets/background.jpg';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';
import { withTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';


const HeroSection = ({ t }) => {
  const slides = [
    { image: Slider1, text: t("Diamond"), link: '/products/diamond', size: "72x45x23CM" }, 
    { image: Slider2, text: t("Silver"), link: '/products/Silver',size: "44x39x21CM" }, 
    { image: Slider3, text: t("Classic"), link: '/products/classic',size: "80x50x24CM" }, 
    { image: Slider4, text: t("Classic"), link: '/products/classic',size: "88x50x23CM" }, 
    { image: Slider5, text: t("Emerald"), link: '/products/emerald',size: "75x48x23CM" }, 
    { image: Slider6, text: t("Classic"), link: '/products/classic',size: "120x50x21CM" },
  ];
  const navigate = useNavigate();
  const sliderRef = useRef();
  const [isHovered, setIsHovered] = useState(false);
  const sectionRef = useRef();
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
          setIsVisible(true);
          window.removeEventListener('scroll', handleScroll);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call once on mount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const settings = {
    infinite: true,
    dots: true,
    speed: 900,
    slidesToShow: 1,
    slidesToScroll: 1,
    touchMove: true,
    arrows: false, // Disable default arrows
    beforeChange: (current, next) => setCurrentSlide(next),
  };

  return (
    <div
      onMouseLeave={() => setIsHovered(false)}
      onMouseEnter={() => setIsHovered(true)}
      className='hero-container h-[420px] sm:h-[700px] relative'
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: 'contain',
      }}
    >
<Slider ref={sliderRef} {...settings}>
  {slides.map((slide, index) => (
    <div key={index} className="relative pt-20 md:pt-36">
      <div className="absolute top-0 left-3 w-full text-center pt-14">
        <h2 className="text-white text-2xl sm:text-4xl font-bold">{slide.text}</h2>
      </div>
      {/* الصورة الكبيرة */}
      <img
        className="w-[70%] h-[300px] sm:w-[70%] sm:h-[500px] object-contain mx-auto cursor-pointer"
        src={slide.image}
        alt={`heroimg${index}`}
        onClick={() => navigate(slide.link)}
      />
      {/* الصورة الصغيرة أسفل الصورة الكبيرة */}
      <div className="absolute top-[100px] left-[51%] transform -translate-x-1/2 w-[100px] h-[40px] text-white text-center flex items-center justify-center rounded-md shadow-lg z-50">
        {/* محتوى المربع */}
        <span className="text-4xl font-semibold">{slide.size}</span>
      </div>
    </div>
  ))}
</Slider>


      <div className="arrow-container">
        <div
          onClick={() => sliderRef.current.slickPrev()}
          className={`arrow arrow-left ${isHovered ? 'opacity-100' : 'opacity-0'}`}
        >
          <BsArrowLeftShort size={30} />
        </div>
        <div
          onClick={() => sliderRef.current.slickNext()}
          className={`arrow arrow-right ${isHovered ? 'opacity-100' : 'opacity-0'}`}
        >
          <BsArrowRightShort size={30} />
        </div>
      </div>
    </div>
  );
};

export default withTranslation()(HeroSection);
