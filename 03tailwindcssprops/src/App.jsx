// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Cards from './component/Cards'

function App() {
  let myObj ={
    username:"Harshit",
    age:22
  }
  let newArr = [1,2,3,4]

  return (
    <>
      {/* <h1 className='bg-green-400 text-sm text-black p-4 font-extrabold'>Tailwind Test</h1> */}

      
      <Cards username="Hawk" btnText="see more"/>
      <Cards username={myObj.username} btnText="click Me"/>
    </>
  )
}

export default App
// https://images.pexels.com/photos/17909077/pexels-photo-17909077/free-photo-of-close-up-of-a-hamerkop-bird.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1