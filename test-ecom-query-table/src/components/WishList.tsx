import { useSelector } from "react-redux"
import { RootState } from "../app/store"
import { useEffect, useState } from "react"
import useGetAllWishlistProducts from "../hooks/useGetAllWishlistProducts"
import { Product } from "../types/ProductType"
import { Link } from "react-router-dom"


const WishList = () => {
  const [id,setId] = useState<number[]>([])
  const wishListState = useSelector((state:RootState)=> state.wishList)
  const wishlistProducts = useGetAllWishlistProducts(id)
  console.log(wishListState);
  console.log("wishlistProducts",wishlistProducts);

  useEffect(()=>{
    const productId = wishListState.map((item)=> item.productId)
    console.log("productId",productId);
    
    setId(productId)
  },[wishListState])

  const isLoading = wishlistProducts.some((query)=>query.isLoading)
  const isError = wishlistProducts.some((query)=>query.isError)

  const products = wishlistProducts
    .map((query) => query.data)
    .filter((product): product is Product => product !== undefined && product !== null)
    if (isLoading) return <div>Loading...</div>
    if (isError) return <div>Error loading wishlist products</div>
  return (
    <div className="h-screen">
      <div className="max-w-2xl px-4 py-16 mx-auto sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
      
      {products.length > 0 ? (
        <div className="grid grid-cols-1 mt-6 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product:Product) => (
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
                      {product.price}
                    </p>
                  </div>
                </div>
              ))}
        </div>
      ) : (
        <div>No products in wishlist</div>
      )}
        
      </div>
      
    </div>
  )
}

export default WishList