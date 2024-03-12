import React from 'react'

const FaqPage = () => {
  return (
    <div className='bg-slate-50 py-10 xl:px-28'>
      <div className='p-2 grid md:grid-cols-3 grid-cols-1 lg:mx-28'>
        <div className='p-2'>
          <p className='text-lg text-blue-700 m-2 font-bold'>FAQ</p>
          <p className='text-2xl m-2 font-bold'>Pertanyaan Umum</p>
          <p className='m-2 text-lg'>Berikut adalah beberapa pertanyaan yang paling umum yang kami terima.</p>
        </div>
        <div className='p-2 m-2 col-span-2'>
          <div className='py-2'>
            <p className='text-2xl font-bold'>Apa itu aplikasi POS?</p>
            <p className='text-lg'>Aplikasi Point of Sales atau POS, adalah program perangkat lunak yang memungkinkan bisnis untuk memproses transaksi dan mengelola penjualan.</p>
          </div>
          <div className='py-2'>
            <p className='text-2xl font-bold'>Apa saja fitur yang seharusnya dimiliki oleh aplikasi POS?</p>
            <p className='text-lg'>Aplikasi POS yang baik seharusnya memiliki fitur seperti manajemen inventaris, pelaporan penjualan, manajemen pelanggan, dan integrasi dengan penyedia pembayaran.</p>
          </div>
          <div className='py-2'>
            <p className='text-2xl font-bold'>Dapatkah aplikasi POS digunakan pada beberapa perangkat?</p>
            <p className='text-lg'>Ya, banyak aplikasi POS dirancang untuk dapat beroperasi pada berbagai perangkat seperti tablet, smartphone, dan komputer.</p>
          </div>
          <div className='py-2'>
            <p className='text-2xl font-bold'>Apakah mungkin untuk mengintegrasikan aplikasi POS dengan software lainnya?</p>
            <p className='text-lg'>Ya, sebagian besar aplikasi POS modern menawarkan kemampuan integrasi dengan sistem perangkat lunak lainnya, seperti perangkat lunak akuntansi atau platform e-commerce.</p>
          </div>
          <div className='py-2'>
            <p className='text-2xl font-bold'>Seberapa aman aplikasi POS?</p>
            <p className='text-lg'>Aplikasi POS memberikan prioritas pada keamanan dan sering menggunakan enkripsi untuk melindungi data pelanggan yang sensitif. Penting untuk memilih penyedia POS yang terkemuka dan terpercaya untuk memastikan tingkat keamanan yang tertinggi.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FaqPage
