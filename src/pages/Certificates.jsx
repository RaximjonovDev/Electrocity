import React from 'react'
import { styles } from '../style'
import { certificates } from '../data'

import 'photoswipe/dist/photoswipe.css'
import { Gallery, Item } from 'react-photoswipe-gallery'

const Certificates = () => {
  const options = {
    bgOpacity: 1,
    zoom: true,
    close: true,
    counter: true,
  }
  return (
    <section className='py-6'>
      <div className={`${styles.container}`}>
      <h1 className='mb-6 font-bold text-22 sm:text-2xl md:3xl lg:text-4xl sm:mb-8 lg:mb-9 xl:mb-11'>Sertifikatlar</h1>
      <ul className='grid gap-5 grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
      <Gallery options={options} id="my-gallery" withDownloadButton withCaption>
      {
        certificates.map((certificate) => {
          return(
            <li className='rounded-lg cursor-zoom-in'>
             <Item
                id={certificate.id}
                original={certificate.image}
                thumbnail={certificate.image}
                width="430"
                height="606"
                caption='Sertifikat 1'
                alt='sertifikat'
              >
                {({ ref, open }) => (
                  <img ref={ref} onClick={open} src={certificate.image} />
                )}
              </Item>
            </li>
          )
        })
      }
       </Gallery>
      </ul>
      </div>
    </section>
  )
}

export default Certificates