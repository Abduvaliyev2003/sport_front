import React, {useState} from 'react'
import { useNavigate } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import {connect} from 'react-redux'
import axios from "axios";
 function Autifcate({  pnfelId}) {
  const navigate = useNavigate();
  const {t} = useTranslation()
  const [pnf, setPnf] = useState('')
  const [pasportSeria, setPasportSeria] = useState('')
  const [pnfCode, setPnfCode] = useState('')
  async function redicrate(){
      
     await axios.post(`http://localhost:8000/api/pasport`, {
      pnfl:pnf,
      pasport_seria:pasportSeria,
      pasport_seria_code:pnfCode
    })
    .then(res => {
      navigate('/login')
      localStorage.setItem('passwordid' , JSON.stringify(res.data.pasport.id))
      pnfelId(res.data.pasport.id)
    })

 

  }
 
  return (
    <form className='flex flex-col justify-center sm:gap-[15px] lg:gap-[24px] w-full  '>
        <label className='text-lable text-chemp-title font-medium leading-[21px] tracking-[2%]'>{t('pinfl')}*</label> 
        <input  onChange={event => setPnf(event.target.value)} className='auth__input  block w-full h-[60px] px-[20px] rounded-[8px]' type='text' placeholder='1234567891011121314' required />
        <div className='flex sm:flex-col md:flex-col lg:flex-row  md:items-start lg:items-center sm:gap-[15px] lg:gap-[24px]'>
            <div className='flex-1 w-full flex flex-col sm:gap-[15px] lg:gap-[24px]'>
              <label className='text-lable text-chemp-title font-medium leading-[21px] tracking-[2%]'>{t('passportSer')} *</label> 
              <input onChange={event => setPasportSeria(event.target.value)} className='auth__input block h-[60px] px-[20px] rounded-[8px]' type='text' placeholder='AS' required /> 
            </div>
            <div className='flex-1  w-full flex flex-col sm:gap-[15px] lg:gap-[24px]'>
              <label className='text-lable text-chemp-title font-medium leading-[21px] tracking-[2%]'>{t('passNamber')}*</label> 
              <input  onChange={event => setPnfCode(event.target.value)} className='auth__input block h-[60px] px-[20px] rounded-[8px]' type='text' placeholder='123456' required /> 
            </div>
        </div>
       <button onClick={()=> redicrate()}  type='button' className='w-full  h-[60px] rounded-[8px] shadow-[0px_0px_10px_rgba(38, 38, 38, 0.15)] bg-blue text-white'>{t('continue')}</button>
    </form>
  )
}

function mapStateToProps(state){
  return {
      counter:state.counter
  }
}
function mapDispatchToProps(dispatch) {
  return {
      pnfelId: (payload) => dispatch({type:'PNFID', payload: payload})
  }
 
}

export default connect(mapStateToProps, mapDispatchToProps)(Autifcate)