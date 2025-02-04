import axios from "axios"

const productFetch = axios.create({
    baseURL: 'https://dummyjson.com/products'
})

const getAllProducts = async () => {
    const res = await productFetch.get('')
    // console.log(res.data.products)
    return res.data.products
}
const getSingleProduct = async (productId: number) => {
    const res = await productFetch.get(`/${productId}`)
    
    // console.log(res.data)
    return res.data
}
const productByCategory = async (category: string) => {
    console.log(category);
    
    const res = await productFetch.get(`/category/${category}`, {
        params: { q: category }
    })
    console.log("productByCategory",res.data.products)
    return res.data.products
}

export {
    getAllProducts,
    getSingleProduct,
    productByCategory
}

/*
add to cart -> put /patch
get all products
get single product
get product by category
'https://dummyjson.com/products?limit=10&skip=10&select=title,price'
Deleting a cart
store data in redux => get all products
secarch product by id
const fetchQ = async ()=>{
    const data = await productByCategory("phone")
    console.log(data)
    
  }
  useEffect(()=>{
    fetchQ()
  },[])
*/