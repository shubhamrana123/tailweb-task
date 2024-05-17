import React from 'react'
import { Outlet, Route, Routes } from 'react-router-dom'
import { afterLoginRoutes, authRoutes } from './container/core/routes/route'
import LoginScreen from './container/screens/auth/LoginScreen'
import RequiredGuard from './container/core/guards/RequiredGuard'
import Home from './container/screens/dashboard/Home'
import { useSelector } from 'react-redux'

const InnerApp = () => {
 
  const {userDetails} = useSelector((state:any)=>state.currentUser)
  console.log(userDetails)
  return (

    <Routes>
      <>  
   {/* <Route path='/home' element={<Home/>}/> */}
      {
        userDetails===null? (
          <>
          {  authRoutes.map((route) => (
            <Route key={route.key}
              path={route.path} element={<route.component />} />
          ))}
          
          </>
        

        ) : (
                afterLoginRoutes.map((route) => (
            <Route path={route.path} key={route.key} element={<route.component />} />
          ))
   
        )
      }
</>
    </Routes>
  )
}

export default InnerApp