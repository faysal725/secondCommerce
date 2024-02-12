import Card from '@/components/Card/Card'
import getAllProducts from '@/lib/getAllProducts'
import React from 'react'


export default async function ProductContainer() {
    const products = await getAllProducts()
    
  return (
    <section className="mx-auto max-w-7xl">
        
        <h2 className="text-4xl font-bold tracking-tight text-gray-900 text-center pt-5" id="latest">Latest Products</h2>
        <br /><br />
        <ul className="mt-6 flex flex-wrap	justify-center gap-6">

            {
                products.map((product, index) => (
                    <Card productDetails={product} key={index}/>
                ))
            }
            
        </ul>
    </section>
  )
}
