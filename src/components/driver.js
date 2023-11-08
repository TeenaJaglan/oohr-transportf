import React from 'react'
import {Link} from 'react-router-dom';
export default function Driver() {
  return (
    <div className='flex flex-row justify-evenly items-center  my-[150px]  '>
             <Link to="/dashboard/transport/driver/Calender">
      <button  className="  bg-yellow-400 border-[4px] border-yellow-600 w-[5rem] h-[5rem] rounded-[10px] mx-5">calender pick up/drop</button></Link>
      <Link to="/dashboard/transport/driver/studentList">
      <button  className="  bg-yellow-400 border-[4px] m border-yellow-600 w-[5rem] h-[5rem] rounded-[10px]">Student list</button></Link>
    </div>
  )
}
