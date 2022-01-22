import React,{createContext, useReducer} from 'react'
import Reducer from './Reducer'

const initialState = {
    active:false,
    userdata:{
        name:"shiyaskhan",
        isVerified: false,
        accessToken:'',
    },
   
};

const Store = ({children}) => {
    const [state,dispatch] = useReducer(Reducer ,initialState);
     
    return (
        <Context.Provider value={{state,dispatch}}>
            {children}
        </Context.Provider>
    );
};
export const Context = createContext(initialState);
export default Store;