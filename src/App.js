import React, {useEffect} from 'react';
import {
  BrowserRouter,
  Route,
  Routes
} from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {connect} from 'react-redux'
import axios from "axios";
import Auth from './page/Auth';
import Main from './page/Main';
import Login from './page/Login';
import AuthLogin from './page/AuthLogin';
import ForgotPass from './page/ForgotPass';
import Profile from './page/Profile';
import Edication from './page/Edication';
import WorkPage from './page/WorkPage';
import Profesia from './page/Profesia';
import Static from './page/Static';
import UserProf from './page/UserProf';
import Direction from './page/Direction';
import UserPortfolio from './page/UserPortfolio';
// import First from './companent/First';

function App({getRegion, getCheckUser,  userid,  setUserInfo, setPhotoAddress}) {
  async function regionGet() {
    await axios.get(`http://localhost:8000/api/region`)
      .then(res => {
      
      getRegion(res?.data?.regions)
     })
  }
  setTimeout(() => {
    localStorage.clear()
  }, 100090000)
  async function getUserCheckFile(){
    await  axios.get('http://localhost:8000/api/check', {
      headers: {
          "Accept-Language": "uz",
      }
    }).then(res => {
       const filteredDat = res?.data?.checks?.filter((el) => el.user_id == userid);
       getCheckUser(filteredDat)
    }).catch(err => {
      console.log(err);
    })

  }
  useEffect(() => {
    regionGet()
    getUserCheckFile()
    axios
    .get(`http://localhost:8000/api/allData/` + userid, )
    .then((response) => {
      
      setUserInfo(response?.data?.user_personal_info);
      setPhotoAddress(response?.data?.user_avatar?.photo);
    })
    .catch((error) => {
      console.log(error)
    });
  }, [])
  return (
    <div>
       <BrowserRouter>
       <Routes>
        <Route path='/' element={<Main/>} />
        <Route path='/auth' element={<Auth />} />
        <Route path='/userauth' element={<AuthLogin/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/forgot-password' element={<ForgotPass />} />
        <Route path='/profile' element={<Profile/>} />
        <Route path='/profile/edication' element={<Edication/>} />
        <Route path='/profile/info/work' element={<WorkPage/>} />
        <Route path='/profile/profesia' element={<Profesia/>} />
        <Route path='/userProf' element={< UserProf/>} />
        <Route path='/direction' element={<Direction />}/>
        <Route path='/userportfolio' element={<UserPortfolio />}/>
        <Route path='/static' element={<Static/>} />
       </Routes>
       <ToastContainer position='top-right' />
       </BrowserRouter>
      
       {/* <First />
       <h1 className="text-3xl   font-bold ">
      Hello world! */}
       
      
    {/* </h1> */}
    </div>
  );
}
function mapStateToProps(state){
  return {
   userid: state.userid
  }
}
function mapDispatchToProps(dispatch) {
  return {
    getRegion: (post) => dispatch({type:'REGIONGET', payload: post}),
    setPhotoAddress: (post) => dispatch({type:'PHOtOADD', payload:post}),
    setUserInfo: (post) => dispatch({type:'USERINFOADD', payload:post}),
    getCheckUser: (user) => dispatch({type:'GETCHECKUSER', payload: user}),
  }
 
}
export default connect(mapStateToProps, mapDispatchToProps)( App)

