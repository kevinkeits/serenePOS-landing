import React from 'react'
import payimg from '../assets/images/Pay.png'

const DetailPage = () => {
  return (
    <div className='bg-white pt-5 pb-5'>
      <div className='m-2 py-20 lg:px-10 lg:mx-28  grid grid-cols-1 md:grid-cols-3 items-center'>
        <div className='m-2 col-span-2'>
          <h1 className='text-lg text-blue-700 m-5 font-bold'>DETAIL</h1>
          <p className='text-2xl m-5 font-bold'>Transformasikan Bisnismu Secara Detail dengan Aplikasi POS Kami</p>
          <p className='m-5 text-lg'>Dengan Aplikasi POS Kami, Nikmati Kemudahan Manajemen Inventaris, Pencatatan Transaksi Cepat, 
          dan Analisis Penjualan yang Akurat. Maksimalkan Efisiensi Bisnismu, Tingkatkan Pengalaman Pelanggan, 
          dan Dorong Pertumbuhan dengan Teknologi POS Terkini!</p>
        </div>
        <div className='m-2'>
          <img src={payimg} alt="Pay" class=""/>
        </div>
      </div>      
    </div>
  )
}

export default DetailPage
