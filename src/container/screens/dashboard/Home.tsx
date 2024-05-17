import { Box, Button, Divider, Grid, Paper, Stack, Typography } from "@mui/material"
import StudentEntries  from "../../component/student-entry"
import { AddorEditStudentModal } from "../../component/modals"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { DELETE_STUDENT_DATA, EDIT_LIST, IS_NOTIFY, NOTIFY_MESSAGE, NOTIFY_TYPE, USERS_LIST, USER_DETAILS } from "../../redux/action-types"
import NavBar from "../../component/navbar"
interface studentDetailProps {
    id: any,
    name: string,
    subject: string,
    marks: number
}

const Home = () => {
    const [showAddOrEditModal, setShowAddOrEditModal] = useState(false)
    const [studentName, setStudentName] = useState<any>('')
    const [subject, setSubject] = useState('')
    const [marks, setMarks] = useState('')
    const dispatch = useDispatch<any>()
    const [studentList, setStudentList] = useState<Array<studentDetailProps>>([])
    const { usersList } = useSelector((state: any) => state.currentUser)
    const [modalTitle, setModalTitle] = useState('')

    const [currentStudentDetail, setCurrentStudentDetail] = useState(null)
    const [currentIndex, setCurrentIndex] = useState(null)

    const studentDetail: Array<studentDetailProps> = [
        { id: 1, name: 'ankit', subject: 'Maths', marks: 50 },
        { id: 2, name: 'ani', subject: 'Maths', marks: 50 },
        { id: 3, name: 'rohit', subject: 'Maths', marks: 50 },
        { id: 4, name: 'sachin', subject: 'Maths', marks: 50 },
        { id: 5, name: 'shubh', subject: 'Maths', marks: 50 },
        { id: 6, name: 'ankit', subject: 'Maths', marks: 50 },
        { id: 7, name: 'anki', subject: 'Maths', marks: 50 }
    ]
    const styles = {
        flex: 1,
        paperContainer: {
            // backgroundImage: `url(${BackgroundImage})`,
            backgroundColor: '#FAFAFA',
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            border: 1,
            BorderColor: 'blue'
            // width: "100vw",
            // height: "100vh",
        }
    }
    useEffect(() => {
        console.log('i fire once');
        dispatch({ type: USERS_LIST, payload: studentDetail })
    }, [])
    const handleClose = () => {
        setShowAddOrEditModal(false)
        setStudentName('')
        setSubject('');
        setMarks('')
    }
    const handleStudentName = (e: any) => {
        setStudentName(e.target.value)
    }
    const handleSubject = (e: any) => {

        setSubject(e.target.value)
    }
    const handleMarks = (e: any) => {
        setMarks(e.target.value)
    }
    const handleDeleteStudentDetails = (id: any) => {
        const filterUsersList = usersList?.filter((item: any) => item.id != id)

        setStudentList(filterUsersList)
        dispatch({ type: DELETE_STUDENT_DATA, payload: filterUsersList })
        dispatch({ type: IS_NOTIFY, payload: true });
        dispatch({ type: NOTIFY_TYPE, payload: "success" });
        dispatch({
            type: NOTIFY_MESSAGE,
            payload: "Student Detail Deleted successfully",
        });
    }
    const handleOnEditModal = (studentDetail: any, index: any) => {
        setModalTitle('Edit')

        setCurrentStudentDetail(studentDetail)
        setCurrentIndex(index)
        setShowAddOrEditModal(true)
    }
    const handleLogout = () => {
        localStorage.removeItem("user_info");
        dispatch({ type: USER_DETAILS, payload: null })
    }
    const handleEditStudentData = (index: any, currentStudentDetail: any) => {

        usersList[index] = {
            id: currentStudentDetail.id,
            name: studentName != '' && studentName != null ? studentName : currentStudentDetail?.name,
            subject: subject != null && subject != '' ? subject : currentStudentDetail.subject,
            marks: marks != null && marks != '' ? marks : currentStudentDetail.marks
        }


        setShowAddOrEditModal(false)



        dispatch({ type: EDIT_LIST, payload: usersList })
        setStudentName('')
        setSubject('');
        setMarks('')
        dispatch({ type: IS_NOTIFY, payload: true });
        dispatch({ type: NOTIFY_TYPE, payload: "success" });
        dispatch({
            type: NOTIFY_MESSAGE,
            payload: "Student Detail Edited successfully",
        });
    }
    const handleAddStudentDetails = () => {

        setShowAddOrEditModal(false)
        const studentBody = [{
            id: new Date(),
            name: studentName,
            subject: subject,
            marks: marks
        }]
        setStudentList(usersList)


        dispatch({ type: USERS_LIST, payload: studentBody })
        setStudentName('')
        setSubject('');
        setMarks('')
        dispatch({ type: IS_NOTIFY, payload: true });
        dispatch({ type: NOTIFY_TYPE, payload: "success" });
        dispatch({
            type: NOTIFY_MESSAGE,
            payload: "Student Detail Added successfully",
        });
    }
    return (<>
        <NavBar handleLogout={handleLogout} />
        <Paper style={styles.paperContainer}>
            <Grid
                container
                spacing={0}
                direction="column"
            // alignItems="center"
            // justifyContent="center"
            // style={{ minHeight: "100vh" }}
            >
                <Grid
                    item
                    xs={3}
                    style={{ backgroundColor: "white", padding: 20, margin: 15 }}
                >
                    <Box className="tableContainer" sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-evenly',
                        // alignItems:'center',
                        // borderColor: "#E8E8E8",
                        padding: 3,
                        // minHeight:'5vh',

                        // minWidth:'60vw',
                        borderRadius: "8px",
                    }}>
                        <Stack className='tHeader' sx={{ width: 100 }}>
                            <Typography sx={{ color: 'gray' }}>Name</Typography>
                        </Stack>
                        <Stack sx={{ width: 100 }}>
                            <Typography sx={{ color: 'gray' }}>Subject</Typography>
                        </Stack>
                        <Stack sx={{ width: 100 }}>
                            <Typography sx={{ color: 'gray' }}>Mark</Typography>
                        </Stack>
                        <Stack sx={{ width: 100 }}>
                            <Typography sx={{ color: 'gray' }}>
                                Actions
                            </Typography>
                        </Stack>

                    </Box>
                    <Divider />
                    {usersList?.map((item: any, index: any) => (
                        <StudentEntries studentDetail={item}
                            userList={usersList}
                            index={index}
                            handleDeleteStudentDetails={handleDeleteStudentDetails}
                            handleOnEditModal={handleOnEditModal}
                        />
                    ))}
          
                </Grid>
            </Grid>
        </Paper>
        <Button variant='contained'
            sx={{ marginTop: 2 }}
            onClick={() => {
                setModalTitle('Add')
                setShowAddOrEditModal(true)
            }}>Add </Button>
        <AddorEditStudentModal
            marks={marks}
            subject={subject}
            studentName={studentName}
            open={showAddOrEditModal}
            handleClose={handleClose}
            modalTitle={modalTitle}
            handleMarks={handleMarks}
            handleStudentName={handleStudentName}
            handleSubject={handleSubject}
            handleAddStudentDetails={handleAddStudentDetails}
            handleEditStudentData={handleEditStudentData}
            currentStudentDetail={currentStudentDetail}
            currentIndex={currentIndex}
        />
    </>

    )
}

export default Home