
import React, {useEffect , useState} from "react";
import {connect} from 'react-redux'
import { useTranslation } from "react-i18next";

import ProfileHead from "../companent/ProfileHead";
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../asset/img/logo.png'
import axios from "axios";


 function Login( {showValue , addSelect, showMenu, showSelect,  passportId, addUserId}) {
  const navigate = useNavigate();
  const {t} = useTranslation();
  const [filal, setfilali] = useState();
 const [filalID, setFilaliId] = useState(0)
 const [login, setLogin] = useState('');
 const [password, setPassword] = useState('');
  async  function getFilal(){
    

    await  axios.get(`http://localhost:8000/api/filial`)
           .then(res => {
              
              setfilali(res.data.filial )
           })
  }
  async function authUser(){
    await axios.post(`http://localhost:8000/api/register`, {
      login:login,
      password:password,
      fillial_id: filalID,
      pasport_id: passportId,
    }, {
      headers: {
        Accept: "/",
        "Content-Type": "application/json",
        "Accept-Language": "uz",
      }
    })
    .then(res => {
      console.log(res.data)
      localStorage.setItem('userId', JSON.stringify(res.data.user.id))
      navigate('/profile')
      addUserId(res.data.user.id)
    }).catch(err => {
      console.log(err)
    })
  }
  useEffect(()=> {
    getFilal()
  }, [])
  function handaleChange(e, id){
    addSelect(e.target.innerText, id);
    setFilaliId(id) 
  }


  
  
  return (
    <div className='h-full flex'>
        <div className='   w-[300px] h-screen bg-profile py-[24px] px-[16px]'>
           <div className='flex items-center gap-[12px]'>
           <img src={Logo} />
            <h3 className='text-[9px] font-medium leading-[13px] text-white'>JISMONIY TARBIYA VA SPORT BO`YICHA MUTAXASSIZLARNI QATTA TAYYORLASH VA MALAKASINI OSHIRISH INSTITUTI</h3>
           </div>
          
        </div>
        <div className='w-full '>
          <div>
          <ProfileHead />
          </div>
         
          <div className='mt-[25px] mb-[16px] h-[50px] flex items-center justify-between px-[24px]'>
            <Link to='/' className='flex items-center text-[32px] text-gray font-normal leading-[38px] tracking-[2%] gap-[15px]'><i className="uil uil-angle-left-b"></i>  Вход в систему   </Link>
            <div className='flex items-center gap-[10px]'>
              <div>  <i className="uil uil-clock-three text-[22px] text-blue "></i></div>
           
             <Link to='/' className='text-blue text-[18px] font-semibold leading-[21px]'>
                <span className='font-normal text-[#42445aa5] '>Главная /</span> Вход в систему
             </Link>
            </div>
          </div>
          <form className='px-[24px]'>
            <div className=' login__form-content bg-white p-[24px] flex flex-col gap-[24px]'>
                  <div>
                      <label>{t('filials')} *</label>
                      <div onClick={showSelect} className=' seleted__value mt-[8px] rounded-[8px] px-[17px] flex items-center justify-between w-full h-[60px] ' ><p className="text-[16px] text-[#8C8C8C] font-semibold leading-[24px]">{showValue ? showValue : t('filials') + '...' }</p> <div ><i className="uil uil-angle-down text-gray text-[22px]"></i></div></div>
                    
                  </div>
                  <div className={`  login__form-content py-[10px] ${showMenu ? "block" : 'hidden'} `}>
                   <ul className="flex flex-col gap-[14px] ">
                    {
                      filal?.map((item , i) => (
                        <li key={i} onClick={(event) => handaleChange(event , item.id)} className="select-item h-[57px]   flex items-center pl-[24px] text-[16px] text-[#8C8C8C]  font-semibold leading-[24px]  cursor-pointer">
                        {item.name_ru}</li>
                      ))
                    }
                   
                 
                   </ul>
                  </div>
                  <div className={`${showMenu ? "hidden" : 'block'}`}>
                    <label>{t('login')} *</label>
                    <input onChange={(event) => setLogin(event.target.value) } type='email' className="seleted__value mt-[8px] rounded-[8px] px-[17px]  outline-none w-full h-[60px] text-[16px] text-[#8C8C8C] font-semibold leading-[24px]"  placeholder={t('login')}/>
                  </div>
                  <div className={`${showMenu ? "hidden" : 'block'}`}>
                    <label>{t('password')} *</label>
                    <input onChange={(event) => setPassword(event.target.value) } type='password' className="seleted__value mt-[8px] rounded-[8px] px-[17px]  outline-none w-full h-[60px] text-[16px] text-[#8C8C8C] font-semibold leading-[24px]" 
                     placeholder={t('password')} />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-[17px]">
                      <div className="w-[47px] h-[24px] bg-blue rounded-[100px] flex items-center px-[.8px] cursor-pointer">
                         <div className="bg-white w-[18px] h-[18px] rounded-[100px] "></div>
                      </div>
                      <p className="text-blue text-[18px] font-semibold leading-[21px] tracking-[2%]">Я согласен с политикой конфедициальности</p>
                    </div>
                    <div>
                      <Link  className="text-[#FE346E] text-[18px] font-semibold leading-[21px] tracking-[2%] decoration-[3px]">{t('forgotPass')} ?</Link>
                    </div>
                  </div>
            </div>
            <div className="flex items-center justify-end gap-[16px] mt-[24px] px-[24px]">
              <Link to='/'  className="form-btn w-[191px] h-[48px] flex items-center justify-center gap-[15px]  text-white text-[16px] font-semibold leading-[24px] bg-blue"><i className="uil uil-sign-out-alt"></i>
               {t('back')}
               </Link>
              <button type="button"  onClick={()=>  authUser()} className="form-btn w-[191px] h-[48px] flex items-center justify-center gap-[15px]  text-white text-[16px] font-semibold leading-[24px] bg-[#0FBE7B]"><i className="uil uil-check-circle"></i>
               {t('welcome')}
              </button>
            </div> 
          </form>
        </div>
    </div>
  )

}
function mapStateToProps(state){
  return {
    showValue:state.showValue,
    showMenu:state.showMenu,
    passportId: state.pnid
  }
}
function mapDispatchToProps(dispatch) {
  return {
     addSelect:(post ) => dispatch({type:'NSTVALUE', payload: post }),
     showSelect:()=> dispatch({type:'SHOWMENU'}),
     addUserId: (userId)=> dispatch({type:'USERID', payload: userId})
  }
 
}
export default connect(mapStateToProps, mapDispatchToProps)(Login)
