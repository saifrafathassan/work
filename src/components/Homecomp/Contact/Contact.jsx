import background from '../../../assets/background.jpg';

import Section2 from '../../../pages/about/section2';

const Contact = () => {
  return (
    <div
    
      className="md:h-[500px] w-full pt-14"
      style={{ backgroundImage: `url(${background})`, backgroundSize: 'contain' }}
    >

    <Section2/>

    </div>
  );
};

export default Contact;
