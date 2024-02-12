export default async function getAllUsers ()  {
    const response = await fetch('https://fakestoreapi.com/users?limit=10')
    return response.json()
}