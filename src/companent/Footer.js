import React from 'react'
import { useTranslation } from 'react-i18next'
import Logo from '../asset/img/logo.png';
import FooterimgFirst from  '../asset/img/footer-img.png';
import FooterimgTwo from '../asset/img/footer-img2.png'
export default function Footer() {
  const {t} = useTranslation();
  return (
    <div className='footer__container 2xl:container flex items-start flex-wrap gap-[40px]   mx-auto px-[15px] py-[40px]'>
        <div className='h-full'>
          <div className=' w-[430px] footer__left-top flex items-center gap-[20px] h-full pb-[40px] '>
               <a href='#' >
                <img src={Logo} className='w-[66px] h-[66px]' />
               </a>
               <h2 className='w-[323px]  block  font-roboto font-semibold text-logo-text text-white leading-[22.5px]'>JISMONIY TARBIYA VA SPORT BO`YICHA MUTAXASSIZLARNI QAYTA TAYYORLASH VA MALAKASINI OSHIRISH INSTITUTI</h2>
           </div>
            <div className='pt-[14px]'>
              <p className='text-[#878787] text-[15px] font-medium leading-[22px] tracking-[2%]' >{t('footerYear')}</p>
              <p className='text-[#878787] text-[15px] font-medium leading-[22px] tracking-[2%]'>{t('footerSave')}</p>
            </div>
        </div>
        <div className='flex justify-between flex-1 flex-wrap'> 
          <div className='flex flex-col gap-[14px]'>
            <h3 className='text-[20px] font-medium leading-[23.44px] text-[#FFA41D]'>{t('footerInfo')}</h3>
             <a href='#'  className='block  text-white font-medium text-[16px] leading-[19px] tracking-[1px]'>+998 90 000 00 00 </a>
            <a href='#' className='block text-white font-medium text-[16px] leading-[19px] tracking-[1px] '> test02@gmail.com</a>
            <h3 className='text-[20px] font-medium leading-[23.44px] text-[#FFA41D]'>{t('helps')}</h3>
            <a href='#' className='block  text-white font-medium text-[16px] leading-[19px] tracking-[1px]'>{t('learning')}</a>
            
          </div>
          <ul className='flex flex-col gap-[14px]' >
            <li className='text-[20px] font-medium leading-[23.44px] text-[#FFA41D]'>{t('companyInfo')}</li>
            <li>
              <a href='#' className='block  text-white font-medium text-[16px] leading-[19px] tracking-[1px]'>{t('gallery')}</a>
              
            </li>
            <li>
              <a href='#' className='block  text-white font-medium text-[16px] leading-[19px] tracking-[1px]'>{t('portfolio')}</a>
              
            </li>
            <li>
              <a href='#' className='block  text-white font-medium text-[16px] leading-[19px] tracking-[1px]'>{t('login')}</a>
              
            </li>
            <li>
              <a href='#' className='block  text-white font-medium text-[16px] leading-[19px] tracking-[1px]'>{t('choose')}</a>
              
            </li>
            <li>
              <a href='#' className='block  text-white font-medium text-[16px] leading-[19px] tracking-[1px]'>{t('setting')}</a>
              
            </li>
          </ul>
          <div className='relative top-[-14px]'>
              <img src={FooterimgFirst} alt='...' />
              <img src={FooterimgTwo} alt='...' />
          </div>
        </div>
    </div>
  )
}
