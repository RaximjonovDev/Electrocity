import React from 'react'
import { styles } from '../style'

const InformationComp = () => {
  return (
    <section className='py-9'>
        <div className={`${styles.container}`}>
            <div className='mb-6'>
            <h2 className='mb-3 font-bold text-22 md:xl lg:text-2xl xl:text-3xl'>MCHJ kompaniyasi "Electrocity"</h2>
            <p className='text-lg text-gray-500'>("Electrocity" mas'uliyati cheklangan jamiyati)</p>
            </div>
            <ul className='w-full max-w-[800px] space-y-0.5 text-lg text-gray-500'>
                <li className='flex flex-col md:flex-row md:justify-between'>
                    <p>Yuridik manzil</p>
                    <p>000000, Moskva, st. Leninskaya, uy 0, bino 0, ofis 0</p>
                </li>
                <li className='flex flex-col md:flex-row md:justify-between'>
                    <p>Haqiqiy manzili</p>
                    <p>000000, Moskva, st. Leninskaya, uy 0, bino 0, ofis 0</p>
                </li>
                <li className='flex flex-col md:flex-row md:justify-between'>
                    <p>TIN</p>
                    <p>000000000000</p>
                </li>
                <li className='flex flex-col md:flex-row md:justify-between'>
                    <p>Nazorat punkti</p>
                    <p>0000000000</p>
                </li>
                <li className='flex flex-col md:flex-row md:justify-between'>
                    <p>ORGN</p>
                    <p>0000000000000</p>
                </li>
                <li className='flex flex-col md:flex-row md:justify-between'>
                    <p>OKPO</p>
                    <p>00000000</p>
                </li>
                <li className='flex flex-col md:flex-row md:justify-between'>
                    <p>BANK</p>
                    <p>OAJ "Avangard" YoAJ Moskva</p>
                </li>
                <li className='flex flex-col md:flex-row md:justify-between'>
                    <p>R/S</p>
                    <p>00000000000000000000</p>
                </li>
                <li className='flex flex-col md:flex-row md:justify-between'>
                    <p>C/S</p>
                    <p>00000000000000000000</p>
                </li>
                <li className='flex flex-col md:flex-row md:justify-between'>
                    <p>BIC</p>
                    <p>000000000</p>
                </li>
                <li className='flex flex-col md:flex-row md:justify-between'>
                    <p>Bosh direktor</p>
                    <p>Aliyev Vali Valiyevich</p>
                </li>
            </ul>
        </div>
    </section>
  )
}

export default InformationComp