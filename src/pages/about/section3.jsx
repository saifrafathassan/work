import { withTranslation } from 'react-i18next';
import i18n from 'i18next';

const section3 = ({t}) => {
    const currentLanguage = i18n.language || i18n.options.fallbackLng[0];
  return (
    <div dir={currentLanguage === 'ar' ? 'rtl' : 'ltr'} className=' h-[90px] py-5 gap-2 bg-main text-center flex flex-wrap justify-center items-center'>

    <p className='text-white'>{t('location1')}</p>
    <p className='text-white'>{t('location2')}</p>
    </div>
  )
}

export default withTranslation()(section3);
