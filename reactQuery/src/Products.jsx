import { useEffect,useState } from "react";
import axios from "axios";

const Products = () => {
    const [products,setProducts]= useState([])
    const [error,setError]= useState(false)
    const [loading,setLoading]= useState(false)
    
    useEffect(()=>{
        const fetchProduct =async ()=>{
            try {
              setError(false)
              setLoading(true)
              const res = await axios.get('https://dummyjson.com/products')
            setProducts(res.data.
                products
                )
            console.log(res.data);
            } catch (error) {
              setError(true)
            }finally{
              setLoading(false)
            }
            
        }
        fetchProduct()

    },[])
    if(loading){
      return (<><h1 className="text-2xl text-red-600 animate-pulse">Loading....</h1></>)
    }
    if(error){
      return (<><h1 className="text-2xl text-red-600 animate-pulse">Error occured on fetch....</h1></>)
    }
    return (
        <>
        {products?(<div className="bg-white">
      <div className="max-w-2xl px-4 py-16 mx-auto sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">Customers also purchased</h2>

        <div className="grid grid-cols-1 mt-6 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id} className="relative group">
              <img
                alt={product.description}
                src={product.
                    images[0]}
                className="object-cover w-full bg-gray-200 rounded-md aspect-square group-hover:opacity-75 lg:aspect-auto lg:h-80"
              />
              <div className="flex justify-between mt-4">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href="">
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.title}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{product.category}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>):(<><h1 className="text-2xl text-red-600 animate-pulse">NO data....</h1></>)}
        </>
    );
};

export default Products;