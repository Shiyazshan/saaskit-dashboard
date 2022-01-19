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

function Roterapp() {
    const {state,dispatch}=useContext(Context)

    const {active} = state.active
    return (
        <Cover active={active}>
            <Routes>
                <Route path='/' element={<Dashboard />}/>
                <Route path='/contact/' element={<Contact />}/>
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