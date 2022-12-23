import * as React from "react";// eslint-disable-next-line
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Header from "../../components/Header";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Box from "@mui/material/Box";// eslint-disable-next-line
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";// eslint-disable-next-line
import Typography from "@mui/material/Typography";// eslint-disable-next-line
import Container from "@mui/material/Container";// eslint-disable-next-line
import { Link as RouterLink } from "react-router-dom";
import OtpInput from "./OtpInput";

export const ForgetPassword = () => {

    const [otp, setOTP] = React.useState(false);
    const isNonMobile = useMediaQuery("(min-width:600px)");
    const handleFormSubmit = (values) => {
        console.log(values);
        setOTP(true)
    };
    const handleSubmit = (event) => {
        event.preventDefault();// eslint-disable-next-line
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



                {!otp && <Box noValidate sx={{ mt: 1 }}>
                    <Header title="Forget Password" subtitle="Please enter the registered email." />
                    <Formik
                        onSubmit={handleFormSubmit}
                        initialValues={initialValues}
                        validationSchema={checkoutSchema}
                    >
                        {({
                            values,
                            errors,
                            touched,
                            handleBlur,
                            handleChange,
                            handleSubmit,
                        }) => (<>
                            <form onSubmit={handleSubmit}>
                                <Box
                                    display="grid"
                                    gap="30px"
                                    gridTemplateColumns="repeat(4, minmax(0, 1fr))"
                                    sx={{
                                        "& > div": { gridColumn: isNonMobile ? "span 18" : "span 12" },
                                    }}
                                >
                                    <TextField
                                        fullWidth
                                        variant="outlined"
                                        type="text"
                                        label="Email"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        value={values.email}
                                        name="email"
                                        error={!!touched.email && !!errors.email}
                                        helperText={touched.email && errors.email}
                                        sx={{ gridColumn: "span 8" }}
                                    />

                                </Box>
                                <Box display="flex" justifyContent="space-between" mt="20px">
                                    <Button type="submit" color="primary" variant="contained">
                                        Reset
                                    </Button>

                                </Box>

                            </form>


                        </>
                        )}
                    </Formik>

                </Box>}
                {otp && <Box component="form" onSubmit={handleSubmit} >
                    <OtpInput />

                </Box>}
            </Box>
        </Container></>)
}

const checkoutSchema = yup.object().shape({
    email: yup.string().email("invalid email").required("Email Is Mandatory"),

});
const initialValues = {
    email: ""

};