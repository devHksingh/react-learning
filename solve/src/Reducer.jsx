// const is=()=>{
//     users:[],
// }; initail state is function not a function
const is = {
    users: [], 
  };
const reducer=(state,action)=>{
switch(action.type)
{
    case "update" :{ 
        console.log(action.payload);
        
        const arr=[...state.users]
        arr.push(action.payload);
        return {users:arr}}
    case"delete":{
        console.log("action.payload.name",action.payload.name);
        
        const arr = state.users.filter((item)=> item.name !==action.payload.name);
          
        return { ...state, users: arr };
    }
case "reset" : return is;
default : return state;
}
}

export{is,reducer};