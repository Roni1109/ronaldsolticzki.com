import React from 'react'

type Props = {

    color:string
    handler ? :()=> void

}

const Button = ({color}: Props) => {
  return (
    <div>{color}</div>
  )
}

export default Button