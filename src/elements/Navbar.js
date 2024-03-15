import React, { useState, useEffect } from 'react'
import hamburgmenu from '../assets/icon/hamburger-menu-svgrepo-com.svg'
import serenelogo from '../assets/icon/navbarlogo.png'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`fixed z-20 top-0 w-screen ${isScrolled ? 'bg-white' : ''}`}>
      <div className='flex md:justify-center justify-between items-center max-w-6xl mx-auto font-semibold'>
        <img src={serenelogo} alt='logo' className={`w-40 mx-3 py-2 ${isScrolled ? '' : ''}`}/>
        <div className={`md:flex md:grow justify-center hidden `}>
          <a href="#detailPage"><h1 className={`text-lg text-white mx-2 py-2 px-4 ${isScrolled ? 'bg-blue-400 text-blue-600' : ''}`}>Tentang</h1></a>
          <a href="#fiturPage"><h1 className='text-lg text-white mx-2 py-2 px-4'>Fitur</h1></a>
          <a href="#hargaPage"><h1 className='text-lg text-white mx-2 py-2 px-4'>Harga</h1></a>
        </div>
        <div className='md:flex hidden mx-3 px-4'>
          <p className='text-sm text-white mx-1 py-2 px-4 border-white border rounded-full'>Masuk</p>
          <p className='text-sm mx-1 py-2 px-4 bg-white text-black rounded-full'>Daftar</p>
        </div>
        {/* <!-- Hamburg Menu --> */}
        <img src={hamburgmenu} alt="Menu" onClick={() => setIsOpen(!isOpen)} class="h-6 w-10 mx-6 block md:hidden"/>
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
