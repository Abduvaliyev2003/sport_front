
import React,{useEffect} from 'react'
import { useTranslation } from 'react-i18next';
import {connect} from 'react-redux'
 function ProfHead ({profHeadFirst, profHeadTwo,  profHeadTree,  profHeadF}) {
  const {t, i18n} = useTranslation();
   let arrow = {
    profFirst: profHeadFirst,
    profTwo:  profHeadTwo,
    profTree: profHeadTree,
    profHeadF:  profHeadF
   }
  

  return (
    <div className='relative left-0 flex   justify-around'>
                      <div></div>
                      <div className='flex items-center flex-col gap-[10px]'>
                        <div className='flex items-center relative'>
                            <div className={`w-[50px] h-[50px] rounded-[50%] ${profHeadFirst ? 'bg-blue ' : "bg-white "} flex items-center justify-center border-[1px] border-solid border-blue`}>
                            <span className={`${profHeadFirst ? 'text-white' : 'text-blue'}   text-[20px] font-medium leading-[23px]`}>
                                {profHeadFirst ?   <i className="uil uil-check-circle text-[25px] "></i> : 1}
                                    
                                 </span>
                            </div>
                          
                           <div className='absolute left-[50px] -z-1  w-[190px] h-[4px] bg-[#C8C8C8]'>
                            <div className={`${profHeadFirst ? 'w-full' : 'w-0'} bg-blue h-full`}></div>
                           </div>
                        </div>
                        <p className='text-blue  text-[20px] font-medium leading-[23px] '>  {t('PersonalData')}</p>
                      </div>
                      <div className='flex items-center flex-col gap-[10px]'>
                        <div className='flex items-center relative'>
                        <div className={`w-[50px] h-[50px] rounded-[50%] ${profHeadTwo ? 'bg-blue ' : "bg-white "} flex items-center justify-center border-[1px] border-solid border-blue`}>
                            <span className={`${profHeadTwo ? 'text-white' : 'text-blue'}   text-[20px] font-medium leading-[23px]`}>
                                {profHeadTwo ?   <i className="uil uil-check-circle text-[25px] "></i> : 2}
                                    
                                 </span>
                            </div>
                          
                           <div className='absolute left-[50px] -z-1  w-[200px] h-[4px] bg-[#C8C8C8]'>
                            <div className={`${profHeadTwo ? 'w-full' : 'w-0'} bg-blue h-full`}></div>
                           </div>
                        </div>
                        <p className='text-blue  text-[20px] font-medium leading-[23px] '> {t('InformationAboutEducation')} </p>
                      </div>
                      <div className='flex items-center flex-col gap-[10px]'>
                        <div className='flex items-center relative'>
                        <div className={`w-[50px] h-[50px] rounded-[50%] ${profHeadTree ? 'bg-blue ' : "bg-white "} flex items-center justify-center border-[1px] border-solid border-blue`}>
                            <span className={`${profHeadTree ? 'text-white' : 'text-blue'}   text-[20px] font-medium leading-[23px]`}>
                                {profHeadTree ?   <i className="uil uil-check-circle text-[25px] "></i> : 3}
                                    
                                 </span>
                            </div>
                          
                           <div className='absolute left-[50px] -z-1  w-[250px] h-[4px] bg-[#C8C8C8]'>
                            <div className={`${profHeadTree ? 'w-full' : 'w-0'} bg-blue h-full`}></div>
                           </div>
                        </div>
                        <p className='text-blue  text-[20px] font-medium leading-[23px] '> {t('jobBackground')} </p>
                      </div>
                      <div className='flex items-center flex-col gap-[10px] overflow-hidden'>
                        <div className='flex items-center relative'>
                        <div className={`w-[50px] h-[50px] rounded-[50%] ${profHeadF ? 'bg-blue ' : "bg-white "} flex items-center justify-center border-[1px] border-solid border-blue`}>
                            <span className={`${profHeadF ? 'text-white' : 'text-blue'}   text-[20px] font-medium leading-[23px]`}>
                                {profHeadF ?   <i className="uil uil-check-circle text-[25px] "></i> : 4}
                                    
                                 </span>
                            </div>
                          
                           
                          
                           
                        </div>
                        <p className='text-blue  text-[20px] font-medium leading-[23px]  w-[280px] text-center'> {t('advancedTraining')} </p>
                      </div>
                </div>
  )
}
function mapStateToProps(state){
  return {
    profHeadFirst:state.profHeadFirst,
    profHeadTwo:state.profHeadTwo,
    profHeadTree:state.profHeadTree,
    profHeadF: state.profHeadF,
  }
}

export default connect(mapStateToProps)(ProfHead)