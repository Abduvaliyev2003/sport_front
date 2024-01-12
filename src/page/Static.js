import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import {connect} from 'react-redux'
import { useTranslation } from 'react-i18next'
import ProfSidbar from '../companent/ProfSidbar'
import ProfileHead from '../companent/ProfileHead'
import SimpleBarChart from '../companent/barChart/SimpleBarChart'
import Footer from '../companent/Footer'
 function Static({ directionUser}) {
  const [toggle, setToggle]  = useState(false) 
  const [chartToggle, setChartToggle] = useState(false)
  const [tableToggle, setTableToggle] = useState(false)
  const {t} = useTranslation();
  useEffect(() => {
    directionUser
  })
  return (
    <div>
         
         <div className='flex  items-start '>
          <ProfSidbar />
          <div className='w-full  mb-[40px]'>
               <ProfileHead />
               <div className='mt-[25px] mb-[16px] h-[50px] flex items-center justify-between px-[24px]'>
        <Link to='/' className='flex items-center text-[32px] text-gray font-semibold leading-[38px] tracking-[2%] gap-[15px]'>
          <i className="uil uil-angle-left-b"></i>
          {t('statistics')} </Link>
        <div className='flex items-center gap-[10px]'>
          <div>  <i className="uil uil-clock-three text-[22px] text-blue "></i></div>
         <div className='flex items-center gap-[8px]'>
         <Link to='/' className=' text-[18px] font-semibold leading-[21px]'>
            <span className='font-normal text-[#42445aa5] '>{t('gallery')} / </span> 
         </Link>
         <Link to='/userProf' className='text-[#42445aa5] text-[18px] font-semibold leading-[21px]'>
            <span className='font-normal text-[#42445aa5] '> {t('profile')} /</span>  
         </Link>
         <p className='text-blue text-[18px] font-semibold leading-[21px]'> {t('statistics')} </p>
         </div>
         
        </div>
       </div>
               <div className='chart-content  '>
                <div onClick={() => setChartToggle(toggle => !toggle)} className='flex items-center justify-between mb-[24px] '>
                    <h2 className='text-[20px] text-blue leading-[24px] font-normal'>{t('passSubject')}</h2>
                    <div className='w-[27px] h-[6px] rounded-[5px] bg-blue '></div>
                </div>

                <SimpleBarChart  />
               </div>
               <div className='chart-content  '>
                <div onClick={() => setTableToggle(current => !current)} className='flex items-center justify-between  cursor-pointer'>
                    <h2 className='text-[20px] text-blue leading-[24px] font-normal'>{t('Таблица пройденных предметов с балами')}</h2>
                    <div className='w-[27px] h-[6px] rounded-[5px] bg-blue '></div>
                </div>
                {
                  directionUser?.map((el,i) => (
                    <div key={i}  className={`${tableToggle == true ? 'block' : 'hidden'}`}>

                    <h3 className='mb-[24px] text-black text-[20px] leading-[30px] font-normal tracking-[2%] mt-[24px]'>{el.id} {el.direction_category_name}</h3>
                    <div  className='h-[60px] flex items-center justify-between border-[1px] border-solid   border-blue  rounded-[8px]'>
                        <p className='text-blue text-[20px] leading-[24px] font-normal tracking-[2%] pl-[30px]'>{el.direction_category_name_answer}</p>
                        <div className=' w-[140px] h-[40px] flex items-center justify-center bg-[rgba(112,103,207,0.1)] rounded-[8px] m-[8px]'>
                            <span className='text-blue text-[20px] leading-[30px] font-normal tracking-[2%] '>{el.score}</span>
                        </div>
                    </div>
                </div>
                  )) ?? ''
                }
               
                
               </div>
               <div className='flex justify-end w-full mt-[40px]  '>
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

    directionUser: state.direction_user
  }
}
function mapDispatchToProps(dispatch) {
  return {
     
    
  }
 
}
export default connect(mapStateToProps, mapDispatchToProps)(Static)
