import React, {useEffect, useState, ChangeEvent} from 'react'
import {connect} from 'react-redux'
import { toast } from 'react-toastify';
import { useTranslation } from 'react-i18next';
import axios from "axios";

import ImgPdf from '../../asset/img/imgpdf.png'
 function Check({ DirectionSelectValue,  directionId,  userid}) {
      const [question, setQuestion] = useState()
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [activeCurrent, setactiveCurrent] = useState(0)
    const [currentId, setCurrentId] = useState(1);
    const [check, setCheck] = useState(false);
    const [file, setFile] = useState();
    const {t} = useTranslation()
    const [answer, setAnswer] = useState({
      text: '',
      score: 0,
    
    });
    const [currentChecked , setCurrentChecked] = useState({
      check1: false,
      check2:false,
      check3: false,
      check4: false,
      check5: false,
      check6:false,
    })
     async  function getQuestion() {
          await axios.get('http://localhost:8000/api/directionCategory', {
            headers: {
                "Accept-Language": "uz"
              }
          })
             .then(res => {
                setQuestion(res.data.directionCategory)
             }).catch(err => {
                console.log(err);
             })
    }
    
    
    const arrayQuestion = question?.filter((el, i) => el.direction_id == directionId) 
    const arrayFilter = arrayQuestion?.[currentQuestion]?.sub_category?.filter((el, i) => el.name_uz )  ?? []

    useEffect(() => {
      getQuestion();
    },[DirectionSelectValue, directionId])
    

    function handaleChanges(  text, score, id){
      document.querySelector('#radioBtn' + id ).checked =  true
      setactiveCurrent(id)
      setAnswer({
        ...answer,
        text: text,
        score: score
      })
    }
    
    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    
        setFile(e.target.files[0]);
        setCheck(true)
      
    }; 
    function deletePdf() {
      setCheck(false);
      setFile();
    }
   
    function checkPost() {
      const formData = new FormData();
      formData.append("user_id", userid);
      formData.append("direction_category_id", arrayQuestion?.[currentQuestion]?.id);
      formData.append("direction_id", directionId);
      formData.append("direction_category_name", arrayQuestion?.[currentQuestion]?.category_uz);
      formData.append('direction_category_name_answer', answer.text);
      formData.append("score",  answer.score);
      formData.append("pdf", file);
      axios.post('http://localhost:8000/api/check',
      formData,
      {
          headers: {
            "Accept-Language": localStorage.getItem("lng",) || "uz",
            'Content-type': 'multipart/form-date',
          },
          
        }
        ).then(res => {
          setCurrentQuestion(currentQuestion => 5 > currentQuestion ?  currentQuestion + 1 : currentQuestion)
          setCurrentId(currentId => 5 > currentQuestion ?  currentId + 1 : currentId)
          let checkedName = 'check' + currentId
          
         
          setCurrentChecked({
            ...currentChecked,
            [checkedName]: true
          })
          setAnswer({
            ...answer,
            text: '',
            score: 0
          })
          setCheck(false)
          toast.success(res.data.Message)
          console.log(res.data)
        })
        .catch(err => {
          console.log(err)
        })
      
    }

    
  return (
    <div className="flex  flex-col gap-[24px] ">
      <div className='content flex  flex-col gap-[24px] p-[20px]'>
      <h3 className='text-blue text-[20px] leading-[30px] font-medium tracking-[2%] '>{ DirectionSelectValue}</h3> 
      <div className='relative left-0 flex justify-center   w-full '>
                  
                      <div className='  flex items-center '>
                        <div className='flex items-center relative'> 
                            <div className={`w-[50px] h-[50px] rounded-[50%]  ${currentChecked.check1 ? 'bg-blue' : 'bg-white'}  flex items-center justify-center border-[1px] border-solid border-blue`}>
                            <span className={` ${currentChecked.check1 ? 'text-white' : 'text-blue'}   text-[20px] font-medium leading-[23px]`}>
                                {currentChecked.check1 ?   <i className="uil uil-check-circle text-[25px] "></i> : 1}
                                  
                                 </span>
                            </div>
                          
                           <div className='min-w-[130px] h-[4px] bg-[#C8C8C8]'>
                            <div className={`${currentChecked.check1 ? 'w-full' : 'w-0'} bg-blue h-full`}></div>
                           </div>
                        </div>
                        
                      </div>
                      <div className=' flex items-center'>
                        <div className='flex items-center relative'>
                        <div className={`w-[50px] h-[50px] rounded-[50%]  ${currentChecked.check2 ? 'bg-blue' : 'bg-white'} flex items-center justify-center border-[1px] border-solid border-blue`}>
                            <span className={`${currentChecked.check2 ? 'text-white' : 'text-blue '}   text-[20px] font-medium leading-[23px]`}>
                            
                                {currentChecked.check2 ?   <i className="uil uil-check-circle text-[25px] "></i> : 2}
                                 </span>
                            </div>
                          
                           <div className='   min-w-[130px] h-[4px] bg-[#C8C8C8]'>
                            <div className={`${currentChecked.check2 ? 'w-full' : 'w-0'} bg-blue h-full`}></div>
                           </div>
                        </div>
                       
                      </div>
                      <div className=' flex items-center '>
                        <div className='flex items-center relative'>
                        <div className={`w-[50px] h-[50px] rounded-[50%] ${currentChecked.check3 ? 'bg-blue' : 'bg-white'}  flex items-center justify-center border-[1px] border-solid border-blue`}>
                            <span className={` ${currentChecked.check3 ? 'text-white' : 'text-blue '} text-base  text-[20px] font-medium leading-[23px]`}>
                                {currentChecked.check3 ?   <i className="uil uil-check-circle text-[25px] "></i> : 3}
                                    
                                 </span>
                            </div>
                          
                           <div className='  min-w-[130px] h-[4px] bg-[#C8C8C8]'>
                            <div className={`${currentChecked.check3 ? 'w-full' : 'w-0'} bg-blue h-full w-full`}></div>
                           </div>
                        </div>
                       
                      </div>
                      <div className=' flex items-center '>
                        <div className='flex items-center relative'>
                        <div className={`w-[50px] h-[50px] rounded-[50%] ${currentChecked.check4 ? 'bg-blue' : 'bg-white'}  flex items-center justify-center border-[1px] border-solid border-blue`}>
                            <span className={`${currentChecked.check4 ? 'text-white' : 'text-blue '} text-base  text-[20px] font-medium leading-[23px]`}>
                                {currentChecked.check4 ?   <i className="uil uil-check-circle text-[25px] "></i> : 4}
                                    
                                 </span>
                            </div>
                          
                           <div className='      min-w-[130px] h-[4px] bg-[#C8C8C8]'>
                            <div className={`${currentChecked.check4 ? 'w-full' : 'w-0'} bg-blue h-full w-full`}></div>
                           </div>
                        </div>
                       
                      </div>
                      <div className=' flex items-center '>
                        <div className='flex items-center relative'>
                        <div className={`w-[50px] h-[50px] rounded-[50%] ${currentChecked.check5 ? 'bg-blue' : 'bg-white '} bg-white flex items-center justify-center border-[1px] border-solid border-blue`}>
                            <span className={`${currentChecked.check5 ? 'text-white' : 'text-blue '} text-base  text-[20px] font-medium leading-[23px]`}>
                                {currentChecked.check5 ?   <i className="uil uil-check-circle text-[25px] "></i> : 5}
                                    
                                 </span>
                            </div>
                          
                           <div className='   min-w-[130px] h-[4px] bg-[#C8C8C8]'>
                            <div className={`${currentChecked.check5 ? 'w-full' : 'w-0'} bg-blue h-full w-full`}></div>
                           </div>
                        </div>
                       
                      </div>
                      <div className=' flex items-center  overflow-hidden'>
                        <div className='flex items-center relative'>
                        <div className={`w-[50px] h-[50px] rounded-[50%] ${currentChecked.check6 ? 'bg-blue' : 'bg-white '} flex items-center justify-center border-[1px] border-solid border-blue`}>
                            <span className={`${currentChecked.check6 ? 'text-white' : 'text-blue '} text-[20px] font-medium leading-[23px]`}>
                                {currentChecked.check6 ?   <i className="uil uil-check-circle text-[25px] "></i> : 6}
                                    
                                 </span>
                            </div>
                          
                           
                          
                           
                        </div>
                       
                      </div>
                </div>
        <div className='flex flex-col gap-[30px]'>
        <h3 className='text-[#333333] text-[18px] leading-[24px] font-medium tracking-[2%] '>{ currentId ?? 'sasad'} { arrayQuestion?.[currentQuestion]?.category_uz ?? 'sasa'}</h3> 
        <div className='flex items-start gap-[30px] px-[10px]'>
          <ul className='flex flex-col gap-[27px] flex-1 '>
            {  
              
              arrayFilter?.map((el, i) => (
                <li key={i} onClick={() =>  handaleChanges(el.name_uz, el.score, i)} className='group cursor-pointer flex items-center justify-between hover:bg-white transition-all'>
                <div className=' flex items-center gap-[30px] cursor-pointer '>
                  <input type='radio' name='check' id={`radioBtn${i}`}  />
                  <p className={` ${ i ==   activeCurrent ? 'text-blue' : 'text-[#878787]'}  group-hover:text-blue transition-all text-[15px] leading-[18px] font-medium tracking-[2%]`}>{el.name_uz}</p>
                </div>
                
                <div className={`group-hover:bg-[#9797973f] ${i == activeCurrent ? 'bg-[#9797973f]' : 'bg-[#97979762]'}  transition-all  w-[93px] h-[31px] flex items-center justify-center rounded-[8px]`}>
                          <span className='text-blue text-[16px] leading-[24px] font-medium'>{el.score}</span>
                </div>
              </li>
              ))
            }
            
          </ul>
          <div className='flex-1 flex  justify-end gap-[20px]'>
            <label for='inputTag' className='w-[309px] h-[90px] bg-white flex items-center justify-center gap-[8px] border-[0.5px] border-dashed border-[#828282] rounded-[5px] cursor-pointer'>
                <i className="uil uil-upload text-[20px]"></i>
                <span className='text-[16px] leading-[24px] font-normal text-gray'>
                {t('uploadPDF')}
                </span>
               <input id='inputTag' onChange={handleFileChange} onClick={(e) => e.target.value = null} className='hidden' type='file' multiple
                            accept="application/pdf" />
            </label>
            {
              check ? (
                <div className='w-[74px] h-[90px] relative'>
                  <i onClick={() => deletePdf()} className="uil uil-x absolute top-0 right-0 text-red-800 text-[23px] cursor-pointer"></i>
                <img src={ImgPdf} className='w-full h-full object-cover' />
                </div>
              ) : (
                ''
              )
            } 
            
          </div> 
        </div>
        </div> 
      </div>
      
       <div className='flex justify-end'>
          <button type='button' onClick={() => checkPost()} className='w-[239px] py-[12px] flex items-center justify-center gap-[17px] form-btn bg-[#0FBE7B] rounded-[8px]'>
            <span className='text-[16px] leading-[24px] font-normal text-white'>
              {t('nextQuestion')}
            </span> 
            <i className="uil uil-angle-right-b text-[20px] text-white"></i>
          </button>
        </div>  
                 
    </div>
  )
}

function mapStateToProps(state){
    return {
      DirectionSelectValue: state.DirectionSelectValue,
      directionId: state.direction_id,
      userid: state.userid,
    }
  }
  function mapDispatchToProps(dispatch) {
    return {
      
       
       
    }
   
  }
  export default connect(mapStateToProps, mapDispatchToProps)(Check)