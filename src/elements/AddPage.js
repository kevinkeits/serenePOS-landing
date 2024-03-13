import React from 'react'
import googleplay from '../assets/icon/google-play-badge-logo-svgrepo-com.svg'
import appstore from '../assets/icon/download-on-the-app-store-apple-logo-svgrepo-com.svg'

const AddPage = () => {
  return (
    <div className='bg-gray-950 py-40'>
      <p className='text-2xl m-5 font-bold text-center text-slate-50'>Solusi All-in-One</p>
      <p className='m-5 text-lg text-center text-slate-50'>Kelola penjualann, inventaris, dan data pelanggan dengan lancar</p>
      <div className='flex justify-center items-center'>
        <img src={googleplay} alt="Google Play" class="m-2"/>
        <img src={appstore} alt="App Store" class="m-2"/>
      </div>
    </div>
  )
}

export default AddPage
