import React from 'react'
import {useNavigate } from 'react-router-dom'; 
export default function StudentList() {
    const nav = useNavigate();
    const studentdata=[{name:"rahul",
gender:"male",
birthday:"2013-09-10"},
{name:"vinesha",
gender:"female",
birthday:"2013-09-19"}];
  return (
    <div>
     {nav("/Nav3")}
      {
      studentdata.map((prev)=>{ return(
        <div className="flex flex-row items-center mx-[10px] bg-yellow-300">
<img src=""alt="img" width="100px" height="100px"></img>
<div className="flex flex-col ">
<div>{prev.name}</div>
<div>{prev.gender}</div>
<div>{prev.birthday}</div>
</div>
        </div>);
      })
      }<button className="bg-yellow-400 w-[8rem] rounded-[20px] text-[30px] min-w-auto h-[55px] mx-[10px] my-4">+</button></div>
  )
}
