'use client'

import React, { useState } from 'react'
import { EyeIcon, PencilIcon, TrashIcon } from "@heroicons/react/24/outline";
import { Dialog, Transition } from '@headlessui/react'
import CommonModal from '../Modal/CommonModal';
import Link from 'next/link';
// import useDestroy from 'hooks/useDestroy';

export default function ActionCell({rowId, viewLink, editLink, deleteLink, refresh}) {

    const [modal, setModal] = useState(false)
    // const [DeleteIt, handleClick] = useDestroy(deleteLink)

    const DeleteItem = () => {
      handleClick(deleteLink)
      setModal(false)
      refresh()
    }
  return (
    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm text-gray-900 sm:pl-6">
      <div className='h-20 w-full flex gap-3 items-center justify-center'>


          {
            viewLink !== "" ?          <Link href={viewLink}>
              <div className="group cursor-pointer flex flex-col items-center">
              <EyeIcon className="h-6 text-secondary-col/60 group-hover:text-blue/40" />
              <p className="text-xs text-black/80 group-hover:text-blue/40">
                view
              </p>
            </div>
          </Link> : <></>
          }

          {
          editLink !== "" ?  
            <Link href={editLink}>
                <div className="group cursor-pointer flex flex-col items-center">
              <PencilIcon
                className="h-6 text-secondary-col/60 group-hover:text-blue/40"
              />
              <p className="text-xs text-black/80 group-hover:text-blue/40">
                Edit
              </p>
              </div>
            </Link>
            :
            <></>
          }

          {
            deleteLink !== "" ?  
            <div
            className="group cursor-pointer flex flex-col items-center"
            onClick={() => setModal(true)}
            >
            <TrashIcon className="h-6 text-secondary-col/60 group-hover:text-blue/40" />
            <p className="text-xs text-black/80 group-hover:text-blue/40">
              Delete
            </p>
          </div>
            : 
            <></>
          }
        {
          modal ? 
          <CommonModal>
        
            <div className="mt-3 text-center sm:mt-5">
              <Dialog.Title as="h3" className="text-base font-semibold leading-6 text-gray-900">
                Alert
              </Dialog.Title>
              <div className="mt-2">
                <p className="text-sm text-gray-500">
                  Are you sure you want to delete this product !
                </p>
              </div>
            </div>
            <div className="mt-5 sm:mt-6 sm:grid sm:grid-flow-row-dense sm:grid-cols-2 sm:gap-3">
                      <button
                        type="button"
                        className="inline-flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 sm:col-start-2"
                        onClick={() => DeleteItem()}
                      >
                        Delete
                      </button>
                      <button
                        type="button"
                        className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:col-start-1 sm:mt-0"
                        onClick={() => setModal(false)}
                      >
                        Cancel
                      </button>
            </div>
          </CommonModal> 
          : 
          <></>
        }
        
      </div>
    </td>
  )
}
