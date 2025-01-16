import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState } from "../app/store"
import { useEffect } from "react"
import { fetchPosts } from "../state/posts/postsSlice"

const DisplayPosts = () => {
    const {data,status} = useSelector((state:RootState)=>state.posts)
    const dispatch = useDispatch<AppDispatch>()
    console.log(data,status)

    useEffect(()=>{
        dispatch(fetchPosts())
    },[])
    if(status ==="loading"){
        console.log("LOADING");
        
    }

  return (
    <div>
        <h1>DisplayPosts</h1>
        {
            status === "loading"? 
            (<>
                <h1>LOADING</h1>
            </>):
            (<>
                <h1>data</h1>
                {data.map((post)=>(
                    <div key={post.id}>
                        <h2>{post.title}</h2>
                        <p>body{post.body}</p>
                        <p>Id{post.userId}</p>
                    </div>
                ))}
            </>)
        }
    </div>
  )
}

export default DisplayPosts