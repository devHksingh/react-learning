import { useContext, useState } from "react";
import { UsersContext } from "./main";

const Input=()=>{
       const {state,dispatch} = useContext(UsersContext)
  const[data,setData]=useState([]);
  const handelchange=(e)=>{
         setData({...data,[e.target.name]:e.target.value});         
  }

  const handelSave=()=>{
       console.log(data);
       
       dispatch({type:'update',payload:data});
       setData({name:"",age:"",email:""});
       console.log("data has been saved");
       console.log(state);
       
    
  }

  return(
       <>
       <h2>Input from user</h2>
       Name: <input type="text" value={data.name} name="name" onChange={handelchange} /><br />
       Age: <input type="text" value={data.age} name="age" onChange={handelchange} /><br />
       Email: <input type="text" value={data.email} name="email" onChange={handelchange} /><br />
       <input type="button" value="save Data" onClick={handelSave} />
       </>
      )
}

export default Input;