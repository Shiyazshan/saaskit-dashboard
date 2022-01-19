import React from 'react'
import AuthRouter from './includes/AuthRouter'
import Roterapp from './includes/Roterapp'
import Sidebar from './includes/Sidebar'

const Cover = ({active, setActive}) => {
    return (
        <div>
            <Sidebar active={active} setActive={setActive}/>
            <Roterapp/>
        </div>
    )
}

export default Cover
