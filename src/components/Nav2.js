import React from 'react'
import { Link } from 'react-router-dom'
import {FaSchoolFlag} from 'react-icons/fa6';
import  {MdOutlineEmojiTransportation} from'react-icons/md';
import {FaStore} from 'react-icons/fa'
export default function Nav2() {
  return (
    <div  className=" fixed bottom-0 left-0 bg-orange-600 w-screen">
     <div nav className=" bg-orange-600 flex flex-row   mx-5 justify-between">
        <Link to="/dashboard/school"><FaSchoolFlag fontSize={40}/>School</Link>
        <Link to="/dashboard/transport"><MdOutlineEmojiTransportation fontSize={40}/>transport</Link>
        <Link to="/dashboard/store"><FaStore fontSize={40}/>Store</Link>
        </div> 
    </div>
  )
}
