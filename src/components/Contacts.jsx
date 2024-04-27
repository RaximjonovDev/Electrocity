import React from 'react'
import { styles } from '../style'
import whatsapp from '../assets/img/whatsapp.svg'
import telegram from '../assets/img/telegram.svg'
import vk from '../assets/img/vk.svg'
import odnoklasniki from '../assets/img/odnoklasniki.svg'
import rutube from '../assets/img/rutube.svg'

const Contacts = () => {
  return (
    <div>
      <section className='py-9'>
        <div className={`${styles.container} flex flex-col lg:items-center lg:justify-between lg:flex-row`}>
          <div className='mb-10 mr-0 lg:mb-0 lg:mr-10'>
            <h1 className='mb-6 font-bold text-22 md:2xl lg:text-3xl xl:text-4xl sm:mb-8 lg:mb-9 xl:mb-11'>Kontaktlar</h1>
            <ul className='space-y-3 font-montserrat xl:space-y-5'>
              <li className='flex flex-col mb-2 md:flex-row md:items-center'>
                <a href="tel:+998900000000" className='font-bold text-xl mr-4 text-textGrey mb-2'>+998 (90) 000 00 00</a>
                <div className='flex items-center space-x-1'>
                  <a href="#">
                    <img className='transition-all duration-300 hover:opacity-70' width={40} height={20} src={whatsapp} alt="whatsapp" />
                  </a>
                  <a href="https://t.me/thisisal1ev" target='_blank'>
                    <img className='transition-all duration-300 hover:opacity-70' width={40} height={20} src={telegram} alt="telegram" />
                  </a>
                </div>
              </li>
              <li className='text-gray-500 text-lg'>Andijon viloyati, Baliqchi tumani, Chinobod shaharchasi</li>
              <li className='text-gray-500 text-lg'>Dushanba-Juma: 11:00 dan 21:00 gacha</li>
              <li className='text-gray-500 text-lg'>Shanba-Yakshanba: Dam olish kunlari</li>
              <li className='text-lighterBlue text-lg'>
                <a href="#" >mail@company.uz</a>
              </li>
              <li className='text-gray-500 text-lg'>ИНН 000000000 ОГРН 000000000</li>
              <li className='flex items-center space-x-2'>
                <a href="#">
                  <img className='rounded-md transition-all duration-300 hover:opacity-70' src={vk} width={40} height={20} alt="vkkontakte" />
                </a>
                <a href="#">
                  <img className='rounded-md transition-all duration-300 hover:opacity-70' src={odnoklasniki} width={40} height={20} alt="odnoklasniki" />
                </a>
                <a href="#">
                  <img className='rounded-md transition-all duration-300 hover:opacity-70' src={rutube} width={40} height={20} alt="rutube" />
                </a>
              </li>
            </ul>
          </div>
          <div style={{ position: 'relative', overflow: 'hidden' }}>
            <a href="https://yandex.uz/maps?utm_medium=mapframe&utm_source=maps" style={{ color: '#eee', fontSize: '12' + 'px', position: 'relative', top: '0' + 'px' }}>Яндекс Карты</a><a href="https://yandex.uz/maps/geo/1494636220/?ll=71.944848%2C40.861178&utm_medium=mapframe&utm_source=maps&z=14" style={{ color: '#eee', fontSize: '12' + 'px', position: 'relative', top: '14' + 'px' }}>Балыкчинский район — Яндекс Карты</a>
            <iframe className='w-full max-w-4xl lg:w-[860px]' src="https://yandex.uz/map-widget/v1/?ll=71.944848%2C40.861178&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgoxNDk0NjM2MjIwEi9Pyrt6YmVraXN0b24sIEFuZGlqb24gdmlsb3lhdGksIEJhbGlxY2hpIHR1bWFuaSIKDQjnj0IVLGwjQg%2C%2C&z=14" width="896" height="400" frameBorder="1" allowFullScreen={true} style={{ position: 'relative', cursor: 'grab' }}></iframe>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contacts