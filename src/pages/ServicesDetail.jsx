import React from 'react'
import { useParams } from 'react-router-dom'
import { services } from '../data'
import { styles } from '../style'

const ServicesDetail = () => {
  
  const { title } = useParams()
  const detailServices = services.find((service)=> {
    return service.title === title
  })

  
  return (
    <section className='pt-3 pb-6'>
        <div className={`${styles.container}`}>
          <h2 className='mb-6 text-22 font-semibold md:text-32'>{detailServices.title}</h2>
          <p className='mb-4 text-base text-gray-500 md:text-lg'>{detailServices.detailedText.text}</p>
          <ul>
            {
              detailServices.detailedText.steps.map((step)=>{
                return(
                  <li className='mb-3 text-lg text-gray-500'>{step}</li>
                )
              })
            }
          </ul>
        </div>
    </section>
  )
}

export default ServicesDetail