'use client'
import Footer from '@/components/Footer/Footer'
import Navbar from '@/components/Navbar/Navbar'
import React, { useContext, useEffect, createContext, useState } from 'react'

export const CartContext = createContext(null);

export default function CommonLayout({ children }) {

  
  const [product, setProduct] = useState(null);
  const [totalInfo, setTotalInfo] = useState({
    allProducts:[],
    totalCost:0, 
  })
  

  useEffect(() => {

    if (product) {
      totalProduct()
    }
    
  }, [product])

  
  useEffect(() => {
      calculateTotal()
  }, [totalInfo.allProducts]);


  const calculateTotal = () => {
    var totalPrice = 0
    totalInfo.allProducts.map((prd, index) => {
      console.log(totalPrice, prd.productDetails.price)
      totalPrice = totalPrice + prd.productDetails.price
    })
    setTotalInfo((prevState) => ({
      ...prevState,
      totalCost: totalPrice,
    }));
    
  }


  const totalProduct = () => {
    var insertableProduct = []

      if (totalInfo.allProducts.length > 0) {
        let prdIndex = totalInfo.allProducts.findIndex((data) => data.productDetails["id"] == product.id)
        if (prdIndex >= 0) {
          totalInfo.allProducts[prdIndex]["count"] += 1
          console.log(totalInfo.allProducts[prdIndex]["count"])

          setTotalInfo((prevState) => ({
            ...prevState,
            allProducts: [...totalInfo.allProducts],
          }));

        }else{
          insertableProduct.push({
            productDetails: product,
            count: 1
          })
          setTotalInfo((prevState) => ({
            ...prevState,
            allProducts: [...prevState['allProducts'], ...insertableProduct],
            }));
        }
        
      }else{
        insertableProduct.push({
          productDetails: product,
          count: 1
        })

        setTotalInfo((prevState) => ({
          ...prevState,
          allProducts: insertableProduct,
          }));

      }

  }




  return (
    <CartContext.Provider value={{product, setProduct, totalInfo}}>
        <Navbar />

          <div className='pb-28'>
            {children}
          </div>
        <Footer/>
    </CartContext.Provider>
  )
}
