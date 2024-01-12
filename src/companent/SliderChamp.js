import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { useTranslation } from 'react-i18next'
import { Pagination, Autoplay } from "swiper";
// Import Swiper styles


import Chemp1 from '../asset/img/chemp-1.png'

import Chemp2 from '../asset/img/chemp-2.png'
import Chemp3 from '../asset/img/chemp-3.png'
import Chemp4 from '../asset/img/chemp-4.png'
export default function SliderChamp() {
  const {t} = useTranslation();
  return (
    <>
      <div  className='flex items-center  mt-[40px] mb-[40px] gap-[10px]'>
          <div className=' flex  items-end h-[24px]'><div className=' w-[85px] h-[3px] bg-[#2B63C0] opacity-[0.5]' ></div></div>
          <h3 className='sm:text-[25px] md:text-[28px] lg:text-heading-title  font-semibold text-[#303030] leading-[52px] tracking-[2%]'>{t('OurChampions')}</h3>
       </div>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        loop={true}
        speed={2600}
        loopFillGroupWithBlank={true}
        autoplay={{
            delay: 10,
            disableOnInteraction: false
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay]}
        className="mySwiper"
        breakpoints={{
          // when window width is >= 640px
          240:{
            slidesPerView: 2,
            spaceBetween: 10
          },
          640: {
           
            slidesPerView: 3,
            spaceBetween: 15
          },
          // when window width is >= 768px
          800: {
            spaceBetween: 30,
            slidesPerView: 4,
          },
        }}
      >
        <SwiperSlide>
            <div className=' sm:h-[200px] md:[240px] lg:h-[318px] relative flex items-end rounded-[8px] overflow-hidden'>
              <img src={Chemp1} alt='...' className='absolute -z-10 top-0 bottom-0 right-0 left-0 h-full '  />
              <div className='chemp__content'>
                <h2 className='sm:text-[16px] md:text-chemp-title text-white font-semibold leading-[27px] tracking-[2%]'>Баходир Жалолов</h2>
                <p className='sm:text-[16px] md:text-chemp-title text-white  font-medium'>Бокс</p>
              </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='sm:h-[200px] md:[240px] lg:h-[318px] relative flex items-end rounded-[8px] overflow-hidden'>
              <img src={Chemp2} alt='...' className='absolute -z-10 top-0 bottom-0 right-0 left-0 h-full '  />
              <div className='chemp__content'>
                <h2 className='sm:text-[16px] md:text-chemp-title text-white font-semibold leading-[27px] tracking-[2%]'>Акбар Жураев</h2>
                <p className='sm:text-[16px] md:text-chemp-title text-white  font-medium'>Тяжёлая атлетика</p>
              </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='sm:h-[200px] md:[240px] lg:h-[318px] relative flex items-end rounded-[8px] overflow-hidden'>
              <img src={Chemp3} alt='...' className='absolute -z-10 top-0 bottom-0 right-0 left-0 h-full '  />
              <div className='chemp__content'>
                <h2 className='sm:text-[16px] md:text-chemp-title text-white font-semibold leading-[27px] tracking-[2%]'>Улугбек Рашитов</h2>
                <p className='sm:text-[16px] md:text-chemp-title text-white  font-medium'>Таеквандо</p>
              </div>
            </div>
            </SwiperSlide>
        <SwiperSlide>
        <div className='sm:h-[200px] md:[240px] lg:h-[318px] relative flex items-end rounded-[8px] overflow-hidden'>
              <img src={Chemp4} alt='...' className='absolute -z-10 top-0 bottom-0 right-0 left-0 h-full '  />
              <div className='chemp__content'>
                <h2 className='sm:text-[16px] md:text-chemp-title text-white font-semibold leading-[27px] tracking-[2%]'>Бекзод Абдурахмонов</h2>
                <p className='sm:text-[16px] md:text-chemp-title text-white  font-medium'>Вольная борьба</p>
              </div>
            </div>
        </SwiperSlide>
        
      </Swiper>
    
    
    </>
  )
}
