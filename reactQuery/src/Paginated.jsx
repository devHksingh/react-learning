import { useQuery } from "@tanstack/react-query";
import axios from "axios"

const Paginated = () => {
    async function fetchBycategories(){
        const res = await axios.get('https://dummyjson.com/products/categories')
        console.log(res.data);
        return res.data
    }
    async function getAllProducts(){
        const res = await axios.get('https://dummyjson.com/products')
        console.log(res.data);
        return res.data.products
    }

    const {data:products,isLoading,error} = useQuery({
        queryKey:["getAllProducts"],
        queryFn:getAllProducts
    })
    const {data:categories ,isLoading:isCategoryDataLoading,error:isCategoryDataError}= useQuery({
        queryKey:["categories"],
        queryFn:fetchBycategories
    })
    if(isCategoryDataError){
        return (<>Erorr while getting cat {isCategoryDataError.message}</>)
    }
    if(isCategoryDataLoading){
        return (<>Loading Category ...</>)
    }
    if(error){
        return (<>Erorr while getting products {error.message}</>)
    }
    if(isLoading){
        return (<>Loading products ...</>)
    }
  return (
    <>
    <div className="bg-white">
    <div className="max-w-2xl px-4 py-16 mx-auto sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
                My store
            </h2>
        </div>
        <div>
            <div className="relative flex items-center gap-8 mt-2 mb-4 rounded-md">
                <input
                    onChange={() => {}}
                    type="text"
                    name="price"
                    id="price"
                    className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="IPhone"
                />
                <select className="p-2 text-black border" onChange={() => {}}>
                    <option>Select category</option>
                    {categories?.map((category,i) => (
                        <option key={i} value={category.name}>
                            {category.name}
                        </option>
                    ))}
                </select>
            </div>
        </div>

        <div className="grid grid-cols-1 mt-6 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {products?.map((product) => (
                <div key={product.id} className="relative group">
                    <div className="w-full overflow-hidden bg-gray-200 rounded-md aspect-h-1 aspect-w-1 lg:aspect-none group-hover:opacity-75 lg:h-64">
                        <img
                            src={product.thumbnail}
                            alt={product.title}
                            className="object-cover object-center w-full h-full lg:h-full lg:w-full"
                        />
                    </div>
                    <div className="flex justify-between mt-4">
                        <div>
                            <h3 className="text-sm text-gray-700">
                                <a href="">
                                    <span
                                        aria-hidden="true"
                                        className="absolute inset-0"
                                    />
                                    {product.title}
                                </a>
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

        <div className="flex gap-2 mt-12">
            <button
                className="px-4 py-1 text-white bg-purple-500 rounded"
                onClick={() => {}}>
                Prev
            </button>
            <button
                className="px-4 py-1 text-white bg-purple-500 rounded"
                onClick={() => {}}>
                Next
            </button>
        </div>
    </div>
</div>
</>

  )
}

export default Paginated