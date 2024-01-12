import React from 'react'
import { useTranslation } from 'react-i18next';
import LanguageFirst from '../asset/img/flag-for-russia.svg'
import LanguageTwo from '../asset/img/emojione_flag-for-russia.svg';
import LanguageTree from '../asset/img/eng-flag.png';
export default function () {
  const {t, i18n} = useTranslation();
  const handleChangeLng = (lng) => {
      i18n.changeLanguage(lng);
      localStorage.setItem("lng", lng);
  };
  return (
    <div className='profile__head flex px-[24px] w-full justify-between items-center h-[105px] bg-white '>
            <h3 className='text-gray text-[32px] font-semibold'>{t('jobTitle')}</h3>
            <div className='flex items-center gap-3'>
                <button onClick={() => handleChangeLng('ru')} className='flex items-center gap-[5px] font-roboto font-medium leading-[23px] text-[#2B63C0] text-[18px]'>
                   <img src={LanguageFirst} className='w-[20.75px] ' />
                    Ru 
                  </button>
                  <button onClick={() => handleChangeLng('uz')} className='flex items-center gap-[5px] font-roboto font-medium leading-[23px] text-[#2B63C0] text-[18px]'>
                   <img src={LanguageTwo} className='w-[20.75px] ' />
                    Uz
                  </button>
                  <button onClick={() => handleChangeLng('en')} className='flex items-center gap-[5px] font-roboto font-medium leading-[23px] text-[#2B63C0] text-[18px]'>
                   <img src={LanguageTree } className='w-[20.75px] ' />
                    En
                  </button>
                {/* <a><i className="uil uil-bell text-[23px] text-blue"></i></a>  
                <a className= 'flex items-center justify-center w-[40px] h-[40px]    bg-[#0FBE7B] rounded-[50%] '><i className="uil uil-question-circle text-[20px] text-white"></i></a>   */}
            </div>
     </div>
  )
}
