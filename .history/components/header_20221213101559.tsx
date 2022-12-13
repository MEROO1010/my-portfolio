import React from 'react'
import Image from 'next/image'
import Header from '../assets/header.png'

const header = () => {
  return (
    <div>
     <Image src={Header} alt=''/>


    </div>
  )
}

export default header