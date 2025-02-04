import { NavLink } from "react-router-dom"


const NavBar = () => {
  return (
    <nav className="w-full p-4 bg-stone-200 " >
      <ul className="flex justify-around w-full gap-2">
        <li><NavLink to="" className={({isActive})=>`text-primary-a10 font-medium text-lg hover:text-primary-a50 ${isActive?` border-b-2 border-orange-400 pb-0.5 `:``}`}>Home</NavLink></li>
        <li><NavLink to="/cart" className={({isActive})=>`text-primary-a40 font-medium text-lg hover:text-primary-a50 ${isActive?`border-b-2 border-orange-400 pb-0.5`:``}`}>Cart</NavLink></li>
        <li><NavLink to="/wishList" className={({isActive})=>`text-primary-a40 font-medium text-lg hover:text-primary-a50 ${isActive?`border-b-2 border-orange-400 pb-0.5`:``}`}>WishList</NavLink> </li>
        {/* <li><NavLink to="/order" className={({isActive})=>`text-primary-a40 font-medium text-lg hover:text-primary-a50 ${isActive?`border-b-2 border-orange-400 pb-0.5`:``}`}>Order</NavLink> </li> */}
        {/* <li><NavLink to="/login" className={({isActive})=>`text-primary-a40 font-medium text-lg hover:text-primary-a50 ${isActive?`border-b-2 border-orange-400 pb-0.5`:``}`}>Login</NavLink></li> */}
        
      </ul>
      
      
    
    </nav>
  )
}

export default NavBar