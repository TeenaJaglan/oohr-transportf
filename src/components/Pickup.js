import React from 'react'
import {useState,useEffect} from 'react';
export default function Pickup() {
    const [details ,setdetails] =useState(["2023-10-1 tuesday 10:44","2023-10-1 tuesday 10:44"]);
    useEffect(()=>{
      console.log(new Date());
      console.log(details);
     //  setdetails((prev)=>{ prev.push(new Date())}) ;
        
    },[details]);

  function notification(i){
           
              if(i%2!=0){return ( <div className="my-[10px]   bg-green-300 rounded-[10px] mx-3"><fieldset><legend>{details[i]}</legend><div>Driver has picked your child</div></fieldset></div>);}
              else{ return ( <div className="my-[10px]    bg-green-300 rounded-[4px] mx-3"><fieldset><legend>{details[i]}</legend><div>Driver has droped your child</div></fieldset></div>);}
            } 
           
      return(<>{ 
        details.map((item,index)=>{ 
           return (<div className="my[10px] w-[95vw] rounded-[4px] mr-[5px] brder-5px border-green-300  bg-green-300">{notification(index)}</div>);
        })
        }</>);
    
  
}
