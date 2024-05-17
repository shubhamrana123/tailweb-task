
import { Stack, Box, Typography, Button, Divider } from "@mui/material"
import { styled, alpha } from '@mui/material/styles';

import Menu, { MenuProps } from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import EditIcon from '@mui/icons-material/Edit';

import ArchiveIcon from '@mui/icons-material/Archive';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import DeleteIcon from '@mui/icons-material/Delete';
import { memo, useState } from "react";
interface studentDetailProps {
    id: any,
    name: string,
    subject: string,
    marks: number
}
const StyledMenu = styled((props: MenuProps) => (
    <Menu
      elevation={0}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      {...props}
    />
  ))(({ theme }) => ({
    '& .MuiPaper-root': {
      borderRadius: 6,
      marginTop: theme.spacing(1),
      minWidth: 180,
      color:
        theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
      boxShadow:
        'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
      '& .MuiMenu-list': {
        padding: '4px 0',
      },
      '& .MuiMenuItem-root': {
        '& .MuiSvgIcon-root': {
          fontSize: 18,
          color: theme.palette.text.secondary,
          marginRight: theme.spacing(1.5),
        },
        '&:active': {
          backgroundColor: alpha(
            theme.palette.primary.main,
            theme.palette.action.selectedOpacity,
          ),
        },
      },
    },
  }));
const StudentEntries = ({ studentDetail,userList, handleDeleteStudentDetails,handleOnEditModal,index}: any) => {
 
    // const studentDetail:Array<studentDetailProps>= [
    //     {id:1,name:'ankit',subject:'Maths',marks:50},
    //     {id:2,name:'aniket',subject:'Maths',marks:50},
    //     {id:3,name:'rohit',subject:'Maths',marks:50},
    //     {id:4,name:'sachin',subject:'Maths',marks:50},
    //     {id:5,name:'shubh',subject:'Maths',marks:50},
    //     {id:6,name:'ankit',subject:'Maths',marks:50},
    //     {id:6,name:'ankit',subject:'Maths',marks:50}
    // ]
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
    return (
        <><Stack>
           
                <>
                  <Box sx={{
                // display: 'flex',
                // flexDirection: 'row',
                // alignItems: 'center',
                // justifyContent: 'space-around',
                // // fontWeight:550,
                // padding:3,
                // border:1,
                // borderColor:'green',
                // borderRadius:'8px'
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                alignItems:'center',
                // borderColor: "#E8E8E8",
                padding: 3,
                // minHeight:'5vh',
            
                // minWidth:'60vw',
                borderRadius: "8px",

            }}>
                
                <Stack id="icon and name"
                    sx={{
                    
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-evenly',
                        alignItems: 'center',
                        width:100

                    }} >
                    <Stack id='icon' sx={{
                        height: '35px',
                        width: '35px',
                        border: 1,
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: 'skyblue',
                        borderRadius: '50%',
                        color: 'whitesmoke'
                    }}>
                        <Typography 
                                    sx={{
                                        color: "rgb(255 255 255 / 78%)",
                                        fontSize: "14px",
                                        fontWeight:'bold'
                                      }}>
                            {studentDetail?.name?.charAt(0).toUpperCase()+studentDetail?.name?.charAt(1).toUpperCase()}
                        </Typography>
                    </Stack>
                    <Stack id='name'>
                        <Typography>{studentDetail.name}</Typography>
                    </Stack>
                </Stack>
                <Stack id="subject" sx={{   width:100}}>
                    <Typography>{studentDetail?.subject}</Typography>
                </Stack>
                <Stack  sx={{   width:100}}>
                    <Typography>
                        {studentDetail?.marks}
                    </Typography>
                </Stack>
                <Stack  sx={{   width:100}}>
                    {/* <Button onClick={()=>handleOnEditModal(studentDetail,index)}>Edit</Button>
                    <Button onClick={()=>handleDeleteStudentDetails(studentDetail?.id)}>Delete</Button> */}
                      <div>
      <Button
        id="demo-customized-button"
        aria-controls={open ? 'demo-customized-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        variant="contained"
        disableElevation
        onClick={handleClick}
        endIcon={<KeyboardArrowDownIcon />}
      >
        {/* Options */}
      </Button>
      <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          'aria-labelledby': 'demo-customized-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem onClick={()=>{ handleClose();handleOnEditModal(studentDetail,index)}} disableRipple>
        <EditIcon/>
          Edit
        </MenuItem>
        <MenuItem onClick={()=>{ handleClose();handleDeleteStudentDetails(studentDetail?.id)} }disableRipple>
      <DeleteIcon/>
          Delete
        </MenuItem>
       
    
       
      </StyledMenu>
    </div>
                </Stack>
             
            </Box>
            <Divider/>
                </>
         
        </Stack>
          
        </>
    )
}
export default memo(StudentEntries)