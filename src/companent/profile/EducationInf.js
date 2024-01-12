import React from "react";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { connect } from "react-redux";
import axios from "axios";

import Educ from "../model/Educ";
function EducationInf({ addEdicat, arrayEduc, userid }) {
  const navigate = useNavigate();
  const putEdicId =  localStorage.getItem('edicationlId');
   const getEdicB = localStorage.getItem('edicationBoolen');
  const {t} = useTranslation()
  function postEdivation() {
    if(getEdicB){
      arrayEduc?.map((element) => {
        axios
          .put(`http://localhost:8000/api/education/${putEdicId}/update`, {
            user_id: userid,
            education_name: element.higerEdic,
            specialization: element.speciality,
            region_id: element.region_id,
            enter_date: element.dateOfArrival,
            end_date: element.expirationDate,
          }, {
            headers: {
              "Accept-Language": localStorage.getItem("lng") ||  "uz"
            }
          })
          .then((res) => {
            setTimeout(() => {
              navigate('/userProf')
            }, 4000)
            localStorage.removeItem('edicationlId');
             localStorage.removeItem('edicationBoolen');
            toast.success(res.data.message);
          })
          .catch((err) => {
            
            const map = err.response.data.errors;
            const result = Object.values(map);
            return result.forEach((ele, i) => {
              return toast.error(ele.toString());
            });
          });
      });
    } else {
      arrayEduc?.map((element) => {
        axios
          .post(`http://localhost:8000/api/education`, {
            user_id: userid,
            education_name: element.higerEdic,
            specialization: element.speciality,
            region_id: element.region_id,
            enter_date: element.dateOfArrival,
            end_date: element.expirationDate,
          })
          .then((res) => {
            setTimeout(() => {
              navigate('/profile/info/work')
            }, 4000)
            localStorage.removeItem('edicationlId');
             localStorage.removeItem('edicationBoolen');
            toast.success(res.message);
          })
          .catch((err) => {
            
            const map = err.response.data.errors;
            const result = Object.values(map);
            return result.forEach((ele, i) => {
              return toast.error(ele.toString());
            });
          });
      });
    }
   
  }

  return (
    <form className="px-[24px] flex flex-col gap-[24px]">
      {arrayEduc.map((el, i) => (
        <Educ key={i} item={el} index={i} getEdicBool={getEdicB}/>
      ))}
     

      <div className="flex items-center justify-end gap-[16px] mt-[24px] px-[24px]">
        <Link
          to="/profile"
          className="form-btn w-[191px] h-[48px] flex items-center justify-center gap-[15px]  text-white text-[16px] font-semibold leading-[24px] bg-blue"
        >
          <i className="uil uil-sign-out-alt"></i> {t('back')}
        </Link>
        <button
          type="button"
          onClick={() => postEdivation()}
          className="form-btn w-[191px] h-[48px] flex items-center justify-center gap-[15px]  text-white text-[16px] font-semibold leading-[24px] bg-[#0FBE7B]"
        >
          <i className="uil uil-check-circle"></i> {t('continue')}
        </button>
      </div>
    </form>
  );
}

function mapStateToProps(state) {
  return {
    showValue: state.showValue,
    showMenu: state.showMenu,
    arrayEduc: state.objectEd,
    userid: state.userid,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    addEdicat: (data) => dispatch({ type: "ADDEDICNEW", payload: data }),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(EducationInf);
