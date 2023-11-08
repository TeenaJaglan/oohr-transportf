import React,{useState} from 'react'
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './Navbar.js'
import {AiOutlineEyeInvisible,AiOutlineEye} from 'react-icons/ai';
export default function Loginpage({loggedin,setloggedin}) {
  const nav = useNavigate();
    const [data,setdata] = useState({
        email:"",password:"", remember:false
    })
    const [showpassword,setshowpassword]=useState(false);
   
    function changehandler(event){
        const{name,value,checked,type} = event.target;
        setdata((prev)=>{
            return {
                ...prev,[name]:(type==="checkbox")?checked:value
            }
        })
    }
    function submithandler(event){
event.preventDefault();
console.log(data);
toast.success("Logged in");
setloggedin(true);
nav("/dashboard");
    }
  return (<>
 <Navbar></Navbar>
    <div className="flex flex-col justify-center  align-center p-5">
        <div className=" text-[1.5rem]  my-[6vh] m-auto relative flex flex-col justify-center bg-green-400 p-[10px]">
      <fieldset >
        <form onSubmit ={submithandler} className=" mx-auto flex flex-col justify-center  w-full px-[20px] h-auto pb-[9px]">
        <h3 className='text-center'>Log In Form</h3>
        <div className='w-full border-[2px] border-black'></div>
        <input type="email"  required name="email" onChange={changehandler} value={data.email} className='w-full my-[10px]' placeholder="Email Address"/>
        <br></br>
        <input type={(showpassword)?"text":"password"} required  name="password"  className="relative w-full" onChange={changehandler} value={data.password} placeholder='Password'/>
        <span className='focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent absolute  flex justify-center top-[6.9rem] right-[2rem] '>
        {
        (showpassword===false)?(<AiOutlineEye fontSize={25} onClick={()=>{setshowpassword(!showpassword)}}/>):(<AiOutlineEyeInvisible fontSize={25} onClick={()=>{setshowpassword(!showpassword)}}/>)
        }
        </span>
        <div></div>
        <span className="text-[1rem] flex flex-row  w-auto">
        <label htmlFor="remember"  name="remember"  className="text-[1rem] flex flex-row  w-auto" >
        <input type="checkbox"name="remember"onChange={changehandler}  value={data.remember} checked={data.remember}  className="relative"/>Remember me</label></span>
        <span className=" relative left-[9.5rem] bottom-[1.5rem] text-[1rem] text-blue-800 float-right">Forgot password?</span>
        <button className='w-full border-[2px] border-black' >Log In</button>
        </form>
      </fieldset>
      </div>
      <div  className='border-black flex flex-col justify-center  text-center  w-full'>
      
      <div>OR</div>
      <div>
      <button className=" border-[2px] m-[5px] border-black w-[13rem]">continue as a guest user</button></div>
      <div>OR</div>
      <div>
      <button className=" border-[2px] m-[5px] border-black w-[13rem]">google</button></div>
      <div>
      <button className=" border-[2px] m-[5px] border-black w-[13rem]">Facebook</button></div></div>
    </div>
    </>
  )
}
