import React from 'react'
import Image from 'next/image'
import Header from '../assets/header.png'

const header = () => {
  return (
    <div>
     <div >
     <Image src={Header} alt=''/>
     </div>


    </div>
  )
}

export default header