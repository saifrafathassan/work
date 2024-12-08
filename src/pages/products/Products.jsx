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
      { image: Slider1, title: 'Gold Product 1', description: 'Description for gold product 1' },
      { image: Slider2, title: 'Gold Product 2', description: 'Description for gold product 2' },
    ],
  },
  {
    category: 'Silver',
    items: [
      { image: Slider3, title: 'Silver Product 1', description: 'Description for silver product 1' },
      { image: Slider4, title: 'Silver Product 2', description: 'Description for silver product 2' },
    ],
  },
  {
    category: 'Diamond',
    items: [
      { image: Slider5, title: 'Diamond Product 1', description: 'Description for diamond product 1' },
      { image: Slider6, title: 'Diamond Product 2', description: 'Description for diamond product 2' },
    ],
  },
];

const Products = () => {
  const { t } = useTranslation();

  return (
    <>
      <Navbar />
      <Headerps name={t('Products')} Carbg={Bg} />

      <div className="container mx-auto py-20">
        {products.map((category, index) => (
          <div key={index} className="mb-10">
            {/* عنوان القسم */}
            <h2 className="text-2xl sm:text-start text-center font-bold mb-6">{t(category.category)}</h2>

            {/* المنتجات */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
              {category.items.map((product, idx) => (
                <div key={idx} className="flex flex-col items-center md:flex-row gap-6">
                  {/* صورة المنتج */}
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-contain rounded sm:px-0 px-10 shadow md:w-60 lg:w-[400px]"
                  />
                  {/* تفاصيل المنتج */}
                  <div className="text-center md:text-left">
                    <h3 className="text-xl font-semibold mt-4 md:mt-0">{product.title}</h3>
                    <p className="text-gray-600">{product.description}</p>
                  </div>
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
