import React from 'react'
import { DotLottiePlayer } from '@dotlottie/react-player';

const FiturPage = () => {
  return (
    <div id='fiturPage' className='bg-slate-100 py-10 xl:px-28'>
      <p className='text-lg text-blue-700 m-5 text-center font-bold mt-10'>FITUR</p>
      <p className='text-4xl m-5 font-bold text-center'>Fitur-fitur Unggulan untuk Aplikasi POS Anda.</p>
      <p className='m-5 mb-28 text-lg text-center'>Buka potensi bisnis Anda dengan aplikasi POS canggih kami.</p>
      <div className='grid grid-cols-1 md:grid-cols-2 items-center m-2 gap-y-4 lg:mx-28'>
        {/* Fitur - Point */}
        <div className='bg-slate-50 px-6 py-6 md:py-2 m-5 xl:my-10 md:h-full rounded-lg'>
          <p className='font-semibold text-2xl py-5 text-center'>Antarmuka yang Ramah Pengguna</p>
          <DotLottiePlayer
            src="https://lottie.host/79cd002c-fe8f-49e6-8389-60ec89821090/690ihaoJaO.json"
            autoplay
            loop
          >
          </DotLottiePlayer>
          <p className='text-lg'>Antarmuka yang Intuitif dan Mudah Digunakan untuk Navigasi yang Lancar.</p>
        </div>
        <div className='bg-slate-50 px-6 py-6 md:py-2 m-5 xl:my-10 md:h-full rounded-lg'>
          <p className='font-semibold text-2xl py-5 text-center'>Manajemen Inventaris</p>
          <DotLottiePlayer
            src="https://lottie.host/a5d5feb7-29b9-423d-ad77-c8b555df9c93/cPrczNL2Tv.json"
            autoplay
            loop
          >
          </DotLottiePlayer>
          <p className='text-lg'>Lacak dan kelola tingkat inventaris dengan efisien untuk mencegah kehabisan stok dan kelebihan persediaan</p>
        </div>
        <div className='bg-slate-50 px-6 py-6 md:py-2 m-5 xl:my-10 md:h-full rounded-lg'>
          <p className='font-semibold text-2xl py-5 text-center'>Analisis Penjualan Mendalam</p>
          <DotLottiePlayer
            src="https://lottie.host/b9ac1abc-f8b0-4190-bd22-b83a11a331a4/urXGiYUbVW.json"
            autoplay
            loop
          >
          </DotLottiePlayer>
          <p className='text-lg'>Dapatkan wawasan berharga mengenai kinerja penjualan dan perilaku pelanggan dengan analisis yang komprehensif</p>
        </div>
        <div className='bg-slate-50 px-6 py-6 md:py-2 m-5 xl:my-10 md:h-full rounded-lg'>
          <p className='font-semibold text-2xl py-5 text-center'>Proses Pembayaran yang Aman</p>
          <DotLottiePlayer
            src="https://lottie.host/353eb5cf-3efd-464b-9621-dc60a5bc6e00/XyXzd0uqf5.json"
            autoplay
            loop
          >
          </DotLottiePlayer>
          <p className='text-lg'>Memastikan pemrosesan pembayaran yang aman dan dapat diandalkan untuk transaksi yang lancar</p>
        </div>
      </div>
    </div>
  )
}

export default FiturPage
