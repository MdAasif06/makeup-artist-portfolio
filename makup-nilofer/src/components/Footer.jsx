import { FaFacebookF, FaInstagram, FaPinterestP } from 'react-icons/fa6'
import { FiMail, FiPhone } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import { contactDetails } from '../data/siteData'

const Footer = () => {
  return (
    <footer className="border-t border-rose-100 bg-white">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 sm:px-6 md:grid-cols-3 lg:px-8">
        <div>
          <p className="font-serif text-2xl text-stone-900">Nilofer Beauty</p>
          <p className="mt-3 max-w-sm text-sm leading-6 text-stone-600">
            Elegant, camera-ready makeup artistry for brides, parties, and modern beauty campaigns.
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-stone-500">Quick Links</p>
          <div className="mt-3 flex flex-col gap-2 text-sm text-stone-600">
            <Link to="/about" className="hover:text-rose-600">About</Link>
            <Link to="/services" className="hover:text-rose-600">Services</Link>
            <Link to="/contact" className="hover:text-rose-600">Contact</Link>
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-stone-500">Contact</p>
          <div className="mt-3 space-y-2 text-sm text-stone-600">
            <p className="flex items-center gap-2"><FiPhone /> {contactDetails.phone}</p>
            <p className="flex items-center gap-2"><FiMail /> {contactDetails.email}</p>
            <p>{contactDetails.address}</p>
          </div>
          <div className="mt-4 flex items-center gap-3 text-stone-700">
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="rounded-full bg-rose-50 p-2 transition hover:bg-rose-100 hover:text-rose-600"><FaInstagram /></a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="rounded-full bg-rose-50 p-2 transition hover:bg-rose-100 hover:text-rose-600"><FaFacebookF /></a>
            <a href="https://pinterest.com" target="_blank" rel="noreferrer" className="rounded-full bg-rose-50 p-2 transition hover:bg-rose-100 hover:text-rose-600"><FaPinterestP /></a>
          </div>
        </div>
      </div>

      <div className="border-t border-rose-100 px-4 py-4 text-center text-sm text-stone-500">
        © {new Date().getFullYear()} Nilofer Beauty. Designed for a freelance makeup artist portfolio.
      </div>
    </footer>
  )
}

export default Footer
