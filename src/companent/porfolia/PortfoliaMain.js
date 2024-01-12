import React from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";
import Partfolia1 from  '../../asset/img/partfolia1.png'
export default function PortfoliaMain() {
   const {t} = useTranslation()
  return (
    <>
         <div className='relative top-0 h-screen  flex flex-col items-center justify-center '>
          <div className='w-full h-full absolute -z-10'>
          <Swiper
           loop={true}
           speed={2600}
           loopFillGroupWithBlank={true}
           autoplay={{
               delay: 6000,
               disableOnInteraction: false
           }}
        pagination={{
          dynamicBullets: true,
        }}
        style={{
          "--swiper-pagination-color": "#fff",
          "--swiper-pagination-bullet-inactive-color": "#999999",
          "--swiper-pagination-bullet-inactive-opacity": "1",
          "--swiper-pagination-bullet-size": "16px",
          "--swiper-pagination-bullet-horizontal-gap": "6px"}}
        modules={[Pagination,  Autoplay]}
        className="mySwiper h-full"
      >
        <SwiperSlide ><img src={Partfolia1} alt='....' className=' w-full h-full  object-cover' /></SwiperSlide>
        <SwiperSlide ><img src={Partfolia1} alt='....' className=' w-full h-full  object-cover' /></SwiperSlide>
        <SwiperSlide ><img src={Partfolia1} alt='....' className=' w-full h-full  object-cover' /></SwiperSlide>
      </Swiper>
          </div>
        
             
             <h1 className='sm:text-[25px]   md:text-[30px]    lg:text-home-banner  sm:leading-[30px] md:leading-[50px] lg:leading-[70px]    font-bold md:w-[500px] lg:w-[740px]    tracking-[2%] text-center text-[#fff]'> {t('homeTitle')}</h1>
             <div className=' flex items-center gap-[10px] mt-[10px] '>
                <Link to='/auth' className=' sm:w-[188px]   md:w-[230px] lg:w-[270px] h-[50px] flex items-center  justify-center rounded-[10px] bg-[#fff] hover:bg-transparent border-[1px] border-solid border-[#fff]  text-[#272727] hover:text-[#fff] transition-all  sm:text-[22px] md:text-home-banner-btn leading-[36px] '>
                   {t('loginIn')}
                </Link>
                <Link to='/userauth' className=' sm:w-[188px]   md:w-[230px] lg:w-[270px] h-[50px] flex items-center justify-center border-[1px] border-solid border-[#fff] hover:bg-[#fff]  rounded-[10px] text-[#fff] hover:text-[#272727] transition-all sm:text-[22px] md:text-home-banner-btn  leading-[36px]'>
                    {t('welcome')}
                </Link>
             </div>
         </div>
    
    </>
  )
}
