import React from 'react';
import Headerps from '../../components/Header/Headerps';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import Bg from '../../assets/background.jpg';
import Slider1 from '../../assets/diamondbrowne1.webp';
import Slider2 from '../../assets/emrald1.webp';
import Slider3 from '../../assets/sliver.webp';
import Slider4 from '../../assets/diamond8.webp';
import Slider5 from '../../assets/emrald.webp';
import Slider6 from '../../assets/slide6.webp';
import Slider7 from '../../assets/clasic.webp';
import Slider8 from '../../assets/plat.webp';
import Slider9 from '../../assets/plat1.webp';
import Slider10 from '../../assets/slivers.webp';
import i18n from 'i18next';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';


const Products = () => {
  const { t } = useTranslation();
  const currentLanguage = i18n.language || i18n.options.fallbackLng[0];

  const products = [
    {
      category: 'Silver',
      items: [
        { image: Slider10, title: '44x39x21cm', description: t("info"), link: '/products/silver' },
        { image: Slider3, title: '50x43x21cm', description: t("info"), link: '/products/silver' },
      ],
    },
    {
      category: 'Platinum',
      items: [
        { image: Slider9, title: '57x43x21cm', description: t("info"), link: '/products/platinum' },
        { image: Slider8, title: '72x45x23cm', description: t("info"), link: '/products/platinum' },
      ],
    },
    {
      category: 'Emerald',
      items: [
        { image: Slider5, title: '75x48x23cm', description: t("info"), link: '/products/emerald' },
        { image: Slider2, title: '80x50x24cm', description: t("info"), link: '/products/emerald' },
      ],
    },
    {
      category: 'Classic',
      items: [
        { image: Slider7, title: '100x50x21cm', description: t("info"), link: '/products/classic' },
        { image: Slider6, title: '120x50x21cm', description: t("info"), link: '/products/classic' },
      ],
    },
    {
      category: 'Diamond',
      items: [
        { image: Slider1, title: '72x45x23cm', description: t("info"), link: '/products/diamond' },
        { image: Slider4, title: '88x50x23cm', description: t("info"), link: '/products/diamond' },
      ],
    },
  ];

  return (
    <>
      <Navbar />
      <Headerps name={t('Products')} Carbg={Bg} />
      <div dir={currentLanguage === 'ar' ? 'rtl' : 'ltr'} className="container mx-auto py-20 w-full">
  {products.map((category, index) => (
    <div key={index} className="sm:mb-32 mb-10">
      {/* عنوان القسم */}
      <h2 className="text-3xl sm:text-6xl text-main text-center font-bold mb-24">
        {t(category.category)}
      <div className="w-[150px] h-1 bg-main mx-auto mt-4"></div> {/* السطر تحت العنوان */}
      </h2>

      {/* المنتجات */}
      <div className="grid grid-cols-1 md:grid-cols-2 mx-auto w-[90%] gap-32"> {/* زيادة المسافة بين الكروت */}
        {category.items.map((product, idx) => (
          <div
            key={idx}
            className="flex  flex-col items-center  rounded-lg shadow-3xl py-4"
          >
            {/* صورة المنتج */}
            <img
              src={product.image}
              alt={product.title}
              className="w-[90%] h-full object-contain" // تكبير الصورة
            />
                  <div className="w-[100px] sm:w-[350px] h-1 bg-main mx-auto my-4"></div> {/* السطر تحت العنوان */}
            {/* تفاصيل المنتج */}
            <h3 className="text-3xl text-main font-semibold text-center mb-4 hover:text-blue-500 duration-200">
              {product.title}
            </h3>
            <p className="text-gray-600 text-center mb-6 text-lg mx-10">
              {product.description}
            </p>

            {/* زرار التفاصيل */}
              <Link onClick={() => window.scrollTo(0,0)} to={product.link}>
            <button className="bg-main text-white py-3 px-24 rounded-lg hover:bg-blue-500 transition text-lg">
              {t('Details')}
            </button>
              </Link>
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
