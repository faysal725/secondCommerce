
'use client'

import useGet from '@/hooks/useGet';
import React, { useEffect } from 'react'
import Link from 'next/link'


export default function User() {
  const { data, error, loading, fetchData } = useGet();
  const api = '/userdata/'


  useEffect(() => {
    fetchData(api);
  }, [])

  useEffect(() => {
    console.log(data)
  }, [])
  
  return (
    
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <header className='text-2xl font-bold'>Users</header>
        
        
        {/* all users  */}
        <section className='space-y-4 w-full flex flex-wrap gap-2'>
            

          {!loading && data.map((user, index) => (
            <Link key={index} href={"/edit/"+user.id} className='border border-blue-500 p-2 flex gap-x-3 items-center cursor-pointer'>
              <div className='h-20 w-20 border border-4 p-1'>
                <img src={user.profile_picture} className='h-full w-full' alt="" />
              </div>
              <div className=''>
                <div className=''>
                  <p className='font-extrabold uppercase'>{user.name}</p>
                  <p>{user.phone_number}</p>
                </div>
                
                <div className='flex  gap-x-3'>
                  <p>{user.birthdate}</p>
                  <p className='text-xs bg-blue-600 p-1 text-white rounded-lg'>{user.active_status ? 'Active' : 'Inactive'}</p>
                </div>
              </div>
            </Link>
          ))}
        </section>
    </main>
  )
}
