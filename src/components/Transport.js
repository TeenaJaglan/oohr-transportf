import React from 'react'
import {Link} from 'react-router-dom';
export default function Transport() {
  return (
    <div>
        <img src="https://th.bing.com/th?id=OIP.yvauclQ-ruJZlVLQBwSYPAHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" className='relative left-[33.5%] bg-red-700'></img>
        <div className='w-10/12 flex  justify-evenly  '>
        <Link to="/dashboard/transport/parent">
      <button  className=" absolute bg-yellow-400 border-[4px] border-blue-600 w-[5rem] h-[5rem] roumded-[10px]">Parent</button></Link>
      <Link to="/dashboard/transport/driver">
      <button className=" absolute bg-yellow-400 border-[4px] border-blue-600 w-[5rem] h-[5rem] roumded-[10px]" >Driver</button></Link>
</div>
    </div>
  )
}
