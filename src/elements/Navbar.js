import React, { useState } from 'react'
import hamburgmenu from '../assets/icon/hamburger-menu-svgrepo-com.svg'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='fixed z-20 top-0 w-full'>
      <div className='flex backdrop-blur-md  bg-black bg-opacity-15 md:justify-center justify-between items-center lg:px-28 lg:py-5 py-3 font-semibold'>
        <h1 className='text-2xl text-white px-4 mx-2'>SerenePOS</h1>
        <div className='md:flex md:grow justify-center hidden'>
          <h1 className='text-lg text-white mx-2 py-2 px-4'>Tentang</h1>
          <h1 className='text-lg text-white mx-2 py-2 px-4'>Fitur</h1>
          <h1 className='text-lg text-white mx-2 py-2 px-4'>Harga</h1>
        </div>
        <div className='md:flex hidden'>
          <p className='text-sm text-white mx-2 py-2 px-4 border-white border rounded-full'>Masuk</p>
          <p className='text-sm mx-2 py-2 px-4 bg-white text-black rounded-full'>Daftar</p>
        </div>
        {/* <!-- Hamburg Menu --> */}
        <img src={hamburgmenu} alt="Menu" onClick={() => setIsOpen(!isOpen)} class="h-5 w-5 mx-4 block md:hidden"/>
      </div>
      
      {isOpen && ( 
          <div id="menu-list" className="border-t-2 border-white backdrop-blur-md bg-black bg-opacity-15 ">
              <a href="#detailPage"><p className="hover:cursor-pointer hover:bg-blue-900 py-2 px-5 text-white">Tentang</p></a>
              <a href="#fiturPage"><p className="hover:cursor-pointer hover:bg-blue-900 py-2 px-5 text-white">Fitur</p></a>
              <a href="#hargaPage"><p className="hover:cursor-pointer hover:bg-blue-900 py-2 px-5 text-white">Harga</p></a>
          </div>
        )}
    </div>
  )
}

export default Navbar
