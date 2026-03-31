import { motion as Motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import beautyHero from '../assets/beauty-hero.svg'
import SectionHeading from '../components/SectionHeading'
import ServiceCard from '../components/ServiceCard'
import { contactDetails, featuredStats, services, testimonials } from '../data/siteData'

const HomePage = () => {
  const bookingLink = `https://wa.me/${contactDetails.whatsapp}?text=${encodeURIComponent(
    'Hello Nilofer, I want to book a makeup appointment.'
  )}`

  return (
    <div className="space-y-20 pb-8">
      {/* Hero section */}
      <section className="grid items-center gap-10 rounded-[2rem] bg-gradient-to-br from-rose-50 via-[#fffaf8] to-amber-50 px-6 py-8 sm:px-10 lg:grid-cols-[1.1fr_0.9fr] lg:py-12">
        <Motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-rose-500">
            Luxury Beauty Experience
          </p>
          <h1 className="mt-4 max-w-xl font-serif text-5xl leading-tight text-stone-900 sm:text-6xl">
            Timeless makeup artistry for your most special moments.
          </h1>
          <p className="mt-5 max-w-xl text-base leading-7 text-stone-600 sm:text-lg">
            Nilofer creates soft, glowing, photo-ready looks for brides, parties, and editorial shoots — with a signature finish that feels elevated and effortless.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={bookingLink}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-stone-900 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-rose-600"
            >
              Book on WhatsApp
            </a>
            <Link
              to="/services"
              className="rounded-full border border-stone-300 px-6 py-3 text-sm font-semibold text-stone-800 transition hover:border-rose-200 hover:bg-white"
            >
              View Services
            </Link>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {featuredStats.map((item) => (
              <div key={item.label} className="rounded-2xl border border-white/70 bg-white/70 p-4 shadow-sm backdrop-blur">
                <p className="text-2xl font-semibold text-stone-900">{item.value}</p>
                <p className="mt-1 text-sm text-stone-600">{item.label}</p>
              </div>
            ))}
          </div>
        </Motion.div>

        <Motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="absolute inset-0 -z-10 rounded-[2rem] bg-rose-200/40 blur-3xl" />
          <img
            src={beautyHero}
            alt="Elegant beauty-themed banner for the makeup artist portfolio"
            className="mx-auto w-full max-w-md rounded-[2rem] border border-white/80 bg-white/80 shadow-[0_25px_70px_-35px_rgba(190,24,93,0.45)]"
          />
          <div className="absolute bottom-4 left-4 rounded-2xl bg-white/90 px-4 py-3 shadow-lg backdrop-blur">
            <p className="text-xs uppercase tracking-[0.3em] text-stone-500">Available for</p>
            <p className="font-semibold text-stone-900">Bridal • Events • Shoots</p>
          </div>
        </Motion.div>
      </section>

      <section className="space-y-8">
        <SectionHeading
          eyebrow="Featured Services"
          title="Beauty packages crafted with elegance and detail"
          description="Choose from polished signature looks designed for long wear, beautiful photography, and a confident finish."
        />

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {services.slice(0, 3).map((service, index) => (
            <ServiceCard key={service.title} service={service} featured={index === 0} />
          ))}
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-[1fr_0.95fr]">
        <div className="rounded-[2rem] border border-stone-200 bg-white p-6 shadow-sm sm:p-8">
          <SectionHeading
            eyebrow="Why Clients Choose Nilofer"
            title="Refined beauty with a calm, personalized experience"
            description="From the first consultation to the final touch-up, every look is tailored to your features, outfit, and event style."
          />

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {[
              'Personalized skin prep and shade matching',
              'Premium, long-wear products for comfort',
              'Elegant glam that still feels like you',
              'A warm, punctual, and stress-free booking experience',
            ].map((point) => (
              <div key={point} className="rounded-2xl bg-rose-50 p-4 text-sm leading-6 text-stone-700">
                {point}
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[2rem] border border-rose-100 bg-gradient-to-br from-rose-50 to-amber-50 p-6 sm:p-8">
          <SectionHeading
            eyebrow="Client Love"
            title="Kind words from recent bookings"
            description="A few lovely notes shared by brides and event clients."
          />

          <div className="mt-8 space-y-4">
            {testimonials.map((testimonial) => (
              <blockquote key={testimonial.name} className="rounded-2xl bg-white/90 p-5 shadow-sm">
                <p className="text-sm leading-6 text-stone-700">“{testimonial.quote}”</p>
                <footer className="mt-3 text-sm font-semibold text-stone-900">— {testimonial.name}</footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage
