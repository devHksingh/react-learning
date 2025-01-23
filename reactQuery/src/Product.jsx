import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";

import { useParams } from "react-router-dom";

const Product = () => {
    const {productId}= useParams()
    // console.log(productId, typeof(productId))
    const mutation = useMutation({
        mutationFn:(newTitle)=>{
            return axios.put(`https://dummyjson.com/products/${(productId)}`,newTitle)
        }
    })
    const fetchSingleProduct = async()=>{
        const res = await axios.get(`https://dummyjson.com/products/${(productId)}`)
        console.log(res.data)
        return res.data
    }
    const {isLoading,error,data} = useQuery({
        queryKey:["singleProduct",`${productId}`],
        queryFn:fetchSingleProduct,
        refetchInterval:22*1000,
        refetchIntervalInBackground: true,
    })
    if (isLoading) {
        return (
          <>
            <h1 className="text-2xl text-red-600 animate-pulse">Loading....</h1>
          </>
        );
      }
      if (error) {
        return (
          <>
            <h1 className="text-2xl text-red-600 animate-pulse">
              Error occured on fetch....{error.message}
            </h1>
          </>
        );
      }
    return (
        <>
            <div>
                <img src={`${data.images[0]}`} alt={data.title}/>
                <h1>{data.title}</h1>
                <p>{data.brand}</p>
                <p>{data.category}</p>
                <p>{data.description}</p>
                <p>${data.price}</p>  
                <h3>{data.tags.map((tag,i)=>(<p key={i}>{tag}</p>))}</h3>
            </div>
            <div>
      {mutation.isPending ? (
        'Adding todo...'
      ) : (
        <>
          {mutation.isError ? (
            <div>An error occurred: {mutation.error.message}</div>
          ) : null}

          {mutation.isSuccess ? <div><h1 className="text-xl font-bold capitalize border border-b">title added!</h1></div> : null}

          <button className="p-1 bg-orange-400 rounded"
            onClick={() => {
              mutation.mutate({  title: 'Dummy title' })
            }}
          >
            Update title
          </button>
        </>
      )}
    </div>
        </>
    );
};

export default Product;
