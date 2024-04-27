import React, { useEffect, useState } from 'react'
import { styles } from '../style'
import { reviews } from '../data';
import ReviewsModal from '../components/ReviewsModal';

const Reviews = () => {
  const [reviewModal, setReviewModal] = useState(false);

  return (
    <section className='py-9'>
      <div className={`${styles.container}`}>
        <h1 className='mb-10 font-extrabold text-22 sm:text-xl md:text-2xl lg:text-3xl'>Biz haqimizda sharhlar</h1>
        <ul className='grid mb-4 gap-5 grid-cols-1 md:grid-cols-2 md:mb-6 lg:grid-cols-3'>
          {
            reviews.map((review) => {
              return (
                <li key={review.id} className='flex flex-col h-auto'>

                  <div className='bg-grey grow relative rounded-xl mb-8'>
                    <p className='relative z-1 text-sm md:text-base text-gray-500 grow'>{review.text}</p>
                  </div>
                  <div className='flex flex-col sm:flex-row sm:items-center'>
                    <div>
                      <img className='rounded-full mb-5 sm:mr-7' src={review.img} width={90} height={90} alt="user-img" />
                    </div>
                    <div>
                      <h3 className='font-bold text-lg mb-1'>{review.name}</h3>
                    </div>
                  </div>
                </li>
              )
            })
          }
        </ul>
        <button onClick={() => setReviewModal(true)} className='text-white text-lg outline-none bg-lighterBlue py-2 px-5 rounded-md w-full transition-all duration-300 hover:opacity-70 md:w-auto'>Sharx qoldirish</button>
        {
          reviewModal && <ReviewsModal setReviewModal={setReviewModal}/>
        }
      </div>
    </section>
  )
}

export default Reviews