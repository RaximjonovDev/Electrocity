import React from 'react'
import { styles } from '../style'

const ElectricWorks = () => {
  return (
    <section className='py-6'>
        <div className={`${styles.container}`}>
          <h1 className='mb-6 text-22 font-bold md:text-32'>Elektr o'rnatish ishlarini kalitlarga topshirish</h1>
          <p className='mb-6 text-lg text-gray-500'>Elektr ishlari - bu turli xil elektr tizimlari va jihozlarini o'rnatish, ulash va sinovdan o'tkazish bilan bog'liq ishlarning umumiy nomi. Bu ish yangi o'rnatishni yoki mavjud tizimlarni ta'mirlash yoki yangilashni o'z ichiga olishi mumkin.</p>
          <h2 className='mb-4 text-xl font-bold md:text-2xl'>Elektr o'rnatish ishlarining ba'zi misollari:</h2>
          <ul className='mb-10 space-y-4'>
            <li className='flex items-start'>
              <span className='mr-3 py-1 px-3.5 text-lg bg-lighterBlue/10 rounded-full text-lighterBlue'>1</span>
              <p className='text-gray-500 text-lg'><b>Elektr o'rnatish:</b> Bu elektr rozetkalari, chiroqlar, kalitlar, motorlar, generatorlar va boshqa turdagi elektr qurilmalarni o'rnatishni o'z ichiga olishi mumkin.</p>
            </li>
            <li className='flex items-start'>
              <span className='mr-3 py-1 px-3.5 text-lg bg-lighterBlue/10 rounded-full text-lighterBlue'>2</span>
              <p className='text-gray-500 text-lg'><b>Elektr tarmoqlarini o'rnatish:</b> Elektr simlari va kabellarini yotqizish va ulash, shuningdek, tarqatish platalari va elektr panellarini o'rnatish va ulashni o'z ichiga oladi.</p>
            </li>
            <li className='flex items-start'>
              <span className='mr-3 py-1 px-3.5 text-lg bg-lighterBlue/10 rounded-full text-lighterBlue'>3</span>
              <p className='text-gray-500 text-lg'><b>Xavfsizlik tizimlarini o'rnatish:</b> Elektrchilar, shuningdek, xavfsizlik tizimlarini, jumladan, CCTV tizimlarini, yong'in signalizatsiyasini va kirishni boshqarish tizimlarini o'rnatish va o'rnatishda ishtirok etadilar.</p>
            </li>
            <li className='flex items-start'>
              <span className='mr-3 py-1 px-3.5 text-lg bg-lighterBlue/10 rounded-full text-lighterBlue'>4</span>
              <p className='text-gray-500 text-lg'><b>Yoritish uskunalarini o'rnatish va ulash:</b> Bu ichki va tashqi yoritishni o'rnatish, armatura o'rnatish va energiya tizimiga ulanishni o'z ichiga olishi mumkin.</p>
            </li>
          </ul>
          <p className='mb-6 text-lg text-gray-500'>Elektr ishlari milliy va mahalliy qurilish va elektr qoidalariga muvofiq bajarilishi kerak. Rossiyada tegishli hujjat PUE (Elektr o'rnatish qoidalari).</p>
          <p className='text-lg text-gray-500'>Elektr bilan ishlash xavfning oshishi bilan bog'liqligini yodda tutish kerak. Shuning uchun elektr o'rnatish ishlari zarur bilim va ko'nikmalarga ega bo'lgan malakali mutaxassislar tomonidan amalga oshirilishi kerak. Bu ish odatda maxsus ruxsat yoki litsenziya olishni talab qiladi.</p>
        </div>
    </section>
  )
}

export default ElectricWorks