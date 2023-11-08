import React from 'react'
import {MdOutlineSubject} from 'react-icons/md';
import {FaRegBell} from 'react-icons/fa';
import {FaLocationDot} from 'react-icons/fa6';
export default function Nav1() {
  return (
    <div>
      <nav className=" bg-orange-600 w-screen">
        <div className="flex flex-row  mx-[3px] ">
        <div><MdOutlineSubject className=' mt-[7px] my-[7px]flex' fontSize={30}/></div>
        <div><FaRegBell className=' mt-[7px] mx-[7px] flex' fontSize={30}/></div>
        </div>
        <div className='flex mt-[8px]  text-[1rem]  flex-col'>
          <hr />
        <div className=' gap-0 ml-[2.1rem]'>Rahul</div>
        <br></br>
        <span className='flex flex-row'><FaLocationDot fontSize={27} className='relative -top-[0.5rem] mb-[5px] mr-[7px]'/>Mohkampur,Dehradun,Uttarakhand,India,248001</span>
        </div>
      </nav>
    </div>
  )
}
