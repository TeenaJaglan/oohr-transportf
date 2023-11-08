import React from 'react'
import {Navigate} from 'react-router-dom'
export default function PrivateRoute({loggedin,children}) {
  
      
        if (!loggedin) {
           return <Navigate to="/loginpage"/>
        } else {
            return children;
      }
  
}
