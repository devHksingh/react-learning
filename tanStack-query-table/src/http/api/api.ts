import axios from "axios";


const api = axios.create({
    baseURL:import.meta.env.VITE_PUBLIC_BACKEND_URL,

})

export const getUserData= async()=>{
    const res= await api.get('')
    
    return  res.data
    
} 
