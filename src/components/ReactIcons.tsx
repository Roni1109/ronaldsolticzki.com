import React from "react"

import {
  AiFillPhone,
  AiFillLinkedin,
  AiFillMail,
  AiOutlineDownload,
} from "react-icons/ai"

import {FaSun, FaMoon} from 'react-icons/fa'

type Props = {
  type: string
  size: number
}

const ReactIcons = ({ type, size }: Props) => {
  switch (true) {
    case type === "download":
      return <AiOutlineDownload size={size} />
    case type === "mail":
      return <AiFillMail size={size} />
    case type === "linkedin":
      return <AiFillLinkedin size={size} />
    case type === "phone":
      return <AiFillPhone size={size} />
    default:
      return <span>NO ICONS</span>
  }
}

export default ReactIcons
