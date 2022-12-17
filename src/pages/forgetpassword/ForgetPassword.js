import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Header from "../../components/Header";

import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Link as RouterLink } from "react-router-dom";
import OtpInput from "./OtpInput";

export const ForgetPassword = () => {

    const [otp, setOTP] = React.useState(true);

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);

    };

    return (<>
        <Container component="main" maxWidth="xs">
            <Box
                sx={{
                    marginTop: 8,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center"
                }}
            >



                {!otp && <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                    <Header title="Forget Password" subtitle="Please enter the registered email." />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
                    />



                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Reset
                    </Button>

                </Box>}
                {otp && <Box component="form" onSubmit={handleSubmit} >
                    <OtpInput />

                </Box>}
            </Box>
        </Container></>)
}