import React, { useEffect } from 'react'

const ReviewsModal = ({ setReviewModal }) => {
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, []);

    const closeModal = (e) => {
        console.log('Key pressed:', e.key);
        if (e.key === 'Escape') {
            setReviewModal(false);
        }
    };

    useEffect(() => {
        document.addEventListener('keydown', closeModal);
        return () => {
            document.removeEventListener('keydown', closeModal);
        };
    }, []);
    return (
        <div className='overflow-visible flex flex-col items-center justify-center'>
            <div onClick={() => setReviewModal(false)} className="fixed top-0 left-0 z-20 w-full h-full bg-black opacity-50"></div>
            <div className='fixed top-10 z-30 rounded-lg w-full max-w-[357px] py-8 px-5 bg-grey sm:py-12 sm:px-8 sm:max-w-[560px] md:py-16 md:px-14 md:max-w-[672px] lg:py-[72px] lg:px-16'>
                <button onClick={() => setReviewModal(false)} className="absolute top-5 right-4 opacity-30 transition-all duration-500 hover:opacity-100">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 50 50" data-prefix="iy9eyeb5b"><path d="M46.56-.007L25 21.551 3.44-.007-.01 3.442 21.55 25-.01 46.558l3.45 3.449L25 28.449l21.56 21.558 3.45-3.449L28.45 25 50.01 3.442z" fill-rule="evenodd" class="path-ihv5pq0aw"></path></svg>
                </button>
                <h3 className='mb-3 text-22 font-bold sm:text-2xl sm:mb-4 md:text-3xl md:mb-5'>Sharx qoldiring</h3>
                <form className='space-y-4 text-gray-500'>
                    <label className='flex flex-col space-y-1'>
                        <p className='font-medium'>Ism <span className='text-red-600'>*</span></p>
                        <input type="text" className='w-full p-4 bg-transparent rounded-lg border border-gray-400 outline-none transition-all duration-300 focus:border-lighterBlue focus:bg-lighterBlue/10 hover:border-lighterBlue hover:bg-lighterBlue/10' required/>
                    </label>
                    <label className='flex flex-col space-y-1'>
                        <p className='font-medium'>Telefon raqam<span className='text-red-600'>*</span></p>
                        <input type="tel" className='w-full p-4 bg-transparent rounded-lg border border-gray-400 outline-none transition-all duration-300 focus:border-lighterBlue focus:bg-lighterBlue/10 hover:border-lighterBlue hover:bg-lighterBlue/10' required/>
                    </label>
                    <label className='flex flex-col space-y-1'>
                        <p className='font-medium'>Sharx <span className='text-red-600'>*</span></p>
                        <textarea rows="3" className='min-h-28 max-h-28 w-full p-4 bg-transparent rounded-lg border border-gray-400 outline-none transition-all duration-300 focus:border-lighterBlue focus:bg-lighterBlue/10 hover:border-lighterBlue hover:bg-lighterBlue/10' required/>
                    </label>
                    <div className='my-1 sm:my-2 flex items-center justify-between pb-4'>

                    <label className="inline-flex items-center group">

                      <div className="relative flex items-center p-3 rounded-full cursor-pointer mr-2 lg:mr-0">

                        <input id="ripple-on" type="checkbox"
                          className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-gray-400 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-textGrey before:opacity-0 before:transition-opacity checked:!border-lighterBlue checked:!bg-lighterBlue checked:before:bg-lighterBlue hover:before:opacity-10 group-hover:border-lighterBlue group-hover:bg-lighterBlue/10" required />

                        <span
                          className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor"
                            stroke="currentColor" strokeWidth="1">
                            <path fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"></path>
                          </svg>

                        </span>
                      </div>

                    <p className='font-normal text-gray-500 text-sm md:text-base group-hover:text-lighterBlue transition-all duration-300 cursor-pointer' htmlFor='ripple-on'><a className='underline text-lighterBlue' target='_blank' href="#">Shaxsiy ma'lumotlarimni</a> qayta ishlash shartlarini qabul qilaman</p>
                    <span className='text-red-600'>*</span>
                    </label>

                  </div>
                  <button type='submit' className='max-w-44 text-left font-montserrat py-2 px-5 md:px-7 text-sm bg-lighterBlue border-2 border-lighterBlue font-medium rounded-md text-white hover:opacity-70 transition-all duration-300'>Sharx qoldirish</button>
                </form>
            </div>
        </div>

    )
}

export default ReviewsModal