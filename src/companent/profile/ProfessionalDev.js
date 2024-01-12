import { useState } from 'react';
import axios from 'axios';
import {connect} from 'react-redux'
import { Link, useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";
import ProfessionaAdd from '../model/ProfessionaAdd';
 function ProfessionalDev({addEdicat, showProfe ,   arrayEduc,  userid}) {
  const navigate = useNavigate();
  const {t} = useTranslation()
    const [btn , setBtn] = useState(false)
    const [spinner, setSpiner] = useState(false);
    function addContent() {
      let data = {
        id:  arrayEduc.length + 1,
        text: null,
        region_id:0,
        higerEdic: '',
        speciality: '',
        date_start: '',
        data_end:'',
        showSelect:false,
      }
      addEdicat(data)
    }
    const upTranigId =  localStorage.getItem('trenigId');
    const upTranigB =  localStorage.getItem('trenigBoolen');
    function postProfessional() {
      const load = toast.loading('loading...')
      if(upTranigB) {
        arrayEduc.map((el) => {
            axios.put(`http://localhost:8000/api/training/${upTranigId}/update`, {
              user_id:  userid,
              region_id: el.region_id,
              speciality: el.speciality,
              direction: el.higerEdic,
              date_start: el.date_start,
              date_end: el.data_end
            }, {
              headers: {
                "Accept-Language": localStorage.getItem("lng") ||  "uz"
              }
            })
            .then(res => {
              
             setTimeout(()=> {
              navigate('/userProf')
             }, 3500)
            
              toast.update(load, {
                render: () => res.data.message,
                   type: "success",
                   autoClose: 3000,
                   closeOnClick: true,
                   hideProgressBar: false,
                   pauseOnHover: true,
                   draggable: true,
                   progress: undefined,
                   theme: "light",
                   isLoading: false
               })
              localStorage.removeItem('trenigId');
              localStorage.removeItem('trenigBoolen');
            })
            .catch(err => {
              const map = err.response.data.errors;
              const result = Object.values(map);
              return result.map((ele, i) => {
                 toast.update(load, {
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
        arrayEduc.map((el) => {
          if( userid == null ){
            navigate=('/userauth')
          } else {
            
            axios.post('http://localhost:8000/api/training', {
              user_id:  userid,
              region_id: el.region_id,
              speciality: el.speciality,
              direction: el.higerEdic,
              date_start: el.date_start,
              date_end: el.data_end
            })
            .then(res => {
              
             setTimeout(()=> {
              navigate('/userProf')
             }, 3500)
            
              toast.update(load, {
                render: () => res.data.message,
                   type: "success",
                   autoClose: 3000,
                   closeOnClick: true,
                   hideProgressBar: false,
                   pauseOnHover: true,
                   draggable: true,
                   progress: undefined,
                   theme: "light",
                   isLoading: false
               })
              
            })
            .catch(err => {
              const map = err.response.data.errors;
              const result = Object.values(map);
              return result.map((ele, i) => {
                 toast.update(load, {
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
            
          } 
        
        })
      }
    
    }
    
 
  return (
    <form className="px-[24px] flex flex-col gap-[24px]">
      {arrayEduc.map((el, i) => (
        <ProfessionaAdd key={i} item={el} index={i} upTranigBool={upTranigB} />
      ))}
     

      <div className="flex items-center justify-end gap-[16px] mt-[24px] px-[24px]">
        <Link
          to="/profile/info/work"
          onClick={showProfe}
          className="form-btn w-[191px] h-[48px] flex items-center justify-center gap-[15px]  text-white text-[16px] font-semibold leading-[24px] bg-blue"
        >
          <i className="uil uil-sign-out-alt"></i> {t('back')}
        </Link>
        <button
          type="button"
          onClick={() => postProfessional()}
          className="form-btn w-[191px] h-[48px] flex items-center justify-center gap-[15px]  text-white text-[16px] font-semibold leading-[24px] bg-[#0FBE7B]"
        >
          <i className="uil uil-check-circle"></i>
          {t('continue')}
        </button>
      </div>
    </form>
  );
}
function mapStateToProps(state){
    return {
      showValue:state.showValue,
      showMenu:state.showMenu,
      arrayEduc: state.objectProfess,
      userid: state.userid,
    }
  }
  function mapDispatchToProps(dispatch) {
    return {
       addSelect:(post) => dispatch({type:'NSTVALUE',payload: post }),
       showSelect:()=> dispatch({type:'SHOWMENU'}),
       showProfe: ()=> dispatch({type:'SHOWPROF'}),
       addEdicat: (data) => dispatch({type:'ADDPROFESSNEW', payload: data})
       
    }
   
  }
  export default connect(mapStateToProps, mapDispatchToProps)(ProfessionalDev)