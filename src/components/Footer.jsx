import React, { useEffect, useState } from 'react'
import { styles } from '../style'
import { Link } from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Footer = () => {
   const [showButton, setShowButton] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  
  useEffect(()=>{
    AOS.init({
      duration:1000,
    })
  }, [])
    
  return (
    <footer>
      <div className='relative py-12 border-b'>
      <div className={`${styles.container} flex flex-col items-center md:block`}>
        <div className='flex flex-col text-center items-center md:text-start md:items-start lg:flex-row lg:justify-between'>
          <div className='mb-10 lg:mb-0'>
            <Link to='/' className='inline-block mb-8'>
              <h1 className='text-2xl font-medium'>Electrocity</h1>
              <span className='text-sm font-medium text-gray-600'>Elektromontaj</span>
            </Link>
            <div>
              <span className='inline-block mb-2 text-sm text-gray-600 font-medium'>Ijtimoiy tarmoqlarimiz:</span>
              <ul className='flex items-center space-x-2'>
                <li>
                  <a className='inline-block p-4 border rounded-full transition-colors duration-300 text-gray-400 hover:bg-lightBlue hover:text-white hover:border-white' href='https://www.youtube.com/' target='_blank'>
                    <svg width="22" height="22" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M15.26 3.336a1.987 1.987 0 0 1 1.41 1.385c.343 1.23.33 3.792.33 3.792s0 2.55-.33 3.779a1.987 1.987 0 0 1-1.41 1.385C14.008 14 9 14 9 14s-4.995 0-6.26-.336a1.987 1.987 0 0 1-1.41-1.385C1 11.062 1 8.5 1 8.5s0-2.55.33-3.779a2.027 2.027 0 0 1 1.41-1.397C3.992 3 9 3 9 3s5.008 0 6.26.336zM7.405 6.181l4.165 2.382-4.165 2.382V6.18z " fill='currentcolor'></path></svg>
                  </a>
                </li>
                <li>
                  <a className='inline-block p-4 border rounded-full transition-colors duration-300 text-gray-400 hover:bg-lightBlue hover:text-white hover:border-white' href='https://www.m.vk.com/' target='_blank'>
                    <svg width="22" height="22" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" data-prefix="iib05z98t"><path d="M9.602 15C3.579 15 .143 10.87 0 4h3.017c.1 5.043 2.323 7.18 4.085 7.62V4h2.84v4.35c1.74-.188 3.569-2.17 4.185-4.35h2.841a8.391 8.391 0 0 1-3.865 5.483A8.699 8.699 0 0 1 17.63 15H14.5a5.44 5.44 0 0 0-4.558-3.93V15h-.341z" fill='currentColor'></path></svg>
                  </a>
                </li>
                <li>
                  <a className='inline-block p-4 border rounded-full transition-colors duration-300 text-gray-400 hover:bg-lightBlue hover:text-white hover:border-white' href='https://www.youtube.com/' target='_blank'>
                    <svg width="22" height="22" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" data-prefix="i7nrfnyld"><path d="M.69 8.896c1.513-.831 3.202-1.525 4.78-2.222 2.714-1.142 5.439-2.264 8.191-3.309.536-.178 1.498-.352 1.592.44-.052 1.12-.264 2.234-.41 3.348-.37 2.45-.797 4.891-1.214 7.333-.144.813-1.165 1.234-1.82.713-1.57-1.058-3.152-2.106-4.703-3.188-.508-.515-.037-1.254.417-1.622 1.293-1.272 2.665-2.352 3.891-3.69.331-.796-.646-.125-.969.081C8.675 7.997 6.947 9.29 5.08 10.36c-.954.524-2.066.076-3.019-.216-.855-.353-2.107-.709-1.37-1.247z" fill='currentColor'></path></svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className='flex flex-col md:flex-row'>
            <div className='flex flex-col mb-10 md:mb-0 md:mr-40'>
              <span className='mb-1 text-sm text-gray-600 font-medium'>Qo'ng'iroq bepul:</span>
              <a className='mb-1 text-xl font-medium' href="tel:+998930001234">+998 (00) 000 00 00</a>
              <div className='mb-8'>
                <a className='mr-2 underline font-medium text-lighterBlue' href="http://whatsapp.com/" target="_blank">WhatsApp</a>
                <a className='underline font-medium text-lighterBlue' href="http://https://telegram.org/" target="_blank">Telegram</a>
              </div>
              <div className='flex flex-col'>
                <span className='mb-1 text-sm text-gray-600 font-medium'>Taklif va xatlar uchun:</span>
                <a className='underline font-medium text-lighterBlue' href="http://gmail.com" target="_blank" rel="noopener noreferrer">mail@gmail.com</a>
              </div>
            </div>
            <div className='text-center md:text-start'>
              <div className='mb-10 '>
                <span className='mb-1 text-sm text-gray-600 font-medium'>Ish vaqti:</span>
                <p className='font-medium'>Du-Ju: 09:00 dan 17:00 gacha</p>
                <p className='font-medium'>Shanba: 11:00 dan 15:00 gacha</p>
              </div>
              <div>
                <p className='flex flex-col font-medium'>
                  <span className='mb-1 text-sm text-gray-600 font-medium text-center md:text-start'>Biz joylashgan manzil:</span>
                  Andijon v. Baliqchi tumani, Chinobod 0 uy.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
      </div>
      <div className='py-10'>
        <div className={`${styles.container}`}>
          <p>Copyright © 2020-2024 Electrocity</p>
        </div>
      </div>
        <button className={showButton ? 'fixed bottom-5 right-5 bg-white text-gray-600 py-5 px-6 border rounded-full transition-colors duration-300 hover:bg-lightBlue hover:text-white' : 'hidden'} onClick={()=> scrollToTop()}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="23" viewBox="0 0 26 32.969" data-prefix="i9ikc8dfi"><path d="M12.565.069a1.2 1.2 0 0 1 .865 0 213.326 213.326 0 0 0 .291.151l11.775 9.7a1.264 1.264 0 0 1 .272 1.746 1.216 1.216 0 0 1-1.719.276l-9.821-8.254v28.028a1.231 1.231 0 1 1-2.462 0V3.688l-9.821 8.254a1.216 1.216 0 0 1-1.719-.276A1.264 1.264 0 0 1 .498 9.92L12.273.22a1.194 1.194 0 0 1 .156-.081 1.16 1.16 0 0 1 .136-.07z" fill="currentColor"></path></svg>
          </button>
    </footer>
  )
}

export default Footer