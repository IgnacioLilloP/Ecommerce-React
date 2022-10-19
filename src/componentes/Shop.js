import React from "react";


const products = [
    {
      id: 1,
      name: 'SPB303',
      href: '#',
      imageSrc: "img/1.png",
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$1.590.000',
      color: 'Línea Prestige',
    },
    {
      id: 2,
      name: 'SPB319',
      href: '#',
      imageSrc: "img/2.png",
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$1.750.000',
      color: 'Línea Prestige',
    },
    {
      id: 3,
      name: 'SRPH89',
      href: '#',
      imageSrc: "img/3.png",
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$300.000',
      color: 'Línea Básica',
    },
    {
      id: 4,
      name: 'SSA447',
      href: '#',
      imageSrc: "img/4.png",
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$670.000',
      color: 'Línea Básica',
    }

    // More products...
  ]
  
  export default function Shop() {
    return (
      <div>
        <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">Novedades</h2>
  
          <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-7 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-10">
            {products.map((product) => (
              <div key={product.id} className="group relative">
                <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <a href={product.href}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.name}
                      </a>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">{product.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }