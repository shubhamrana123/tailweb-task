import {BrowserRouter as Router, Navigate, Route, Routes } from "react-router-dom";

import InnerApp from "./InnerApp";
import { Box } from "@mui/material";
import { StyledEngineProvider } from "@mui/material/styles";
import { AppLoader } from "./container/component/loader";
import './App.css'
import { Alert,Snackbar } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { IS_NOTIFY } from "./container/redux/action-types";
function App() {
  const { isNotify, notifyMessage, notifyType } = useSelector(
    (state: any) => state?.notifyReducer
  );
  const dispatch = useDispatch<any>()
  const renderRoutes = ()=>{

    return (
      <Routes>
        <Route path='/*' element={<InnerApp/>}/>
      </Routes>
    )
  }
  return (
<>
{/* <LoginScreen/> */}
<StyledEngineProvider injectFirst>
<Snackbar
          open={isNotify}
          onClose={() => dispatch({ type: IS_NOTIFY, payload: false })}
          autoHideDuration={notifyType === "success" ? 3000 : 6000}
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
        >
          <Alert
            onClose={() => dispatch({ type: IS_NOTIFY, payload: false })}
            severity={notifyType}
            sx={{ width: "100%" }}
          >
            {notifyMessage}
          </Alert>
        </Snackbar>
<Box >
<Router>
  {renderRoutes()}
</Router>
</Box>
</StyledEngineProvider>
<AppLoader />


</>
  );
}

export default App;
