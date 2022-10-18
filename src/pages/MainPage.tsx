import React from "react"
import img1 from "../img/ProfilePic.png"
import Video from "../components/BGvideo"
import styled from "styled-components"
import {primary_color_shadow} from '../Utility/Colors'

const Main_Page = () => {
  return (
    <Styled_Wrapper>
      <Video />
      <Styled_Container>
      <h3>Solticzki Ronald</h3>
      {/* <Styled_Title src={Name} alt="" /> */}
      </Styled_Container>
    </Styled_Wrapper>
  )
}

const Styled_Wrapper = styled.div`
  width: 100%;
  position: relative;
` 

const Styled_Container = styled.div`
  position: absolute;
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;


`

const Styled_Title = styled.img`
  position: absolute;
  z-index: 2;
  height: 500px;
  width: 500px;
`



export default Main_Page
