import { motion as Motion } from 'framer-motion'

const ServiceCard = ({ service, featured = false }) => {
  return (
    <Motion.article
      whileHover={{ y: -6 }}
      transition={{ type: 'spring', stiffness: 220, damping: 20 }}
      className={`rounded-[1.75rem] border p-6 shadow-sm transition-all duration-300 ${
        featured
          ? 'border-rose-200 bg-gradient-to-br from-white via-rose-50 to-amber-50 shadow-[0_18px_40px_-30px_rgba(190,24,93,0.45)]'
          : 'border-stone-200 bg-white hover:border-rose-200 hover:shadow-[0_18px_40px_-30px_rgba(120,53,15,0.25)]'
      }`}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          {service.badge ? (
            <span className="inline-flex rounded-full bg-rose-100 px-3 py-1 text-xs font-semibold text-rose-600">
              {service.badge}
            </span>
          ) : null}
          <h3 className="mt-3 font-serif text-2xl text-stone-900">{service.title}</h3>
        </div>
        <p className="text-lg font-semibold text-rose-600">{service.price}</p>
      </div>

      <p className="mt-4 text-sm leading-6 text-stone-600">{service.description}</p>

      <ul className="mt-5 space-y-2 text-sm text-stone-700">
        {service.features.map((feature) => (
          <li key={feature} className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-rose-400" />
            {feature}
          </li>
        ))}
      </ul>
    </Motion.article>
  )
}

export default ServiceCard
