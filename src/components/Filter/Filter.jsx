'use client'
import React, { useState } from 'react'

export default function Filter({data = [], label="", updateInput, resetPage}) {

    const [form , setForm] = useState({
        search: null,
        fieldName: null,
    })
    

    const changeFilter = (e) => {
        
        form['fieldName'] = e.target.value
        setForm({...form})
        // console.log(form)
    }

function startSearching(e) {
  if (form['fieldName'] == 'Select One') {
    return 
  } 
  form['search']   = e.target.value
  setForm({...form})
  updateInput(form)
}


function reset() {
  form['search'] = null 
  form['fieldName'] = null
  console.log('asdfsdf')
  setForm({...form}) 
  updateInput(form)
}


  return (
    <div>
      <label htmlFor="phone-number" className="block text-sm font-medium leading-6 text-gray-900">
        {label}
      </label>
      <div className="relative mt-2 rounded-md shadow-sm flex border border-black/50">
        <div className="">
          <label htmlFor="filter" className="sr-only">
            {label}
          </label>
          <select
            id="filter"
            name="filter"
            autoComplete="filter"
            onChange={(e) => changeFilter(e)}
            className="h-full border  border-r-1 bg-transparent py-0 pl-3  text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
          >
              <option >Select One</option>
              {
                  data?.map((dt, index) => (
                        <option key={index}>{dt.field}</option>
                  ))
              }
            
          </select>
        </div>
        <input
          type="text"
          name="search-input"
          id="search-input"
          onChange={(e) => startSearching(e)}
          className="block w-full rounded-md  py-1.5 text-gray-900  placeholder:text-gray-400  sm:text-sm sm:leading-6 border-0"
          placeholder="Search ..."
        />
        <button onClick={() => resetPage()} className='p-2 bg-green-700 text-white text-xs'>Reset</button>
      </div>
      
    </div>
  )
}















