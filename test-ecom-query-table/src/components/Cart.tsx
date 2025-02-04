import { useEffect, useState } from "react"
import useGetAllCartProducts from "../hooks/useGetAllCartProducts"
import { Product } from "../types/ProductType"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../app/store"
import { Link } from "react-router-dom"
import { FiMinus, FiPlus, FiShoppingCart } from "react-icons/fi"
import { addCartProduct, removeCartProduct, removeProductQuantity } from "../features/product/cartSlice"
import { Trash2 } from "lucide-react"


const Cart = () => {
  const [id,setId] = useState<number[]>([])
  const cartProducts = useGetAllCartProducts(id)
  const isLoading = cartProducts.some((query)=>query.isLoading)
  const isError = cartProducts.some((query)=>query.isError)
  const products = cartProducts
                              .map((query)=> query.data)
                              .filter((product):product is Product=>product !== undefined && product !==null)
  const cartState = useSelector((state:RootState)=>state.cart)
  const dispatch = useDispatch()
  useEffect(()=>{
    console.log("cartState",cartState)
    const productId = cartState.map((item)=>item.productId)
    setId(productId)
  },[cartState])

  const handleAddProduct =(id:number)=>{
    dispatch(addCartProduct({productId:id}))
  }
  const handleRemoveProduct=(id:number)=>{
    dispatch(removeProductQuantity({productId:id}))
  }
  const handleDelete =(id:number)=>{
    dispatch(removeCartProduct({productId:id}))
  }
  
  if (isLoading) return <div>Loading...</div>
  if (isError) return <div>Error loading wishlist products</div>

  return (
    <div className="h-screen">
      <div className="max-w-2xl px-4 py-6 mx-auto sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        {
          products.length>0?(
            <div className="grid grid-cols-1 mt-6 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
              {
                products.map((product)=>(
                  <div key={product.id} className="p-2 pb-4 border rounded-md shadow-md">
                    <img 
                    src={product.images[0]} 
                    alt={product.description} 
                    className="object-cover w-full rounded-md aspect-square lg:aspect-auto lg:h-80"
                    />
                    <div>
                      <Link to={`/products/${product.id}`} className="text-sm text-gray-700">{product.title}</Link>
                      <div className="flex justify-between">
                          <p className="mt-1 text-sm text-gray-500">
                            {product.category}
                          </p>
                          <p className="text-sm font-medium text-gray-900">
                          $ {product.price}
                          </p>
                      </div>
                      <div className="flex items-center justify-center gap-4 pt-2">
                          <FiShoppingCart className="fill-orange-400"/>
                          <button className="border px-1 py-0.5 rounded hover:bg-stone-200"
                           onClick={()=>handleRemoveProduct(product.id)}
                          ><FiMinus/></button>
                          <span>{cartState.find((item)=> item.productId === product.id)?.quantity}</span>
                          <button className="border px-1 py-0.5 rounded hover:bg-stone-200"
                          onClick={()=>handleAddProduct(product.id)}><FiPlus/></button>
                          <span 
                          className="text-pink-500 "
                          onClick={()=>handleDelete(product.id)}
                          ><Trash2 className="hover:fill-red-200"/></span>
                      </div>
                    </div>
                  </div>
                ))
              }
            </div>
          )
          :(
            <div>No products in cart</div>
          )
        }
      </div>
    </div>
  )
}

export default Cart