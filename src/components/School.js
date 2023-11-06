import React from 'react'
import image from './image.jpeg'
import homework from './homework.jpeg'
import OIP from './OIP.jpeg'
import Lecture from './live.jpeg'
export default function School() {
  return (
    <div className='m-[10px] flex flex-row'>
       <button  className=" m-4 bg-yellow-400 border-[4px] m border-yellow-600 w-[300px] h-auto rounded-[10px] flex flex-col items-center">School Notifications
      <img src={image}className='.image w-[200px]  h-[180px]' alt="school"/></button>
      <button  className=" m-4 bg-yellow-400 border-[4px] m border-yellow-600 w-[300px] h-auto rounded-[10px] flex flex-col items-center">Home Work
      <img src={homework} className='.image w-[200px]  h-[180px]' alt="homework image"/></button>
      <button  className="  m-4 bg-yellow-400 border-[4px] m border-yellow-600 w-[300px] h-auto rounded-[10px] flex flex-col items-center">Media Download
      <img className='.image w-[200px]  h-[180px]' src={OIP} alt="homework image"/></button>
      <button  className="  m-4 bg-yellow-400 border-[4px] m border-yellow-600 w-[300px] h-auto rounded-[10px] flex flex-col items-center">Live Lecture
      <img src={Lecture}  className='.image w-[200px] h-[180px]'alt="homework image"/> </button>
     
    </div>
  )
}
