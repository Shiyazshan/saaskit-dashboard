import React, { useState,useEffect,useContext} from 'react';
import { BrowserRouter } from "react-router-dom";
import './App.css';
import Sidebar from '../src/components/includes/Sidebar'
import Roterapp from './components/includes/Roterapp';
import Login from './components/Login'
import Store, { Context } from '../src/context/store'


function App() {
  
  const [active,setActive] = useState(true)
  const [isLoggedin,setLoggedin]=useState(false)
  const {state,dispatch}=useContext(Context)

  const [daaat,setDaaat] = useState({})
  useEffect(()=>{
    if(localStorage.getItem('user_data')){
    const mydata=JSON.parse( localStorage.getItem( 'user_data' ) );
    setDaaat(mydata);
    mydata.status === true && setLoggedin(true);
    // console.log(daaat.data.access)
   
    }else{
      setLoggedin(false)
    }
  },[])
 console.log(daaat);
  return (
    <Store>
      <BrowserRouter>
          {isLoggedin ?<>
          <Sidebar active={active} setActive={setActive} />
          <Roterapp active={active} setActive={setActive}/>
          </> :
          <Login isLoggedin={isLoggedin} setLoggedin={setLoggedin}/>}
      </BrowserRouter>
    </Store>
  );
}

export default App;

