import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema } from "../components/formschema/registerSchema";


function Register() {
    const navigate=useNavigate();
    const {register, handleSubmit, formState:{errors}}=useForm({
        resolver: zodResolver(registerSchema)
    })
    function onSubmit(data){
        console.log(data)
        alert("register sucessful")
        navigate("/")
    }
    return (
        <>
        <form onSubmit={handleSubmit(onSubmit)}>
            <label>Name </label>
            <input placeholder="Enter your name" type="text" {...register("name")} />
            <p>{errors.name?.message}</p>

            <label>Email </label>
            <input placeholder="Enter your name" type="email" {...register("email")} />
            <p>{errors.email?.message}</p>

            <label>Password </label>
            <input placeholder="Enter Password"  type="password" {...register("password")} />
            <p>{errors.password?.message}</p>

            <label>Age </label>
            <input placeholder="Enter your age"  type="number" {...register("age")} />
            <p>{errors.age?.message}</p>

            <button type="submit">Submit</button>
        </form>
        </>
    );
}

export default Register;