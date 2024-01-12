import React from 'react'
import { useTranslation } from 'react-i18next'
import ProfileFirst from '../../asset/img/Profile-1.png'
import ProfileTwo from '../../asset/img/Profile-2.png'
import ProfileThree from '../../asset/img/Profile-3.png'
export default function PortfoliaSec() {
   
  const {t} = useTranslation();
   
  return (
    <div className='relative flex flex-col'>
        <div  className='flex items-center  mt-[40px] mb-[40px] gap-[10px]'>
          <div className=' flex  items-end h-[24px]'><div className=' sm:w-[30px] md:w-[50px] lg:w-[85px]   h-[3px] bg-[#2B63C0] opacity-[0.5]' ></div></div>
          <h3 className=' sm:text-[25px] md:text-[28px] lg:text-heading-title  font-semibold text-[#303030] leading-[52px] tracking-[2%]'>{t('portfolio')}</h3>
       </div>
       <div className='relative flex flex-col  bottom-0'>
         <div className='flex sm:flex-col md:flex-col lg:flex-col xl:flex-row items-center gap-[24px]'>
            <img src={ProfileFirst} />
            <div className='flex flex-col  gap-[20px]'>
                <a  href='#' className='profile__link flex font-medium leading-[30px]  px-[22px] py-[5px] gap-[10px] border-[1px] border-solid border-blue rounded-[8px] text-blue  text-'> 
                 <i className="uil uil-file-info-alt text-[20px]"></i>
                 {t('portfolio')}
                </a>
              <div className='bg-white border-[1px] border-solid border-blue rounded-[8px] p-[23px]'>
                    <p className='text-profile-text font-medium leading-[22px]'>
                        {t('portfolioText')}
                    </p>
             </div>
              <div className='bg-blue rounded-[8px] p-[23px]'>
                    <p className='text-white text-profile-text font-medium leading-[22px]'>
                    {t('portfolioT')}
                    </p>
              </div>
            </div>
         </div>
         <div className='flex items-center sm:flex-col md:flex-col lg:flex-col xl:flex-row  gap-[24px]  '>
            <img src={ProfileTwo} />
            <div className='flex flex-col  gap-[20px]'>
                <a  href='#' className=' profile__link flex items-center justify-center font-medium leading-[30px]  px-[20px] py-[9px] gap-[10px] border-[1px] border-solid border-blue rounded-[8px] text-blue  text-'> 
                 <i className="uil uil-file-info-alt text-[20px]"></i>
                {t('faculty')} , {t('chair')}
                </a>
              <div className='bg-white border-[1px] border-solid border-blue rounded-[8px] p-[23px]'>
                    <p className='text-profile-text font-medium leading-[22px]'>
                    {t('facultyt')}
                    </p>
             </div>
              <div className='bg-blue rounded-[8px] p-[23px]'>
                    <p className='text-white text-profile-text font-medium leading-[22px]'>
                     {t('teacher')}
                    </p>
              </div>
            </div>
         </div>
         <div className='flex items-center sm:flex-col md:flex-col lg:flex-col xl:flex-row  gap-[24px]  z-10'>
            <img src={ProfileThree} />
            <div className='flex flex-col  gap-[20px]'>
                <a  href='#' className=' profile__link flex items-center justify-center font-medium leading-[30px]  px-[20px] py-[9px] gap-[10px] border-[1px] border-solid border-blue rounded-[8px] text-blue  text-'> 
                 <i className="uil uil-file-info-alt text-[20px]"></i>
                 {t('direction')}
                </a>
              <div className='bg-white border-[1px] border-solid border-blue rounded-[8px] p-[23px]'>
                    <p className='text-profile-text font-medium leading-[22px]'>
                    {t('directions')}
                    </p>
             </div>
              <div className='bg-blue rounded-[8px] p-[23px]'>
                    <p className='text-white text-profile-text font-medium leading-[22px]'>
                    {t('plan')}
                    </p>
              </div>
            </div>
         </div>
       </div>
    </div>
  )
}
