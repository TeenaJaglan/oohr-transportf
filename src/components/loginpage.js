import React,{useState} from 'react'
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router';
import 'react-toastify/dist/ReactToastify.css'
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
  return (
    <div className="flex flex-col justify-center bg-green-400 align-center">
        <div className=" text-[1.5vw]  my-[6vh] m-auto relative flex flex-col justify-center bg-green-400">
      <fieldset >
        <form onSubmit ={submithandler} className=" mx-auto flex flex-col justify-center bg-red-400 w-full px-[20px] h-auto">
        <h3 className='text-center'>Log In</h3>
        <input type="email"  required name="email" onChange={changehandler} value={data.email} className='w-full my-[10px]' placeholder="Email Address"/>
        <br></br>
        <input type={(showpassword)?"text":"password"} required  name="password"  className="relative w-full" onChange={changehandler} value={data.password} placeholder='Password'/>
        <span className='absolute flex justify-center top-[7.6rem] right-[2rem] '>
        {
        (showpassword===false)?(<AiOutlineEye fontSize={25} onClick={()=>{setshowpassword(!showpassword)}}/>):(<AiOutlineEyeInvisible fontSize={25} onClick={()=>{setshowpassword(!showpassword)}}/>)
        }
        </span>
        <div></div>
        <label htmlFor="remember"  name="remember"  className="h-[50px] w-[20px] flex flex-row" >
        <input type="checkbox"name="remember"onChange={changehandler}  value={data.remember} checked={data.remember}  className="h-[50px] w-[20px] "/>Remember me</label>
        <span>Forgot password?</span>
        <button >Log In</button>
        </form>
      </fieldset>
      </div>
      <div>OR</div>
      <div>continue as a guest user</div>
      <div>OR</div>
      <button>google</button>
      <button>Facebook</button>
    </div>
  )
}
