import React, { useEffect, useState } from 'react'
import { styles } from '../style'
import { Link } from 'react-router-dom'
import moredrop from '../assets/img/moredrop.svg'
import { services } from '../data'

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false)
  const [isCompany, setIsCompany] = useState(false)
  const [isServices, setIsServices] = useState(false)
  const [isSticky, setIsSticky] = useState(false)
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 145) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header>
      <div className='hidden border-b lg:block'>
        <div className={`${styles.container}`}>
          <div className='font-medium text-sm'><span className='text-sm text-gray-500'>Ish vaqti: </span> Du-Ju: 09:00 dan 17:00 gacha</div>
        </div>
      </div>
      <div className='py-5 border-b'>
        <div className={`${styles.container} flex flex-col items-center sm:items-start lg:flex-row lg:items-center lg:justify-between`}>
          <div className='mb-5 lg:mb-0'>
            <Link className='flex' to='/'>
              <div className='flex flex-col'>
                <h1 className='mb-2 font-medium text-2xl'>Electrocity</h1>
                <span className='font-medium opacity-60'>Elektromontaj ishlari</span>
              </div>
            </Link>
          </div>
          <div className='flex flex-col sm:flex-row'>
            <div className='flex items-center mr-10 mb-5 sm:mb-0'>
              <svg className='mr-5' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M21.4 6.1l-6-3c-.3-.1-.6-.1-.9 0L9 5.9 3.4 3.1c-.3-.1-.6-.1-.9 0-.3.2-.5.6-.5.9v13c0 .4.2.7.6.9l6 3c.3.1.6.1.9 0l5.6-2.8 5.6 2.8c0 .1.1.1.3.1.2 0 .4 0 .5-.1.3-.2.5-.5.5-.9V7c0-.4-.2-.7-.6-.9zM10 7.6l4-2v10.8l-4 2V7.6zm-6-2l4 2v10.8l-4-2V5.6zm16 12.8l-4-2V5.6l4 2v10.8z" fill='#513bff'>
              </path>
              </svg>
              <p className='flex flex-col font-semibold'>
                <span className='mb-3 font-medium text-sm text-gray-500'>Biz joylashgan manzil:</span>
                Andijon v. Baliqchi tumani, <br /> Chinobod 0 uy.
              </p>
            </div>
            <div className='flex items-center'>
              <svg className='mr-5' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M17.7 12.3c-.4-.4-1-.4-1.4 0l-1.6 1.6c-.7-.2-2.1-.7-3-1.6s-1.4-2.3-1.6-3l1.6-1.6c.4-.4.4-1 0-1.4l-4-4c-.4-.4-1-.4-1.4 0L3.6 5c-.4.4-.6.9-.6 1.4 0 1.4.4 6.4 4.3 10.3S16.1 21 17.6 21c.5 0 1-.2 1.4-.6l2.7-2.7c.4-.4.4-1 0-1.4l-4-4zm-.1 6.7c-1.2 0-5.5-.4-8.9-3.7C5.3 11.9 5 7.6 5 6.4l2-2L9.6 7 8.3 8.3c-.2.2-.3.6-.3.9 0 .1.6 2.8 2.3 4.5s4.4 2.2 4.5 2.3c.3.1.7 0 .9-.3l1.3-1.3 2.6 2.6-2 2z" fill='#513bff'></path></svg>
              <div className='flex flex-col '>
                <span className='mb-3 font-medium text-sm text-gray-500'>Qo'ng'iroq qiling:</span>
                <a href='tel:+998930001234' className='font-medium text-2xl'>+998 (00) 000 00 00</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className={`${styles.container}`}>
          <nav className={`${isSticky ? 'fixed top-0 left-0' : ''} bg-white z-10 hidden w-full lg:flex lg:flex-col lg:items-center`}>
            <ul className='flex items-center space-x-7 font-medium'>
              <li>
                <Link to='/' className='hover:text-lightBlue py-5 transition-all ease-in-out duration-500'>Asosiy</Link>
              </li>
              <li onMouseLeave={() => setIsCompany(false)}>
                <Link to='/about' onMouseEnter={() => setIsCompany(true)} className='flex items-center hover:text-lightBlue py-5 transition-colors ease-in-out duration-500'>
                  <span className='mr-3'>Kompaniya haqida</span>
                  <img src={moredrop} alt="more drop" className='w-3 h-3 opacity-60' />
                </Link>
                <div onMouseLeave={() => setIsCompany(false)} className={isCompany ? 'flex flex-col w-60 bg-white absolute z-50 px-5 py-7 text-sm space-y-7 shadow-md rounded-lg' : 'hidden'}>
                  <Link to='/about/certificates' className='hover:text-lightBlue transition-colors ease-in-out duration-500'>
                    Sertifikatlar
                  </Link>
                  <Link className='hover:text-lightBlue transition-colors ease-in-out duration-500'>
                    Foydali maqolalar
                  </Link>
                  <Link className='hover:text-lightBlue transition-colors ease-in-out duration-500'>
                    Savol-javob
                  </Link>
                </div>
              </li>
              <li onMouseLeave={() => setIsServices(false)}>
                <Link to='/services' onMouseEnter={() => setIsServices(true)} className='flex items-center hover:text-lightBlue py-2 transition-colors ease-in-out duration-500'>
                  <span className='mr-3'>Xizmatlar</span>
                  <img src={moredrop} alt="more drop" className='w-3 h-3 opacity-60' />
                </Link>
                <div onMouseLeave={() => setIsServices(false)} className={isServices ? 'flex flex-col w-64 absolute z-10 bg-white px-5 py-7 text-sm space-y-7 shadow-md rounded-lg' : 'hidden'}>
                  {
                    services.map((service)=>{
                      return(
                        <Link key={service.id} to={`services/${service.title}`} className='hover:text-lightBlue transition-colors ease-in-out duration-500'>{service.title}</Link>
                      )
                    })
                  }
                </div>
              </li>
              <li>
                <Link to='/electric-works' className='hover:text-lightBlue py-5 transition-all ease-in-out duration-500'>Elektromontaj ishlar</Link>
              </li>
              <li>
                <Link to='/works' className='hover:text-lightBlue py-5 transition-all ease-in-out duration-500'>Bizning ishlarimiz</Link>
              </li>
              <li>
                <Link to='/reviews' className='hover:text-lightBlue py-5 transition-all ease-in-out duration-500'>Biz haqimizda sharhlar</Link>
              </li>
              <li>
                <Link to='/contacts' className='hover:text-lightBlue py-5 transition-all ease-in-out duration-500'>Kontaktlar</Link>
              </li>
            </ul>
          </nav>
          {openMenu && <div onClick={() => setOpenMenu(false)} className='fixed top-0 left-0 z-20 w-full h-full bg-black opacity-50 lg:hidden'></div>}
          <nav className={`fixed top-0 right-0 z-30 w-72 h-full bg-white transform ${openMenu ? 'translate-x-0' : `translate-x-full `} duration-500 sm:w-96 md:text-lg lg:hidden menu`}>
            <ul className="flex flex-col gap-7 h-full py-12 px-7 overflow-y-auto font-medium">
              <button className='absolute top-5 right-5' onClick={() => setOpenMenu(false)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 50 50" data-prefix="ibsjxwgzv"><path d="M46.56-.007L25 21.551 3.44-.007-.01 3.442 21.55 25-.01 46.558l3.45 3.449L25 28.449l21.56 21.558 3.45-3.449L28.45 25 50.01 3.442z" fill='black' className='opacity-60'></path></svg>
              </button>
              <li>
                <Link to='/' className='hover:text-lightBlue  transition-all ease-in-out duration-500'>Asosiy</Link>
              </li>
              <li>
                <div className='flex items-center'>
                  <Link to='/about' className='flex items-center hover:text-lightBlue transition-colors ease-in-out duration-500'>
                    <span className='mr-3'>Kompaniya haqida</span>
                  </Link>
                  <button onClick={() => setIsCompany(prev => !prev)}>
                    <img src={moredrop} alt="more drop" className={`${isCompany ? '-rotate-180' : ''} transition-all duration-500 w-3 h-3 opacity-60 cursor-pointer`} />
                  </button>
                </div>
                <div onClick={() => setIsCompany(false)} className={isCompany ? 'flex flex-col px-5 py-5 text-sm text-gray-500 space-y-4 rounded-lg' : 'hidden'}>
                  <Link className='hover:text-lightBlue transition-colors ease-in-out duration-500'>
                    Sertifikatlar
                  </Link>
                  <Link className='hover:text-lightBlue transition-colors ease-in-out duration-500'>
                    Foydali maqolalar
                  </Link>
                  <Link className='hover:text-lightBlue transition-colors ease-in-out duration-500'>
                    Savol-javob
                  </Link>
                </div>
              </li>
              <li>
                <div className='flex items-center'>
                  <Link to='/services' className='flex items-center hover:text-lightBlue transition-colors ease-in-out duration-500'>
                    <span className='mr-3'>Xizmatlar</span>
                  </Link>
                  <button onClick={() => setIsServices(prev => !prev)}>
                    <img src={moredrop} alt="more drop" className={`${isServices ? '-rotate-180' : ''} transition-all duration-500 w-3 h-3 opacity-60 cursor-pointer`} />
                  </button>
                </div>
                <div onClick={() => setIsServices(false)} className={isServices ? 'flex flex-col px-5 py-5  space-y-4 rounded-lg' : 'hidden'}>
                  {
                    services.map((service)=>{
                      return(
                        <Link key={service.id} to={`services/${service.title}`} className='hover:text-lightBlue transition-colors ease-in-out text-sm text-gray-500 duration-500'>{service.title}</Link>
                      )
                    })
                  }
                </div>
              </li>
              <li>
                <Link to='/electric-works' className='hover:text-lightBlue  transition-all ease-in-out duration-500'>Elektromontaj ishlar</Link>
              </li>
              <li>
                <Link to='/works' className='hover:text-lightBlue  transition-all ease-in-out duration-500'>Bizning ishlarimiz</Link>
              </li>
              <li>
                <Link to='/reviews' className='hover:text-lightBlue  transition-all ease-in-out duration-500'>Biz haqimizda sharhlar</Link>
              </li>
              <li>
                <Link to='/contacts' className='hover:text-lightBlue  transition-all ease-in-out duration-500'>Kontaktlar</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <button onClick={() => setOpenMenu(true)} className="block fixed top-0 right-0 py-4 px-4 z-10 rounded-bl-lg bg-lightBlue lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" data-prefix="ix6k4jmst"><path d="M0 0h24v24H0V0z" fill="none"></path><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" fill='white'></path></svg>
      </button>
    </header>
  )
}

export default Header