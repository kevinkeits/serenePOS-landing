import React, { useRef, useEffect } from 'react'
import homebackground from '../assets/images/backgroundcashier.mp4'

const Homepage = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.addEventListener('loadedmetadata', () => {
        videoRef.current.playbackRate = 1.2;
      });
    }
  }, []);

  return (
    <div className='relative w-full h-screen'>
      <video ref={videoRef} src={homebackground} autoPlay muted loop className="absolute top-0 left-0 w-full h-full object-cover blur-sm brightness-50"/>
      <div className='absolute inset-0 flex flex-col items-center justify-center text-center text-white'>
        <div className='my-28 lg:px-10 lg:mx-28 '>
          <h1 className='text-6xl lg:text-8xl py-5 mx-10 mt-10 text-center font-bold text-white'>SerenePOS</h1>
          <h1 className='text-2xl xl:text-4xl align-middle m-5 py-4 px-2 text-center font-medium text-white'>Optimalkan Bisnismu dengan Kemudahan dan Efisiensi Bersama Aplikasi POS Kami – Transformasi Penjualan Menjadi Pengalaman yang Lebih Baik</h1>
        </div>
        <div className='flex items-center justify-center'>
          <p className='text-xl m-1 md:m-3 p-2 md:p-5 w-40 md:w-60 text-white border-2 rounded-full font-semibold hover:bg-blue-600 hover:border-blue-600'>Mulai Sekarang</p>
          <h1 className='text-xl m-1 md:m-3 p-2 md:p-5 w-40 md:w-60 rounded-full text-center font-semibold border-2 border-white bg-white text-blue-600 hover:bg-blue-600 hover:border-blue-600 hover:text-white'>Coba Gratis</h1>
        </div>
      </div>
      
    </div>
  )
}

export default Homepage
