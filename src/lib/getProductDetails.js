export default async function getProductDetails (id)  {

    const response = await fetch('https://fakestoreapi.com/products/'+id)
    return response.json()
}