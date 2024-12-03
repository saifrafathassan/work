import background from '../../../assets/background.jpg';
import { withTranslation } from 'react-i18next';
import i18n from 'i18next';

const Contact = ({ t }) => {
    const currentLanguage = i18n.language || i18n.options.fallbackLng[0];
  return (
    <div
    dir={currentLanguage === 'ar' ? 'rtl' : 'ltr'}
      className="h-[500px] w-full"
      style={{ backgroundImage: `url(${background})`, backgroundSize: 'contain' }}
    >

      {/* Center the content vertically and horizontally */}
      <div className="flex justify-center items-center h-full gap-10 px-6 md:px-12 flex-col md:flex-row">
  {/* Left Text */}
  <div className="text-white max-w-lg text-center md:text-left">
    <h2 className="text-4xl font-semibold mb-4">
      {t('Don’t hesitate to contact us')}
    </h2>
  </div>

  {/* Right Button */}
  <div className="text-right">
    <button
      className="bg-white text-main py-4 px-8 rounded-full text-lg hover:bg-black hover:text-white transition duration-300"
      onClick={() => alert('Contact us')}
    >
      {t('Contact Us')}
    </button>
  </div>
</div>

    </div>
  );
};

export default withTranslation()(Contact);
