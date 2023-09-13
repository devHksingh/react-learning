import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  // let counter = 5
  let [counter,setCounter] = useState(15)

  const addValue = ()=>{
    if(counter <= 44){
      // counter +=1
      setCounter(prevCounter => prevCounter+1)
      setCounter(prevCounter => prevCounter+1)
      setCounter(prevCounter => prevCounter+1)
      setCounter(prevCounter => prevCounter+1)
      console.log("add value",counter)
    }
    
  }

  const removeValue =()=>{
    if(counter >= 1){
      // counter -=1
      // setCounter(counter)
      setCounter(counter -1)
      console.log("Subtract value", counter)
    }
    
  }

  return (
    <>
      <h1>Counter app</h1>
      <br/>
      <h2>Couter value = {counter}</h2>
      <br/>
      <button onClick={addValue}
      >+1</button>
      <br/>
      <button onClick={removeValue}
      >-1</button>
      <p>{counter}</p>
      
    </>
  )
}

export default App
