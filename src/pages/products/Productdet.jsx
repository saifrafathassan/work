import { useState, useEffect } from "react";
import img1 from "../../assets/slide4.webp";
import img2 from "../../assets/slide2.webp";
import img3 from "../../assets/slide3.webp";
import img4 from "../../assets/slide6.webp";
import img5 from "../../assets/slide5.webp";
import img6 from "../../assets/slide1.webp";
import { withTranslation } from "react-i18next";

const Productdet = ({ selectedCategory, t }) => {
  const products = [
    {
      name: t("Diamond"),
      image: img1,
      description: t("This is a Diamond product. High quality and exclusive."),
      category: "Diamond",
    },
    {
      name: t("Diamond"),
      image: img4,
      description: t("Another elegant Diamond product."),
      category: "Diamond",
    },
    {
      name: t("Gold"),
      image: img2,
      description: t("This is a Gold product. Classic and valuable."),
      category: "Gold",
    },
    {
      name: t("Gold"),
      image: img5,
      description: t("A stunning and timeless Gold product."),
      category: "Gold",
    },
    {
      name: t("Silver"),
      image: img3,
      description: t("This is a Silver product. Elegant and versatile."),
      category: "Silver",
    },
    {
      name: t("Silver"),
      image: img6,
      description: t("Another versatile Silver product."),
      category: "Silver",
    },
  ];

  // الحالة لتتبع المنتج والصورة الحالية
  const [currentProduct, setCurrentProduct] = useState(null);

  useEffect(() => {
    // البحث عن المنتج بناءً على الاسم المحدد
    const matchedProduct = products.find((product) => product.name === t(selectedCategory));
    setCurrentProduct(matchedProduct || null);
  }, [selectedCategory, t]);

  if (!currentProduct) {
    return (
      <p className="text-center text-lg text-gray-500">
        
      </p>
    );
  }

  return (
    <div className="flex justify-center items-center h-screen w-full">
      <div className="flex flex-col lg:flex-row justify-center gap-24 w-full">
        {/* الجزء الخاص بالصور */}
        <div className="flex flex-col sm:flex-row items-center justify-center sm:items-start gap-4">
          {/* الصور المصغرة */}
          <div className="flex md:flex-col gap-4 sm:items-start">
            {products
              .filter((product) => product.category === currentProduct.category)
              .map((product, index) => (
                <img
                  key={index}
                  src={product.image}
                  alt={product.name}
                  className={`w-24 h-16 border-2 ${
                    currentProduct.image === product.image
                      ? "border-blue-500"
                      : "border-gray-300"
                  } rounded-lg cursor-pointer object-cover`}
                  onClick={() => setCurrentProduct(product)}
                />
              ))}
          </div>
          {/* الصورة الرئيسية */}
          <div className="w-[350px] lg:w-[600px] h-[400px] bg-gray-200 border-4 border-gray-300 rounded-lg shadow-lg mb-4 flex justify-center items-center overflow-hidden">
            <img
              src={currentProduct.image}
              alt={currentProduct.name}
              className="object-contain w-full h-full"
            />
          </div>
        </div>

        {/* النصوص */}
        <div className="text-center lg:text-left sm:mt-2 lg:w-[400px]">
          <h2 className="text-2xl font-semibold">{currentProduct.name}</h2>
          <p className="mt-4 text-lg">{currentProduct.description}</p>
        </div>
      </div>
    </div>
  );
};

export default withTranslation()(Productdet);
