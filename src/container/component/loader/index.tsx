import { Backdrop, Box } from "@mui/material";
import { useSelector } from "react-redux";
import CircularProgress from '@mui/material/CircularProgress';
export const AppLoader = () => {
  const { isLoading } = useSelector((state: any) => state.loaderReducer);
  return (
    <Backdrop
        sx={{
          color: "#fff",
          zIndex: (theme: any) => theme.zIndex.drawer + 1,
        }}
        open={isLoading}
      >
            <Box sx={{ display: 'flex' }}>
      <CircularProgress />
    </Box>
        {/* <div className="hourGlass">
          <div className="circle">
            <div className="up">
              <div className="innera"></div>
            </div>
            <div className="down">
              <div className="innerb"></div>
            </div>
          </div>
        </div> */}
      </Backdrop>
  );
};
