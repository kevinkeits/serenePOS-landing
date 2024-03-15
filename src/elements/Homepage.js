import React, { useRef, useEffect } from 'react'
import homebackground from '../assets/images/backgroundcashier.mp4'


const Homepage = () => {
  const videoRef = useRef(null);
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.addEventListener('loadedmetadata', () => {
        videoRef.current.playbackRate = 0.5;
      });
    }
  }, );


  return (
    <div className='relative w-full h-screen'>
      <video src={homebackground} autoPlay muted loop ref={videoRef} className="absolute top-0 left-0 w-full h-full object-cover blur-sm brightness-110"/>
      <div className='absolute inset-0 flex flex-col items-center justify-center text-center text-white'>
      <div className='my-28 lg:px-10 lg:mx-28 '>
        <h1 className='text-6xl lg:text-8xl py-5 mx-10 mt-10 text-center font-bold text-blue-950'>Serene<span className="text-orange-500">POS</span></h1>
        <h1 className='text-2xl xl:text-4xl align-middle m-5 py-4 px-2 text-center font-medium text-blue-950'>Optimalkan Bisnismu dengan Kemudahan dan Efisiensi Bersama Aplikasi POS Kami – Transformasi Penjualan Menjadi Pengalaman yang Lebih Baik</h1>
      </div>
      <div className='flex items-center justify-center'>
        <h1 className='text-xl m-1 md:m-3 p-2 md:p-5 w-48 md:w-60 border-2 rounded-full text-center border-black bg-blue-950 text-white font-semibold'>Mulai Sekarang</h1>
        <p className='text-xl m-1 md:m-3 p-2 md:p-5 w-48 md:w-60 text-blue-950 border-2 rounded-full font-semibold bg-white'>Pelajari</p>
      </div>
      </div>
      
    </div>
  )
}

export default Homepage
