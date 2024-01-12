import React, {useState, useEffect} from 'react'
import { Link } from "react-router-dom";
import {connect} from 'react-redux'
import { useTranslation } from 'react-i18next';
import axios from 'axios';
import ProfSidbar from "../companent/ProfSidbar";
import ProfileHead from "../companent/ProfileHead";

import Avatar from "../asset/img/avatar.png";
import ImgPdf from '../asset/img/imgpdf.png'
import Footer from "../companent/Footer";

 function UserPortfolio({   photoAdress, user_info,   directionUser}) {
    const [toggle, setToggle]  = useState(false) 
    const [profItemOne, setprofItemOne]= useState(false)
    const [profItemTne, setprofItemTwo]= useState(false)
    const {t} = useTranslation()

  return (
    <div>
        <div className='flex  items-start '>
          <ProfSidbar /> 
          <div className='w-full  mb-[40px]'>
            <ProfileHead />
          <div className='mt-[25px] mb-[16px] h-[50px] flex items-center justify-between px-[24px]'>
        <Link to='/' className='flex items-center text-[32px] text-gray font-semibold leading-[38px] tracking-[2%] gap-[15px]'>
          <i className="uil uil-angle-left-b"></i>
          {t('portfolio')} </Link>
        <div className='flex items-center gap-[10px]'>
          <div>  <i className="uil uil-clock-three text-[22px] text-blue "></i></div>
       
         <Link to='/' className='text-blue text-[18px] font-semibold leading-[21px]'>
            <span className='font-normal text-[#42445aa5] '>{t('gallery')} / </span>   
         </Link>
         <Link to='/userProf' className='text-blue text-[18px] font-semibold leading-[21px]'>
            <span className='font-normal text-[#42445aa5] '> {t('profile')} /</span> 
         </Link>
         <p className='text-blue text-[18px] font-semibold leading-[21px]'> {t('portfolio')}</p>
        </div>
       </div>
       <div className='flex flex-col gap-[24px] p-[20px]'>
               

          <div  className='flex items-start gap-[24px]'>
            <div className='flex-1 content p-[20px]  flex flex-col gap-[24px]'>
            <div onClick={() => setprofItemOne(current  => !current)} className='flex items-center justify-between cursor-pointer'>
                        <h3 className='text-blue text-[20px] leading-[24px] font-medium tracking-[2%] '>{t('PersonalData')}</h3>  
                        <div className='w-[27px] h-[6px] rounded-[5px] bg-blue '></div>
            </div>
            <div className={`${profItemOne == true ? 'flex' : 'hidden'} transition-[.7s] flex-col  relative  gap-[24px]`}>
            <div className='flex items-center relative h-[80px] gap-[27px]'>
                             <div className='relative flex items-center  '>
                                  <img  src={  photoAdress ? `http://localhost:8000/storage/${photoAdress}` : Avatar } alt='....' className=' w-[80px] h-[80px] rounded-[50%]' />
                                  {/* <div className=' '>
                                  <i className="uil uil-clock-three text-[22px] text-blue "></i>
                                  </div> */}
                             </div>
                             <h1 className='text-black text-[20px] leading-[24px] font-medium tracking-[2%]'>{user_info ? user_info.full_name : ''}</h1>
                        </div>
            <div className='flex flex-col gap-[14px]'>
                 <div className='flex items-center justify-between'>
                    <div className='bg-[#2b64c036] w-[230px] h-[48px] flex items-center justify-center rounded-[8px]'>
                        <span className='text-blue text-[16px] leading-[24px] font-medium'>{t('portfolio')}</span>
                    </div>
                    <div className='bg-[#2b64c036] w-[121px] h-[48px] flex items-center justify-center rounded-[8px]'>
                        <span className='text-blue text-[16px] leading-[24px] font-medium'>39</span>
                    </div>
                 </div>
                 <div className='flex items-center justify-between'>
                    <div className='bg-[#2b64c036] w-[230px] h-[48px] flex items-center justify-center rounded-[8px]'>
                        <span className='text-blue text-[16px] leading-[24px] font-medium'>{t('testScores')}</span>
                    </div>
                    <div className='bg-[#2b64c036] w-[121px] h-[48px] flex items-center justify-center rounded-[8px]'>
                        <span className='text-blue text-[16px] leading-[24px] font-medium'>39</span>
                    </div>
                 </div>
                 <div className='flex items-center justify-between'>
                    <div className='bg-[#2b64c036] w-[230px] h-[48px] flex items-center justify-center rounded-[8px]'>
                        <span className='text-blue text-[16px] leading-[24px] font-medium'>{t('totalScore')}</span>
                    </div>
                    <div className='bg-[#2b64c036] w-[121px] h-[48px] flex items-center justify-center rounded-[8px]'>
                        <span className='text-blue text-[16px] leading-[24px] font-medium'>39</span>
                    </div>
                 </div>  
            </div>
            
            </div>             
            </div>
            <div className='flex-1 content p-[20px] flex flex-col gap-[24px]'>
            <div onClick={() => setprofItemTwo(current => !current)} className='flex items-center justify-between cursor-pointer'>
                        <h3 className='text-blue text-[20px] leading-[24px] font-medium tracking-[2%] '>{t('ContactInfo')}</h3>  
                        <div className='w-[27px] h-[6px] rounded-[5px] bg-blue '></div>
                </div>
                <div className={`${profItemTne == true ? 'flex' : 'hidden'} transition-[.7s] flex-col gap-[24px]`}>
                <div className='flex flex-col gap-[8px]'>
                           <label className=' text-[#333333] text-[16px] leading-[24px] font-medium tracking-[2%]' > {t('PhoneNumber')} </label> 
                           <div className='seleted__value rounded-[8px]'>
                                <p className='text-[#8C8C8C] text-[16px] leading-[24px] font-regular tracking-[2%] p-[12px]'>
                                 { user_info.phone ?? t('PhoneNumber')}
                                </p>
                           </div>
                        </div>
                        <div className='flex flex-col gap-[8px]'>
                           <label className=' text-[#333333] text-[16px] leading-[24px] font-medium tracking-[2%]'>{t('emails')} </label> 
                           <div className='seleted__value rounded-[8px]'>
                                <p className='text-[#8C8C8C] text-[16px] leading-[24px] font-regular tracking-[2%] p-[12px]'>
                                 {user_info.email ?? t('emails')}
                                </p>
                           </div>
                        </div>
                </div>
                 
            </div>
          </div>
          <h2 className='text-blue text-[20px] leading-[24px] font-medium tracking-[2%]'>
            Подтверждающие файлы
          </h2>
          <div className='content p-[34px] grid grid-cols-2 gap-[24px]'>
                {
                      directionUser?.map((el, i) => (
                        <div key={i} className='content p-[20px] '>
                            
                        <h3 className='text-black text-[20px] leading-[30px] font-medium tracking-[2%]'>
                          {el.id}.  {el.direction_category_name}
                        </h3>
                        <a href={`http://localhost:8000/storage/${el.pdf}`} target="_blank" className='flex justify-end cursor-pointer'>
                            <img src={ImgPdf}  className='mt-[40px] w-[84px] h-full' />
                        </a>
                    </div> 
                    )) 
                    ?? ''
                }
                
          </div>
          </div>
          <div className='flex justify-end w-full   '>
               <div onClick={() => setToggle(true)} className='relative overflow-hidden btn-static w-[350px] h-[60px] flex items-center justify-center gap-[20px] mx-[24px] cursor-pointer' >
               <i className="uil uil-check-circle text-[25px] text-[#0FBE7B]"></i>
               <h3 className='text-[#0FBE7B] text-[20px] leading-[30px] font-normal tracking-[2%]'>Соответствует</h3>
               <div className='absolute bottom-0 left-0 w-full '>
                <div className={`bg-[#0FBE7B] h-[2px]  transition-[.7s] ${toggle == true ? 'w-full' : 'w-0'} rounded-[5px]`}></div>
               </div>
               </div>
                </div>
          </div>
          
         

        </div>
         
        <footer className='bg-[#292A2F]'>
            <Footer />
        </footer>  
    </div>
  )
}
function mapStateToProps(state){
    return {
      user_info: state.user_info,
      photoAdress: state.photoAdress,
      directionUser: state.direction_user
    }
  }
  function mapDispatchToProps(dispatch) {
    return {
       
      
    }
   
  }
  export default connect(mapStateToProps, mapDispatchToProps)(UserPortfolio)
