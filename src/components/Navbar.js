import React from 'react';
import {Link} from 'react-router-dom';
function Navbar({loggedin,setloggedin}){
    return (
      <div className=" w-screen p-[5px] flex flex-row  justify-between items-center text-center flex-wrap-col">
      <nav className=" w-screen m-[5px] flex flex-row  justify-between items-center text-center ">
          
        <img src="https://myoohr.com/_next/image?url=%2Flogo.png&w=256&q=75" alt="logo"></img>
        
        <div className="options flex justify-between text-[2rem] ">
         <Link to="/" className=" border-[3px] border-black p-[5px] w-[7rem]">Home</Link>
          <Link to="/" className=" border-[3px] border-black p-[5px] w-[7rem]">About</Link>
          <Link to="/" className="border-[3px] border-black p-[5px] w-[8rem]">Contact</Link>
        </div>
        <div className=" flex justify-evenly  w-[15vw] h-auto ">
            <Link to="/loginpage"> <button  className=" mx-[3px] w-full p-[5px]  text-black text-[1rem] border-[4px] h-full border-black">Login</button></Link>
          <button className="  w-4/12 py-[15px]  h-full text-black text-[1rem] border-[4px] border-black">Sign up</button>
        </div>
      </nav></div>
    );
  
}
export default Navbar;