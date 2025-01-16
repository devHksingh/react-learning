import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState } from "../app/store"
import { useEffect } from "react"
// import { fetchPosts } from "../state/posts/postsSlice"
import { fetchTodos, removeTodo, updateTodo } from "../state/todo/todoSlice"

const TodosDisplay = () => {
    const {data,status} = useSelector((state:RootState)=>state.todo)
    const dispatch = useDispatch<AppDispatch>()
    
    useEffect(()=>{
        console.log("useEffect");
        
        dispatch(fetchTodos())
        console.log(data);
    },[])

    if(status ==="loading"){
        console.log("loading");
    }
    if(status === "idle"){
        console.log("data");
        console.log(data);
        
    }
    const handleStatusChange =(id:number,completed:boolean)=>{
        dispatch(updateTodo({id,completed:!completed}))
    }
    const handleDelete =(id:number)=>{
        dispatch(removeTodo({id}))
    }
    
  return (
    <div>
        <h1>TodosDisplay</h1>
        {
            status === "loading"?
            (<>
                <h1>Loading</h1>
            </>):
            (<>
                {data.map((todo)=>(
                    <div key={todo.id}>
                        <h2>{todo.title}</h2>
                        <h2>{todo.completed?"Done":"Not done"}</h2>
                        <h2>{todo.userId}</h2>
                        <label >
                            <span>Is done?</span>
                            <input type="checkbox"  
                            onChange={()=>handleStatusChange(todo.id,todo.completed)}
                            checked={todo.completed}
                            />
                        </label> <br/>
                        <button onClick={()=> handleDelete(todo.id)}>Delete</button>
                    </div>
                ))}
            </>)
        }
    </div>
  )
}

export default TodosDisplay