import React, { useEffect } from 'react'
import { Outlet, Route, Routes } from 'react-router-dom'
import { afterLoginRoutes, authRoutes } from './container/core/routes/route'
import LoginScreen from './container/screens/auth/LoginScreen'
import RequiredGuard from './container/core/guards/RequiredGuard'
import Home from './container/screens/dashboard/Home'
import { useDispatch, useSelector } from 'react-redux'
import NotFoundScreen from './container/screens/NotFoundScreen'
import { USER_DETAILS } from './container/redux/action-types'

const InnerApp = () => {
 
  const {userDetails} = useSelector((state:any)=>state.currentUser)
  const dispatch = useDispatch<any>()
  const getUserFromLocalStorage = () => {
    const user = localStorage.getItem("user_info");

    return user;
  };
  useEffect(()=>{
let user =JSON.stringify(getUserFromLocalStorage())

let parsedUserDetails = JSON.parse(user);
      dispatch({ type: USER_DETAILS, payload: parsedUserDetails });
  },[])
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
           <Route path="/*" element={<NotFoundScreen />} />
          </>
        

        ) : ( <>

        {    afterLoginRoutes.map((route) => (
            <Route path={route.path} key={route.key} element={<RequiredGuard><route.component /></RequiredGuard>} />
          ))}
               <Route path="/*" element={<NotFoundScreen />} />
        </>
            
   
        )
      }
</>
    </Routes>
  )
}

export default InnerApp