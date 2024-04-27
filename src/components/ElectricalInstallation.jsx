import React, { useState } from 'react'
import { styles } from '../style'
import { typeOfPlaces } from '../data'
import AplicationBtn from './AplicationBtn'
import ApplicationModal from './ApplicationModal'

const ElectricalInstallation = () => {
    const [showApplicationModal, setShowApplicationModal] = useState(false);

    return (
        <section className='py-6'>
            <div className={`${styles.container}`}>
                <div data-aos='fade-up' className='mb-8'>
                    <h3 className='mb-6 text-22 font-semibold md:text-32'>Elektr o'rnatish xizmatlarini kalitlarga topshirish</h3>
                    <p className=' text-lg font-medium text-gray-500'>O'z sohangizdagi professionallarga ishoning</p>
                </div>
                <ul className='grid grid-cols-1 gap-9 md:grid-cols-2 lg:grid-cols-3'>
                    {
                        typeOfPlaces.map((place) => {
                            return (
                                <li className='p-6 border rounded-lg group'>
                                    <div className='mb-4 rounded-lg overflow-hidden'>
                                        <img className='bg-cover w-full h-full transition-transform duration-300 ease-in-out group-hover:scale-110' src={place.image} alt={place.title} />
                                    </div>
                                    <h4 className='mb-4 text-xl font-semibold'>{place.title}</h4>
                                    <p className='mb-4 text-gray-500'>{place.text}</p>
                                    <AplicationBtn setShowApplicationModal={setShowApplicationModal}/>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
            {
                showApplicationModal && <ApplicationModal setShowApplicationModal={setShowApplicationModal} />
            }
        </section>
    )
}

export default ElectricalInstallation