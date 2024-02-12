
import React from 'react'
import Table from   '../../../components/Table/Table'
import ActionCell from '../../../components/Table/ActionCell';
// import Pagination from '../../../components/Pagination/Pagination';
import Filter from '../../../components/Filter/Filter';
import Link from 'next/link';
import getAllProducts from '@/lib/getAllProducts';


export default async function page() {
    const products = await getAllProducts()
    
    const pageData = {
        title: "products",
        link:   "/admin/products/create"
    }
    let tableHeader = [
        { field: "image_path", title: "Image", sortable: false, arrange: true },
        { field: "title", title: "title", sortable: true, arrange: true },
        { field: "price", title: "Price", sortable: false, arrange: false },
        { field: "category", title: "category", sortable: false, arrange: false },
    ]

    let tableHeader2 = [
        { field: "featured", title: "featured", sortable: false, arrange: true },
        { field: "name", title: "Name", sortable: true, arrange: true },
    ]
  return (
    <div>
        
        <div className='flex justify-between items-end flex-wrap pb-5 pl-5 gap-2'>
           <Filter data={tableHeader2} label={'All Products'} />
           <Link className='bg-green-700 hover:bg-green-300 hover:text-green-700 text-xs p-2 rounded-lg text-white' href={pageData.link}>Add New Product</Link>
            
        </div>
        <div>
            
            <Table headers={tableHeader} title="Products">
                <tbody className="divide-y divide-gray-200 bg-white">


                    {products.map((product, index) => (
                        <tr key={index} >
                            <ActionCell 
                                rowId={product['id']} 
                                viewLink={'asdf'}
                                editLink={'asdf'}
                                deleteLink={'sdf'}
                            />
                            <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 flex justify-center">
                            
                                <div className="w-20 h-20">
                                    <img
                                    src={product["image"]}
                                    className="w-full h-full object-fit flex-shrink-0 border p-1 border-darkGray/40 rounded-md"
                                    />
                                </div>
                            </td>
                            <td  className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 text-center">
                            { product["title"].substring(0, 20)}
                            </td>

                            <td  className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 text-center">
                            { 
                                product["price"]
                            }
                            </td>
                           
                            <td  className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 text-center">
                            { 
                                product["category"]
                            }
                            </td>
                        </tr>
                    ))}

                </tbody>
            </Table>
        </div>
    </div>
  )
}
