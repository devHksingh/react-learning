import { useQuery } from "@tanstack/react-query"
import { getSingleProduct } from "../http/api/api"


const useGetSingleProduct = (productId: number) => {
    const { data, isError, isLoading } = useQuery({
        queryKey: ["singleProduct", `${productId}`],
        queryFn: () => getSingleProduct(productId)
    })
    return { data, isError, isLoading }
}

export default useGetSingleProduct