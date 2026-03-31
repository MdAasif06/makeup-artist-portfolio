import { motion as Motion } from 'framer-motion'

const PageBanner = ({ eyebrow, title, description }) => {
  return (
    <Motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
      className="overflow-hidden rounded-[2rem] border border-rose-100 bg-gradient-to-br from-rose-50 via-white to-amber-50 px-6 py-12 shadow-[0_20px_60px_-35px_rgba(190,24,93,0.35)] sm:px-10"
    >
      <p className="text-xs font-semibold uppercase tracking-[0.35em] text-rose-500">
        {eyebrow}
      </p>
      <h1 className="mt-4 max-w-3xl font-serif text-4xl text-stone-900 sm:text-5xl">
        {title}
      </h1>
      <p className="mt-4 max-w-2xl text-base leading-7 text-stone-600 sm:text-lg">
        {description}
      </p>
    </Motion.section>
  )
}

export default PageBanner
