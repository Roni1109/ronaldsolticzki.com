import React, { Component } from 'react'
import  { BiBitcoin, BiMoviePlay } from "react-icons/bi";
import { ImMusic } from "react-icons/im";
import { GiConsoleController } from "react-icons/gi";
import { RiBoxingFill } from "react-icons/ri";
import styled from 'styled-components';
import { AiFillPhone, AiFillLinkedin, AiFillMail, AiOutlineLineChart, AiOutlineDownload } from "react-icons/ai";

// export const DownloadSign = <AiOutlineDownload/>
// export const AiFillPhone = <AiFillPhone/>
// export const AiFillLinkedin = <AiFillLinkedin/>
// export const AiFillMail = <AiFillMail/>

const DownloadSign = () => {
    return(
        <AiOutlineDownload/>
    )
}

const Mail = () => {
    return(
        <AiFillMail/>
    )
}
const Phone = () => {
    return(
        <AiFillPhone/>
    )
}
const LinkedIN = () => {
    return(
        <AiFillLinkedin/>
    )
}

export { DownloadSign, Mail, Phone, LinkedIN}

