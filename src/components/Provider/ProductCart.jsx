'use client'
import React, { useContext, useEffect, createContext, useState } from 'react'

export const ProductContext = createContext(null);

export default function ProductCart({ children }) {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        console.log(products)
      }, [products])

  return (
    <ProductContext.Provider value={{products, setProducts}}>
        {children}
    </ProductContext.Provider>
  )
}
