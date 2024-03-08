import React from 'react';

const Navbar = () => {
  return (
    <div className='flex'>
       <div>
            <h1 className='text-xl font-bold p-2'>serenePos</h1>
       </div>
       <div className='flex'>
        <p className='text-base p-2'>Tentang</p>
        <p className='text-base p-2'>Fitur</p>
        <p className='text-base p-2'>Harga</p>
       </div>
    </div>
  )
}

export default Navbar;
