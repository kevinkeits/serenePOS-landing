import React from 'react';

const MainTittle = () => {
  return (
    <div className='my-28 lg:px-10 lg:mx-28'>
      <h1 className='text-6xl lg:text-8xl py-5 mx-10 mt-10 text-center font-bold text-slate-50'>serenePOS</h1>
      <p className='text-xl align-middle m-5 text-center text-slate-50'>Optimalkan Bisnismu dengan Kemudahan dan Efisiensi Bersama Aplikasi POS Kami – Transformasi Penjualan Menjadi Pengalaman yang Lebih Baik</p>
      <div className='flex items-center justify-center'>
        <button className='text-xl m-3 p-5 border-2 rounded-full text-center border-black bg-slate-900 text-white font-semibold :bg-slate-800'>Mulai Sekarang</button>
        <p className='text-xl m-3 p-5 text-slate-50 hover:border-2 hover:rounded-full'>Pelajari</p>
      </div>
    </div>
  )
}

export default MainTittle;
