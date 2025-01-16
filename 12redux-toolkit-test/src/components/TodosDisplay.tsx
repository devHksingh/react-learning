import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState } from "../app/store"
import { useEffect } from "react"
// import { fetchPosts } from "../state/posts/postsSlice"
import { fetchTodos } from "../state/todo/todoSlice"

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
                        <h2>{todo.completed}</h2>
                        <h2>{todo.userId}</h2>
                        <label >
                            <span>Is done?</span>
                            <input type="checkbox"  />
                        </label>
                    </div>
                ))}
            </>)
        }
    </div>
  )
}

export default TodosDisplay