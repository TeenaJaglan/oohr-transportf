import React,{useState,useEffect} from 'react'

export default function Calender() {
    const date = new Date();
    const [usedate,setusedate] = useState({date:date.getDate(),month:date.getMonth(),year:date.getYear(),day:date.getDay()}); 
    function changemonth(how,n){
        let tou =0;
 console.log(`year is:${date.getTime()} month:${date.getUTCMonth()} date=${date.getTime()}`)
console.log(usedate);
        if(how==="increase"){ tou = n+1;}
        else{tou = n-1;}
 console.log(`tou is ${tou}`);
        
        setusedate((prev)=>{return{...prev,["month"]:tou}});
 console.log(`usedate.month is ${usedate.month}`);
        
    }
     useEffect(() => {
    console.log(`usedate.month in useeffect is ${usedate.month}`);
  });
function month(i){
    console.log(`i is:'${i}`);
    if(i==0)return "Jan";
    else if(i==1)return "feb";
    else if(i==2)return "mar";
    else if(i==3)return "apr";
    else if(i==4)return "may";
    else if(i==5)return "jun";
    else if(i==6)return "jul";
    else if(i==7)return "aug";
    else if(i==8)return "sep";
    else if(i==9)return "oct";
    else if(i==10)return "nov";
    else return "dec";

}
  return (
    <div className='flex flex-col justify-center mt-[5px]'>
      <nav className=' bg-yellow-300 flex flex-row '><img src="" width="100px" height="100px" className='border-[2px]   borderbg-red-900 mx-[6px]' alt="image"/>
      <div className='text-[20px] text-bold relative top-[20px]'>Calender pick up/drop</div></nav>
      <div className='flex flex-col   mt-[5rem] items-center '>
        <div className='flex flex-col justify-center  mt-[10px] text-[1.5rem] bold items-center '>{date.getUTCFullYear()}<br/><span>{date.getDate()}</span>
        </div>
        <div className='flex flex-col justify-center relative items-center '>
        <button className='border-[2px]  m-[5px] p-[2px]  bg-yellow-500 w-[100px]' onClick={()=>changemonth("decrease",usedate.month)}>left</button>
        <div className='relative items-center  text-[1.5rem] bold'>{date.getDate}   {month(usedate.month)}</div>
        <button className='border-[2px] m-[5px] p-[2px]  bg-yellow-500 w-[100px]' onClick={()=>changemonth("increase",usedate.month)}>right</button>
        <button className='border-[2px] m-[5px] p-[2px]  bg-yellow-500 w-[120px]'>go to today</button>
        <input type="date" className=' w-[120px] text-[2rem]'></input></div></div>
    </div>
  )
}
