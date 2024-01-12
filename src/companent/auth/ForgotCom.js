import React, {useState} from 'react'
import { Link , useNavigate} from 'react-router-dom'
import {  toast } from 'react-toastify';
import { useTranslation } from 'react-i18next';
import {connect} from 'react-redux'
import axios from "axios";
 function ForgotCom({ addUserId}) {
  const navigate = useNavigate();
  const {t}= useTranslation()
  const [username, setUsername] = useState('');

  
  let login = username;

  async function auth(){
    try {
      await axios.post(`http://localhost:8000/api/forgot-password`, {
     login:login,
     
   })
   .then(res => {
    toast.success(res.message);
    navigate('/userauth')

    //   localStorage.setItem('userId', JSON.stringify(res.data.user.id))
    //   localStorage.setItem('passwordid' , JSON.stringify(res.data.user.pasport_id))
    //   addUserId(res.data.user.id)
   })
    }  catch (e){
      return  toast.error(e.message)
      
    }
    

 

 }

 
  return (
    <form className='flex flex-col justify-center sm:gap-[15px] lg:gap-[24px] w-full  '>
    <label className='text-lable text-chemp-title font-medium leading-[21px] tracking-[2%]'>{t('login')} *</label> 
    <input onChange={event => setUsername(event.target.value)} className='auth__input  block w-full h-[60px] px-[20px] rounded-[8px]' type='email' placeholder='QWERTY' required />
    
     <button
        disabled={login === ''  ? true : false}
      id='loginBtn' onClick={() => auth()}  type='button' className=' w-full  h-[60px] rounded-[8px] shadow-[0px_0px_10px_rgba(38, 38, 38, 0.15)] bg-blue text-white'>{t('continue')}
      </button>
      <div className='flex justify-center'>
        <Link to='/auth' className='text-[17px] underline hover:underline-offset-1 text-blue font-medium leading-[20px]'>{t('loginIn')}</Link>
      </div>
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
    addUserId: (userId)=> dispatch({type:'USERID', payload: userId})
  }
 
}

export default connect(mapStateToProps, mapDispatchToProps)( ForgotCom)