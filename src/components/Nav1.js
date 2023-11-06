import React from 'react'
import {MdOutlineSubject} from 'react-icons/md';
import {FaRegBell} from 'react-icons/fa';
import {FaLocationDot} from 'react-icons/fa6';
export default function Nav1() {
  return (
    <div>
      <nav className=" bg-orange-600 ">
        <div classname="flex flex-row">
        <span><MdOutlineSubject/></span>
        <span><FaRegBell/></span>
        </div>
        <span>Rahul</span>
        <br></br>
        <div><FaLocationDot/>Mohkampur,Dehradun,Uttarakhand,India,248001</div>
      </nav>
    </div>
  )
}
