import { Link, useParams } from "react-router-dom"
import useGetSingleProduct from "../hooks/useGetSingleProduct"
import {  Heart, LoaderCircle, ShoppingCart, Star } from "lucide-react"
import useGetProductByCat from "../hooks/useGetProductByCat"
import { Product } from "../types/ProductType"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../app/store"
import { addProductToWishList } from "../features/product/wishListSlice"
import { addCartProduct } from "../features/product/cartSlice"
import usePrefetchWishlistProduct from "../hooks/usePrefetchWishlistProduct "



const SingleProduct = () => {
  const prefetchProduct = usePrefetchWishlistProduct()
  const cartState= useSelector((state:RootState)=>state.cart)
  const dispatch = useDispatch()
  const wishlistState = useSelector((state:RootState)=> state.cart)
  
  const {productId} = useParams()
  if (!productId) {
    // Handle the case where productId is undefined, e.g., return early or show an error.
    throw new Error("Product ID is missing");
  }
  const id = parseInt(productId)
  const {data,isError,isLoading} = useGetSingleProduct(id)
  const {data:categoryData,isLoading:iscategoryLoading}= useGetProductByCat(data?.category)
  console.log("data?.id",data?.id);
  
  console.log("cartState",cartState);
  console.log("wishlistState",wishlistState);

  
  
  const handleUpdateCartState = (i:number)=>{
    dispatch(addCartProduct({productId:i}))
    prefetchProduct(i)
  }
  const handleUpdateWishListState = (i:number)=>{
    
    dispatch(addProductToWishList({productId:i}))
    // Prefetch the product data
    prefetchProduct(i)
  }
  
  if(isError){
    return (<>Something went wrong while fetching product details</>)
  }
  if(isLoading){
    return(
      
      <div className="flex flex-col justify-center h-screen max-w-2xl gap-10 pt-20 mx-auto space-x-2 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="mx-auto">
        <LoaderCircle className=" animate-spin"/>
        </div>
      </div>


    )
  }
  return (
    <div className="min-h-screen">
      {data && (
        <div className="pt-6 antialiased ">
        <div aria-label="Breadcrumb">
          <ol role="list" className="flex items-center max-w-2xl gap-2 px-4 mx-auto sm:px-6 lg:max-w-7xl lg:px-8">
            
            <li><Link to={'/'} className="font-medium text-stone-800">Home</Link></li>
            <li className="text-stone-400">\</li>
            <li><Link to={`/products/${data.category}`} className="font-medium capitalize text-stone-800">{data?.category}</Link></li>
            <li className="text-stone-400">\</li>
            <li><Link to={`/products/${productId}`} className="font-medium text-stone-500">{data?.title}</Link></li>
          </ol>
        </div>
        {/* Image  */}
        <div className="grid max-w-2xl grid-cols-1 mx-auto antialiased sm:px-6 lg:max-w-7xl lg:px-8 lg:grid-cols-2">
          {/* Image  */}
          
          <div className="flex justify-center w-1/2 mx-auto lg:w-full">
          
            <img src={data?.images[0]} alt={data?.description} 
            className="block max-w-full object-fit aspect-square"
            />
          </div>
          {/* content */}
          <div>
            <div className="max-w-2xl px-4 pt-10 mx-auto space-x-2 sm:px-6 lg:max-w-7xl lg:px-8">
              <div className="flex flex-col border-b-2">
              
                <h1 className="text-4xl font-bold">{data?.title}</h1>
                <span>{data?.brand}</span>
                
                <h2 className="flex items-center gap-6 pt-2 font-mono text-2xl font-extrabold text-gray-900 sm:text-3xl ">${data?.price} <span className="flex ">
                  <Star className="text-orange-400 fill-orange-400" size={18}/>
                  <Star className="text-orange-400 fill-orange-400" size={18}/>
                  <Star className="text-orange-400 fill-orange-400" size={18}/>
                  <Star className="text-orange-400 fill-orange-400" size={18}/>
                  <Star className="text-orange-400 fill-orange-400" size={18}/>
                  <span className="ml-1 text-sm">{data?.rating} rating</span>
                  </span></h2>
                  <div className="flex items-center gap-4 pt-4 mb-6">
                  
                    <button 
                    onClick={()=>handleUpdateWishListState(data.id)}
                    className="flex px-2 py-1.5 bg-stone-500 rounded-md hover:bg-stone-600 text-white gap-2">
                      <Heart />Add To Favorites
                      </button>
                    <button 
                    onClick={()=>handleUpdateCartState(data.id)}
                    className="flex px-2 py-1.5 bg-blue-500 rounded-md hover:bg-blue-700 text-white gap-2">
                      <ShoppingCart />Add To Cart
                    </button>
                  </div>
              </div>
              <div className="p-1 mt-1">
                <p className="mb-6 text-gray-600 ">{data?.description}</p>
              </div>
              
            </div>
          </div>
        </div>
      </div>
      )}
      <div className="max-w-2xl px-4 mx-auto mt-6 space-x-2 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-medium tracking-tight text-gray-900">Customers also purchased</h2>
          {/* List  of similar product */}
          
              {iscategoryLoading && (
                <div className="grid grid-cols-1 mt-6 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                  <LoaderCircle className=" animate-spin"/>
                  <LoaderCircle className=" animate-spin"/>
                  <LoaderCircle className=" animate-spin"/>
                  <LoaderCircle className=" animate-spin"/>

                </div>
              )}
          
          {
            categoryData && (
              <div className="bg-white ">
                        <div className="max-w-2xl px-1 py-2 mx-auto sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 ">
                          
              
                          <div className="grid grid-cols-1 mt-6 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                            {categoryData.map((product:Product) => (
                              <div key={product.id} className="relative group">
                                
                                <img
                                  alt={product.description}
                                  src={product.images[0]}
                                  className="object-cover w-full bg-gray-200 rounded-md aspect-square group-hover:opacity-75 lg:aspect-auto lg:h-80"
                                />
                                <div className="flex justify-between mt-4">
                                  <div>
                                    <h3 className="text-sm text-gray-700">
                                      <Link to={`/products/${product.id}`}>
                                        <span
                                          aria-hidden="true"
                                          className="absolute inset-0"
                                        />
                                        {product.title}
                                      </Link>
                                    </h3>
                                    <p className="mt-1 text-sm text-gray-500">
                                      {product.category}
                                    </p>
                                  </div>
                                  <p className="text-sm font-medium text-gray-900">
                                    ${product.price}
                                  </p>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
              </div>
            )
          }
      </div>
    </div>
  )
}

export default SingleProduct