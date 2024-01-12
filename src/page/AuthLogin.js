import React from 'react'
import Logo from '../asset/img/auth-logo.png';
import AuthImg from '../asset/img/auth_img.png';
import LoginAuth from '../companent/auth/LoginAuth';
export default function AuthLogin() {
  return (
    <div className='flex  sm:justify-center md:justify-start  md:p-0' >
    <div className='  md:flex-1 relative p-[30px] w-full sm:hidden md:flex items-center md:w-[200px] lg:w-full  h-screen bottom-0 '>
        <img src={AuthImg} alt='...' className=' absolute left-0 top-0 bottom-0 w-full  h-full object-fill' />
        <div className='auth__content   z-10'></div>
    </div> 
     <div className=' py-[30px] sm:flex   lg:flex-1  flex flex-col items-center  mx-[15px]'>
     <div className=' flex flex-col items-center sm:gap-[18px] md:gap-[25px] sm:mb-[30px]  md:mb-[45px]'>
        <img src={Logo} alt='...' />
        <h2 className='text-[25px] text-blue leading-[29px] font-semibold tracking-[2%]'>Добро пожаловать</h2>
     </div>
     <div className=' sm:w-[300px]  md:w-[400px] lg:w-[550px] '>

     <LoginAuth  />
        
     
       
       
     </div>
  
</div>



</div>
  )
}
