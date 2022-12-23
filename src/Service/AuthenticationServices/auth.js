import axios from "axios"

export function loginService(passingPayload, self) {
    axios
        .post("/login", passingPayload)
        .then(async (res) => {
            if (res.data.status == true) {
               
            } else {
               //error component
            }
        })
        .catch((error) => {
            console.log("error :>> ", error);
        });



}
export function registerService(passingPayload, self) {
    axios
        .post("/register", passingPayload)
        .then(async (res) => {
            if (res.data.status == true) {

            } else {
                //error component
            }
        })
        .catch((error) => {
            console.log("error :>> ", error);
        });



}
export function resetPwd(passingPayload, self) {
    axios
        .post("/resetpassword", passingPayload)
        .then(async (res) => {
            if (res.data.status == true) {

            } else {
                //error component
            }
        })
        .catch((error) => {
            console.log("error :>> ", error);
        });



}

export function otpVerifiedService(passingPayload, self) {
    axios
        .post("/otpverified", passingPayload)
        .then(async (res) => {
            if (res.data.status == true) {

            } else {
                //error component
            }
        })
        .catch((error) => {
            console.log("error :>> ", error);
        });



}

export function changePwd(passingPayload, self) {
    axios
        .post("/changepassword", passingPayload)
        .then(async (res) => {
            if (res.data.status == true) {

            } else {
                //error component
            }
        })
        .catch((error) => {
            console.log("error :>> ", error);
        });



}




// export function getService(self) {
//     axios
//         .get("flags")
//         .then((res) => {
           
//         })
//         .catch((error) => {
           
//         });

// }