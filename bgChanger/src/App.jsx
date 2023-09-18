// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg
import { useState } from 'react'
// import './App.css'

function App() {
  // const [count, setCount] = useState(0)
  const[color,setColor]= useState('olive')

  return (
    <div className='w-full h-screen duration-200'
    style={{backgroundColor:color}}
    >
    
        <div className='fixed flex flex-wrap
        justify-center bottom-12 inset-x-0 px-2'>
          <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-slate-200 px-4 py-2 rounded-xl'>
            <button
            onClick={()=>setColor("black")}
            className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
            style={{backgroundColor:"black"}}
            >Black
            </button>
            <button
            onClick={()=>{setColor("white")}}
            className='outline-none px-4 py-1 rounded-full text-black shadow-lg'
            style={{backgroundColor:"white"}}
            >white
            </button>
            <button
            onClick={()=>{setColor("red")}}
            className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
            style={{backgroundColor:"red"}}
            >Red
            </button>
            <button
            onClick={()=>{setColor("green")}}
            className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
            style={{backgroundColor:"green"}}
            >green
            </button>
            <button
            onClick={()=>{setColor("yellow")}}
            className='outline-none px-4 py-1 rounded-full text-black shadow-lg'
            style={{backgroundColor:"yellow"}}
            >yellow
            </button>
            <button
            onClick={()=>{setColor("purple")}}
            className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
            style={{backgroundColor:"purple"}}
            >purple
            </button>
            <button
            onClick={()=>{setColor("blue")}}
            className='outline-none px-4 py-1 rounded-full text-white shadow-lg '
            style={{backgroundColor:"blue"}}
            >blue
            </button>
          </div>
        </div>
    </div>
  )
}

export default App
