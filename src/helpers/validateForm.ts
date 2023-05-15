import * as yup from "yup";

export const LoginValidate = yup.object().shape({
    uid: yup.string().trim().required("The user is required"),
    pass: yup.string().trim().required("The pass is required").min(8, "The minimum is 8 caracters").max(20, "The maximum is 15 caracters" ),
})