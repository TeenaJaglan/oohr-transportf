import React from 'react'
import {Link} from 'react-router-dom';

export default function Transport() {
  return (
    <div classnmae="flex flex-row align-center ">
        <img src="https://th.bing.com/th?id=OIP.yvauclQ-ruJZlVLQBwSYPAHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" ></img>
      <button className="bg-yellow-400 w-[8rem]  min-w-auto h-[55px] mx-[10px]">Track Driver</button>
      <button className="bg-yellow-400 w-[8rem]  min-w-auto h-[55px] mx-[10px]"> Chat</button>
      <Link to="/dashboard/transport/parent/pickupNotifications">
      <button className="bg-yellow-400 w-[8rem]  min-w-auto h-[55px] mx-[10px]" >Notification</button></Link>
      <Link to="/dashboard/transport/parent/Calender">
      <button className="bg-yellow-400 w-[8rem]  min-w-auto h-[55px] relative top-[12px] mx-[10px]">Calender PickUp/Drop</button></Link>
      <button className="bg-yellow-400 w-[8rem]  min-w-auto h-[55px] mx-[10px]">Travel History</button>
      <button className="bg-yellow-400 w-[8rem]  min-w-auto h-[55px] mx-[10px]">Live Camera</button>
    </div>
  )
}
