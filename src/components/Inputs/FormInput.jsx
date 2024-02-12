



export default function FormInput({type= "text", value= "", placeholder="Input Something", changedValue, label="something", errorMsg=""}) {


  const ErrorComponent = () => {
    return(
      <p className="text-xs text-red-500 pt-1">{errorMsg}</p>
    )
  }
    return (
      <div>
        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900 uppercase">
          {label}
        </label>
        <div className="mt-2">
          <input
            onChange={(e) => changedValue(e.target.value)}
            type={type}
            name="email"
            id="email"
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-4"
            placeholder={placeholder}
          />
          {
            errorMsg !== "" ? ErrorComponent() : <></>
          }


          {/* <CheckIcon className="h-5 w-5 text-black" /> */}
        
        </div>
      </div>
    )
  }
  