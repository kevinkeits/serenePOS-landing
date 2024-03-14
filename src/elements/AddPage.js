import React from 'react'
import googleplay from '../assets/icon/google-play-badge-logo-svgrepo-com.svg'
import appstore from '../assets/icon/download-on-the-app-store-apple-logo-svgrepo-com.svg'

const AddPage = () => {
  return (
    <div className='bg-gray-950 py-40'>
      <p className='text-2xl lg:text-4xl m-5 font-bold text-center text-slate-50'>Solusi All-in-One</p>
      <p className='m-5 text-lg lg:text-xl text-center text-slate-50'>Kelola penjualan, inventaris, dan data pelanggan dengan lancar</p>
      <div className='flex justify-center items-center'>
        <img src={googleplay} alt="Google Play" class="m-2 h-40 md:h-52"/>
        <img src={appstore} alt="App Store" class="m-2 h-40 md:h-52"/>
      </div>
    </div>
  )
}

export default AddPage
