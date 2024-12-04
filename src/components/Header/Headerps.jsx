import { Link } from "react-router-dom";
import { withTranslation } from 'react-i18next';
import i18n from 'i18next';

function  Headerps ({ name, Carbg , t}) {
    const currentLanguage = i18n.language || i18n.options.fallbackLng[0];
  return (
    <>
      <section className="h-[200px] sm:h-[200px] w-full" style={{backgroundImage: `url(${Carbg})`, backgroundSize: 'contain',}}>
        <div className="sm:mx-36 mx-10">
          <div dir={currentLanguage === 'ar' ? 'rtl' : 'ltr'} className="text-white pt-20">
            <h3 className="text-[36px] mb-[5px] font-bold">{name}</h3>
            <p className="text-[16px] font-semibold">
              <Link className="link" to="/">{t('Home')}</Link> / {name}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default withTranslation()(Headerps);