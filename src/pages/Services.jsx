import React from 'react'
import { services } from '../data'
import { styles } from '../style'
import { Link } from 'react-router-dom'

const Services = () => {
  return (
    <section className='pt-3 pb-12'>
      <div className={`${styles.container}`}>
      <h2 className='mb-7 text-32 font-semibold'>Xizmatlar</h2>
      <p className='mb-8 text-lg text-gray-500'>Elektr xizmatlari elektr tizimlarini o'rnatish, texnik xizmat ko'rsatish va ta'mirlash bilan bog'liq turli xil ishlarni o'z ichiga oladi. Elektr kompaniyasidan kutishingiz mumkin bo'lgan keng tarqalgan xizmatlardan ba'zilari:</p>
      <ul className='grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3'>
        {
          services.map((service)=>{
            return(
              <li className='flex flex-col' key={service.id}>
                <img width='380' height='284' className='w-[380px] h-[270px] mb-4 rounded-md' src={service.mainImage} alt={service.title}/>
                <h3 className='mb-4 text-[26px] font-semibold'>{service.title}</h3>
                <p className='grow mb-7 text-gray-500'>{service.text}</p>
                <Link className='w-full py-3 text-lg text-white rounded-lg bg-lighterBlue text-center hover:opacity-80 transition-all' to={service.title}>Batafsil</Link>
              </li>
            )
          })
        }
      </ul>
      </div>
    </section>
  )
}

export default Services