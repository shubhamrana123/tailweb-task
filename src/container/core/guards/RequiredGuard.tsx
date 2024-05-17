import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const RequiredGuard = ({children}:any) => {
  alert('hi')
  const {userDetails} = useSelector((state:any)=>state.currentUser)
    if(userDetails===null){
        return <Navigate to='/login' replace/>
    }
  return  children
}

export default RequiredGuard