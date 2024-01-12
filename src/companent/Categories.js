import React from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import Category1 from '../asset/img/categoriy-1.png'
import Category2 from '../asset/img/categoriy-2.png'
import Category3 from '../asset/img/categoriy-3.png'
import Category4 from '../asset/img/categoriy-4.png'
export default function Categories() {
   const {t}  = useTranslation();
  return (
    <div >
       <div  className='flex items-center  mt-[40px] mb-[40px] gap-[10px]'>
          <div className=' flex  items-end h-[24px]'><div className=' w-[85px] h-[3px] bg-[#2B63C0] opacity-[0.5]' ></div></div>
          <h3 className='sm:text-[25px] md:text-[28px] lg:text-heading-title  font-semibold text-[#303030] leading-[52px] tracking-[2%]'>{t('Categories')}</h3>
       </div>
       <div className='grid grid-cols-4 sm:grid-cols-2 md:grid-cols-4 gap-[30px] sm:gap-[15px] md:gap-[20px] lg:gap-[30]'> 
         <div  className='flex flex-col gap-[30px]  transition-all  justify-center items-center  bg-[#fff]  rounded-[8px]  shadow-[0_0_10px_rgb(0,0,0,0.15)]'>
             <div  className='h-[280px]'>
                <img src={Category1}  alt='....' className='-z-10'/>
             </div>
             <h3 className='text-categoriy-card text-[#2B63C0] mt-[7px] '>    {t('DistanceLearning')}</h3>
             <a href='#' className='w-[191px] mb-[30px] h-[48px] flex items-center justify-center gap-[5px] text-[#fff] bg-[#2B63C0] rounded-[8px]' ><i 
             className="uil uil-check-circle"></i>  {t('welcome')} </a>

         </div>
         <div  className='flex flex-col gap-[30px]   justify-center items-center  bg-[#fff]  rounded-[8px]  shadow-[0_0_10px_rgb(0,0,0,0.15)]'>
             <div  className='h-[280px]'>
                <img src={Category2}  alt='....' className='h-full' />
             </div>
             <h3 className='text-categoriy-card text-[#2B63C0] mt-[7px] '>  { t('portfolio')}</h3>
             <Link to='/userProf' className='w-[191px] mb-[30px] h-[48px] flex items-center justify-center gap-[5px] text-[#fff] bg-[#2B63C0] rounded-[8px]' >
                <i className="uil uil-check-circle"></i>  {t('welcome')} </Link>

         </div>
         <div  className='flex flex-col gap-[30px]  transition-all  justify-center items-center  bg-[#fff]  rounded-[8px]  shadow-[0_0_10px_rgb(0,0,0,0.15)]'>
             <div className='h-[280px]'>
                <img src={Category3}  alt='....' />
             </div>
             <h3 className='text-categoriy-card text-[#2B63C0] mt-[7px] '>   {t('OnlineLibrary')}</h3>
             <a href='#' className='w-[191px] mb-[30px] h-[48px] flex items-center justify-center gap-[5px] text-[#fff] bg-[#2B63C0] rounded-[8px]' >
                <i className="uil uil-check-circle"></i> 
                {t('welcome')} </a>

         </div>
         <div  className='flex flex-col gap-[30px]  transition-all  justify-center items-center  bg-[#fff]  rounded-[8px]  shadow-[0_0_10px_rgb(0,0,0,0.15)]'>
             <div  className='h-[280px]'>
                <img src={Category4}  alt='....' />
             </div>
             <h3 className='text-categoriy-card text-[#2B63C0] mt-[7px] '>    {t('OnlineTest')}</h3>
             <a href='#' className='w-[191px] mb-[30px] h-[48px] flex items-center justify-center gap-[5px] text-[#fff] bg-[#2B63C0] rounded-[8px]' >
                <i className="uil uil-check-circle"></i>
                {t('welcome')} 
                </a>

         </div>
       </div>
    </div>
  )
}
