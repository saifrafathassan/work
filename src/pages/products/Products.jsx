import React from 'react';
import Headerps from '../../components/Header/Headerps';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import Bg from '../../assets/background.jpg';
import Slider1 from '../../assets/slide1.webp';
import Slider2 from '../../assets/slide2.webp';
import Slider3 from '../../assets/slide3.webp';
import Slider4 from '../../assets/slide4.webp';
import Slider5 from '../../assets/slide5.webp';
import Slider6 from '../../assets/slide6.webp';

import { useTranslation } from 'react-i18next';

const products = [
  {
    category: 'Gold',
    items: [
      { image: Slider1, title: 'Gold', description: 'هنا هيبقي تفاصيل المنتج' },
      { image: Slider2, title: 'Gold', description: 'هنا هيبقي تفاصيل المنتج' },
    ],
  },
  {
    category: 'Silver',
    items: [
      { image: Slider3, title: 'Silver', description: 'هنا هيبقي تفاصيل المنتج' },
      { image: Slider4, title: 'Silver', description: 'هنا هيبقي تفاصيل المنتج' },
    ],
  },
  {
    category: 'Diamond',
    items: [
      { image: Slider5, title: 'Diamond', description: 'هنا هيبقي تفاصيل المنتج' },
      { image: Slider6, title: 'Diamond', description: 'هنا هيبقي تفاصيل المنتج' },
    ],
  },
];

const Products = () => {
  const { t } = useTranslation();

  return (
    <>
      <Navbar />
      <Headerps name={t('Products')} Carbg={Bg} />
      <div className="container mx-auto py-20 w-full">
  {products.map((category, index) => (
    <div key={index} className="sm:mb-32 mb-10">
      {/* عنوان القسم */}
      <h2 className="text-3xl sm:text-5xl text-main text-center font-bold mb-24">
        {t(category.category)}
      <div className="w-[150px] h-1 bg-main mx-auto mt-2"></div> {/* السطر تحت العنوان */}
      </h2>

      {/* المنتجات */}
      <div className="grid grid-cols-1 md:grid-cols-2 mx-auto w-[80%] gap-32"> {/* زيادة المسافة بين الكروت */}
        {category.items.map((product, idx) => (
          <div
            key={idx}
            className="flex  flex-col items-center  rounded-lg shadow-3xl pb-8"
          >
            {/* صورة المنتج */}
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-full border-b-2 pb-5 border-main object-contain  mb-6 " // تكبير الصورة
            />
            {/* تفاصيل المنتج */}
            <h3 className="text-2xl font-semibold text-center mb-4">
              {product.title}
            </h3>
            <p className="text-gray-600 text-center mb-6 text-lg">
              {product.description}
            </p>

            {/* زرار التفاصيل */}
            <button className="bg-main text-white py-3 px-24 rounded-lg hover:bg-opacity-90 transition text-lg">
              {t('Details')}
            </button>
          </div>
        ))}
      </div>
    </div>
  ))}
</div>



      <Footer />
    </>
  );
};

export default Products;
