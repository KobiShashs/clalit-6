import "./Register.css";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import notifyService from "../../../Services/NotificationService";
import { RegisterModel } from "../../../Models/RegisterModel";

function Register(): JSX.Element {

    const schema = yup.object().shape({
        firstName:
            yup.string()
                .required("First Name is required"),
        lastName:
            yup.string()
                .required("Last Name is required"),
        email:
            yup.string()
                .email("Invalid Email format")
                .required("Email is required"),
        password:
            yup.string()
                .length(4, "Password must be at least 4 charters")
                .required("Password is required"),
        confirm:
            yup.string()
                .required("Confirm password is required")
                .oneOf([yup.ref('password')], 'Your passwords do not match.')

    });

    const { register, handleSubmit, formState: { errors, isDirty, isValid } }
        = useForm<RegisterModel>({ mode: "all", resolver: yupResolver(schema) });


    // Developer Code to send to remote server
    const sendDataToRemoteServer = (register: RegisterModel) => {
        console.log('Im going to send this info to remote server');
        console.log(register);
        notifyService.success('Yehay!!!!!');
    }



    return (
        <div className="Register">
            {/* Kobi */}
            {/* Shahsha */}
            {/* kobi.shasha@gmail.com */}
            {/* 1234 */}
            {/* 1234 */}
            <h1>Register</h1>
            <form onSubmit={handleSubmit(sendDataToRemoteServer)}>

                {errors?.firstName && <span>{errors.firstName.message}</span>}
                <input  {...register("firstName")} type="text" placeholder="First Name..." name="firstName" />

                {errors?.lastName && <span>{errors.lastName.message}</span>}
                <input {...register("lastName")} type="text" placeholder="Last Name..." name="lastName" />

                {errors?.email && <span>{errors.email.message}</span>}
                <input {...register("email")} type="email" placeholder="Email..." name="email" />

                {errors?.password && <span>{errors.password.message}</span>}
                <input {...register("password")} type="password" placeholder="Password..." name="password" />

                {errors?.confirm && <span>{errors.confirm.message}</span>}
                <input {...register("confirm")} type="password" placeholder="Confirm Password..." name="confirm" />

                <button disabled={!isValid}>Register</button>
            </form>
        </div>
    );
}

export default Register;
