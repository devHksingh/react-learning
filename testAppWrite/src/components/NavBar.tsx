import { MoonIcon, SunIcon } from "lucide-react";
import { useState } from "react";
import { NavLink } from "react-router-dom"


const NavBar = () => {
  const [isOn, setIsOn] = useState(false);
  return (
    <nav className="sticky bottom-0 flex items-center justify-around w-full p-4 bg-stone-600 bg-opacity-40" >
      <ul className="flex justify-center w-3/4 gap-12">
        <li><NavLink to="/home" className={({isActive})=>`text-primary-a40 font-medium text-lg hover:text-primary-a50 ${isActive?` border-b-2 border-lime-400 pb-0.5 `:``}`}>Home</NavLink></li>
        <li><NavLink to="/form" className={({isActive})=>`text-primary-a40 font-medium text-lg hover:text-primary-a50 ${isActive?`border-b-2 border-lime-400 pb-0.5`:``}`}>Form</NavLink></li>
        <li><NavLink to="/show" className={({isActive})=>`text-primary-a40 font-medium text-lg hover:text-primary-a50 ${isActive?`border-b-2 border-lime-400 pb-0.5`:``}`}>Show</NavLink> </li>
        <li><NavLink to="/login" className={({isActive})=>`text-primary-a40 font-medium text-lg hover:text-primary-a50 ${isActive?`border-b-2 border-lime-400 pb-0.5`:``}`}>Login</NavLink></li>
        
      </ul>
      
      <div className="flex items-center">
        {/* container */}
        <div
        className={`w-16 h-7 flex items-center bg-gray-300 rounded-full p-1 cursor-pointer transition-all ${
          isOn ? "bg-yellow-500" : "bg-gray-600"
        }`}
        onClick={() => setIsOn(!isOn)}
      >
          <SunIcon className="w-6 h-4 text-white transition-all"/>
          <div className={`w-8 h-6 transition-all transform bg-white rounded-full ${isOn?`translate-x-5`:`translate-x-[-19px]`}`}></div>
          <MoonIcon className="w-6 h-4 text-white transition-all"/>
          
        </div>
        {/* Label */}
      <span className="ml-3 text-gray-400 transition-all">{isOn ? "Light " : "Dark "}Mode
      </span>
      </div>
    
    </nav>
  )
}

export default NavBar

/*

*/