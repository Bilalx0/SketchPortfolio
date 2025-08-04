import { CgArrowLongRight } from "react-icons/cg"; 
import React from 'react'
import Image from 'next/image'
import { HiOutlineArrowLongRight } from "react-icons/hi"; 

function Navbar() {
  return (
    <div className="flex items-center justify-between">
        <div className="flex items-center">
            <Image src=''/>
            <span className="text-2xl font-tan text-orange-600">Rosopak</span>
        </div>
        <div className="flex items-center space-x-3.5">
            <span className="w-8 h-8">
              
            </span>
            <span>START A PROJECT</span>
        </div>
    </div>
  )
}

export default Navbar