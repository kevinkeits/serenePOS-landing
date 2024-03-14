import React from 'react'
import insta from '../assets/icon/instagram-svgrepo-com.svg'
import linkedin from '../assets/icon/linkedin-svgrepo-com.svg'
import googleplay from '../assets/icon/google-play-badge-logo-svgrepo-com.svg'
import appstore from '../assets/icon/download-on-the-app-store-apple-logo-svgrepo-com.svg'

const FooterPage = () => {
  return (
    <div className='bg-gray-950 py-10'>
      <h1 className='text-4xl text-center m-5 font-bold text-slate-50 px-20 mt-6'>SerenePOS</h1>
      <div className='flex justify-center items-center'>
        <img src={googleplay} alt="Google Play" class="m-2 h-40 md:h-52"/>
        <img src={appstore} alt="App Store" class="m-2 h-40 md:h-52"/>
      </div>
      <div className='mx-10 md:mx-20 flex py-5 border-t-2 border-white'>
        <div className='m-2 grow'>
          <p className='text-slate-50'>Copyright © 2024. PT Teman Digital Indonesia. All Rights Reserved.</p>
        </div>
        <div className='flex px-2 py-2'>
          <a href='https://www.instagram.com/serenitycoffee.id/' target='_blank' rel="noreferrer"><img src={insta} alt="App Store" class="m-2 w-8 h-8"/></a>
          <a href="https://www.linkedin.com/company/temandigitalindonesia/mycompany/" target="_blank" rel="noreferrer"><img src={linkedin} alt="App Store" class="m-2 w-8 h-8"/></a>
        </div>
      </div>
    </div>
  )
}

export default FooterPage
