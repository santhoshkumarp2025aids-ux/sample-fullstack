import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema } from "../components/formschema/registerschema";


function Register() {
    const navigate=useNavigate();
    const {register, handleSubmit, formState:{errors}}=useForm({
        resolver: zodResolver(registerSchema)
    })
    function onSubmit(data){
        console.log(data)
        alert("register sucessful")
        navigate("/",{state:data})
    }
    return (
        <div className="min-h-screen flex justify-center items-center">
        <form onSubmit={handleSubmit(onSubmit)}
            className="bg-white w-96 p-8 rounded-2xl shadow-2xl">
                <h1 className="text font-bold text-center text-purple-500">
                Register
            </h1>
            <p className="text-center font-bold text-red-500">
                Create your account
            </p>
            <label className="block text-black text-blue-500">Name:</label>
            <input placeholder="Enter your name" type="text" {...register("name")}
            className="border p-1 rounded"/>
            <p>{errors.name?.message}</p>

            <label className="block text-black text-blue-500">Email:</label>
            <input placeholder="Enter your name" type="email" {...register("email")} 
            className="border p-1 rounded"/>
            <p>{errors.email?.message}</p>

            <label className="block text-black text-blue-500">Password:</label>
            <input placeholder="Enter Password"  type="password" {...register("password")} 
            className="border p-1 rounded "/>
            <p>{errors.password?.message}</p>

            <label className="block text-black text-blue-500">Age:</label>
            <input placeholder="Enter your age"  type="number" {...register("age")} 
            className="border p-1 rounded"/>
            <p>{errors.age?.message}</p><br/>

            <button type="submit"  className=" bg-purple-600 text-white p-3 rounded-lg font-bold hover:bg-purple-800">Submit</button>
        </form>
        </div>
    );
}

export default Register;
