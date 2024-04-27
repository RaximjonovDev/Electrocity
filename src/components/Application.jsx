import React, { useEffect, useState } from 'react';
import { styles } from '../style';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import AplicationBtn from './AplicationBtn';
import ApplicationModal from './ApplicationModal';

const Application = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [showApplicationModal, setShowApplicationModal] = useState(false);


  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
    afterChange: (currentSlide) => setActiveIndex(currentSlide),
    appendDots: dots => (
      <div className=''>
        <ul className="relative lg:absolute lg:-top-28 lg:left-14"> {dots} </ul>
      </div>
    ),
    customPaging: i => (
      <div className={`w-4 h-4 border-2 border-gray-500 rounded-full ${i === activeIndex ? 'bg-lightBlue border-lightBlue' : 'bg-transparent'}`}></div>
    ),
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };

  function SampleNextArrow(props) {
    const { onClick } = props;
    return (
      <div
        className='hidden absolute bottom-20 z-10 right-16 py-2 px-5 bg-transparent rounded-lg border-2 border-gray-400 transition-colors duration-300 hover:bg-lightBlue lg:block'
        onClick={onClick}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="35" viewBox="0 0 30.968 55.969" data-prefix="iddnbcwha"><path d="M2.843 55.975L-.014 53.13l25.262-25.149L-.014 2.832 2.843-.013l28.119 27.994z" fill-rule="evenodd" fill='currentColor' class="text-white"></path></svg>
      </div>
    );
  }
  
  function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
      <div
        className='hidden absolute bottom-20 z-10 right-32 py-2 px-5 mr-2 bg-transparent rounded-lg border-2 border-gray-400 transition-colors duration-300 hover:bg-lightBlue lg:block'
        onClick={onClick}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="35" viewBox="0 0 30.968 55.969" data-prefix="i6i7nm074"><path d="M28.107 55.975L-.015 27.981 28.107-.013l2.857 2.845L5.702 27.981l25.26 25.149z" fill-rule="evenodd" fill='currentColor' class="text-white"></path></svg>
      </div>
    );
  }

  return (
    <section className='bg-grey py-8'>
      <div className={`${styles.container} relative`}>
        <Slider {...settings}>
          <div className='lg:px-14 lg:py-40 lg:rounded-xl lg:bg-elektromontaj lg:bg-cover lg:h-[660px]'>
            <img className='w-full h-80 object-cover lg:!hidden' src="https://mos-electrical-installation-works.oml.ru/thumb/2/oNdeNjSpDOjIiWR-fq3BRA/1920r1920/d/54455133_2.jpg" alt="elektromontaj" />
            <div data-aos="fade-up" className='rounded-b-xl p-10 bg-white lg:rounded-xl lg:w-[500px]'>
              <h4 className='mb-3 text-2xl font-bold'>Elektr o'rnatish ishlari uchun har qanday buyurtmalarni qabul qilamiz</h4>
              <p className='mb-4 text-gray-500'>Hech qanday avans yoki oldindan to'lovlar yo'q, barchasi natijaga ishonchingiz uchun</p>
              <AplicationBtn setShowApplicationModal={setShowApplicationModal}/>
            </div>
          </div>
          <div className='lg:px-14 lg:py-40 lg:rounded-xl lg:bg-elektromontajService lg:bg-cover h-[660px]'>
            <img className='lg:!hidden' src="https://mos-electrical-installation-works.oml.ru/thumb/2/VOmdnRgnH-ZBc4V06J84rA/1920r1920/d/54480233_2.jpg" alt="elektromontaj" />
            <div data-aos="fade-up"  className='p-10 bg-white lg:rounded-xl lg:w-[500px]'>
              <h4 className='mb-3 text-2xl font-bold'>700 RUR / m2 dan kalit elektr o'rnatish ishlari</h4>
              <p className='mb-4 text-gray-500'>Maslahat uchun saytga bepul tashrif</p>
              <AplicationBtn setShowApplicationModal={setShowApplicationModal}/>
            </div>
          </div>
        </Slider>
        {
          showApplicationModal && <ApplicationModal setShowApplicationModal={setShowApplicationModal}/>
        }
      </div>
    </section>
  );
}

export default Application;
