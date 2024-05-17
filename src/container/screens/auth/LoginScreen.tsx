import React, { useState } from 'react'
import {
    Box,
    Button,
    CardMedia,
    Checkbox,
    Grid,
    Paper,
    Stack,
    TextField,
    Typography,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { IconButton, InputAdornment} from "@mui/material";
import { RoutesPath } from '../../core/constants/routePath';
import { useNavigate } from 'react-router-dom';
import { BorderColor } from '@material-ui/icons';
import { useDispatch } from 'react-redux';
import { loginApi } from '../../redux/actions/auth';
import { STOP_LOADING, USER_DETAILS } from '../../redux/action-types';
import { validateEmail, validate_password } from '../../../config/helper-methods';
const LoginScreen = () => {
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState(false);
    const [passwordErrorMessage, setPasswordErrorMEssage] = useState<any>([])
    const [showPassword,setShowPassword] =useState(false)
    const navigate = useNavigate()
    const dispatch = useDispatch<any>()
    const styles = {
        flex: 1,
        paperContainer: {
           
            backgroundColor: '#FAFAFA',
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            border: 1,
            BorderColor: 'blue'
            // width: "100vw",
            // height: "100vh",
        },
    };
    const handleClickShowPassword = () => {
    
        setShowPassword(!showPassword);
    };
    const handleEmailChange = (e: any) => {
        setEmail(e.target.value);

        if (!/^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$/.test(e.target.value)) {
            setEmailError(true);
        } else {
            setEmailError(false);
        }
    }


    const handleUserNAme = (e: any) => {
        setUserName(e.target.value)

        const a = validateEmail(e.target.value)
        return validateEmail(e.target.value)
       
    }
    const handlePassword = (e: any) => {
        setPasswordErrorMEssage(validate_password(e.target.value))
        const ab = validate_password(e.target.value)
        
        setPassword(e.target.value)

    }
    const handleLogin = () => {
        // navigate('home')
        const loginBody = {
            userName: userName,
            password: password
        }
        dispatch(loginApi(loginBody, (res: any) => {
            if (res) {
                dispatch({ type: USER_DETAILS, payload: loginBody })
                // navigate('/home')
                setTimeout(() => {
                    dispatch({ type: STOP_LOADING })
                }, 2000)

            }
        }))
    }
    return (
        <>
            <Paper style={styles.paperContainer}>
                <Grid
                    container
                    spacing={0}
                    direction="column"
                    alignItems="center"
                    justifyContent="center"
                    style={{ minHeight: "100vh" }}
                >
                    <Grid
                        item
                        xs={3}
                        style={{ backgroundColor: "white", padding: 20, margin: 15 }}
                    >

                        <Typography
                            variant="h2"
                            sx={{
                                marginTop: 1.5,
                                fontWeight: "bold",
                                fontSize: "22px",
                                lineHeight: "48px",
                            }}
                        >
                            Login{" "}
                        </Typography>

                        <TextField
                            required
                            size="small"
                            data-testid="email-field"
                            id="outlined-required"
                            label="Email"
                            defaultValue=""
                            placeholder='Email'
                            error={emailError}
                            helperText={emailError ? "Please enter a valid email" : ""}
                            onChange={handleEmailChange}
                            sx={{ marginTop: 2, width: 325 }}
                        />
                        <div>
                            <TextField
                                required
                                type={showPassword ? "text" : "password"}
                                size="small"
                                id="outlined-required"
                                data-testid="password-field"
                                label="Password"
                                value={password}
                                InputProps={{
                                    endAdornment: (
                                      <InputAdornment position="end">
                                        <IconButton
                                          aria-label="toggle password visibility"
                                          onClick={handleClickShowPassword}
                                          edge="end"
                                        >
                                          {showPassword ? <VisibilityOff /> : <Visibility/>}
                                        </IconButton>
                                      </InputAdornment>
                                    ),
                                  }}
                                defaultValue=""
                                helperText={passwordErrorMessage?.map((item: any) => (
                                    <Typography>{item}</Typography>
                                ))}
                                onChange={handlePassword}
                                error={passwordErrorMessage?.length > 0}
                                sx={{ marginTop: 2, width: 325 }}
                            />
                        </div>
                        <Stack
                            direction={"row"}
                            sx={{
                                display: "flex",
                                justifyContent: "flex-end",
                                alignItems: "center",
                            }}
                        >
                            {/* <Box
              display={"flex"}
              sx={{ direction: "row", alignItems: "center" }}
            >
              <Checkbox />
              <Typography sx={{ fontSize: 14 }}>
                {"Keep me logged in"}
              </Typography>{" "}
            </Box> */}
                            {/* {isInvited ? null : ( */}
                            <Typography
                                //   onClick={() => navigate(`/${RoutesPath.ForgotPassword}`)}
                                sx={{
                                    fontSize: 14,
                                    marginLeft: 1,
                                    color: "#2188FF",
                                    textDecoration: "underline",
                                    cursor: "pointer",
                                }}
                            >
                                {"Forgot password?"}
                            </Typography>
                            {/* )} */}
                        </Stack>
                        <Stack display={"flex"} alignItems={"center"} marginTop={2}>
                            <Button
                                onClick={handleLogin}
                                fullWidth={true}
                                variant="contained"
                                data-testid="login-btn"
                                disableElevation

                                disabled={email === '' || password === '' || passwordErrorMessage?.length > 0 || emailError}


                                type="submit"
                                sx={{ backgroundColor: 'black' }}
                            >
                                Login
                            </Button>
                        </Stack>
                        {/* {isInvited ? null : ( */}


                    </Grid>
                </Grid>
            </Paper>



        </>
    )
}

export default LoginScreen