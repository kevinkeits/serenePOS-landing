import React, { useRef, useEffect } from 'react'
import homebackground from '../assets/images/backgroundpos.mp4'


const Homepage = () => {
  const videoRef = useRef(null);
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.addEventListener('loadedmetadata', () => {
        videoRef.current.playbackRate = 0.3;
      });
    }
  }, );


  return (
    <div className='relative w-full h-screen'>
      <video src={homebackground} autoPlay muted loop ref={videoRef} className="absolute top-0 left-0 w-full h-full object-cover"/>
      <div className='absolute inset-0 flex flex-col items-center justify-center text-center text-white'>
      <div className='my-28 lg:px-10 lg:mx-28'>
        <h1 className='text-6xl lg:text-8xl py-5 mx-10 mt-10 text-center font-bold text-slate-50'>SerenePOS</h1>
        <h1 className='text-xl align-middle m-5 text-center font-medium text-slate-50'>Optimalkan Bisnismu dengan Kemudahan dan Efisiensi Bersama Aplikasi POS Kami – Transformasi Penjualan Menjadi Pengalaman yang Lebih Baik</h1>
      </div>
      <div className='flex items-center justify-center'>
        <h1 className='text-xl m-1 md:m-3 p-2 md:p-5 w-48 md:w-60 border-2 rounded-full text-center border-black bg-slate-900 text-white font-semibold :bg-slate-800'>Mulai Sekarang</h1>
        <p className='text-xl m-1 md:m-3 p-2 md:p-5 w-48 md:w-60 text-slate-50 border-2 rounded-full'>Pelajari</p>
      </div>
      </div>
      
    </div>
  )
}

export default Homepage
