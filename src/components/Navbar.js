import React from 'react';
import {Link} from 'react-router-dom';
function Navbar({loggedin,setloggedin}){
    return (
      <div>
      <nav className="  flex flex-row flex-no Wrap justify-between items-center text-center p-[40px]">
          
        <img src="https://myoohr.com/_next/image?url=%2Flogo.png&w=256&q=75" alt="logo"></img>
        
        <div className="options flex justify-between">
         <Link to="/">Home</Link>
          <Link to="/">About</Link>
          <Link to="/">Contact</Link>
        </div>
        <div className="button  flex justify-evenly  w-[15vw] h-auto ">
            <Link to="/loginpage"> <button  className=" mx-[3px] w-full p-[5px]  text-white border-[4px] h-full border-blue-900">Login</button></Link>
          <button className="  w-4/12 p-[5px]  h-full text-white border-[4px] border-blue-900">Sign up</button>
        </div>
      </nav></div>
    );
  
}
export default Navbar;