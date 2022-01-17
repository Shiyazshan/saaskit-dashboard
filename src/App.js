import React, { useState,useEffect} from 'react';
import { BrowserRouter } from "react-router-dom";
import './App.css';
import Sidebar from '../src/components/includes/Sidebar'
import Roterapp from './components/includes/Roterapp';
import Login from './components/Login'
import Store from '../src/context/store'


function App() {
  
  const [active,setActive] = useState(true)
  const [isLoggedin,setLoggedin]=useState(false)
  const [daaat,setDaaat] = useState({})
  useEffect(()=>{
    if(localStorage.getItem('user_data')){
    const mydata=JSON.parse( localStorage.getItem( 'user_data' ) );
    setDaaat(mydata);
    mydata.status === true && setLoggedin(true) 
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

