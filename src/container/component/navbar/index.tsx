import { Stack, Typography } from '@mui/material'
import React from 'react'

const NavBar = ({handleLogout}:any) => {
  return (
 <>
 <Stack sx={{
    display :'flex',
    flexDirection:'row',
    padding:2,
    justifyContent:'flex-end',
    minHeight:'3vh',
    color:'red'
 }}>
    <Typography onClick={handleLogout} sx={{
        cursor:'pointer'
    }}>Logout</Typography>
 </Stack>
 </>
  )
}

export default NavBar