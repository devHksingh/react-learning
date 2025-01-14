import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState } from "../app/store"
import { addBy1, removeBy1 } from "../state/counter/counterSlice"

const Counter = () => {
    const count = useSelector((state:RootState)=>state.counter.value)
    console.log(count)
    const dispatch = useDispatch<AppDispatch>()
  return (
    <div>
        <h1>Counter</h1>
        <button onClick={()=>dispatch(addBy1())}>Increment</button><br/>
        <p>{count }</p>
        <button onClick={()=>dispatch(removeBy1())}>Decrement</button><br/>
    </div>
  )
}

export default Counter