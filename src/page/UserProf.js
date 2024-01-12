import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { useTranslation } from "react-i18next";

import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import ProfSidbar from "../companent/ProfSidbar";
import ProfileHead from "../companent/ProfileHead";

import Avatar from "../asset/img/avatar.png";

import Footer from "../companent/Footer";

function UserProf({ userid , region}) {
  const navigate = useNavigate();
  const [toggle, setToggle] = useState(false);
  const [userInfo, setUserInfo] = useState();
  const [edication, setEdication] = useState();
  const [work, setWork] = useState();
  const [profesia, setProfesia] = useState();
  const [contentT, setContenT] = useState({
     edicContent: false,
     workContent: false,
     profesiaContent: false,
  });
  const [imgId, setImgId] = useState("");
  const [photoAddress, setPhotoAddress] = useState();
  const [userPas, setUserPas] = useState();
  const {t} = useTranslation()
  function contentToggle(name) {
      
       setContenT({
          ...contentT,
          [name]: !contentT[name]
       }
          
       )
  }
  

  const imgUpload = (v) => {
    let formData = new FormData();
    formData.append("photo", v.target.files[0]);
    formData.append("user_id", userid);

    axios.post(`http://localhost:8000/api/avatar`, formData)
      .then((res) => {
        setPhotos(res?.data?.avatar?.id);
        
        toast.success('Avatar created successfully');
        // }
      })
      .catch((error) => {
        toast.error(error.response?.data?.message);
      });
  };

  
  const result = region.reduce((obj, cur) => ({...obj, [cur.id]: cur}), {})
  console.log(result[1]?.name_uz)
  useEffect(() => {
    axios.get(`http://localhost:8000/api/allData/` + userid )
    .then((response) => {
    
      setImgId(response?.data?.user_avatar?.id );
      setUserInfo(response?.data?.user_personal_info );
      setUserPas(response?.data?.user_pasport)
      setEdication(response?.data?.user_education)
      setWork(response?.data?.user_work)
      setProfesia(response?.data?.user_training)
      setPhotoAddress(response.data?.user_avatar?.photo);
    })
    .catch((error) => {
      // toast.error(error.response.data.message);
    });
    
  }, []);
  // console.log(region)
  function fillUp(){
    navigate('/profile')
    localStorage.removeItem('personalId');
    localStorage.removeItem('personalBoolen');
    localStorage.removeItem('edicationlId');
    localStorage.removeItem('edicationBoolen');
    localStorage.removeItem('worklId');
    localStorage.removeItem('workBoolen');
    localStorage.removeItem('trenigId');
    localStorage.removeItem('trenigBoolen');
  }
  function deleteImg() {
    axios
      .delete(`http://localhost:8000/api/avatar/${imgId}/delete`, {
        headers: {
          "Accept-Language":  localStorage.getItem("lng") ||  "uz",
          "Access-Control-Allow-Origin": "http://localhost:3000",
          'Content-Type':  'application/json',
          'Access-Control-Allow-Headers': 'Accept,authorization,Authorization'
        },
      })
      .then((response) => {
       
        setPhotoAddress(null);
        setPhotos(null);
      })
      .catch((error) => {
        toast.error(error.response?.data?.message);
      });
  }
  function upPersonal(id){
  
    localStorage.setItem('personalId', id);
    localStorage.setItem('personalBoolen', JSON.stringify(true));
    navigate('/profile')
  }
  function upEdication(id){
    
    localStorage.setItem('edicationlId', id);
    localStorage.setItem('edicationBoolen', true);
    navigate('/profile/edication')
  }
  function upWork(id){
   
    localStorage.setItem('worklId', id);
    localStorage.setItem('workBoolen', true);
    navigate('/profile/info/work')
  }
  function upTrenig(id){
   
    localStorage.setItem('trenigId', id);
    localStorage.setItem('trenigBoolen', JSON.stringify(true));
    navigate('/profile/profesia')
  }
 
  return (
    <div>
      <div className="flex  items-start ">
        <ProfSidbar />
        <div className="w-full  mb-[40px]">
          <ProfileHead />
          <div className="mt-[25px] mb-[16px] h-[50px] flex items-center justify-between px-[24px]">
            <Link
              to="/"
              className="flex items-center text-[32px] text-gray font-semibold leading-[38px] tracking-[2%] gap-[15px]"
            >
              <i className="uil uil-angle-left-b"></i>
             {t('profile')}{" "}
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
                <span className="font-normal text-[#42445aa5] ">{t('gallery')} /</span>{" "}
              
              </Link>
              <p  className="text-blue text-[18px] font-semibold leading-[21px]">  {t('profile')}</p>
            </div>
          </div>
          <div className="flex flex-col gap-[24px] p-[20px]">
            <div className="content p-[20px] ">
              <h3 className="text-blue text-[20px] leading-[24px] font-medium tracking-[2%] mb-[24px]">
                {t('PersonalData')}
              </h3>
              <div className="flex items-end gap-[30px] w-full">
                <div className="flex-1 flex flex-col gap-[24px] ">
                  <div className="flex items-center relative h-[80px] gap-[27px]">
                    <div className="relative flex  rounded-[50%]">
                      <img
                          onClick={() => deleteImg()}
                          src={
                            photoAddress
                              ? `http://localhost:8000/storage/${photoAddress}`
                              : Avatar
                          }
                        
                        alt="...."
                        className=" w-[70px] h-[70px] rounded-[50%] bg-gradient-to-r from-[#2B63C0] to-[#154BA6]"
                        
                      />
                      <label  className="absolute bg-[#ffffff7b] flex items-center justify-center mt-[40px]  w-full h-[30px] cursor-pointer " htmlFor="file">
                        <input
                          type="file"
                          onChange={imgUpload }
                          className="hidden"
                          name="img"
                          id="file"
                          accept="image/*"
                        />
                        
                        <i className="uil uil-camera text-[24px] text-blue"></i>
                      </label>
                    </div>
                    <h1 className="text-black text-[20px] leading-[24px] font-medium tracking-[2%]">
                      { userInfo?.full_name  }
                    </h1>
                    
                  </div>
                  <h3 className="text-blue text-[15px] leading-[18px] font-normal">
                    {userInfo?.gender }
                  </h3>
                 
                  <div className="flex flex-col gap-[8px]">
                    <label className=" text-[#333333] text-[16px] leading-[24px] font-medium tracking-[2%]">
                     {t('passportNumber')}{" "}
                    </label>
                    <div className="seleted__value rounded-[8px]">
                      <p className="text-[#8C8C8C] text-[16px] leading-[24px] font-regular tracking-[2%] p-[12px]">
                        {userPas?.pasport_seria ?? t('passportNumber')}
                        {' '}
                        
                        {userPas?.pasport_seria_code}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-[8px]">
                    <label className=" text-[#333333] text-[16px] leading-[24px] font-medium tracking-[2%]">
                     {t('Education')}{" "}
                    </label>
                    <div className="seleted__value rounded-[8px]">
                      <p className="text-[#8C8C8C] text-[16px] leading-[24px] font-regular tracking-[2%] p-[12px]">
                        Высшее
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-[8px]">
                    <label className=" text-[#333333] text-[16px] leading-[24px] font-medium tracking-[2%]">
                      {t('Email')}{" "}
                    </label>
                    
                    <input type='text' readOnly={true} defaultValue={userInfo?.email }   className="seleted__value rounded-[8px] text-[#8C8C8C] text-[16px] leading-[24px] font-regular tracking-[2%] p-[12px]" />
                  </div>
                </div>
                {/*  */}
                <div className="flex-1 flex flex-col gap-[24px]">
                  <div className="flex flex-col gap-[8px]">
                    <label className=" text-[#333333] text-[16px] leading-[24px] font-medium tracking-[2%]">
                     {t('nation')}{" "}
                    </label>
                   
                    <input type='text' readOnly={true} defaultValue={userInfo?.nationality }   className="seleted__value rounded-[8px] text-[#8C8C8C] text-[16px] leading-[24px] font-regular tracking-[2%] p-[12px]" />
                  </div>
                  <div className="flex flex-col gap-[8px]">
                    <label className=" text-[#333333] text-[16px] leading-[24px] font-medium tracking-[2%]">
                     {t('happy')} {" "}
                    </label>
                    
                    <input type='date' readOnly={true} defaultValue={userInfo?.birth_date }   className="seleted__value rounded-[8px] text-[#8C8C8C] text-[16px] leading-[24px] font-regular tracking-[2%] p-[12px]" />
                  </div>
                  <div className="flex flex-col gap-[8px]">
                    <label className=" text-[#333333] text-[16px] leading-[24px] font-medium tracking-[2%]">
                      {t('personal')}     {" "}
                    </label>
                    
                    <input type='text' readOnly={true} defaultValue={userPas?.pnfl }  className="seleted__value rounded-[8px] text-[#8C8C8C] text-[16px] leading-[24px] font-regular tracking-[2%] p-[12px]" />
                  </div>
                  <div className="flex flex-col gap-[8px]">
                    <label className=" text-[#333333] text-[16px] leading-[24px] font-medium tracking-[2%]">
                     {t('phoneNumber')}{" "}
                    </label>
                    
                    <input type='text' readOnly={true} defaultValue={userInfo?.phone }   className="seleted__value rounded-[8px] text-[#8C8C8C] text-[16px] leading-[24px] font-regular tracking-[2%] p-[12px]" />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-end px-[20px] mt-[24px]">
            <button onClick={() => upPersonal(userInfo?.id)} className="w-[239px] h-[48px] flex items-center justify-center gap-[16px]  bg-[#FFA41D] rounded-[8px]">
              <i className="uil uil-pen text-white text-[21px]"></i>
              <span className="text-white text-[16px] leading-[24px] font-regular tracking-[2%]">
                {t('edit')}
              </span>
            </button>
          </div>
            {edication?.map((el, i) => (
              <div
                key={i}
                className="content p-[20px] flex flex-col gap-[24px]"
              >
                <div
                  onClick={() => contentToggle("edicContent")}
                  className="flex items-center justify-between  "
                >
                  <h3 className="text-blue text-[20px] leading-[24px] font-medium tracking-[2%] ">
                    {t('InformationAboutEducation')} № {i + 1}
                  </h3>
                  <div className="w-[27px] h-[6px] rounded-[5px] bg-blue "></div>
                </div>

                <div
                  className={`${
                    contentT.edicContent ? "flex" : "hidden"
                  }  items-start gap-[30px]`}
                >
                  <div className="flex-1 flex flex-col gap-[24px]">
                    <div className="flex flex-col gap-[8px]">
                      <label className=" text-[#333333] text-[16px] leading-[24px] font-medium tracking-[2%]">
                        {t('region')}{" "}
                      </label>
                      <div className="seleted__value rounded-[8px]">
                        <p className="text-[#8C8C8C] text-[16px] leading-[24px] font-regular tracking-[2%] p-[12px]">
                         {result[el.region_id]?.name_uz }
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col gap-[8px]">
                      <label className=" text-[#333333] text-[16px] leading-[24px] font-medium tracking-[2%]">
                        {t('institution')}{" "}
                      </label>
                     
                      <input type='text' readOnly={true} defaultValue={el.education_name_uz}   className="seleted__value rounded-[8px] text-[#8C8C8C] text-[16px] leading-[24px] font-regular tracking-[2%] p-[12px]" />
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col gap-[24px]">
                    <div className="flex flex-col gap-[8px]">
                      <label className=" text-[#333333] text-[16px] leading-[24px] font-medium tracking-[2%]">
                        {t('dateReceived')}{" "}
                      </label>
                      
                      <input type='date' readOnly={true} defaultValue={el.enter_date}   className="seleted__value rounded-[8px] text-[#8C8C8C] text-[16px] leading-[24px] font-regular tracking-[2%] p-[12px]" />
                    </div>
                    <div className="flex flex-col gap-[8px]">
                      <label className=" text-[#333333] text-[16px] leading-[24px] font-medium tracking-[2%]">
                        {t('expirationDate')}{" "}
                      </label>
                      
                      <input type='date' readOnly={true} defaultValue={el.end_date}   className="seleted__value rounded-[8px] text-[#8C8C8C] text-[16px] leading-[24px] font-regular tracking-[2%] p-[12px]" />
                    </div>
                  </div>
                </div>
                <div
                  className={`${
                    contentT.edicContent ? "flex" : "hidden"
                  } flex-col gap-[8px] `}
                >
                  <label className=" text-[#333333] text-[16px] leading-[24px] font-medium tracking-[2%]">
                    {t('speciality')}{" "}
                  </label>
                  <div className="seleted__value rounded-[8px]">
                    <p className="text-[#8C8C8C] text-[16px] leading-[24px] font-regular tracking-[2%] p-[12px]">
                      {el.specialization_uz}
                    </p>
                  </div>
                  <div className="flex justify-end px-[20px] mt-[24px]">
            <button onClick={()=> upEdication(el.id)} className="w-[239px] h-[48px] flex items-center justify-center gap-[16px]  bg-[#FFA41D] rounded-[8px]">
              <i className="uil uil-pen text-white text-[21px]"></i>
              <span className="text-white text-[16px] leading-[24px] font-regular tracking-[2%]">
              {t('edit')}
              </span>
            </button>
          </div>
                </div>
               
              </div>
              
            )) ?? ""}
              
            {work?.map((el, i) => (
              <div
                key={i}
                className="content p-[20px] flex flex-col gap-[24px]"
              >
                <div
                  onClick={() => contentToggle("workContent")}
                  className="flex items-center justify-between"
                >
                  <h3 className="text-blue text-[20px] leading-[24px] font-medium tracking-[2%] ">
                   {t('jobDetails')} № {i + 1}
                  </h3>
                  <div className="w-[27px] h-[6px] rounded-[5px] bg-blue "></div>
                </div>

                <div
                  className={`${
                    contentT.workContent ? "flex" : "hidden"
                  }  items-start gap-[30px]`}
                >
                  <div className="flex-1 flex flex-col gap-[24px]">
                    <div className="flex flex-col gap-[8px]">
                      <label className=" text-[#333333] text-[16px] leading-[24px] font-medium tracking-[2%]">
                       {t('region')}{" "}
                      </label>
                      <div className="seleted__value rounded-[8px]">
                        <p className="text-[#8C8C8C] text-[16px] leading-[24px] font-regular tracking-[2%] p-[12px]">
                        {result[el.region_id]?.name_uz }
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col gap-[8px]">
                      <label className=" text-[#333333] text-[16px] leading-[24px] font-medium tracking-[2%]">
                       {t('district')}{" "}
                      </label>
                      <div className="seleted__value rounded-[8px]">
                        <p className="text-[#8C8C8C] text-[16px] leading-[24px] font-regular tracking-[2%] p-[12px]">
                          {el.district ?? ""}
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col gap-[8px]">
                      <label className=" text-[#333333] text-[16px] leading-[24px] font-medium tracking-[2%]">
                        {t('typeWork')}{" "}
                      </label>
                      <div className="seleted__value rounded-[8px]">
                        <p className="text-[#8C8C8C] text-[16px] leading-[24px] font-regular tracking-[2%] p-[12px]">
                          Образавательное учреждение
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col gap-[8px]">
                      <label className=" text-[#333333] text-[16px] leading-[24px] font-medium tracking-[2%]">
                       {t('workNumber')}
                      </label>
                      <div className="seleted__value rounded-[8px]">
                        <p className="text-[#8C8C8C] text-[16px] leading-[24px] font-regular tracking-[2%] p-[12px]">
                          {el.work_phone ?? "99"}
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col gap-[8px]">
                      <label className=" text-[#333333] text-[16px] leading-[24px] font-medium tracking-[2%]">
                        {t('startJob')}{" "}
                      </label>
                      <div className="seleted__value rounded-[8px]">
                        <p className="text-[#8C8C8C] text-[16px] leading-[24px] font-regular tracking-[2%] p-[12px]">
                          {el.date_start ?? "t('startJob')"}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col gap-[24px]">
                    <div className="flex flex-col gap-[8px]">
                      <label className=" text-[#333333] text-[16px] leading-[24px] font-medium tracking-[2%]">
                        {t('faculty')}{" "}
                      </label>
                      <div className="seleted__value rounded-[8px]">
                        <p className="text-[#8C8C8C] text-[16px] leading-[24px] font-regular tracking-[2%] p-[12px]">
                          {el.faculty ?? t('faculty')}
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col gap-[8px]">
                      <label className=" text-[#333333] text-[16px] leading-[24px] font-medium tracking-[2%]">
                       {t('department')}{" "}
                      </label>
                      <div className="seleted__value rounded-[8px]">
                        <p className="text-[#8C8C8C] text-[16px] leading-[24px] font-regular tracking-[2%] p-[12px]">
                          {el.cafedra ?? t('department')}
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col gap-[8px]">
                      <label className=" text-[#333333] text-[16px] leading-[24px] font-medium tracking-[2%]">
                       {t('jobTitle')}{" "}
                      </label>
                      <div className="seleted__value rounded-[8px]">
                        <p className="text-[#8C8C8C] text-[16px] leading-[24px] font-regular tracking-[2%] p-[12px]">
                          {el.position ?? t('jobTitle')}
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col gap-[8px]">
                      <label className=" text-[#333333] text-[16px] leading-[24px] font-medium tracking-[2%]">
                        {t('jobName')}{" "}
                      </label>
                      <div className="seleted__value rounded-[8px]">
                        <p className="text-[#8C8C8C] text-[16px] leading-[24px] font-regular tracking-[2%] p-[12px]">
                          {el.work_name ?? t('jobName')}
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col gap-[8px]">
                      <label className=" text-[#333333] text-[16px] leading-[24px] font-medium tracking-[2%]">
                       {t('fenishJob')}{" "} 
                      </label>
                      <div className="seleted__value rounded-[8px]">
                        <p className="text-[#8C8C8C] text-[16px] leading-[24px] font-regular tracking-[2%] p-[12px]">
                          {el.date_end ?? t('fenishJob')}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={`${
                    contentT.workContent ? "flex" : "hidden"
                  }   justify-end px-[20px] mt-[24px]`}>
            <button onClick={() => upWork(el.id)} className="w-[239px] h-[48px] flex items-center justify-center gap-[16px]  bg-[#FFA41D] rounded-[8px]">
              <i className="uil uil-pen text-white text-[21px]"></i>
              <span className="text-white text-[16px] leading-[24px] font-regular tracking-[2%]">
              {t('edit')}
              </span>
            </button>
          </div>
              </div>
            )) ?? ""}
               
            {profesia?.map((el, i) => (
              <div key={i}
                onClick={() => contentToggle("profesiaContent")}
                className={` content p-[20px] flex flex-col gap-[24px]`}
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-blue text-[20px] leading-[24px] font-medium tracking-[2%] ">
                   {t('advancedTraining')} № {i + 1}
                  </h3>
                  <div className="w-[27px] h-[6px] rounded-[5px] bg-blue "></div>
                </div>
                <div
                  className={`${
                    contentT.profesiaContent ? "flex" : "hidden"
                  }  items-start gap-[30px]`}
                >
                  <div className="flex-1 flex flex-col gap-[24px]">
                    <div className="flex flex-col gap-[8px]">
                      <label className=" text-[#333333] text-[16px] leading-[24px] font-medium tracking-[2%]">
                      {t('region')}{" "}
                      </label>
                      <div className="seleted__value rounded-[8px]">
                        <p className="text-[#8C8C8C] text-[16px] leading-[24px] font-regular tracking-[2%] p-[12px]">
                        {result[el.region_id]?.name_uz }
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col gap-[8px]">
                      <label className=" text-[ #333333] text-[16px] leading-[24px] font-medium tracking-[2%]">
                       {t('attended')}{" "}
                      </label>
                      <div className="seleted__value rounded-[8px]">
                        <p className="text-[#8C8C8C] text-[16px] leading-[24px] font-regular tracking-[2%] p-[12px]">
                          {el.direction ?? t('attended')}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col gap-[24px]">
                    <div className="flex flex-col gap-[8px]">
                      <label className=" text-[ #333333] text-[16px] leading-[24px] font-medium tracking-[2%]">
                       {t('direction')}{" "}
                      </label>
                      <div className="seleted__value rounded-[8px]">
                        <p className="text-[#8C8C8C] text-[16px] leading-[24px] font-regular tracking-[2%] p-[12px]">
                          {el.speciality ?? t('direction')}
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col gap-[8px]">
                      <label className=" text-[ #333333] text-[16px] leading-[24px] font-medium tracking-[2%]">
                        {t('qualifiStartEndDate')}
                      </label>
                      <div className="seleted__value rounded-[8px]">
                        <p className="text-[#8C8C8C] text-[16px] leading-[24px] font-regular tracking-[2%] p-[12px]">
                          {el.date_start ?? ""} г. - {el.date_end} г.
                        </p>
                      </div>
                    </div>
                  </div>
                
                </div>
                <div className={`${contentT.profesiaContent ? 'flex' : 'hidden'}  justify-end px-[20px] mt-[20px]`}>
            <button onClick={() => upTrenig(el.id)} className="w-[239px] h-[48px] flex items-center justify-center gap-[16px]  bg-[#FFA41D] rounded-[8px]">
              <i className="uil uil-pen text-white text-[21px]"></i>
              <span className="text-white text-[16px] leading-[24px] font-regular tracking-[2%]">
              {t('edit')}
              </span>
            </button>
          </div>
        
              </div>
              
            ))}
          </div>
          {
             !userInfo || !edication || !work || !profesia  
              ?  <div className={`flex  justify-end px-[20px] mt-[20px]`}>
              <button onClick={() => fillUp()} className="w-[239px] h-[48px] flex items-center justify-center gap-[16px]  bg-[#3ed618] rounded-[8px]">
                <i className="uil uil-pen text-white text-[21px]"></i>
                <span className="text-white text-[16px] leading-[24px] font-regular tracking-[2%]">
                Заполнять
                </span>
              </button>
            </div> 
            : ''
             
          }
         
          <div className="flex justify-end w-full mt-[30px]  ">
            <div
              onClick={() => setToggle(true)}
              className="relative overflow-hidden btn-static w-[350px] h-[60px] flex items-center justify-center gap-[20px] mx-[24px] cursor-pointer"
            >
              <i className="uil uil-check-circle text-[25px] text-[#0FBE7B]"></i>
              <h3 className="text-[#0FBE7B] text-[20px] leading-[30px] font-normal tracking-[2%]">
                Соответствует
              </h3>
              <div className="absolute bottom-0 left-0 w-full ">
                <div
                  className={`bg-[#0FBE7B] h-[2px]  transition-[.7s] ${
                    toggle == true ? "w-full" : "w-0"
                  } rounded-[5px]`}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="bg-[#292A2F]">
        <Footer />
      </footer>
    </div>
  );
}
function mapStateToProps(state) {
  return {
    userid: state.userid,
    region: state.region
  };
}
function mapDispatchToProps(dispatch) {
  return {};
}
export default connect(mapStateToProps, mapDispatchToProps)(UserProf);
