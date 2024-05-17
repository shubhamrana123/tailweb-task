import { Box, Modal, Stack, Typography, IconButton, TextField, Button } from "@mui/material"
import CloseIcon from "@mui/icons-material/Close";
export const AddorEditStudentModal = ({
   open,
    handleClose ,
    handleSubject,
    handleMarks,
    handleStudentName,
    handleAddStudentDetails,
modalTitle,
currentStudentDetail,
currentIndex,
handleEditStudentData,
marks,subject,
studentName
  }: any) => {
  console.log('open', open);

  const style = {
    position: "absolute" as "absolute",
    transform: "translate(-50%, -50%)",
    bgcolor: "background.paper",
    borderRadius: 4,
    boxShadow: 24,
    p: 4,
    top: "50%",
    left: "50%",
    width: "90%",
    maxWidth: "700px",
    overflow: "auto",
    maxHeight: "90%",
  };
  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Stack
            direction="row"
            spacing={2}
            marginTop={0}
            sx={{
              display: "flex",
              flex: 1,
              justifyContent: "space-between",
              position: "relative",
            }}
          >
            <Typography id="modal-modal-title" variant="h6" component="h2">
              {modalTitle} Students
            </Typography>
            {/* <IconButton
            edge="end"
            color="primary"
            onClick={handleClose}
            aria-label="close"
            className="close-btn"
          >
            <CloseIcon />
          </IconButton> */}
          </Stack>
          <Stack id='form' rowGap='20px'>
            <Stack id='userName'>
              <Typography>Name</Typography>
              <TextField
                size='small'
                defaultValue={modalTitle==='Edit'?currentStudentDetail?.name:''}
                onChange={(e:any)=>handleStudentName(e)} />
            </Stack>
            <Stack id='subjects'>
              <Typography>Subjects</Typography>
              <TextField
                size='small' 
                defaultValue={modalTitle==='Edit'?currentStudentDetail?.subject:''}
                onChange={(e:any)=>handleSubject(e)}/>
            </Stack>
            <Stack id='Marks'>
              <Typography>Marks</Typography>
              <TextField
                size='small' 
                defaultValue={modalTitle==='Edit'?currentStudentDetail?.marks:''}
                onChange={(e)=>handleMarks(e)}/>
            </Stack>
            <Button variant="contained" 
            disabled={modalTitle==='Add'?((marks==='' || subject==='' || studentName==="")?true:false):false}
            sx={{
              color: 'white',
              backgroundColor: 'black'
            }}
            onClick={modalTitle==='Add'?handleAddStudentDetails:()=>handleEditStudentData(currentIndex,currentStudentDetail)}>Save</Button>
          </Stack>
        </Box>
      </Modal>
    </>
  )
}