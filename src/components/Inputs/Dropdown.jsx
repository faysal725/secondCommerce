import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
// import { ChevronDownIcon } from '@heroicons/react/20/solid'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Dropdown({ value= "", placeholder="Input Something", changedValue, label="something"}) {

  return (
    <div>
      <label htmlFor="location" className="block text-sm font-medium leading-6 text-gray-900">
        {label}
      </label>
        {/* onChange={(e) => changedValue(e.target.value)} */}
      <select
        onChange={(e) => e.target.value == 'Active' ? changedValue(true) : changedValue(false)}
        id="location"
        name="location"
        className="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
        defaultValue="Canada"
      >
        <option>Active</option>
        <option>Inactive</option>
      </select>
    </div>
  )
}
