import React from 'react'
import ImageLoading from '../assets/images/loading.gif'
import styled from 'styled-components'
const Loading = () => {
    return (
        <LoaderCover>
            <img src={ImageLoading} alt='image'/>
        </LoaderCover>
    )
}

export default Loading
const LoaderCover = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height:100vh;
    background: #fff;
`