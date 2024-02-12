export default async function getAllProducts ()  {
    const response = await fetch('https://fakestoreapi.com/products?limit=10')
    return response.json()
}