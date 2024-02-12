
import React from 'react'
import Table from   '../../../components/Table/Table'
import ActionCell from '../../../components/Table/ActionCell';
// import Pagination from '../../../components/Pagination/Pagination';
import Filter from '../../../components/Filter/Filter';
import Link from 'next/link';
import getAllProducts from '@/lib/getAllProducts';
import getAllUsers from '@/lib/getAllUsers';


export default async function page() {
    const allUsers = await getAllUsers()
    
    const pageData = {
        title: "Customers",
        link:   "/admin/products/create"
    }
    let tableHeader = [
        { field: "username", title: "username", sortable: false, arrange: true },
        { field: "email", title: "email", sortable: true, arrange: true },
        { field: "phone", title: "phone", sortable: false, arrange: false },
        { field: "address", title: "address", sortable: false, arrange: false },
    ]

    let tableHeader2 = [
        { field: "featured", title: "featured", sortable: false, arrange: true },
        { field: "name", title: "Name", sortable: true, arrange: true },
    ]
  return (
    <div>
        
        <div className='flex justify-between items-end flex-wrap pb-5 pl-5 gap-2'>
           <Filter data={tableHeader2} label={'All Customers'} />
           <Link className='bg-green-700 hover:bg-green-300 hover:text-green-700 text-xs p-2 rounded-lg text-white' href={pageData.link}>Add New Customer</Link>
        </div>
        <div>
            
            <Table headers={tableHeader} title="Customers">
                <tbody className="divide-y divide-gray-200 bg-white">


                    {allUsers.map((user, index) => (
                        <tr key={index} >
                            <ActionCell 
                                rowId={user['id']} 
                                viewLink={'asdf'}
                                editLink={'asdf'}
                                deleteLink={'sdf'}
                            />

                            <td  className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 text-center">
                            { user["username"]}
                            </td>

                            <td  className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 text-center">
                            { 
                                user["email"]
                            }
                            </td>
                           

                            
                            <td  className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 text-center">
                            { 
                                user["phone"]
                            }
                            </td>
                            
                            <td  className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 text-center">
                            { 
                                user["address"]["city"]
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
