import React from 'react'
import {connect} from 'react-redux'
import { useTranslation } from 'react-i18next';
import ProfHead from '../profile/ProfHead'
 function ModelWork({ object, addEdicat,  item , showSelect  ,  addSelect, index ,   deleteBtn, deleteProfes ,  region ,  postValueWork, upWorkBool}) {
     
   const {t} = useTranslation()   

    function addContent() {
        let data = {
          id:  object.length + 1,
          text: null,
          region_id: 0,

          district: "",
          workPlace: "",
          faculty: "",
          cafedra: "",
          position: "",
          workName: "",
          workPhone: "",
          dateStart: "",
          datend: "",
          showSelect: false,
        };
        addEdicat(data)
      }
    function showFunc( index){
        let data = index
        let select =  item.showSelect;
         showSelect(data , select) 
     }
     function handaleChange(event, itemId, index, regionId){
     
      let data = event.target.innerText
      let itemIndex =  index;
      let dataId = itemId;
      let reg = regionId
       let select =  item.showSelect;
       addSelect( data, itemIndex , select, dataId, reg) 
     }
     function getValueWork(event,itemId, index){
      let data = event.target.value;
    let dataId = itemId;
    let inputName = event.target.name
    let itemIndex =  index;
    postValueWork(data, itemIndex, dataId, inputName)
     }
     function destroyProfesi( id){
  
  
      let data  =  object.filter((el) => el.id !== id);
     
      deleteProfes( data );
   }

  return (
    <div className='login__form-content bg-white p-[24px] flex flex-col gap-[24px]'>
            {
          index === 0 ? (
            <div>
                       <ProfHead  /> 
                       <div className='flex  items-center justify-between '>
           
            <h2 className='text-[28px] text-gray font-semibold leading-[33px] tracking-[2%]'>{t('jobDetails')}</h2>
            <i onClick={() => destroyProfesi( item?.id)} className={`uil uil-x text-[30px] text-[#FE346E] cursor-pointer ${   deleteBtn == true &&  object.length > 1 ? 'block' : 'hidden'}`}> </i>
          </div>
          
            </div>
            
          ) : (
            <div className='flex  items-center justify-end '>
            <i onClick={() => destroyProfesi( item?.id)} className={`uil uil-x text-[30px] text-[#FE346E] cursor-pointer ${ deleteBtn  ? 'block' : 'hidden'}`}> </i>
          </div>
          )
      }
          <div className="flex  gap-[24px]">
          <div className="flex-1  flex flex-col gap-[24px] ">
          <div>
              <label  className="text-[16px] text-[#333333] font-medium leading-[24px]">
              {t('region')} *
              </label>
              <div
                  onClick={() =>  showFunc( index)}
                className=" seleted__value mt-[8px] rounded-[8px]  flex items-center justify-between w-full  "
              >
                <p className=" p-[12px] text-[16px] text-[#8C8C8C] font-normal leading-[24px]">
                {   item?.text !== null ? item?.text : t('region') }
                </p>
                <div>
                  <i className="uil uil-angle-down text-gray text-[22px]"></i>
                </div>
              </div>
              
            </div>
            <div
              className={`  login__form-content py-[10px] ${
                item?.showSelect ? "block" : "hidden"
              } `}
            >
              <ul className="flex flex-col gap-[14px] h-[400px] overflow-y-auto ">
              {
                  region?.map((el, i) => (
                    <li
                    key={i}
                    onClick={(event) => handaleChange(event, item?.id, index , el.id)}
                    className="select-item h-[57px]   flex items-center pl-[24px] text-[16px] text-[#8C8C8C]  font-medium leading-[24px]  cursor-pointer"
                    >
                    {el.name_ru}
                    </li>
                  ))
                }
              </ul>
            </div>

           

            <div className="flex flex-col  ">
              <label className="text-[16px] text-[#333333] font-medium leading-[24px]">
              {t('district')} *
              </label>
              <input
                type="text"
                name='district'
                onChange={e => getValueWork(e ,item?.id, index)}
                className="seleted__value mt-[8px] rounded-[8px] outline-none p-[12px] text-[16px] text-[#8C8C8C] font-normal leading-[24px]"
                placeholder={t('district')}
              />
            </div>
            <div className="flex flex-col  ">
              <label className="text-[16px] text-[#333333] font-medium leading-[24px]">
              {t('typeWork')} *
              </label>
              <input
                type="text"
                name='workPlace'
                onChange={e => getValueWork(e, item?.id , index)}
                className="seleted__value mt-[8px] rounded-[8px] outline-none p-[12px] text-[16px] text-[#8C8C8C] font-normal leading-[24px]"
                placeholder={t('typeWork')}
              />
            </div>
            <div className="flex flex-col  ">
              <label className="text-[16px] text-[#333333] font-medium leading-[24px]">
              {t('workNumber')}
              </label>
              <input
                type="number"
                name='workPhone'
                onChange={e => getValueWork(e, item?.id, index)}
                className="seleted__value mt-[8px] rounded-[8px] outline-none p-[12px] text-[16px] text-[#8C8C8C] font-normal leading-[24px]"
                placeholder={t('workNumber')}
                required
              />
            </div>
            <div className="flex flex-col  ">
              <label className="text-[16px] text-[#333333] font-medium leading-[24px]">
              {t('startJob') } *
              </label>
              <input
                type="date"
                name='dateStart'
                onChange={e => getValueWork(e, item?.id , index)}
                className="seleted__value mt-[8px] rounded-[8px] outline-none p-[12px] text-[16px] text-[#8C8C8C] font-normal leading-[24px]"
             
              />
            </div>

          </div>
          <div className="flex-1 flex flex-col gap-[24px]">
           
            <div className="flex flex-col  ">
              <label className="text-[16px] text-[#333333] font-medium leading-[24px]">
              {t('faculty')} *
              </label>
              <input
                type="text"
                name='faculty'
                onChange={e => getValueWork(e , item?.id, index)}
                className="seleted__value mt-[8px] rounded-[8px] outline-none p-[12px] text-[16px] text-[#8C8C8C] font-normal leading-[24px]"
                placeholder={t('faculty')}
              />
            </div>
            <div className="flex flex-col  ">
              <label className="text-[16px] text-[#333333] font-medium leading-[24px]">
              {t('department')} *
              </label>
              <input
                type="text"
                name='cafedra'
                onChange={e => getValueWork(e , item?.id, index)}
                className="seleted__value mt-[8px] rounded-[8px] outline-none p-[12px] text-[16px] text-[#8C8C8C] font-normal leading-[24px]"
                placeholder={t('department')}
              />
            </div>
            <div className="flex flex-col  ">
              <label className="text-[16px] text-[#333333] font-medium leading-[24px]">
              {t('jobTitle')} *
              </label>
              <input
                type="text"
                name='position'
                onChange={e => getValueWork(e , item?.id, index)}
                className="seleted__value mt-[8px] rounded-[8px] outline-none p-[12px] text-[16px] text-[#8C8C8C] font-normal leading-[24px]"
                placeholder="Тренер"
              />
            </div>
            <div className="flex flex-col  ">
              <label className="text-[16px] text-[#333333] font-medium leading-[24px]">
               {t('jobName')} *
              </label>
              <input
                type="text"
                name='workName'
                onChange={e => getValueWork(e , item?.id, index)}
                className="seleted__value mt-[8px] rounded-[8px] outline-none p-[12px] text-[16px] text-[#8C8C8C] font-normal leading-[24px]"
                placeholder={t('jobName')}
              />
            </div>
            <div className="flex flex-col  ">
              <label className="text-[16px] text-[#333333] font-medium leading-[24px]">
              {t('fenishJob')} *
              </label>
              <input
                type="date"
                name='datend'
                onChange={e => getValueWork(e , item?.id, index)}
                className="seleted__value mt-[8px] rounded-[8px] outline-none p-[12px] text-[16px] text-[#8C8C8C] font-normal leading-[24px]"
                
              />
            </div>
            <div className="flex flex-col  ">
              {
                upWorkBool 
                ? ''
                : <button onClick={() => addContent() } type='button' className=' flex items-center justify-center gap-[14px] w-[286px] h-[50px]  border-[1px] border-solid border-blue rounded-[8px] '>
                <i className="uil uil-plus-circle text-[22px] text-blue"></i>
                <span className='text-[16px] text-blue font-normal leading-[24px]'> {t('addWork')}</span>  
                </button>
              }
                
            </div>
          </div>
        </div>


    </div>
  )
}
function mapStateToProps(state){
    return {
      object: state.objectWork,
      deleteBtn: state.elementWorkX,
      region: state.region
    }
  }
  function mapDispatchToProps(dispatch) {
    return {
       addSelect:(post, itemIndex , select, dataId, reg) => dispatch({type:'WORKVALUE', payload: post,   index: itemIndex , show:select, id:dataId , regionId: reg}),
       showSelect:(show, boolen)=> dispatch({type:'WORKSELECT', payload: show, showSel:  boolen}),
       addEdicat: (data) => dispatch({type:'ADDWORK', payload: data}),
       postValueWork:(post, itemIndex, dataId, inputName) => dispatch({type:'POSTWORK',   payload: post,   index: itemIndex, id:dataId , name:inputName }),
       deleteProfes:( itemId) => dispatch({type:'DELETEWORK',  payload: itemId})
    }
   
  }
  export default connect(mapStateToProps, mapDispatchToProps)( ModelWork)