import React from 'react'
import Nav1 from './Nav1.js'
import {Routes,Route, Outlet,Link} from 'react-router-dom'
import Nav2 from './Nav2.js'
import Store from './Store.js';
import Transport from './Transport.js';
import School from './School.js';


export default function Dashboard() {
  return (
    <div>
      <Nav1></Nav1>
      <Outlet/>
      <Routes>
        <Route path="/dashboard/school" element={<School></School>}></Route>
        <Route path="/dashboard/transport" element={<Transport></Transport>}></Route>
        <Route path="/dashboard/store" element={<Store></Store>}></Route>

      </Routes>
      <Nav2></Nav2>
    </div>
  )
}
