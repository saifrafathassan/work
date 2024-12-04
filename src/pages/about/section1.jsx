import { withTranslation } from 'react-i18next';
import i18n from 'i18next';

const Section1 = () => {
    const currentLanguage = i18n.language || i18n.options.fallbackLng[0];
  return (
    <section dir={currentLanguage === 'ar' ? 'rtl' : 'ltr'} className="bg-white h-full w-full flex flex-col lg:flex-row flex-wrap justify-center items-center py-12">
      {/* النص */}
      <div className="w-full lg:w-1/2 px-5 md:ps-32">
        <p className="text-center md:text-start md:text-lg text-gray-800 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem error, reprehenderit 
          repudiandae fugiat unde architecto nihil temporibus earum odit ea voluptatum hic dicta, modi sapiente? 
          Facilis, optio nihil voluptatum aliquid, cum voluptatem commodi earum dolores dolorem reprehenderit totam.
          <br /><br />
          Hic vero iusto, sed totam vel optio quibusdam eum alias atque quaerat commodi reprehenderit eius. 
          Minus accusamus doloribus eligendi quaerat nostrum commodi illum, non fugiat libero dolore officia 
          officiis odit nesciunt enim eos. Nihil excepturi, quasi velit officiis quo eveniet perspiciatis.
          <br /><br />
          Tempore vel esse soluta deserunt, impedit alias beatae perferendis maxime voluptate magnam consectetur saepe 
          distinctio fuga expedita ea voluptatibus quaerat repellendus laudantium voluptatem.
        </p>
      </div>

      {/* الصورة */}
      <div className="w-full lg:w-1/2 ps-0 pt-20 md:pt-2 flex justify-center">
        <img 
          src="https://tse3.mm.bing.net/th?id=OIP.TiWLhoqSQRdwgihF10cZZAHaE8&pid=Api&P=0&h=220" 
          alt="Example" 
          className="rounded-lg w-[80%] h-auto"
        />
      </div>
    </section>
  );
};

export default withTranslation()(Section1);
