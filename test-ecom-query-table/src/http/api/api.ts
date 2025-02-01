import axios from "axios"

const productFetch = axios.create({
    baseURL: 'https://dummyjson.com/products'
})

const getAllProducts = async () => {
    const res = await productFetch.get('')
    return res.data
}
const getSingleProduct = async (productId: number) => {
    const res = await productFetch.get(`/${productId}`)
    return res.data
}
const productByCategory = async (category: string) => {
    const res = await productFetch.get('/search', {
        params: { q: category }
    })
    return res.data
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

*/