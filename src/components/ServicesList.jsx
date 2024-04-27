import React from 'react'
import { styles } from '../style'
import { services } from '../data'
import { Link } from 'react-router-dom'

const Services = () => {
  return (
    <section className='py-12'>
        <div className={`${styles.container}`}>
           <div data-aos="fade-up" data-aos-anchor-placement="center">
           <h3 className='mb-2 text-22 font-semibold md:text-32'>Har qanday murakkablikdagi elektr o'rnatish xizmatlari</h3>
            <p className='mb-9 text-base text-gray-500 md:text-lg'>Biz Andijon va Andijon viloyatida iste'molchilarni turar-joy va tijorat ob'ektlarida elektr energiyasi manbaiga ulash bo'yicha bir qator xizmatlarni taklif qilamiz.</p>
           </div>
            <ul className='grid grid-cols-1 gap-9 mb-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
                {
                    services.map((service)=> {
                        return(
                            <li key={service.id} className='w-[272px] mx-auto rounded-xl border transition-colors duration-300 hover:text-lightBlue'>
                                <Link className='p-6 inline-block' to={`services/${service.title}`}>
                                <div className='w-56 h-36 mb-4 rounded-lg overflow-hidden'>
                                <img className='bg-cover w-full h-full transition-transform duration-300 ease-in-out hover:scale-110' src={service.image} alt={service.title} />
                                </div>
                                <h4 className='text-xl font-semibold'>{service.title}</h4>
                                </Link>
                            </li>
                        )
                    })
                }
            </ul>
            <Link className='inline-block font-medium p-5 border-2 rounded-lg hover:border-2 hover:border-lightBlue' to='/services'>Hamma xizmatlar</Link>
        </div>
    </section>
  )
}

export default Services