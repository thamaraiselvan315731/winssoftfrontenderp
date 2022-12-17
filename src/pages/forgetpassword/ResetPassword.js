import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import FormHelperText from '@mui/material/FormHelperText';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Header from "../../components/Header";
let intervalid;
export const ResetPassword = () => {
    const [values, setValues] = React.useState({
        atleast: false,
        password: '',
        error: false,
        showPassword: false,
    });

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(values)
        var re = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
        var valid = re.test(values.password);
        if (valid) {
            setValues({
                ...values,
                error: false,
            });
            console.log("valid")
        }
        else {
            setValues({
                ...values,
                atleast: true,
                error: true,
            });
            console.log("invalid")
        }
        // login({
        //     email: data.get("email"),
        //     password: data.get("password")
        // });
    };
    const handleClickShowPassword = () => {
        setValues({
            ...values,
            showPassword: !values.showPassword,
        });
    };
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const handleChange = (prop) => (event) => {

        setValues({ ...values, [prop]: event.target.value });

        var re = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
        var valid = re.test(values.password);
        if (valid && values.atleast) {
            setValues({
                ...values,
                error: false,
            });
        }

        console.log(values)
    };

    return (
        <Container component="main" maxWidth="xs">
            <Header title="Reset Password" subtitle="" />



            <Box sx={{

                display: "flex",
                flexDirection: "column",
                alignItems: "center"
            }}>

                <FormControl sx={{ m: 1, width: '40ch' }} variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-password"
                        error={values.error === true}
                        type={values.showPassword ? 'text' : 'password'}
                        value={values.password}
                        onChange={handleChange('password')}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    edge="end"
                                >
                                    {values.showPassword ? <Visibility /> : <VisibilityOff />}
                                </IconButton>
                            </InputAdornment>
                        }
                        label="Password"
                    />
                    {values.error === true && (
                        <FormHelperText error id="accountId-error">
                            {"This password must contains 8 character, one uppercase letter, one lowercase letter, one number and one special character"}
                        </FormHelperText>
                    )}


                </FormControl>


                <Button
                    onClick={handleSubmit}
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                >
                    Reset Password
                </Button>

            </Box>

        </Container>
    );
};
