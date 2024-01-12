import React, {useState, useEffect} from "react";
import {connect} from 'react-redux'
import { useTranslation } from "react-i18next";
import axios from "axios";
import { Link } from "react-router-dom";
import ProfSidbar from "../companent/ProfSidbar";
import ProfileHead from "../companent/ProfileHead";
import Check from "../companent/check/Check";
import Footer from "../companent/Footer";
 function Direction({ DirectionSelectValue,  addSelect}) {
  
  const [directionToggle , setDirectionToggle] =  useState(false);
  const [selectToggle , setSelectToggle] = useState(false);
  const {t} = useTranslation()
  const [direction , setDirection] = useState(); 
  async function getDirection() {
      await axios.get('http://localhost:8000/api/direction', {
        headers: {
          "Accept-Language": localStorage.getItem("lng") ||  "uz"
        }
      })
      .then(res => {
    
        setDirection(res.data.direction)
      })
  } 
 
  // DirectionSelectValue !== '' ?  :
  useEffect(() => {
    getDirection()
  } , [])

  let selectD = document.querySelector('.directionSel')
 
  window.addEventListener('mouseup', (event) => {
     if(event.target != selectD   &&  event.target.parentNode != selectD  ){
      setSelectToggle(current =>  current= false);
     }
  })

  function handaleChange(e, id){
    setSelectToggle(current => current= false);
    addSelect(e.target.innerText, id);
     
  }
  function handaleChangeDirex(text, id){
    setSelectToggle(current => current= false);
    setDirectionToggle(toggle => toggle = false)
    addSelect(text, id);
  }
  return (
    <div>
      <div  className='flex  items-start '>
        <ProfSidbar />
        <div className="w-full  mb-[40px]">
          <ProfileHead />
          <div className="mt-[25px] mb-[16px] h-[50px] flex items-center justify-between px-[24px]">
            <Link
              to="/"
              className="flex items-center text-[32px] text-gray font-semibold leading-[38px] tracking-[2%] gap-[15px]"
            >
              <i className="uil uil-angle-left-b"></i>
              {t('direction')}{" "}
            </Link>
            <div className="flex items-center gap-[10px]">
              <div>
                {" "}
                <i className="uil uil-clock-three text-[22px] text-blue "></i>
              </div>

              <Link
                to="/"
                className="text-blue text-[18px] font-semibold leading-[21px]"
              >
                <span className="font-normal text-[#42445aa5] ">
                {t('gallery')} / 
                </span>{" "}
                
              </Link>
              <Link
                to="/userProf"
                className="text-blue text-[18px] font-semibold leading-[21px]"
              >
                <span className="font-normal text-[#42445aa5] ">
                {t('profile')}  /
                </span>{" "}
                
              </Link>
              <p className="text-blue text-[18px] font-semibold leading-[21px]">{t('direction')}</p>
            </div>
          </div>
          
          <div className="px-[20px] flex flex-col gap-[24px]">
            <div onClick={() => setSelectToggle(current => !current) } className="flex items-center justify-between p-[13px] cursor-pointer bg-white w-[560px] h-[50px] border-[1px] border-solid border-blue rounded-[8px]">
                <span className="text-blue text-[16px] h-full w-full overflow-x-auto text-clip leading-[24px] font-regular ">
                 { DirectionSelectValue !== '' ?  DirectionSelectValue : t('allDirections')  } 
                </span>
                <span>
                   <i className="uil uil-angle-down text-blue text-[20px]"></i>
                </span>
               
            </div>
            <div className={`${selectToggle == true ? 'block' : 'hidden'} directionSel content w-[560px] py-[10px]`}>
                <ul className="flex flex-col gap-[14px] ">
                  {
                    direction?.map((el, i) => (
                      <li key={i} onClick={(event) => handaleChange(event, el.id)} className="select-item    flex items-center px-[24px]  py-[16px] text-[16px] text-[#8C8C8C]  font-medium leading-[24px]  cursor-pointer">
                          {el.title_uz ?? el.title_ru ?? el.title_en} 

                       </li>
                    ))
                  }
                 
                  
                </ul>
            </div>
            <div className="content flex  flex-col gap-[24px] p-[20px] ">
            <div onClick={() => setDirectionToggle(current => !current)} className='flex items-center justify-between cursor-pointer'>
                        <h3 className='text-blue text-[20px] leading-[24px] font-medium tracking-[2%] '>{t('listOfDirection')} </h3>  
                        <div className='w-[27px] h-[6px] rounded-[5px] bg-blue '></div>
                </div>
                <div className={` ${directionToggle == true  ? 'grid transition ease-in-out delay-200' : 'hidden transition ease-in-out delay-200'}   w-full grid-cols-2  gap-[24px] `}>
                  {
                    direction?.map((el, i) => (
                      
                      <div key={i} onClick={() => handaleChangeDirex(el.title_uz, el.id)} className={`${i == 8 ? 'col-span-2' : ''}  cursor-pointer content hover:border-[1px] border-solid border-blue  w-full flex flex-col gap-[30px] justify-between p-[20px]  `}>
                      <h3 className="text-[#000000c8] cursor-pointer text-[20px] leading-[30px] font-regular tracking-[2%]">
                          {i + 1}   {el.title_uz ?? el.title_ru ?? el.title_en}
                      </h3>
                      
                      <a className="text-blue text-[20px] leading-[24px] font-regular tracking-[2%]">{t('teachers')}    58</a>
                   </div>
                    ))
                  }
                    
                </div>
            </div>
              {
                DirectionSelectValue !== '' 
                  ?   <Check />
                  : ''
              }
              
             
           
          </div>

        </div>
      </div>
      <footer className="bg-[#292A2F]">
        <Footer />
      </footer>
    </div>
  );
}
function mapStateToProps(state){
  return {
    DirectionSelectValue: state.DirectionSelectValue,
  }
}
function mapDispatchToProps(dispatch) {
  return {
     addSelect:(post, direction_id) => dispatch({type:'DIRECTIONGETVALUE',payload: post, id:  direction_id }),
     
     
  }
 
}
export default connect(mapStateToProps, mapDispatchToProps)(Direction)