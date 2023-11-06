import React,{useState} from 'react';
import './App.css';
import Pickup from './components/Pickup.js';
import {Routes,Route,Link} from 'react-router-dom';
import Dashboard from './components/Dashboard.js';
import School from './components/School.js'
import Navbar from './components/Navbar.js';
import Nav1 from './components/Nav1.js';
import Nav3 from './components/Nav3.js';
import Transport from './components/Transport.js';
import Store from './components/Store.js';
import Loginpage from './components/loginpage.js';
import Signuppage from './components/signuppage.js';
import { ToastContainer, toast } from 'react-toastify';
import Driver from './components/driver.js';
import Parent from './components/parent.js';
import 'react-toastify/dist/ReactToastify.css';
import StudentList from './components/StudentList.js';
import Calender from './components/Calender.js';
export default function App() {
  const [loggedin,setloggedin] = useState(false);
  return (<div>
   <div className='navbar'>
    <Routes>
      <Route path="/Nav3" element={<Nav3></Nav3>}/>
      <Route path="/" element={<Navbar loggedin={loggedin} setloggedin={setloggedin}/>}/>
    </Routes>
    <Navbar loggedin={loggedin} setloggedin={setloggedin}/>

    </div>
    <div className='components'>
    <Routes>
     
<Route path ="/loginpage" element={<Loginpage loggedin={loggedin} setloggedin={setloggedin} ></Loginpage>}></Route>
<Route path ="/signuppage" element={<Signuppage loggedin={loggedin} setloggedin={setloggedin} ></Signuppage>}></Route>
<Route path ="/dashboard" element={<Dashboard></Dashboard>}>

 <Route path="/dashboard/school" element={<School></School>}></Route> 
 <Route path="/dashboard/transport" element={<Transport></Transport>}></Route> 
 <Route path="/dashboard/store" element={<Store></Store>}></Route>
 <Route path="/dashboard/transport/driver" element={<Driver></Driver>}></Route>
 <Route path="/dashboard/transport/parent" element={<Parent></Parent>}></Route>
 <Route path="/dashboard/transport/driver/studentList" element={<StudentList></StudentList>}/>
 <Route path="/dashboard/transport/driver/pickupNotifications" element={<Pickup></Pickup>}/>
 <Route path="/dashboard/transport/parent/pickupNotifications" element={<Pickup></Pickup>}/>
 <Route path="/dashboard/transport/parent/Calender" element={<Calender></Calender>}/>
 <Route path="/dashboard/transport/driver/Calender" element={<Calender></Calender>}/>

</Route>

    </Routes>
</div>
    </div>
  )
}

