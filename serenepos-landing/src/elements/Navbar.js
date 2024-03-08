import React from 'react';

const Navbar = () => {
  return (
    <div className='flex md:justify-center justify-between items-center lg:px-28 font-semibold sticky top-0 left-0'>
       <div>
            <h1 className='text-2xl px-4 mx-2'>serenePos</h1>
       </div>
       <div className='md:flex md:grow justify-center hidden'>
        <p className='text-lg py-2 px-4'>Tentang</p>
        <p className='text-lg py-2 px-4'>Fitur</p>
        <p className='text-lg py-2 px-4'>Harga</p>
       </div>
       <div>
        <button className='text-sm mx-2 py-2 px-4 border-white border rounded-full'>Masuk</button>
        <button className='text-sm mx-2 py-2 px-4 bg-white text-black rounded-full'>Daftar</button>
       </div>
    </div>
  )
}

export default Navbar;
