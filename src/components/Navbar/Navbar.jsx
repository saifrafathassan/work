import { Fragment, useState, useEffect } from "react"
import { Dialog, Transition } from '@headlessui/react'
import { Link } from 'react-router-dom'
import { RxCross2 } from 'react-icons/rx'
import { IoIosArrowUp} from 'react-icons/io'
// import { motion, AnimatePresence  } from 'framer-motion';
import LanguageSwitcher from '../Langswticher/LanguageSwitcher'
import { withTranslation  } from 'react-i18next';
import Logo from '../../assets/Asset4.png'

const Navbar = ({ t }) => {
  const [open, setOpen] = useState(false)
  const [showButton, setShowButton] = useState(false);


  // scrool to top button
useEffect(() => {
  window.addEventListener("scroll", () => {
    if (window.pageYOffset > 500) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  });
}, []);

const scrollTo = () => {
  const c = document.documentElement.scrollTop || document.body.scrollTop;
  if (c > 0) {
    window.requestAnimationFrame(scrollTo);
    window.scrollTo(0, c - c / 8); 
  }
};

  return (
    <div>
{/* Mobile menu */}
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-40 lg:hidden" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 z-40 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative flex w-full max-w-xs flex-col overflow-y-auto pb-12 shadow-xl bg-white" >
                <div className="flex px-4 pb-2 pt-28">
                  <button
                    type="button"
                    className="-m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                    onClick={() => setOpen(false)}
                  >
                    <RxCross2  />
                  </button>
                </div>
                <div className="space-y-6 border-t border-gray-200 px-8 py-6 flex flex-col">
                  
                <Link to={'/About'} className="text-md font-medium ps-2 text-gray-700 duration-300 hover:text-main hover:scale-110" >
                {t('About')}
                  </Link>
                  <Link to={'/contact'} className="text-md font-medium ps-2 text-gray-700 duration-300 hover:text-main hover:scale-110" >
                  {t('Contact')}
                  </Link>
                  <Link to={'/products'} className="text-md font-medium ps-2 text-gray-700 duration-300 hover:text-main hover:scale-110" >
                  {t('Products')}
                  </Link>

                  <div className="flow-root cursor-pointer w-[110px]">
                    <LanguageSwitcher />
                  </div>
                </div>

              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>


      {/* desktop  */}
      <header className="relative bg-main">
        <nav aria-label="Top" className="px-4 sm:px-6 lg:px-8 shadow-xl pb-3" >
          <div>
            <div className="flex h-16 items-center">
              <button
                type="button"
                className="rounded-md bg-main p-2 text-gray-400 lg:hidden"
                onClick={() => setOpen(true)} 
              >
                <span className="sr-only">Open menu</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>

              </button>

              {/* Logo */}
              <div className="lg:ml-8 w-full lg:w-auto flex justify-center md:justify-start">
                <Link aria-label="Home page - Main Navigation" to={'/'} className='flex'>
                  <div className=" pt-5">
                    <img className="object-cover h-20" src={Logo} alt="" />
                  </div>
                </Link>
              </div>

              <div className="ml-auto flex items-center pt-5">
                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">

                  <Link aria-label="About Us - Main Navigation" to={'/About'} className="text-md font-medium mb-[2px] text-white duration-300 hover:scale-110" >
                    {t('About')}
                  </Link>
                  <Link aria-label="Products - Main Navigation" to={'/products'} className="text-md font-medium text-white duration-300 hover:scale-110" >
                    {t('Products')}
                  </Link>
                  <Link aria-label="Contact us - Main Navigation" to={'/contact'} className="text-md font-medium text-white duration-300 hover:scale-110" >
                    {t('Contact')}
                  </Link>
                  
                </div>



                <div className="flex lg:ml-4">
                  <div className="md:block hidden">
                    <LanguageSwitcher/>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </nav>
      </header>
      {showButton && (
        <button aria-label="Scrool to top" className='bg-main flex justify-center items-center rounded-full h-[50px] w-[50px] fixed right-0 bottom-0 mb-[20px] sm:mb-[40px] mr-[30px] sm:mr-[40px] z-[1000] hover:bg-white duration-300 hover:border-black border-white border-2' onClick={scrollTo}>
          <IoIosArrowUp className="text-white hover:text-black duration-300" size={30}/>
        </button>
      )}
    </div>
  )
}

export default withTranslation()(Navbar);