import React from 'react'

const FormLoader = () => {
    return(
      <div className="border border-blue-300 shadow rounded-md p-4  w-full mx-auto">
        <div className="animate-pulse flex space-x-4">
          <div className="flex-1 space-y-6 py-1">
            <div className="h-7 bg-slate-700 rounded"></div>
            <div className="space-y-8">
              <div className="grid grid-cols-3 gap-4">
                <div className="h-5 bg-slate-700 rounded col-span-1"></div>
                <div className="h-7 bg-slate-700 rounded col-span-3"></div>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="h-5 bg-slate-700 rounded col-span-1"></div>
                <div className="h-7 bg-slate-700 rounded col-span-3"></div>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="h-5 bg-slate-700 rounded col-span-1"></div>
                <div className="h-7 bg-slate-700 rounded col-span-3"></div>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div className="h-5 bg-slate-700 rounded col-span-1"></div>
                <div className="h-7 bg-slate-700 rounded col-span-3"></div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    )
  }
  export default FormLoader  