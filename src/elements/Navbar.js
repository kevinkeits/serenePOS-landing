import React, { useState, useEffect } from 'react'
import hamburgmenu from '../assets/icon/hamburger-menu-svgrepo-com.svg'
import serenelogo from '../assets/icon/navbarlogo.png'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    if (scrollPosition > 80 || scrollPosition > 890) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div id="Navbar" className={`fixed z-20 top-0 w-screen ${scrolled ? 'scrolled' : ''}`}>
      <div className='flex md:justify-center justify-between items-center max-w-6xl mx-auto font-semibold'>
        <div className={`${scrolled ? 'filter-effect' : ''}`}>
          <img src={serenelogo} alt='logo' className="w-40 mx-3 py-2" style={{ filter: scrolled ? 'invert(70%) sepia(89%) saturate(2273%) hue-rotate(217deg) brightness(104%) contrast(96%)' : 'none' }}></img>
        </div>
        <div className={`md:flex md:grow justify-center text-white hidden `}>
          <div className={`hover:cursor-pointer ${scrolled ? 'text-black' : ''}`}>
            <a href="#detailPage"><h1 className="text-lg mx-2 py-2 px-4">Tentang</h1></a>
          </div>
          <div className={`hover:cursor-pointer ${scrolled ? 'text-black' : ''}`}>
            <a href="#fiturPage"><h1 className='text-lg mx-2 py-2 px-4'>Fitur</h1></a>
          </div>
          <div className={`hover:cursor-pointer ${scrolled ? 'text-black' : ''}`}>
            <a href="#hargaPage"><h1 className='text-lg mx-2 py-2 px-4'>Harga</h1></a>
          </div>
        </div>
        <div className='md:flex text-white hidden mx-3 px-4'>
          <div id="borderColor" className={`text-sm py-2 px-4 rounded-full hover:text-black hover:cursor-pointer hover:bg-slate-100 mx-2 ${scrolled ? 'text-blue-600' : ''}`}>
            <p className=''>Masuk</p>
          </div>
          <div id="borderColor" className={`text-sm my-auto py-2 px-4 hover:text-black hover:bg-slate-100 hover:cursor-pointer rounded-full ${scrolled ? ' text-blue-600' : ''}`}>
            <p className=''>Daftar</p>
          </div>
        </div>
        {/* <!-- Hamburg Menu --> */}
        <img src={hamburgmenu} alt="Menu" onClick={() => setIsOpen(!isOpen)} class="h-6 w-10 mx-6 block md:hidden" style={{ filter: scrolled ? 'invert(70%) sepia(89%) saturate(2273%) hue-rotate(217deg) brightness(104%) contrast(96%)' : 'none' }}></img>
      </div>
      
      {isOpen && ( 
          <div id="menu-list" className="border-t-2 py-2 border-white backdrop-blur-lg bg-black bg-opacity-40 md:hidden">
              <a href="#detailPage"><p className="hover:cursor-pointer hover:bg-blue-900 py-4 px-5 text-white font-semibold">Tentang</p></a>
              <a href="#fiturPage"><p className="hover:cursor-pointer hover:bg-blue-900 py-4 px-5 text-white font-semibold">Fitur</p></a>
              <a href="#hargaPage"><p className="hover:cursor-pointer hover:bg-blue-900 py-4 px-5 text-white font-semibold">Harga</p></a>
          </div>
        )}
    </div>
  );
};

export default Navbar
