const userId = localStorage.getItem('userId');
const pasportId = localStorage.getItem('passwordid');
export default function storeReduser(
  state = {
    userid: userId,
    pnid: pasportId,
    region: [],
    profHeadFirst: false,
    profHeadTwo: false,
    profHeadTree: false,
    profHeadF: false,
    showValue:'',
    showMenu:false,
    elementEd:false,
    toggleNav:false,
    objectEd:[
      {
        id:    1,
        text: null,
        region_id:0,
        higerEdic: '',
        speciality: '',
        dateOfArrival: '',
        expirationDate:'',
        showSelect:false,
      }
    ],
    objectWork: [
        {
            id:  1,
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
        }
    ],
    elementWorkX: false,
    objectProfess: [
        
            {
                id:    1,
                text: null,
          region_id:0,
          higerEdic: '',
          speciality: '',
          date_start: '',
          data_end:'',
          showSelect:false,
              }   
        
    ],
    elementProfesX: false,
    DirectionSelectValue: '',
    direction_id: 0,
    direction_user: [],
    user_info:{},
    photoAdress: '',
    updatePersonalInfo:false,
    updateEdication:false,
    update:false,
    updatePersonalInfo:false,
  },
  action
) {
  switch (action.type) {
    case "REGIONGET": {
      return {
        ...state,
        region: action.payload,
      };
      break;
    }
    case 'USERID': {
        return {
            ...state,
            userid: action.payload
        }
        break;
    }
    case 'PNFID': {
        return {
            ...state,
            pnid: action.payload
        }
        break
    }
    case 'SHOWMENU': {
        return{
            ...state,
            showMenu: !state.showMenu
        };
        break;
    }
    case 'NSTVALUE': {
        return{
            ...state,
            showMenu: !state.showMenu,
            showValue: action.payload,
        };
        break;
    }
    case 'onClick': {
        return {
            ...state, 
            toggleNav: !state.toggleNav
        }
        break
    }
    case "PROFFUNC": {
      return {
        ...state,
        profHeadFirst: false,
        profHeadTwo: false,
        profHeadTree: false,
        profHeadF: false,
      };
      break;
    }

    case "EDICFUNC": {
        return {
          ...state,
          profHeadFirst: true,
          profHeadTwo: false,
          profHeadTree: false,
          profHeadF: false,
        };
        break;
      }
      case "WORKFUNC": {
        return {
          ...state,
          profHeadFirst: true,
          profHeadTwo: true,
          profHeadTree: false,
          profHeadF: false,
        };
        break;
      }
      case "PROFUNC": {
        return {
          ...state,
          profHeadFirst: true,
          profHeadTwo: true,
          profHeadTree: true,
          profHeadF: false,
        };
        break;
      }

    // edication start
    case 'ADDEDICNEW': {
        return {
            ...state,
            objectEd: [...state.objectEd , action.payload]
        }
        break;
    }
    case 'ADDEDICAT': {
        return {
            ...state,
            objectEd: [...state.objectEd , action.payload],
            elementEd: true
        }
        break;
    }
    case 'EDICSELECT': {
       return {
        ...state, 
        objectEd: state.objectEd.map((el, i) => i == action.payload ? {...el ,   showSelect: !action.showSel} : el)
       }
       break;
    } 
    case 'EDICVALUE': {
        return {
        
            ...state,
            objectEd: state.objectEd.map((el, i) => i == action.index ? {...el ,   text:action.payload,  region_id:action.regionId,    showSelect: !action.show} : el)
        }
        break;
    } 
    case 'GETVALUEEDIC': {
        return {
            ...state,
            objectEd: state.objectEd.map((el, i) => i == action.index ? {...el , [action.name]:action.payload   } : el)
        }
        break;
    }
    case 'DELETEDIC': {
        return {
            ...state,
            objectEd: action.payload
        }
        break
    }
    // edication end

    // work start
    case 'ADDWORK': {
        return {
            ...state, 
            objectWork: [...state.objectWork, action.payload],
            elementWorkX: true,
        }
        break;
    }
    
    case 'WORKSELECT': {
        return {
         ...state, 
         objectWork: state.objectWork.map((el, i) => i == action.payload ? {...el ,   showSelect: !action.showSel} : el)
        }
        break;
     } 
    case 'WORKVALUE': {
         return {
         
             ...state,
             objectWork: state.objectWork.map((el, i) => i == action.index ? {...el ,   text:action.payload,  region_id:action.regionId,    showSelect: !action.show} : el)
         }
         break;
     } 
    case 'POSTWORK': {
        return {
            ...state,
            objectWork: state.objectWork.map((el, i) => i == action.index ? {...el , [action.name]:action.payload   } : el)
        }
        break;
    } 
    case 'DELETEWORK' : {
        return {
            ...state,
            objectWork: action.payload
        }
        break;
    }
    // work end
    
    // professional start
    case 'ADDPROFESSNEW': {
        return {
            ...state,
            objectProfess: [...state.objectEd , action.payload]
        }
        break;
    }
    case 'ADDPROFOBJECT': {
        return {
            ...state,
            objectProfess: [...state.objectProfess, action.payload],
            elementProfesX: true
        }
    }
    case 'PROFESSELECT': {
        return {
         ...state, 
         objectProfess: state.objectProfess.map((el, i) => i == action.payload ? {...el ,   showSelect: !action.showSel} : el)
        }
        break;
     } 

    case 'PROFESVALUE': {
        return {
         
            ...state,
            objectProfess: state.objectProfess.map((el, i) => i == action.index ? {...el ,   text:action.payload,  region_id:action.regionId,    showSelect: !action.show} : el)
        }
        break;
    }
    case 'GETVALUEPROFESSIONAL': {
        return {
            ...state,
            objectProfess: state.objectProfess.map((el, i) => i == action.index ? {...el , [action.name]:action.payload   } : el)
        }
        break;
    } 
    case 'DELETPROFES' : {
        
            return {
                ...state,
                objectProfess: action.payload,
                
            }
            break;
       
    }
    case 'DIRECTIONGETVALUE': {
        
        return {
            ...state, 
            DirectionSelectValue: action.payload,
            direction_id: action.id,
        }
        break;
    }
    case 'GETCHECKUSER': {
        return {
            ...state,
            direction_user:  action.payload
        }
        break;
    }
    case 'USERINFOADD': {
        return {
            ...state,
            user_info: action.payload
        }
        break;
    }
    case 'PHOtOADD': {
        return {
            ...state,
            photoAdress: action.payload
        }
        break;
    }

    default: {
      return state;
    }
  }
}
