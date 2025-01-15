import { UsersContext } from "./main";
import { useContext } from "react";
const Show=()=>{

   const{state,dispatch}=useContext(UsersContext);
   console.log("from show beform return state",state);

   const handleDelete = (user)=>{
     dispatch({type:'delete',payload:user})
   }
   console.log(state.users);
   
  return(
  <>
  <h2>Show Data </h2>
  {
                state.users.map((user,i)=>{return(
                    <div key={i} className="box">
                        <h3>{user.name}</h3>
                        <p>
                            {user.age} <br />
                            {user.email}
                        </p>
                        <p>
                            <input type="button" value="X" onClick={()=>handleDelete(user)} />
                        </p>
                    </div>
                )})
            }
  </>
  
)}
export default Show;