import { motion as Motion } from 'framer-motion'
import aboutStudio from '../assets/nilofar.jpeg'
import PageBanner from '../components/PageBanner'
import { certifications, skills } from '../data/siteData'

const AboutPage = () => {
  return (
    <div className="space-y-10">
      <PageBanner
        eyebrow="About the Artist"
        title="A beauty professional focused on soft Glamour and Confidence"
        description="With a calm approach and an eye for detail, Nilofar blends skin-first artistry with elegant styling for weddings, events, and modern photo shoots."
      />

      <section className="grid gap-8 lg:grid-cols-[1fr_1.1fr]">
        <Motion.img
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.45 }}
          src={aboutStudio}
          alt="Makeup artist studio setup illustration"
          className="w-full rounded-[2rem] border border-rose-100 bg-white p-4 shadow-sm"
        />

        <Motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.45 }}
          className="rounded-[2rem] border border-stone-200 bg-white p-6 shadow-sm sm:p-8"
        >
          <h2 className="font-serif text-3xl text-stone-900 font-bold">Meet Nilofar Jahan</h2>
          <p className="mt-4 text-base leading-7 text-stone-600">
            Nilofar is a freelance makeup artist known for radiant bridal beauty, polished glam, and an experience that feels luxurious from start to finish. Her signature style pairs flawless skin, lifted eyes, and soft definition to keep every look timeless.
          </p>
          <p className="mt-4 text-base leading-7 text-stone-600">
            Over the years, she has worked with brides, fashion creatives, and private clients who want makeup that enhances their natural beauty while staying fresh throughout the day.
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl bg-rose-50 p-4">
              <p className="text-2xl font-semibold text-stone-900">9+</p>
              <p className="text-sm text-stone-600">Years experience</p>
            </div>
            <div className="rounded-2xl bg-rose-50 p-4">
              <p className="text-2xl font-semibold text-stone-900">400+</p>
              <p className="text-sm text-stone-600">Clients styled</p>
            </div>
            <div className="rounded-2xl bg-rose-50 p-4">
              <p className="text-2xl font-semibold text-stone-900">100%</p>
              <p className="text-sm text-stone-600">Personal attention</p>
            </div>
          </div>
        </Motion.div>
      </section>

      <section className="grid gap-8 lg:grid-cols-2">
        <div className="rounded-[2rem] border border-stone-200 bg-white p-6 shadow-sm sm:p-8">
          <h3 className="font-serif text-2xl text-stone-900">Skills & Expertise</h3>
          <div className="mt-5 flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span key={skill} className="rounded-full bg-rose-50 px-4 py-2 text-sm text-stone-700">
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="rounded-[2rem] border border-stone-200 bg-white p-6 shadow-sm sm:p-8">
          <h3 className="font-serif text-2xl text-stone-900">Certifications</h3>
          <ul className="mt-5 space-y-4 text-sm leading-6 text-stone-700">
            {certifications.map((item) => (
              <li key={item} className="rounded-2xl bg-amber-50 p-4">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  )
}

export default AboutPage
