import { useQueryClient } from "@tanstack/react-query"
import { getSingleProduct } from "../http/api/api"

const usePrefetchWishlistProduct  = () => {
  const queryClient = useQueryClient()
  // Prefetch the product data
  const prefetchProduct = async (productId: number) => {
    await queryClient.prefetchQuery({
      queryKey: ['wishlistProducts', productId],
      queryFn: () => getSingleProduct(productId),
      staleTime: 28 * 60 * 1000 // 28 minutes
    })
  }

  return prefetchProduct
}

export default usePrefetchWishlistProduct 