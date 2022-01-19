import React,{useContext} from 'react'
import { Context } from '../context/Store'
import {Navigate} from 'react-router-dom'

export const PrivateRoute =({children})=> {
    const {state} = useContext(Context) 
    const auth =  state.userdata.isVerified;
    return (
        auth ? children : <Navigate to="/login" />
    )
}
