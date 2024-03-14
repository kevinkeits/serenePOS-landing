import React from 'react'
import hamburgmenu from '../assets/icon/hamburger-menu-svgrepo-com.svg'

const Navbar = () => {
  return (
    <div className='flex backdrop-blur-md z-20 bg-black bg-opacity-15 md:justify-center justify-between items-center lg:px-28 lg:py-5 py-3 font-semibold sticky top-0 left-0'>
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
      <img src={hamburgmenu} alt="Menu" class="h-5 w-5 mx-4 md:hidden"/>
    </div>
  )
}

export default Navbar
