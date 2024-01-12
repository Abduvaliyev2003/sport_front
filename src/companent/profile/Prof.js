
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useNavigate } from 'react-router-dom';
import {  toast } from 'react-toastify';
import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css'
import {connect} from 'react-redux'
import axios from "axios";
import ProfHead from "./ProfHead";
 function Prof({ showValue , addSelect, showMenu,  showSelect ,    passportId , userid }) {
  const {t} = useTranslation()
  const [state, setState] = useState({
    fullName:'',
    email: '',
    birthDate: '',
    gender: '',
    manboolen : false,
    womenboolen: false,
  })
  const [error, setError] = useState({
    fullName:false,
    email: false,
    birthDate: false,
    gender: false,
    phone: false,
    nationality: false,
  })

  const navigate = useNavigate();
  const [value, setValue] = useState();
  const upPersonal =  localStorage.getItem('personalId');
   const upPersonalBoolen = localStorage.getItem('personalBoolen');
   console.log(upPersonalBoolen)
  function handaleChange(e){
    addSelect(e.target.innerText);
     
  }
  
  function getValue(evt){
    const value = evt.target.value;
    setState({
      ...state,
      [ evt.target.name]: value
    })
  }
  
  function genderFun(text , id){
    console.log(text)
    if(id == 1){
      setState({
        ...state,
        womenboolen: !state.womenboolen,
        gender: text,
        manboolen: false,
      })
    } else if (id == 2){
      setState({
        ...state,
        womenboolen: false,
        gender: text,
        manboolen:  !state.manboolen,

      })
    }
    
  }
  
      function personalFunc() {
        if(upPersonalBoolen){
          axios.put(`http://localhost:8000/api/personal/${upPersonal}/update`, {
            user_id: userid,
            full_name: state.fullName,
            email: state.email,
            phone: value,
            gender: state.gender,
            birth_date: state.birthDate,
            nationality: showValue,
            pasport_id: passportId,
         }, {
          headers: {
            "Accept-Language": localStorage.getItem("lng") ||  "uz"
          }
         })
         .then(res => {
          
          navigate('/userProf') 
            
            toast.success(res.data.message)
          console.log(res)
           localStorage.removeItem('personalId');
           localStorage.removeItem('personalBoolen');
        }).catch(e => {
        const map = e.response.data.errors
        console.log(e)
        const result = Object.values(map)
          result.forEach((ele, i) => {
                  return    toast.error(ele.toString()) 
              })  
            })    
        } else {
          axios.post(`http://localhost:8000/api/personal`, {
            user_id: userid,
            full_name: state.fullName,
            email: state.email,
            phone: value,
            gender: state.gender,
            birth_date: state.birthDate,
            nationality: showValue,
            pasport_id: passportId,
         })
         .then(res => {
          
           navigate('/profile/edication')
            
            toast.success(res.data.message)
          console.log(res)
           localStorage.removeItem('personalId');
           localStorage.removeItem('personalBoolen');
        }).catch(e => {
        const map = e.response.data.errors
        console.log(e)
        const result = Object.values(map)
          result.forEach((ele, i) => {
                  return    toast.error(ele.toString()) 
              })  
            })    
        }
      
     
     
      
     
      
     }

     
    console.log(error)
  return (
    <form className="px-[24px]">
      <div className="login__form-content bg-white p-[24px] flex flex-col gap-[24px]">
        <ProfHead />

        <div className="flex  gap-[24px]">
          <div className="flex-1  flex flex-col gap-[24px] ">
            <div className="flex flex-col  ">
              <label className={`text-[16px] ${error.fullName == true ? 'text-red-600' : 'text-[#333333]'}  font-medium leading-[24px]`}>
                {t('FullName')} *
              </label>
              <input
                type="text"
                onChange={getValue}
                name='fullName'
                value={state.fullName}
                className={`seleted__value mt-[8px] rounded-[8px] outline-none p-[12px] text-[16px] ${error.fullName == true ? 'text-red-600' : 'text-[#8C8C8C]'}  font-normal leading-[24px]`}
                placeholder={t('FullName')} 
              />
            </div>

            <div className="flex  items-center gap-[20px] my-[30px]">
              <div className="flex items-center gap-[17px]">
                <div onClick={() => genderFun(t('female'), 1)} className={`relative w-[47px] h-[24px]  ${state.womenboolen == true ? ' bg-blue' : 'bg-white'} border-[1px] border-solid border-blue  transition-all rounded-[100px] flex items-center px-[.8px]  cursor-pointer`}>
                  <div className={` w-[18px] h-[18px] rounded-[100px] absolute   ${state.womenboolen  == true ? 'right-0 bg-white' : 'left-0 bg-blue'}  transition-all `}></div>
                </div>
                <p className={`${error.gender ? 'text-red-600' : ' text-blue'} text-[18px] font-semibold leading-[21px] tracking-[2%]`}>
                 {t('female')}
                </p>
              </div>
              <div className="flex items-center gap-[17px]">
                <div onClick={() => genderFun(t('man'), 2)} className={`relative w-[47px] h-[24px]  ${state.manboolen == true ? ' bg-blue' : 'bg-white'}  transition-all border-[1px] border-solid border-blue rounded-[100px] flex items-center px-[.8px] cursor-pointer`}>
                  <div className={` w-[18px] h-[18px] rounded-[100px] absolute   ${state.manboolen == true ? 'right-0 bg-white' : 'left-0 bg-blue'}  transition-all `}></div>
                </div>
                <p className={`${error.gender ? 'text-red-600' : ' text-blue'} text-[18px] font-semibold leading-[21px] tracking-[2%]`}>
                  {t('man')}
                </p>
              </div>
            </div>

            
            <div className="flex flex-col  ">
              <label className={`text-[16px] ${error.email ? 'text-red-600' : 'text-[#333333]'}  font-medium leading-[24px]`}>
                {t('Email')}
              </label>
              <input
                type="email"
                required
                name='email'
                onChange={getValue}
                value={state.email}
                className={`seleted__value mt-[8px] rounded-[8px] outline-none p-[12px] text-[16px] ${error.email ? 'text-red-600' : 'text-[#8C8C8C]'}  font-normal leading-[24px]`}
                placeholder={t('Email')}
              />
            </div>
          </div>
          <div className="flex-1 flex flex-col gap-[24px]">
            <div>
              <label  className={`text-[16px] ${error.nationality ? 'text-red-600' : 'text-[#333333]'}  font-medium leading-[24px]`}>
               {t('nation')} *
              </label>
              <div
                onClick={ showSelect}
                className=" seleted__value mt-[8px] rounded-[8px]  flex items-center justify-between w-full  "
              >
                <p className=" p-[12px] text-[16px] text-[#8C8C8C] font-normal leading-[24px]">
                  {showValue ? showValue : "Узбек"}
                </p>
                <div>
                  <i className="uil uil-angle-down text-gray text-[22px]"></i>
                </div>
              </div>
              
            </div>
            <div
              className={`  login__form-content py-[10px] ${
                showMenu ? "block" : "hidden"
              } `}
            >
              <ul className="flex flex-col gap-[14px] ">
                <li
                  onClick={(event) => handaleChange(event)}
                  className="select-item h-[57px]   flex items-center pl-[24px] text-[16px] text-[#8C8C8C]  font-medium leading-[24px]  cursor-pointer"
                >
                  Узбек
                </li>
                <li
                  onClick={(event) => handaleChange(event)}
                  className="select-item h-[57px]   flex items-center pl-[24px] text-[16px] text-[#8C8C8C]  font-medium leading-[24px]  cursor-pointer"
                >
                  Ру́сские 
                </li>
              </ul>
            </div>
            <div className="flex flex-col  ">
              <label  className={`text-[16px] ${error.nationality == true ? 'text-red-600' : 'text-[#333333]'}  font-medium leading-[24px]`}>
               {t('happy')} *
              </label>
              <input
                type="date"
                name='birthDate'
                onChange={getValue}
                value={state.birthDate}
                className={`seleted__value mt-[8px] rounded-[8px] outline-none p-[12px] text-[16px] ${error.birthDate ? 'text-red-600' : 'text-[#8C8C8C]'}  font-normal leading-[24px]`}
                placeholder="05.10.2002 г"
              />
            </div>
            
            <div className="flex flex-col  ">
              <label  className={`text-[16px] ${error.phone ? 'text-red-600' : 'text-[#333333]'}  font-medium leading-[24px]`}>
                {t('phoneNumber')} *
              </label>
              <PhoneInput
                international
               
                defaultCountry="UZ"
                className={`flex seleted__value mt-[8px] rounded-[8px]  p-[12px] text-[16px] ${error.phone ? 'text-red-600' : ' text-[#8C8C8C]'} font-normal leading-[24px] `}
                placeholder="Enter phone number"
                
                value={value}
                onChange={setValue}/>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-end gap-[16px] mt-[24px] px-[24px]">
        <Link to='/login'  className="form-btn w-[191px] h-[48px] flex items-center justify-center gap-[15px]  text-white text-[16px] font-semibold leading-[24px] bg-blue">
          <i className="uil uil-sign-out-alt"></i> {t('back')}
        </Link>
        <button type='button' onClick={() =>  personalFunc()}  className="form-btn w-[191px] h-[48px] flex items-center justify-center gap-[15px]  text-white text-[16px] font-semibold leading-[24px] bg-[#0FBE7B]">
          <i className="uil uil-check-circle"></i> {t('continue')}
        </button>
      </div>
    </form>
  );
}

function mapStateToProps(state){
  return {
    showValue:state.showValue,
    showMenu:state.showMenu,
    passportId: state.pnid,
    userid: state.userid,
  }
}
function mapDispatchToProps(dispatch) {
  return {
     addSelect:(post) => dispatch({type:'NSTVALUE',payload: post }),
     showSelect:()=> dispatch({type:'SHOWMENU'}),
    
  }
 
}
export default connect(mapStateToProps, mapDispatchToProps)(Prof)