import React from 'react'
import { useTranslation } from 'react-i18next';
import {connect} from 'react-redux'
import {
   
    Link
  } from 'react-router-dom'

import Logo from '../asset/img/logo.png';
import LanguageFirst from '../asset/img/flag-for-russia.svg';
import LanguageTwo from '../asset/img/emojione_flag-for-russia.svg';
import LanguageTree from '../asset/img/eng-flag.png';
 function Header({onClick ,   toggleNav}) {
    const {t, i18n} = useTranslation();
    const handleChangeLng = (lng) => {
        i18n.changeLanguage(lng);
        localStorage.setItem("lng", lng);
    };
  

  return (
    <>
      <div className=' header__head    xl:container mx-auto px-[15px] h-[88px] flex items-center justify-between shadow-[1px_0px_-15px_rgba(0, 0, 0, 0.08)]'>
           <div className='flex items-center gap-[20px] h-full'>
               <a href='#' >
                <img src={Logo} className='w-[66px] h-[66px]' />
               </a>
               <h2 className='w-[323px] sm:hidden md:block  font-roboto font-semibold text-logo-text text-[#000] leading-[22.5px]'>JISMONIY TARBIYA VA SPORT BO`YICHA MUTAXASSIZLARNI QAYTA TAYYORLASH VA MALAKASINI OSHIRISH INSTITUTI</h2>
           </div>
           <div className='flex h-full items-center gap-[18px]'>
           <button onClick={onClick} className='sm:flex  md:hidden items-center justify-center w-[40px] h-[40px] rounded-[50px]  text-[#2B63C0] border-[1px] border-blue border-solid  '>
                   <i className="uil uil-list-ul text-[24px]"></i>
               </button>
          
              <button onClick={() => handleChangeLng('ru')} className='flex items-center gap-[5px] font-roboto font-medium leading-[23px] text-[#2B63C0] text-[20px]'>
                <img src={LanguageFirst} className='w-[20.75px] ' />
                Ру 
               </button>
               <button onClick={() => handleChangeLng('uz')} className='flex items-center  gap-[5px] font-roboto font-medium leading-[23px] text-[#2B63C0] text-[20px]'>
                <img src={LanguageTwo } className='w-[20.75px] ' />
                Уз
               </button>
               <button onClick={() => handleChangeLng('en')} className='flex items-center  gap-[5px] font-roboto font-medium leading-[23px] text-[#2B63C0] text-[20px]'>
                <img src={LanguageTree} className='w-[20.75px] ' />
                Ен
               </button>
           </div>
      </div>

      <nav className={`bg-[#154BA6]  sm:w-[280px] flex  sm:flex-col md:flex-row  md:w-full  sm:min-h-full z-10  md:h-[60px]  md:mt-[10px] px-[15px] ${toggleNav ? "sm:fixed sm:left-[0] sm:shadow-[0_0_0_100vh_rgb(0,0,0,0.1)]" : "sm:absolute sm:left-[-100%]   "}  transition-all   md:shadow-none md:relative md:left-0   top-0 bottom-0`}>
        <div className='sm:flex md:hidden items-center justify-between mt-[15px] mb-[30px] relative'>
             <img src={Logo} alt='...' className='w-[55px]' /> 
              <button onClick={onClick }>
              <i  className="uil uil-arrow-circle-left text-[30px] cursor-pointer text-white"></i></button> 
           
             </div>
         <ul className='h-full flex sm:flex-col md:flex-row   md:items-center sm:justify-start md:justify-evenly sm:gap-[15px] md:gap-0  2xl:container  md:mx-auto '>
            <li className='xl:px-[35px] md:px-[15px] sm:px-0 '>
                <a href='#' className='font-inter font-semibold  text-nav  leading-[24px] text-[#fff] hover:text-[#FFD600]  transition-all'>
                   {t('DistanceLearning')}
                </a>
            </li>   
            <li className='lg:px-[35px] md:px-[15px] sm:px-0 border-x-[1px] sm:border-none md:border-[#fff]'>
                <Link to="/userProf" className='font-inter font-semibold  text-nav leading-[24px] text-[#fff] hover:text-[#FFD600] transition-all' >{ t('portfolio')}</Link>
              
            </li>   
            <li className='lg:px-[35px] md:px-[15px] sm:px-0 '>
                <a href='#' className='font-inter font-semibold  text-nav leading-[24px] text-[#fff] hover:text-[#FFD600] transition-all'>
                    {t('OnlineLibrary')}
                </a>
            </li>   
            <li className='md:px-[15px] sm:px-0  sm:border-none  md:border border-x-2   border-[#fff] border-solid'>
                <a href='#' className='font-inter font-semibold  text-nav leading-[24px] text-[#fff] hover:text-[#FFD600] transition-all'>
                {t('OnlineTest')}
                </a>
            </li>   
            <li className='lg:px-[35px] md:px-[15px] sm:px-0 '>
                <a href='#' className='font-inter font-semibold  text-nav leading-[24px] text-[#fff] hover:text-[#FFD600] transition-all'>
                {t('Re-qualification')}
                </a>
            </li>   
         </ul> 
      </nav>

    </>
  )
}
function mapStateToProps(state){
    return {
        toggleNav:state.toggleNav
    }
}
function mapDispatchToProps(dispatch) {
    return {
        onClick: () => dispatch({type: 'onClick'}),
        
    }
   
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
