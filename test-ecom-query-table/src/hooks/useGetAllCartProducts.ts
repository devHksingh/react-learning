import { useQueries } from "@tanstack/react-query"
import { getSingleProduct } from "../http/api/api"


const useGetAllCartProducts = (productId:number[]) => {
  const cartQueries = useQueries({
    queries:productId.map((id)=>{
        return {
            queryKey:["cartProducts",id],
            queryFn:()=>getSingleProduct(id)
        }
    })
  })
  return cartQueries
}

export default useGetAllCartProducts