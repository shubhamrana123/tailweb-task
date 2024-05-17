import React from 'react'
import { Navigate } from 'react-router-dom';

const RequiredGuard = ({outlet}:any) => {
    const userDetail='';
    if(!userDetail){
        return <Navigate to='/'/>
    }
  return  outlet
}

export default RequiredGuard