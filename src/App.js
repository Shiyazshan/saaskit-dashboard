import React, { useState} from 'react';
import { BrowserRouter } from "react-router-dom";
import './App.css';
import Sidebar from '../src/components/includes/Sidebar'
import Roterapp from './components/includes/Roterapp';
import Login from './components/Login'


function App() {
  const [active,setActive] = useState(true)
  const [isLoggedin,setLoggedin]=useState(true)

  return (
    <>
    <BrowserRouter>
        {isLoggedin ?<>
        <Sidebar active={active} setActive={setActive} />
         <Roterapp active={active} setActive={setActive}/>
         </> :
        <Login />}
    </BrowserRouter>
    </>
  );
}

export default App;

