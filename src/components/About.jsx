import React from 'react'
import { styles } from '../style'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <section className='py-12'>
      <div className={`${styles.container} overflow-x-hidden flex flex-col-reverse lg:flex-row lg:justify-between`}>
        <div className='w-full max-w-[660px]'>
          <h3 className='mb-6 text-22 font-semibold md:text-32'>Biz haqimizda</h3>
          <p className='mb-8 text-lg font-medium text-gray-500'>Andijon va Andijon viloyatida elektr o'rnatish ishlari, elektrchilar xizmatlari</p>
          <p className='mb-6 text-lg text-gray-500'>
          Tashkilotimiz 10 yildan ortiq vaqt davomida muhandislik va elektr montaj ishlarini olib boradi. Dinamik rivojlanayotgan kompaniyamizda 5 yildan ortiq tajribaga ega mutaxassislar ishlaydi.
          </p>
          <p className='mb-6 text-lg text-gray-500'>
          Barcha xodimlar elektrotexnika bo'yicha o'rta yoki oliy ma'lumotli diplomlarga ega va elektr xavfsizligi bo'yicha amaldagi guruhga ega. Elektr o'rnatish ishlari bizning mutaxassislarimiz tomonidan barcha norma va qoidalarga muvofiq amalga oshiriladi.
          </p>
          <Link className='inline-block font-medium py-4 px-9 border-2 rounded-lg hover:border-2 hover:border-lightBlue' to='/about'>Batafsil o'qish</Link>

        </div>
        <div data-aos="fade-left"  className='mb-5 relative h-full max-h-[460px] overflow-hidden rounded-xl  lg:w-[480px] lg:h-[460px]'>
          <img className='w-full h-full scale-y-150 lg:bg-cover lg:scale-150' src="https://mos-electrical-installation-works.oml.ru/thumb/2/zdSoAbgdr7C8X_8Wt9i0rg/1280r1280/d/55207455_2.jpg" alt="elektr shiti" />
        </div>
      </div>
    </section>
  )
}

export default About