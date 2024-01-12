import React, {useEffect} from 'react'
import { Link } from 'react-router-dom'
import {connect} from 'react-redux'
import { useTranslation } from 'react-i18next'
import ProfSidbar from '../companent/ProfSidbar'
import ProfileHead from '../companent/ProfileHead'
import ProfessionalDev from '../companent/profile/ProfessionalDev'
 function Profesia({ profFunc }) {
   const {t} = useTranslation()
 
   useEffect(()=> {
    
    profFunc
   
   }, [])
  return (
    <div className='flex '>
    <ProfSidbar />
    <div className='w-full mb-[30px] '>
       
        <ProfileHead />

        <div className='mt-[25px] mb-[16px] h-[50px] flex items-center justify-between px-[24px]'>
        <Link to='/' className='flex items-center text-[32px] text-gray font-semibold leading-[38px] tracking-[2%] gap-[15px]'>
          <i className="uil uil-angle-left-b"></i>
        {t('fullInfo')} </Link>
        <div className='flex items-center gap-[10px]'>
          <div>  <i className="uil uil-clock-three text-[22px] text-blue "></i></div>
       
          <Link to='/' className='text-blue text-[18px] font-semibold leading-[21px]'>
            <span className='font-normal text-[#42445aa5] '>{t('gallery')} /</span> 
         </Link>
         <p className='text-blue text-[18px] font-semibold leading-[21px]'> {t('systemAccess')}</p>
        </div>
       </div>
    
          <ProfessionalDev />
       
     
    </div>
</div>
  )
}

function mapStateToProps(state){
  return {
     
  }
}
function mapDispatchToProps(dispatch) {
  return {
     profFunc:()=> dispatch({type:'PROFUNC'})
  }
 
}
export default connect(mapStateToProps, mapDispatchToProps)(Profesia)