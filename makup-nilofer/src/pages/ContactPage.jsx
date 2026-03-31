import { useState } from 'react'
import { FaFacebookF, FaInstagram, FaPinterestP, FaWhatsapp } from 'react-icons/fa6'
import { FiMail, FiPhone } from 'react-icons/fi'
import PageBanner from '../components/PageBanner'
import { contactDetails } from '../data/siteData'

const ContactPage = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((current) => ({ ...current, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const whatsappNumber = (contactDetails.whatsapp || contactDetails.phone).replace(/\D/g, '')
    const whatsappMessage = [
      'Hello Nilofer, I would like to book a makeup appointment.',
      `Name: ${formData.name}`,
      `Email: ${formData.email}`,
      `Message: ${formData.message}`,
    ].join('\n')

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`

    window.open(whatsappUrl, '_blank', 'noopener,noreferrer')
    setSubmitted(true)
    setFormData({ name: '', email: '', message: '' })
  }

  const directWhatsappLink = `https://wa.me/${contactDetails.whatsapp}?text=${encodeURIComponent(
    'Hello Nilofer, I want to enquire about a makeup booking.'
  )}`

  return (
    <div className="space-y-10">
      <PageBanner
        eyebrow="Get in Touch"
        title="Let’s create your perfect beauty look"
        description="Send a quick message for bookings, availability, and customized quotes. Replies are usually sent within one business day."
      />

      <section className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <form
          onSubmit={handleSubmit}
          className="rounded-[2rem] border border-stone-200 bg-white p-6 shadow-sm sm:p-8"
        >
          <h2 className="font-serif text-3xl text-stone-900">Contact Form</h2>
          <p className="mt-3 text-sm leading-6 text-stone-600">
            Share your event date, preferred style, and location to receive a tailored response.
          </p>

          <div className="mt-6 space-y-4">
            <label className="block text-sm font-medium text-stone-700">
              Name
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="mt-2 w-full rounded-2xl border border-stone-200 bg-stone-50 px-4 py-3 outline-none transition focus:border-rose-300 focus:bg-white"
                placeholder="Your name"
              />
            </label>

            <label className="block text-sm font-medium text-stone-700">
              Email
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="mt-2 w-full rounded-2xl border border-stone-200 bg-stone-50 px-4 py-3 outline-none transition focus:border-rose-300 focus:bg-white"
                placeholder="you@example.com"
              />
            </label>

            <label className="block text-sm font-medium text-stone-700">
              Message
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                className="mt-2 w-full rounded-2xl border border-stone-200 bg-stone-50 px-4 py-3 outline-none transition focus:border-rose-300 focus:bg-white"
                placeholder="Tell me about your event and the look you want"
              />
            </label>
          </div>

          <button
            type="submit"
            className="mt-6 rounded-full bg-stone-900 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-rose-600"
          >
            Send on WhatsApp
          </button>

          {submitted ? (
            <p className="mt-4 rounded-2xl bg-emerald-50 px-4 py-3 text-sm text-emerald-700">
              Your message has been prepared and WhatsApp should open in a new tab.
            </p>
          ) : null}
        </form>

        <aside className="rounded-[2rem] border border-rose-100 bg-gradient-to-br from-rose-50 to-amber-50 p-6 shadow-sm sm:p-8">
          <h2 className="font-serif text-3xl text-stone-900">Contact Details</h2>
          <div className="mt-6 space-y-4 text-sm text-stone-700">
            <p className="flex items-center gap-3"><FiPhone className="text-rose-500" /> {contactDetails.phone}</p>
            <p className="flex items-center gap-3"><FiMail className="text-rose-500" /> {contactDetails.email}</p>
            <p className="flex items-center gap-3"><FaWhatsapp className="text-rose-500" /> WhatsApp Booking Available</p>
            <p>{contactDetails.address}</p>
          </div>

          <a
            href={directWhatsappLink}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-green-600 px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-green-700"
          >
            <FaWhatsapp /> Chat on WhatsApp
          </a>

          <div className="mt-8">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-stone-500">Social Media</p>
            <div className="mt-4 flex gap-3 text-stone-700">
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="rounded-full bg-white p-3 shadow-sm transition hover:-translate-y-0.5 hover:text-rose-600"><FaInstagram /></a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="rounded-full bg-white p-3 shadow-sm transition hover:-translate-y-0.5 hover:text-rose-600"><FaFacebookF /></a>
              <a href="https://pinterest.com" target="_blank" rel="noreferrer" className="rounded-full bg-white p-3 shadow-sm transition hover:-translate-y-0.5 hover:text-rose-600"><FaPinterestP /></a>
            </div>
          </div>
        </aside>
      </section>
    </div>
  )
}

export default ContactPage
