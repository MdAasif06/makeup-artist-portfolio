const SectionHeading = ({ eyebrow, title, description, align = 'left' }) => {
  const alignment = align === 'center' ? 'text-center mx-auto' : 'text-left'

  return (
    <div className={`max-w-2xl ${alignment}`}>
      {eyebrow ? (
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-rose-500">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-serif text-3xl text-stone-900 sm:text-4xl">{title}</h2>
      {description ? (
        <p className="mt-4 text-base leading-7 text-stone-600 sm:text-lg">{description}</p>
      ) : null}
    </div>
  )
}

export default SectionHeading
