import * as React from "react";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useAuth } from "../../hooks/useAuth";

export const RegisterPage = () => {
    const { login } = useAuth();
    const isNonMobile = useMediaQuery("(min-width:600px)");

    const handleFormSubmit = (values) => {
        console.log(values);
    };

    // eslint-disable-next-line
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        login({
            email: data.get("email"),
            password: data.get("password")
        });
    };

    return (
        <Container >
            <Box
                sx={{
                    marginTop: 8,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center"
                }}
            >
                <Avatar sx={{ m: 1, bgcolor: "primary.main" }}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign Up
                </Typography>

            </Box>
            <Box display="flex" justifyContent="center" mt="20px">
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
                    }) => (
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
                                <TextField
                                    fullWidth
                                    variant="outlined"
                                    type="password"
                                    label="Password"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    value={values.password}
                                    name="password"
                                    error={!!touched.password && !!errors.password}
                                    helperText={touched.password && errors.password}
                                    sx={{ gridColumn: "span 8" }}
                                />
                                <TextField
                                    fullWidth
                                    variant="outlined"
                                    type="text"
                                    label="Company Name"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    value={values.companyname}
                                    name="companyname"
                                    error={!!touched.companyname && !!errors.companyname}
                                    helperText={touched.companyname && errors.companyname}
                                    sx={{ gridColumn: "span 8" }}
                                />


                            </Box>
                            <Box display="flex" justifyContent="center" mt="20px">
                                <Button type="submit" color="primary" variant="contained">
                                    Register
                                </Button>
                            </Box>
                        </form>
                    )}
                </Formik>
            </Box>
        </Container>
    );
};
// eslint-disable-next-line
const phoneRegExp =
    /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

const checkoutSchema = yup.object().shape({
    password: yup.string().required("required"),
    companyname: yup.string().required("required"),
    email: yup.string().email("invalid email").required("required"),

});
const initialValues = {
    password: "",
    companyname: "",
    email: ""

};

