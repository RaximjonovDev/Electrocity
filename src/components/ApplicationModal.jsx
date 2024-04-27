import React, { useEffect, useState } from 'react'
import ReactDom from 'react-dom'

const ApplicationModal = (props) => {
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  const closeModal = (e) => {
    console.log('Key pressed:', e.key); 
    if (e.key === 'Escape') {
      props.setShowApplicationModal(false);
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', closeModal);
    return () => {
      document.removeEventListener('keydown', closeModal);
    };
  }, []);
  return ReactDom.createPortal( (
    <>
          <div onClick={() => props.setShowApplicationModal(false)} className="fixed top-0 left-0 z-20 w-full h-full bg-black opacity-50"></div>
          <div className='flex flex-col items-center justify-center'>
            <div className=" fixed top-10 w-full max-w-80 py-6 px-8 rounded-xl bg-white z-30 md:max-w-[500px] md:p-10">
              <div className="py-2 text-mainBlack mb-5 mt-10 flex flex-col">
                <h3 className='font-semibold text-2xl text-center'>Arizangizni yuboring</h3>
                <p className='text-sm text-gray-500 mt-2 font-medium text-center'>Bizning menejerimiz imkon qadar tezroq siz bilan <br /> bog'lanadi</p>
                <button onClick={() => props.setShowApplicationModal(false)} className="absolute top-5 right-4 opacity-30 transition-all duration-500 hover:opacity-100">
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 50 50" data-prefix="iy9eyeb5b"><path d="M46.56-.007L25 21.551 3.44-.007-.01 3.442 21.55 25-.01 46.558l3.45 3.449L25 28.449l21.56 21.558 3.45-3.449L28.45 25 50.01 3.442z" fill-rule="evenodd" class="path-ihv5pq0aw"></path></svg>
                </button>
              </div>
              <div className="py-5 text-mainBlack">
                <form onSubmit={(e) => { e.preventDefault(), setChecked(false), checked && alert('Xat ketti'), checked && props.setShowApplicationModal(false), !checked && alert('Iltimos bizning siyosatimiz qabul qiling!') }} className='w-full flex flex-col'>
                  <input className='bg-transparent py-4 outline-none border-b my-2 placeholder:text-black focus:border-black' placeholder='Ismingiz' type="text" required />
                  <input id='changeContent' className='bg-transparent py-4 outline-none border-b my-2 placeholder:text-black focus:border-black' placeholder='Telefon raqamingiz' pattern="(\+998|8)[\- ]?\d{2}[\- ]?\d{3}[\- ]?\d{2}[\- ]?\d{2}" type="tel" required />
                  <div className='my-2 flex items-center justify-between pb-4'>
                    <input onChange={() => setChecked(true)} width={20} height={20} className='w-10 h-5 mr-4 cursor-pointer outline-none focus:outline-none checked:bg-lightGreen ' id='check' type="checkbox" />
                    <label className='font-medium text-textGrey' htmlFor='check'>Men shaxsiy ma'lumotlarni qayta ishlash va <a className='underline' target='_blank' href="#">maxfiylik siyosatiga roziman.</a></label>
                  </div>
                  <button type='submit' onSubmit={() => alert('Xat ketti')} className='py-6 px-9 bg-lightBlue border-2 border-lightBlue w-full font-bold overflow-hidden rounded-md text-white hover:bg-white hover:text-black transition-all duration-500'>So'rov qoldirish</button>
                </form>
              </div>
            </div>
          </div>
      </>
  ), document.body)
}

export default ApplicationModal