import { useQueries } from "@tanstack/react-query"
import { getSingleProduct } from "../http/api/api"


const useGetAllWishlistProducts = (productId:number[]) => {
  const wishListQueries = useQueries({
    queries:productId.map((id)=>{
        return{
            queryKey:['wishlistProducts',id],
            queryFn:()=>getSingleProduct(id)
        }
    })
  })
  return wishListQueries
}

export default useGetAllWishlistProducts