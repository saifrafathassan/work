import React, { useRef, useState, useEffect } from 'react';
import Slider from 'react-slick';
import Slider1 from '../../../assets/slide1.webp';
import Slider2 from '../../../assets/slide3.webp';
import Slider3 from '../../../assets/slide2.webp';
import background from '../../../assets/background.jpg';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';
import { withTranslation  } from 'react-i18next';

const slides = [
    { image: Slider1, text: 'النص الأولى' },
    { image: Slider2, text: 'النص الثانية' },
    { image: Slider3, text: 'النص الثالثة' }
  ];
  

const HeroSection = ({t}) => {
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
    <div key={index} className='relative pt-20 md:pt-36'>
      <div className="absolute top-0 left-3 w-full text-center pt-14">
        <h2 className="text-white text-2xl sm:text-4xl font-bold">{slide.text}</h2>
      </div>
      <img 
        className='w-[70%] h-[300px] sm:w-[70%] sm:h-[500px] object-contain mx-auto' 
        src={slide.image} 
        alt={`heroimg${index}`} 
      />
      <div 
        style={{
          opacity: isVisible && currentSlide === index ? 1 : 0,
          transform: isVisible && currentSlide === index ? 'translateX(0)' : 'translateX(60px)',
          transition: 'opacity 2s, transform 2s',
        }} 
        ref={sectionRef} 
        className='absolute inset-0 flex justify-center items-center'
      />
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