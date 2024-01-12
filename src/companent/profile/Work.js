import React from 'react'
import {connect} from 'react-redux'
import { Link , useNavigate} from 'react-router-dom';
import { toast } from "react-toastify";
import axios from "axios";
import { useTranslation } from "react-i18next";
import ModelWork from '../model/ModelWork'
 
  

  


 function Work({object , addobject, userId}) {
  const {t} = useTranslation()
  const navigate = useNavigate();
    const upWorkId =   localStorage.getItem('worklId');
    const upWorkB =   localStorage.getItem('workBoolen');

    function postEdivation(){
         const load =  toast.loading('Loading...')
         if(upWorkB){
          object.map(el => {
            axios.put(`http://localhost:8000/api/work/${upWorkId}/update`, {
                 user_id: userId,
                 region_id: el.region_id,
                 district:  el.district,
                 work_place: el.workPlace,
                 faculty: el.faculty,
                 cafedra: el.cafedra,
                 position: el.position,
                 work_name: el.workName,
                 work_phone: el.workPhone,
                 date_start: el.dateStart,
                 date_end: el.datend
            }, {
              headers: {
                "Accept-Language": localStorage.getItem("lng") ||  "uz"
              }
            })
            .then(res => {
             
              setTimeout(() => {
                navigate('/userProf');
              }, 3500)
              console.log(res)
                toast.update(load, {
                  render: res.message,
                  type: 'success',
                  autoClose: 3000,
                  closeOnClick: true,
                  hideProgressBar: false,
                  draggable: true,
                  isLoading: false
                })
                  localStorage.removeItem('worklId');
                   localStorage.removeItem('workBoolen');
                
            })
            .catch((err) => {
              const map = err.response.data.errors;
          const result = Object.values(map);
          return result.map((ele, i) => {
            return toast.update(load, {
               render: () =>  ele.toString(),
               type: "error",
               autoClose: 3000,
               closeOnClick: true,
               hideProgressBar: false,
               pauseOnHover: true,
               draggable: true,
               progress: undefined,
               theme: "light",
               isLoading: false
            }  );
          });
            })
         })
         } else {
          object.map(el => {
            axios.post(`http://localhost:8000/api/work`, {
                 user_id: userId,
                 region_id: el.region_id,
                 district:  el.district,
                 work_place: el.workPlace,
                 faculty: el.faculty,
                 cafedra: el.cafedra,
                 position: el.position,
                 work_name: el.workName,
                 work_phone: el.workPhone,
                 date_start: el.dateStart,
                 date_end: el.datend
            })
            .then(res => {
             
              setTimeout(() => {
                navigate('/profile/profesia');
              }, 3500)
                toast.update(load, {
                  render: res.message,
                  type: 'success',
                  autoClose: 3000,
                  closeOnClick: true,
                  hideProgressBar: false,
                  draggable: true,
                  isLoading: false
                })
               
                
            })
            .catch((err) => {
              const map = err.response.data.errors;
          const result = Object.values(map);
          return result.map((ele, i) => {
            return toast.update(load, {
               render: () =>  ele.toString(),
               type: "error",
               autoClose: 3000,
               closeOnClick: true,
               hideProgressBar: false,
               pauseOnHover: true,
               draggable: true,
               progress: undefined,
               theme: "light",
               isLoading: false
            }  );
          });
            })
         })
         }
       
    }

  return (
    <form className="px-[24px] flex flex-col gap-[24px]">
      
      {
        object.map((el, i) => (
          <ModelWork   key={i}  item={el}  index={i}  upWorkBool={upWorkB} />
        ))
      }
       

      <div className="flex items-center justify-end gap-[16px] mt-[24px] px-[24px]">
        <Link to='/profile'  className="form-btn w-[191px] h-[48px] flex items-center justify-center gap-[15px]  text-white text-[16px] font-semibold leading-[24px] bg-blue">
          <i className="uil uil-sign-out-alt"></i> {t('back')}
        </Link>
        <button onClick={() => postEdivation() } type='button' className="form-btn w-[191px] h-[48px] flex items-center justify-center gap-[15px]  text-white text-[16px] font-semibold leading-[24px] bg-[#0FBE7B]">
          <i className="uil uil-check-circle"></i> {t('continue')}
        </button>
      </div>
    </form>
  )
}

function mapStateToProps(state){
    return {
      object: state.objectWork,
      userId: state.userid,
      
    }
  }
  function mapDispatchToProps(dispatch) {
    return {
        addobject:(data) => dispatch({type:'ADDWORK', payload: data})
    }
   
  }
  export default connect(mapStateToProps, mapDispatchToProps)(Work)