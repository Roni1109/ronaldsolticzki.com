import React from 'react'
import videoBG from '../videos/BG.mp4'
import styled from 'styled-components'
import { primary_color } from '../Utility/Colors'

const Video = () => {
  return (
    <>
    <Styled_Video src={videoBG} autoPlay loop muted />
    </>
  )
}

const Styled_Video = styled.video`
width: 100%;
height: 50vh;
object-fit: cover;
z-index: 1;
position: absolute;
display: flex;
justify-content: flex-end;
opacity: 0.3;
padding-left: 900px;
padding-top: 10px;
`



export default Video