'use client'

import React, { useState } from 'react'
import FormInput from '@/components/Inputs/FormInput'
import Dropdown from '@/components/Inputs/Dropdown'
import PrimaryBtn from '@/components/Button/PrimaryBtn'
import Form from '@/components/Form/Form'
import usePost from '@/hooks/usePosts'
import CommonLayout from '../CommonLayout'


export default function Registration() {
    // for form submission 
    const { data, error, loading, postData } = usePost('/userdata/');
    const [userData, setUserData] = useState({})


    const submitData = async() => {
        console.log(userData)
        await postData(JSON.stringify(userData))
    }
    
  return (
    <CommonLayout>
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="" >

            <Form title="User Registration" >
                
                <label className="block">
                    <FormInput changedValue={(phone_number) => setUserData({...userData, "phone_number":phone_number })} type="number" label="phone" placeholder="Enter your phone" />
                </label>

                <label className="block">
                    <FormInput changedValue={(password) => setUserData({...userData, "password":password })} type="password" label="password" errorMsg={error["password"]} placeholder="Enter your password"/>
                </label>
                
                
                <label className="block">
                    <FormInput changedValue={(password) => setUserData({...userData, "password":password })} type="password" label="password" errorMsg={error["password"]} placeholder="Re-Enter your password"/>
                </label>
                
                <PrimaryBtn clickHandler={() => submitData()} title="Submit" />
            </Form>
        </div>

        </main>
    </CommonLayout>
  )
}
