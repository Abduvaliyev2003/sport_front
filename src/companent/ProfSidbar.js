import React, {useEffect, useState} from 'react'
import { useTranslation } from 'react-i18next';
import axios from 'axios';
import Avatar from "../asset/img/avatar.png";
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
 function ProfSidbar({userid}) {
   const  {t} = useTranslation()
   const [photoAddress,  setPhotoAddress] = useState()
   const [userInfo, setUserInfo] = useState();
  useEffect(() => {
    axios
    .get(`http://localhost:8000/api/allData/` + userid, )
    .then((response) => {
      
      setUserInfo(response?.data?.user_personal_info);
      setPhotoAddress(response.data?.user_avatar?.photo);
    })
    .catch((error) => {
      console.log(error)
    });
  }, [])

  return ( 
    <aside className='w-[320px] h-screen sticky top-0 left-0 bottom-0 bg-profile   '>
          <div className='flex items-center  gap-[12px] p-[19px] border-solid border-b-[1px] border-[#ffffff55] '>
           <img className='w-[60px] h-[60px] rounded-[50%]' src={photoAddress ?  `http://localhost:8000/storage/${photoAddress}` :   Avatar} />
            <h3 className='text-[16px] w-[100px] overflow-y-auto h-[80px] flex items-center  font-medium leading-[17px] text-white tracking-[2%]'>
               {userInfo ?  userInfo?.full_name : ''}
            </h3>
           </div>
        <ul>
            <li>
                <Link to='/' className='profil__side-item cursor-pointer transition-all  w-full h-[56px] flex items-center gap-[14px] text-[16px] text-white leading-[19px] font-medium tracking-[1%] px-[19px]'>
                    <i className="uil uil-estate text-[20px]"></i> 
                    {t('gallery')}
                </Link>
            </li>
            <li>
                <Link to='/userProf'  className='profil__side-item cursor-pointer transition-all  w-full h-[56px] flex items-center gap-[14px] text-[16px] text-white leading-[19px] font-medium tracking-[1%] px-[19px]'>
                    <i className="uil uil-plus-circle text-[20px]"></i> 
                    {t('profile')}
                </Link>
            </li>
            <li>
                <Link  to='/direction' className='profil__side-item cursor-pointer transition-all  w-full h-[56px] flex items-center gap-[14px] text-[16px] text-white leading-[19px] font-medium tracking-[1%] px-[19px]'>
                    <i className="uil uil-directions text-[20px]"></i> 
                    {t('direction')}
                </Link>
            </li>
            <li>
                <Link  to='/static' className='profil__side-item cursor-pointer transition-all  w-full h-[56px] flex items-center gap-[14px] text-[16px] text-white leading-[19px] font-medium tracking-[1%] px-[19px]'>
                    <i className="uil uil-chart-bar text-[20px]"></i> 
                    {t('statistics')}
                </Link>
            </li>
            <li>
                <Link  to='/userportfolio' className='profil__side-item cursor-pointer transition-all  w-full h-[56px] flex items-center gap-[14px] text-[16px] text-white leading-[19px] font-medium tracking-[1%] px-[19px]'>
                    
                    <i className="uil uil-file-medical-alt text-[20px]"></i>
                    {t('portfolio')}
                </Link>
            </li>
            <li>
                <a className='profil__side-item cursor-pointer transition-all  w-full h-[56px] flex items-center gap-[14px] text-[16px] text-white leading-[19px] font-medium tracking-[1%] px-[19px]'>
                    <i className="uil uil-signout text-[20px]"></i> 
                    {t('comeSystem')}
                </a>
            </li>
        </ul> 
    </aside>
  )
}
function mapStateToProps(state) {
    return {
      userid: state.userid,
    };
  }
  function mapDispatchToProps(dispatch) {
    return {};
  }
  export default connect(mapStateToProps, mapDispatchToProps)(ProfSidbar);