import { useQuery } from "@tanstack/react-query"
import { getAllProducts } from "../http/api/api"


function useGetAllProducts() {
  const {data,isError,isLoading} = useQuery({
    queryKey:["getAllProducts"],
    queryFn:getAllProducts
  })
  return {data,isError,isLoading}
}

export default useGetAllProducts