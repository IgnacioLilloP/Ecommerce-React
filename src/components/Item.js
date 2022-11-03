import React from "react"
import { Link } from "react-router-dom"


function Item({ item }) {
  const url = "../item/" + item.id
  return (

    
    <div>
    <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
      <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-7 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-10">
          <div className="group relative"></div>
          <div key={item.id} className="group relative">
            <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
              <img
                src={item.urlPicture}
                alt={item.imageAlt}
                className="h-full w-full object-cover object-center lg:h-full lg:w-full"
              />
            </div>
            <div className="mt-4 flex justify-between">
              <div>
                <h3 className="text-sm text-gray-700">
                  <a href={url}>
                    <span aria-hidden="true" className="absolute inset-0" />
                    {item.title}
                  </a>
                </h3>
                <p className="mt-1 text-sm text-gray-500">{item.description}</p>
              </div>
              <p className="text-sm font-medium text-gray-900">${item.price}</p>
            </div>
            <div>
                    <button>
                    <Link to={url}>Comprar</Link>
                    </button>
            </div>
          </div>
      </div>
    </div>
  </div>
  )


}
  export default Item