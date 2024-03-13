import React from 'react'

const FiturPage = () => {
  return (
    <div className='bg-slate-100 py-10 xl:px-28'>
      <p className='text-lg text-blue-700 m-5 text-center font-bold mt-10'>FITUR</p>
      <p className='text-4xl m-5 font-bold text-center'>Fitur-fitur Unggulan untuk Aplikasi POS Anda.</p>
      <p className='m-5 mb-28 text-lg text-center'>Buka potensi bisnis Anda dengan aplikasi POS canggih kami.</p>
      <div className='grid grid-cols-1 md:grid-cols-2 items-center m-2 lg:mx-28'>
        {/* Fitur - Point */}
        <div className='bg-slate-50 px-6 m-5 xl:my-10 md:h-full rounded-lg'>
          <p className='font-semibold text-2xl py-5 text-center'>Antarmuka yang Ramah Pengguna</p>
          <dotlottie-player src="https://lottie.host/79cd002c-fe8f-49e6-8389-60ec89821090/690ihaoJaO.json" background="transparent" speed="1" style="width: 400px; height: 400px;" loop="" autoplay=""></dotlottie-player>
          <p className='text-lg'>Antarmuka yang Intuitif dan Mudah Digunakan untuk Navigasi yang Lancar.</p>
        </div>
      </div>
    </div>
  )
}

export default FiturPage
