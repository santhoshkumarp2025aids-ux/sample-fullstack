import {z} from "zod";
export const registerSchema=z.object({
    name:z.string().min(3, "Name must have atleast 3 char"),
    email:z.string().email("enter valid email"),
    password:z.string().min(8,"password should be minimum of 8"),
    age : z.coerce.number().min(18,"age should be minimum of 18")
})