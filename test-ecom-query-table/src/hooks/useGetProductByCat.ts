import { useQuery } from "@tanstack/react-query"
import { productByCategory } from "../http/api/api"

const useGetProductByCat = (category:string) => {
  const {data,isLoading}= useQuery({
    queryKey:["category",`${category}`],
    queryFn:()=>productByCategory(category),
    enabled:!!category
  })
  return {data,isLoading}
}

export default useGetProductByCat