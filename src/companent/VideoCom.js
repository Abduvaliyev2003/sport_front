import React, {useEffect} from 'react'
import { useTranslation } from 'react-i18next'
import VideoVideo from '../asset/video/video.mp4'

import Paused from '../asset/img/paused.svg'
export default function VideoCom() {
   const {t} = useTranslation()
 

  

  return (
    <div>
        <div  className='flex items-center  mt-[40px] mb-[40px] gap-[10px]'>
          <div className=' flex  items-end h-[24px]'><div className=' w-[85px] h-[3px] bg-[#2B63C0] opacity-[0.5]' ></div></div>
          <h3 className='sm:text-[25px] md:text-[28px] lg:text-heading-title  font-semibold text-[#303030] leading-[52px] tracking-[2%]'>{t('InstructionalVideo')}</h3>
       </div>
       
       <div className='w-full h-full relative flex items-center justify-center'>
         <video controls src={VideoVideo} id='myVideo' className=' w-full sm:h-[280px] md:h-[300px]  lg:h-[500px] '>
           
         </video>
         {/* <img src={Paused}  className='paused-btn  absolute cursor-pointer' /> */}
       </div>

    </div>
  )
}
