import React from 'react'
import { styles } from '../style'

const About = () => {
  return (
    <section>
      <div className={`${styles.container}`}>
        <h1 className='mb-6 text-22 font-bold md:text-32'>Kompaniya haqida</h1>
        <div className='float-right w-full max-w-96 h-64'>
          <img src="https://mos-electrical-installation-works.oml.ru/thumb/2/EjR5nVjVL6L50GC22CpYQA/r/d/55271232_3.jpg" alt="elektr montaj" />
        </div>
        <div className='text-lg text-gray-500 space-y-10'>
          <p>
          Kompaniyamiz 35 kVgacha bo'lgan barcha turdagi elektr o'rnatish ishlariga ixtisoslashgan. Biz elektr jihozlarini o'rnatish, havo liniyalari, transport podstansiyalarini loyihalash va qurish, kabel liniyalarini yotqizish va boshqalar bo'yicha xizmatlarni taqdim etamiz.
          </p>
          <p>
          Biz amalga oshirayotgan ishlar orasida shuni ta'kidlash kerak (to'liq ro'yxatni bizning narxlar ro'yxatimizda topishingiz mumkin):
          </p>
          <ul className='list-disc'>
            <li>
          Podstansiyalar, havo liniyalari qurilishi,
            </li>
            <li>
          Elektr laboratoriya xizmatlari (xususan, yuqori voltli sinovlar),
            </li>
            <li>
          Tarmoqlar va uskunalarga texnik xizmat ko'rsatish,
            </li>
            <li>
          Elektr uzatish liniyasi dizayni,
            </li>
            <li>
          Elektr tarmoqlari va yoritish tarmoqlarini o'rnatish,
            </li>
            <li>
          Kabel liniyalarini yotqizish,
            </li>
            <li>
          Uskunalarni sotish.
            </li>
          </ul>
          <p>
          Shuningdek, biz sizni ishontirib aytmoqchimizki, ko'rsatilayotgan xizmatlar sifati, shuningdek, mutaxassislarimizning malaka darajasi haqida hech qanday shubhangiz yo'q, chunki:
          </p>
          <ul className='list-disc'>
            <li>
          Bizning xodimlarimiz ushbu sohada ko'p yillik tajribaga ega bo'lgan, barcha sanoat va yong'in xavfsizligi talablariga javob beradigan, faqat sertifikatlangan va malakali muhandislar va ishchilarni ishlaydi,
            </li>
            <li>
          Bizning ixtiyorimizda eng yangi avlod maxsus texnika parkimiz mavjud,
            </li>
            <li>
          Biz ishlarni yuqori sifatli va o'z vaqtida, kechiktirmasdan bajaramiz,
            </li>
            <li>
          Xizmatlar narxi ham sizni hayratda qoldiradi, chunki ishlab chiqarish zavodlari va kompaniyalari bilan bevosita hamkorlik narxlarni siz uchun ancha foydali qilish imkonini beradi!
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default About