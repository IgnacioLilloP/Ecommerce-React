import React from "react"

const callouts = [
    {
      name: 'Solar',
      description: 'Al tomar toda la energía que necesita solo de la luz, nunca necesitara un cambio de batería.',
      imageSrc: 'https://www.seikowatches.com/es-es/-/media/Images/GlobalEn/Seiko/Home/products/seikopremier/seikopremier-solar/premier_center_solar.jpg?mh=500&mw=900&hash=B78909DA775BF256328B18404239F332://tailwindui.com/img/ecommerce-images/home-page-02-edition-01.jpg',
      imageAlt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
      href: '#',
    },
    {
      name: 'Cuarzo',
      description: 'Bellamente diseñados y terminados con alta precisión.',
      imageSrc: 'https://www.seikowatches.com/es-es/-/media/Images/GlobalEn/Seiko/Home/products/seikopremier/seikopremier-quartz/premier_center_quartz.jpg?mh=500&mw=900&hash=A0A872DEF4FE0399A41564A57A46BE31',
      imageAlt: 'Relojes mecanicos bellamente diseñados y terminados con alta precisión. ',
      href: '#',
    },
    {
      name: 'Mecánicos',
      description: 'Combina un sentido estético japonés con la artesanía tradicional y las habilidades de relojería de Seiko',
      imageSrc: 'https://www.seikowatches.com/es-es/-/media/Images/GlobalEn/Seiko/Home/products/seikopremier/seikopremier-mechanical/premier_center_mecha.jpg?mh=500&mw=900&hash=EE44FF4CFC52E42F44D0131FA919CF59',
      imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
      href: '#',
    },
  ]
  
  export default function Category() {
    return (
        <div className="container mx-auto">
      <div className="bg-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
            <h2 className="text-2xl font-bold text-gray-900">Colecciones</h2>
  
            <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
              {callouts.map((callout) => (
                <div key={callout.name} className="group relative">
                  <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                    <img
                      src={callout.imageSrc}
                      alt={callout.imageAlt}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                  <h3 className="mt-6 text-sm text-gray-500">
                    <a href={callout.href}>
                      <span className="absolute inset-0" />
                      {callout.name}
                    </a>
                  </h3>
                  <p className="text-base font-semibold text-gray-900">{callout.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      </div>
    )
  }