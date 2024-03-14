import React from 'react'
import ceklis from '../assets/icon/check-mark-svgrepo-com.svg'
import cross from '../assets/icon/close-bold-svgrepo-com.svg'

const HargaPage = () => {
  return (
    <div id='hargaPage' className='bg-slate-50 py-10 xl:px-36'>
      <h5 className='text-lg text-blue-700 m-5 text-center font-bold'>HARGA</h5>
      <p className='text-2xl m-5 font-bold text-center'>Dapatkan harga Spesial</p>
      <p className='m-5 text-lg text-center'>Kami memiliki beberapa paket yang cocok untuk Anda</p>
      <div className='grid md:grid-cols-3 grid-cols-1 mx-6 sm:mx-12 lg:mx-20'>
        {/* For Pricing Point */}
        <div className='bg-slate-50 m-2 rounded-lg shadow-lg relative'>
          <div className='bg-blue-600 rounded-t-lg pb-5 h-60'>
            <p className='font-bold text-white text-2xl py-5 mx-5'>FREE</p>
            <div className='m-2 py-4 items-center text-center text-white'>
              <p className='m-2 text-4xl md:text-3xl xl:text-4xl font-bold'>Rp. 0,</p>
              <p>Per / Bulan</p>
            </div>
          </div>
          <div className='bg-slate-50 p-5 md:px-5 h-96'>
            <p className='text-lg'>Ingin mencoba terlebih dahulu? Kami dapat memberikan paket per Outlet / Bulan</p>
            <ul className='list-disc list-inside'>
              <li>Dashboard Penjualan</li>
              <li>Management Produk</li>
              <li>Laporan Penjualan</li>
              <li>Management Outlet</li>
            </ul>
          </div>
          <div className='absolute bottom-2 left-0 min-w-full px-3'>
            <p className='text-lg m-2 p-2 text-center bg-blue-600 text-white rounded-full font-semibold'>Coba Gratis</p>
          </div>
        </div>
        <div className='bg-slate-50 m-2 rounded-lg shadow-lg relative'>
          <div className='bg-blue-900 rounded-t-lg pb-5 h-60'>
            <p className='font-bold text-white text-2xl py-5 mx-5'>PRO</p>
            <div className='m-2 py-4 items-center text-center text-white'>
              <p className='m-2 text-4xl md:text-3xl xl:text-4xl font-bold'>Rp. 299.000,-</p>
              <p>Per / Bulan</p>
            </div>
          </div>
          <div className='bg-slate-50 p-5 md:px-5 h-96'>
            <p className='text-lg'>Ingin memiliki semua fitur yang tersedia tanpa batasan? Kami memiliki paket Pro untuk anda</p>
            <ul className='list-disc list-inside'>
              <li>Dashboard Penjualan</li>
              <li>Management Produk</li>
              <li>Laporan Penjualan</li>
              <li>Management Karyawan</li>
              <li>Daily Recap By Email</li>
              <li>Laporan Penjualan</li>
              <li>Management Outlet</li>
            </ul>
          </div>
          <div className='absolute bottom-2 left-0 min-w-full px-3'>
            <p className='text-lg m-2 p-2 text-center bg-blue-900 text-white rounded-full font-semibold'>Coba paket Pro</p>
          </div>
        </div>
        <div className=' bg-slate-50 m-2 rounded-lg shadow-lg relative'>
          <div className='bg-blue-800 rounded-t-lg h-60'>
            <p className='font-bold text-white text-2xl py-5 mx-5'>BASIC</p>
            <div className='m-2 py-4 items-center text-center text-white'>
              <p className='m-2 text-4xl md:text-3xl xl:text-4xl font-bold'>Rp. 199.000,-</p>
              <p>Per / Bulan</p>
            </div>
          </div>
          <div className='bg-slate-50 p-5 md:px-5 h-96'>
            <p className='text-lg'>Siap untuk menggunakan Aplikasi? Kami memiliki paket Basic untuk anda</p>
            <ul className='list-disc list-inside'>
              <li>Dashboard Penjualan</li>
              <li>Management Produk</li>
              <li>Management Karyawan</li>
              <li>Laporan Penjualan</li>
              <li>Management Outlet</li>
            </ul>
          </div>
          <div className='absolute bottom-2 left-0 min-w-full px-3'>
            <p className='text-lg m-2 p-2 text-center bg-blue-800 text-white rounded-full font-semibold'>Coba paket Basic</p>
          </div>
        </div>
      </div>
      <p className='text-2xl m-5 font-bold text-center mt-20 mb-20'>FEATURES COMPARISON</p>
      <div className='p-2 m-2 h-full rounded-lg grid grid-cols-5 lg:mx-28'>
        <div className='p-2 col-span-2 rounded-lg'>
        </div>
        <div className='p-2 mx-1 md:mx-2 bg-blue-600 rounded-lg'>
          <p className='p-2 font-semibold md:text-2xl text-center text-white'>Free</p>
        </div>
        <div className='p-2 mx-1 md:mx-2 bg-blue-800 rounded-lg'>
          <p className='p-2 font-semibold md:text-2xl text-center text-white'>Basic</p>
        </div>
        <div className='p-2 mx-1 md:mx-2 bg-blue-900 rounded-lg'>
          <p className='p-2 font-semibold md:text-2xl text-white text-center'>Pro</p>
        </div>
      </div>
      <div className='p-2 m-2 h-full rounded-lg grid grid-cols-5 items-center lg:mx-28 '>
        <div className='col-span-5'>
          <p className='p-2 font-semibold text-2xl'>Dashboard Penjualan</p>
        </div>
        <div className='p-2 col-span-2 bg-slate-100'>
          <p className='p-2 text-lg'>Ringkasan Penjualan</p>
        </div>
        <div className=' flex justify-center bg-slate-100 h-full items-center'>
          <img src={ceklis} alt="Check" class="w-5 h-5 m-2"/>
        </div>
        <div className=' flex justify-center bg-slate-100 h-full items-center'>
          <img src={ceklis} alt="Check" class="w-5 h-5 m-2"/>
        </div>
        <div className=' flex justify-center bg-slate-100 h-full items-center'>
          <img src={ceklis} alt="Check" class="w-5 h-5 m-2"/>
        </div>
        <div className='p-2 col-span-2'>
          <p className='p-2 text-lg'>Histori Transaksi</p>
        </div>
        <div className=' flex justify-center h-full items-center'>
          <img src={ceklis} alt="Check" class="w-5 h-5 m-2"/>
        </div>
        <div className=' flex justify-center h-full items-center'>
          <img src={ceklis} alt="Check" class="w-5 h-5 m-2"/>
        </div>
        <div className=' flex justify-center h-full items-center'>
          <img src={ceklis} alt="Check" class="w-5 h-5 m-2"/>
        </div>
      </div>
      <div className='p-2 m-2 h-full rounded-lg grid grid-cols-5 items-center lg:mx-28 '>
        <div className='col-span-5'>
          <p className='p-2 font-semibold text-2xl'>Management Karyawan</p>
        </div>
        <div className='p-2 col-span-2 bg-slate-100'>
          <p className='p-2 text-lg'>Absensi</p>
        </div>
        <div className=' flex justify-center bg-slate-100 h-full items-center'>
          <img src={cross} alt="cross" class="w-5 h-5 m-2"/>
        </div>
        <div className=' flex justify-center bg-slate-100 h-full items-center'>
          <img src={ceklis} alt="Check" class="w-5 h-5 m-2"/>
        </div>
        <div className=' flex justify-center bg-slate-100 h-full items-center'>
          <img src={ceklis} alt="Check" class="w-5 h-5 m-2"/>
        </div>
        <div className='p-2 col-span-2'>
          <p className='p-2 text-lg'>Pengaturan Karyawan</p>
        </div>
        <div className=' flex justify-center h-full items-center'>
          <img src={cross} alt="cross" class="w-5 h-5 m-2"/>
        </div>
        <div className=' flex justify-center h-full items-center'>
          <img src={ceklis} alt="Check" class="w-5 h-5 m-2"/>
        </div>
        <div className=' flex justify-center h-full items-center'>
          <img src={ceklis} alt="Check" class="w-5 h-5 m-2"/>
        </div>
      </div>
      <div className='p-2 m-2 h-full rounded-lg grid grid-cols-5 items-center lg:mx-28 '>
        <div className='col-span-5'>
          <p className='p-2 font-semibold text-2xl'>Management Pelanggan</p>
        </div>
        <div className='p-2 col-span-2 bg-slate-100'>
          <p className='p-2 text-lg'>Database Pelanggan</p>
        </div>
        <div className=' flex justify-center bg-slate-100 h-full items-center'>
          <img src={cross} alt="cross" class="w-5 h-5 m-2"/>
        </div>
        <div className=' flex justify-center bg-slate-100 h-full items-center'>
          <img src={ceklis} alt="Check" class="w-5 h-5 m-2"/>
        </div>
        <div className=' flex justify-center bg-slate-100 h-full items-center'>
          <img src={ceklis} alt="Check" class="w-5 h-5 m-2"/>
        </div>
        <div className='p-2 col-span-2'>
          <p className='p-2 text-lg'>Loyalty Program</p>
        </div>
        <div className=' flex justify-center h-full items-center'>
          <img src={cross} alt="cross" class="w-5 h-5 m-2"/>
        </div>
        <div className=' flex justify-center h-full items-center'>
          <img src={ceklis} alt="Check" class="w-5 h-5 m-2"/>
        </div>
        <div className=' flex justify-center h-full items-center'>
          <img src={ceklis} alt="Check" class="w-5 h-5 m-2"/>
        </div>
      </div>
      <div className='p-2 m-2 h-full rounded-lg grid grid-cols-5 items-center lg:mx-28 '>
        <div className='col-span-5'>
          <p className='p-2 font-semibold text-2xl'>Management Product</p>
        </div>
        <div className='p-2 col-span-2 bg-slate-100'>
          <p className='p-2 text-lg'>Kategori Produk</p>
        </div>
        <div className=' flex justify-center bg-slate-100 h-full items-center'>
          <img src={ceklis} alt="Check" class="w-5 h-5 m-2"/>
        </div>
        <div className=' flex justify-center bg-slate-100 h-full items-center'>
          <img src={ceklis} alt="Check" class="w-5 h-5 m-2"/>
        </div>
        <div className=' flex justify-center bg-slate-100 h-full items-center'>
          <img src={ceklis} alt="Check" class="w-5 h-5 m-2"/>
        </div>
        <div className='p-2 col-span-2'>
          <p className='p-2 text-lg'>Kategori Varian</p>
        </div>
        <div className=' flex justify-center h-full items-center'>
          <img src={ceklis} alt="Check" class="w-5 h-5 m-2"/>
        </div>
        <div className=' flex justify-center h-full items-center'>
          <img src={ceklis} alt="Check" class="w-5 h-5 m-2"/>
        </div>
        <div className=' flex justify-center h-full items-center'>
          <img src={ceklis} alt="Check" class="w-5 h-5 m-2"/>
        </div>
        <div className='p-2 col-span-2 bg-slate-100'>
          <p className='p-2 text-lg'>Pengingat Stok</p>
        </div>
        <div className=' flex justify-center bg-slate-100 h-full items-center'>
          <img src={cross} alt="cross" class="w-5 h-5 m-2"/>
        </div>
        <div className=' flex justify-center bg-slate-100 h-full items-center'>
          <img src={ceklis} alt="Check" class="w-5 h-5 m-2"/>
        </div>
        <div className=' flex justify-center bg-slate-100 h-full items-center'>
          <img src={ceklis} alt="Check" class="w-5 h-5 m-2"/>
        </div>
      </div>
      <div className='p-2 m-2 h-full rounded-lg grid grid-cols-5 items-center lg:mx-28 '>
        <div className='p-2 col-span-2'>
          <p className='p-2 font-semibold text-2xl'>Transaksi</p>
        </div>
        <div className=' flex justify-center h-full items-center'>
          <img src={ceklis} alt="Check" class="w-5 h-5 m-2"/>
          <p className='text-center text-lg'>(7 Hari)</p>
        </div>
        <div className=' flex justify-center h-full items-center'>
          <img src={ceklis} alt="Check" class="w-5 h-5 m-2"/>
        </div>
        <div className=' flex justify-center h-full items-center'>
          <img src={ceklis} alt="Check" class="w-5 h-5 m-2"/>
        </div>
      </div>
      <div className='p-2 m-2 h-full rounded-lg grid grid-cols-5 items-center lg:mx-28 '>
        <div className='p-2 col-span-2 bg-slate-100'>
          <p className='p-2 font-semibold text-2xl'>Daily Recap by Email</p>
        </div>
        <div className=' flex justify-center h-full items-center bg-slate-100'>
          <img src={cross} alt="cross" class="w-5 h-5 m-2"/>
        </div>
        <div className=' flex justify-center h-full items-center bg-slate-100'>
          <img src={cross} alt="cross" class="w-5 h-5 m-2"/>
        </div>
        <div className=' flex justify-center h-full items-center bg-slate-100'>
          <img src={ceklis} alt="Check" class="w-5 h-5 m-2"/>
        </div>
      </div>
      <div className='p-2 m-2 h-full rounded-lg grid grid-cols-5 items-center lg:mx-28 '>
        <div className='p-2 col-span-2'>
          <p className='p-2 font-semibold text-2xl'>Laporan Penjualan</p>
        </div>
        <div className=' flex justify-center h-full items-center'>
          <img src={ceklis} alt="Check" class="w-5 h-5 m-2"/>
          <p className='text-center text-lg'>(App Only)</p>
        </div>
        <div className=' flex justify-center h-full items-center'>
          <img src={ceklis} alt="Check" class="w-5 h-5 m-2"/>
          <p className='text-center text-lg'>(App + Web)</p>
        </div>
        <div className=' flex justify-center h-full items-center'>
          <img src={ceklis} alt="Check" class="w-5 h-5 m-2"/>
          <p className='text-center text-lg'>(App + Web)</p>
        </div>
      </div>
      <div className='p-2 m-2 h-full rounded-lg grid grid-cols-5 items-center lg:mx-28 '>
        <div className='p-2 col-span-2 bg-slate-100'>
          <p className='p-2 font-semibold text-2xl'>Management Outlet</p>
        </div>
        <div className=' flex justify-center h-full items-center bg-slate-100'>
          <img src={ceklis} alt="Check" class="w-5 h-5 m-2"/>
          <p className='text-center text-lg'>(1 Outlet)</p>
        </div>
        <div className=' flex justify-center h-full items-center bg-slate-100'>
          <img src={ceklis} alt="Check" class="w-5 h-5 m-2"/>
          <p className='text-center text-lg'>(5 Outlet)</p>
        </div>
        <div className=' flex justify-center h-full items-center bg-slate-100'>
          <img src={ceklis} alt="Check" class="w-5 h-5 m-2"/>
          <p className='text-center text-lg'>(Unlimited)</p>
        </div>
      </div>
      <div className='p-2 m-2 h-full rounded-lg grid grid-cols-5 items-center lg:mx-28 '>
        <div className='p-2 col-span-2'>
          <p className='p-2 font-semibold text-2xl'>Pesan dari Meja</p>
        </div>
        <div className=' flex justify-center h-full items-center'>
          <img src={cross} alt="cross" class="w-5 h-5 m-2"/>
        </div>
        <div className=' flex justify-center h-full items-center'>
          <img src={cross} alt="cross" class="w-5 h-5 m-2"/>
        </div>
        <div className=' flex justify-center h-full items-center'>
          <img src={ceklis} alt="Check" class="w-5 h-5 m-2"/>
        </div>
      </div>
    </div>
  )
}

export default HargaPage
