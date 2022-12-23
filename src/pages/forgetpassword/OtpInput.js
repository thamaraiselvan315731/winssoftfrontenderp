import React from 'react';// eslint-disable-next-line
import TextField from "@mui/material/TextField";// eslint-disable-next-line
import Typography from "@mui/material/Typography";
import Header from "../../components/Header";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { ResetPassword } from "./ResetPassword"
class OtpInput extends React.Component {

    constructor(props) {
        super(props);
        this.state = { value: '', otp1: "", otp2: "", otp3: "", otp4: "", disable: true, resetpwd: false };
        this.handleChanges = this.handleChanges.bind(this);
        this.handleSubmits = this.handleSubmits.bind(this);

    }

    handleChanges(value1, event) {
        const singlechar2 = String(event.target.value)[0];

        //const typechangetonumber2 = Number(singlechar2)
        this.setState({ [value1]: singlechar2 });

    }// eslint-disable-next-line
    handleSubmit = (event) => {
        event.preventDefault();// eslint-disable-next-line
        const data = new FormData(event.currentTarget);

    };

    async handleSubmits() {

        if (this.state.otp1 && this.state.otp2 && this.state.otp3 && this.state.otp4) {
            let appendString = this.state.otp1 + this.state.otp2 + this.state.otp3 + this.state.otp4;
            console.log(appendString)
            this.setState({ resetpwd: true, value: appendString })

        }


    }
    handleFormSubmit = (values) => {
        console.log(values);
    };

    inputfocus = (elmnt) => {
        if (elmnt.key === "Delete" || elmnt.key === "Backspace") {
            const next = elmnt.target.tabIndex - 2;
            if (next > -1) {

                elmnt.target.form.elements[next].focus()
            }
        }
        else {
            if (elmnt.target.value >= 1 && elmnt.target.value <= 9) {
                const next = elmnt.target.tabIndex;
                if (next < 4) {
                    elmnt.target.form.elements[next].focus()
                }
            }
        }
    }

    render() {

        return (
            <div>
                {!this.state.resetpwd && <>
                    <Header title="OTP Required" subtitle="Please enter the OTP which received on mail." />
                    <Box
                        xs={6}
                        sx={{
                            "& > :not(style)": { m: 1, width: "25ch" }, marginTop: 2,
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center"
                        }}
                        component="form"
                        noValidate
                        autoComplete="off" >

                        <input
                            name="otp1"
                            id="otp1"
                            type="number"
                            tabindex="1"
                            maxlength="1"
                            pattern="[0-9]{1}"
                            className="otpInput"
                            value={this.state.otp1}
                            onKeyPress={this.keyPressed}
                            onChange={e => this.handleChanges("otp1", e)}
                            tabIndex="1" onKeyUp={e => this.inputfocus(e)}

                        />
                        <input
                            name="otp2"
                            type="number"
                            tabindex="1"
                            pattern="[0-9]{1}"
                            className="otpInput"
                            value={this.state.otp2}
                            onChange={e => this.handleChanges("otp2", e)}
                            tabIndex="2" maxlength="1" onKeyUp={e => this.inputfocus(e)}

                        />
                        <input
                            name="otp3"
                            type="number"
                            tabindex="1"
                            pattern="[0-9]{1}"
                            className="otpInput"
                            value={this.state.otp3}
                            onChange={e => this.handleChanges("otp3", e)}
                            max-length="1"
                            tabIndex="3" onKeyUp={e => this.inputfocus(e)}

                        />
                        <input
                            name="otp4"
                            type="number"
                            tabindex="1"
                            pattern="[0-9]{1}"
                            className="otpInput"
                            value={this.state.otp4}
                            onChange={e => this.handleChanges("otp4", e)}
                            tabIndex="4" maxlength="1" onKeyUp={e => this.inputfocus(e)}
                        />


                    </Box>
                    <Box sx={{
                        marginTop: 4,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center"
                    }}>

                        <Button
                            disabled={!this.state.otp1 || !this.state.otp2 || !this.state.otp3 || !this.state.otp4}

                            variant="contained"
                            sx={{ mt: 3, mb: 2, mr: 16 }}
                            onClick={this.handleSubmits}>
                            Submit
                        </Button>

                    </Box></>}

                {this.state.resetpwd && <>
                    <ResetPassword otp={this.state.value} />

                </>}

            </div>
        );
    }
}




export default OtpInput;