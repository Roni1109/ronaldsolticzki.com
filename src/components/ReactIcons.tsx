import React, { Component } from 'react'
import  { BiBitcoin, BiMoviePlay } from "react-icons/bi";
import { AiOutlineLineChart } from "react-icons/ai";
import { ImMusic } from "react-icons/im";
import { GiConsoleController } from "react-icons/gi";
import { RiBoxingFill } from "react-icons/ri";
import styled from 'styled-components';

const Icons = () => {
    return(
        <>
       <Styled_Icons> <BiBitcoin />           </Styled_Icons>
       <Styled_Icons> <AiOutlineLineChart />  </Styled_Icons>
       <Styled_Icons> <ImMusic />             </Styled_Icons>
       <Styled_Icons> <GiConsoleController /> </Styled_Icons>
       <Styled_Icons> <BiMoviePlay />         </Styled_Icons>
       <Styled_Icons> <RiBoxingFill />        </Styled_Icons>
       </>
    )
};

const Styled_Icons = styled.div`
    padding: 3px;
`




export default Icons
