import React from 'react'
import styled from 'styled-components'
import videoBG from '../img/videoBG.mp4'

const VideoBG = () => {

  return (
    <Styled_BGVideo className='main'>
        <video src={videoBG} autoPlay loop muted />
    </Styled_BGVideo>

  )
}

const Styled_BGVideo = styled.div`
    object-fit: cover;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    z-index: -1;
    opacity: 0.04;
    @media (max-width: 768px) {
    background-size: cover;
    height: 200px;
    }
`

export default VideoBG