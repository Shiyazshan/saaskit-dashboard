import React,{useContext,useEffect} from 'react'
import styled from 'styled-components'
import {
    Routes,
    Route
  } from "react-router-dom";
import Contact from '../Contact';
import Dashboard from '../Dashboard';
import Task from '../Task';
import { Context } from '../../context/Store';

function Roterapp({active, setActive}) {
    const {state,dispatch}=useContext(Context)

    return (
        <Cover active={active}>
            <Routes>
                <Route path='/' element={<Dashboard active={active} setActive={setActive} />}/>
                <Route path='/contact/' element={<Contact active={active} setActive={setActive} />}/>
                <Route path='/task/' element={<Task/>}/>
            </Routes>
        </Cover>
    )
}

export default Roterapp
const Cover = styled.div`
    margin-left:${({active})=>active ? '208px' : '0px'};
    transition: .4s ease;
    padding-left:10px ;
    padding-top:10px ;
`