import React from 'react'
import Roterapp from './routers/Roterapp'
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
