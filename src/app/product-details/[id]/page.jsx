
import getProductDetails from '@/lib/getProductDetails'

import { CheckIcon, QuestionMarkCircleIcon, StarIcon } from '@heroicons/react/20/solid'
import { RadioGroup } from '@headlessui/react'
import { ShieldCheckIcon } from '@heroicons/react/24/outline'
import CommonLayout from '@/app/commonLayout'


const reviews = { average: 4, totalCount: 1624 }

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default async function productDetails({params}) {
  const {id} = params
  const details = await getProductDetails(id)
  return (
    <CommonLayout>
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          {/* Product details */}
          <div className="lg:max-w-lg lg:self-end">


            <div className="mt-4">
              <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{details.title}</h1>
            </div>

            <section aria-labelledby="information-heading" className="mt-4">
              <h2 id="information-heading" className="sr-only">
                Product information
              </h2>

              <div className="flex items-center">
                <p className="text-lg text-gray-900 sm:text-xl">${details.price}</p>

                <div className="ml-4 border-l border-gray-300 pl-4">
                  <h2 className="sr-only">Reviews</h2>
                  <div className="flex items-center">
                    <div>
                      <div className="flex items-center">
                        {[0, 1, 2, 3, 4].map((rating) => (
                          <StarIcon
                            key={rating}
                            className={classNames(
                              reviews.average > rating ? 'text-yellow-400' : 'text-gray-300',
                              'h-5 w-5 flex-shrink-0'
                            )}
                            aria-hidden="true"
                          />
                        ))}
                      </div>
                      <p className="sr-only">{reviews.average} out of 5 stars</p>
                    </div>
                    <p className="ml-2 text-sm text-gray-500">{details.rating["count"]} reviews</p>
                  </div>
                </div>
              </div>

              <div className="mt-4 space-y-6">
                <p className="text-base text-gray-500">{details.description}</p>
              </div>

              <div className="mt-6 flex items-center">
                <CheckIcon className="h-5 w-5 flex-shrink-0 text-green-500" aria-hidden="true" />
                <p className="ml-2 text-sm text-gray-500">In stock and ready to ship</p>
              </div>
            </section>
          </div>

          {/* Product image */}
          <div className="mt-10 lg:col-start-2 lg:row-span-2 lg:mt-0 lg:self-center">
            <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg">
              <img src={details.image} alt={details.title} className="h-full w-full object-cover object-center" />
            </div>
          </div>

          {/* Product form */}
          <div className="mt-10 lg:col-start-1 lg:row-start-2 lg:max-w-lg lg:self-start">
            <section aria-labelledby="options-heading">



                <div className="mt-10">
                  <button
                    type="submit"
                    className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50"
                  >
                    Add to cart
                  </button>
                </div>
            </section>
          </div>
        </div>
      </div>
    </CommonLayout>
  )
}
