
// import { useState } from 'react'
import './App.css'
import { Link } from 'react-router-dom'
import { Product } from './types/ProductType'
import useGetAllProducts from './hooks/useGetAllProducts'

function App() {
  // const [allProduct,setAllProduct]= useState<Product[]>([])
  const {data:products,isError,isLoading} = useGetAllProducts()
  
  if(isError){
    return(<div className='p-2 text-center text-red-600'>Error while fetching product data</div>)
  }
  return (
    <>
      {products ? (
        <div className="bg-white">
          <div className="max-w-2xl px-4 py-16 mx-auto sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 ">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
              List of Products
            </h2>

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
          </div>
        </div>
      ) : (
        <>
          {
            isLoading && (<div className="max-w-2xl px-4 py-16 mx-auto sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 ">
              <div className="grid grid-cols-1 mt-6 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                <div className='rounded-md bg-stone-400 aspect-square animate-pulse'></div>
                <div className='rounded-md bg-stone-400 aspect-square animate-pulse'></div>
                <div className='rounded-md bg-stone-400 aspect-square animate-pulse'></div>
                <div className='rounded-md bg-stone-400 aspect-square animate-pulse'></div>
                <div className='rounded-md bg-stone-400 aspect-square animate-pulse'></div>
                <div className='rounded-md bg-stone-400 aspect-square animate-pulse'></div>
                <div className='rounded-md bg-stone-400 aspect-square animate-pulse'></div>
                <div className='rounded-md bg-stone-400 aspect-square animate-pulse'></div>
                <div className='rounded-md bg-stone-400 aspect-square animate-pulse'></div>
                <div className='rounded-md bg-stone-400 aspect-square animate-pulse'></div>
              </div>
            </div>)
          }
        </>
      )}
    </>
  )
}

export default App
