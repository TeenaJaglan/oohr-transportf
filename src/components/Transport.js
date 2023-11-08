import React from 'react'
import {Link} from 'react-router-dom';
export default function Transport() {
  return (
    <div className=' flex flex-col items-center justify-center mt-[30px]'>
        <img src="https://th.bing.com/th?id=OIP.yvauclQ-ruJZlVLQBwSYPAHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" className='relative  bg-red-700'></img>
        <div className='w-10/12 flex  justify-center my-[10px]'>
        <Link to="/dashboard/transport/parent">
      <button  className="  bg-yellow-400 border-[4px] border-blue-600 w-[5rem] h-[5rem] roumded-[10px] mx-[10px] my-[10px]">Parent</button></Link>
      <Link to="/dashboard/transport/driver">
      <button className="  bg-yellow-400 border-[4px] border-blue-600 w-[5rem] h-[5rem] roumded-[10px] my-[10px]" >Driver</button></Link>
</div>
    </div>
  )
}
