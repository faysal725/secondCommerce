import React from 'react'
import FormLoader from '../Loader/FormLoader'
export default function Form({title="form", children, isLoading=false}) {


  return (

          <div className="grid grid-cols-1 gap-6" >
            
            <h2 className="mt-20 my-6 flex items-center text-3xl leading-[115%] md:text-5xl md:leading-[115%] font-semibold text-neutral-900 dark:text-neutral-100 justify-center">
            {title}
            </h2>
              {isLoading ? <FormLoader  />: children}
            
          </div>
  )
}
