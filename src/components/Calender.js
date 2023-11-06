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
        
        setusedate((prev)=>{return{...prev,[month]:tou}});
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
    <div>
      <nav><img src="" alt="calenderimage"/>
      <div>Calender pick up/drop</div></nav>
        <div>{date.getUTCFullYear()}<div>{date.getDate()}</div></div>
        <button onClick={()=>changemonth("decrease",usedate.month)}>left</button>
        <div>{date.getDate}   {month(usedate.month)}</div>
        <button onClick={()=>changemonth("increase",usedate.month)}>right</button>
        <button>go to today</button>
        <input type="date"></input>
    </div>
  )
}
