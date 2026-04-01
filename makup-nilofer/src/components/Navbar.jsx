import { useState } from 'react'
import { HiBars3, HiXMark } from 'react-icons/hi2'
import { Link, NavLink } from 'react-router-dom'
import { navLinks } from '../data/siteData'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const linkClass = ({ isActive }) =>
    `rounded-full px-4 py-2 text-sm font-medium transition ${
      isActive
        ? 'bg-rose-100 text-rose-600'
        : 'text-stone-700 hover:bg-rose-50 hover:text-rose-600'
    }`

  return (
    <header className="sticky top-0 z-50 border-b border-rose-100/80 bg-white/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-rose-300 via-rose-200 to-amber-100 font-serif text-lg font-bold text-rose-700">
            N
          </span>
          <div>
            <p className="font-serif text-xl text-stone-900">Nilofar Makeover</p>
            <p className="text-xs uppercase tracking-[0.3em] text-stone-500">Makeup Artist</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-2 md:flex">
          {navLinks.map((link) => (
            <NavLink key={link.to} to={link.to} className={linkClass}>
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden md:block">
          <Link
            to="/contact"
            className="rounded-full bg-stone-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-rose-600"
          >
            Book Now
          </Link>
        </div>

        <button
          type="button"
          aria-label="Toggle navigation menu"
          onClick={() => setIsOpen((current) => !current)}
          className="inline-flex rounded-full border border-stone-200 p-2 text-stone-700 md:hidden"
        >
          {isOpen ? <HiXMark size={22} /> : <HiBars3 size={22} />}
        </button>
      </div>

      {isOpen ? (
        <div className="border-t border-rose-100 bg-white px-4 py-4 md:hidden">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={linkClass}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </NavLink>
            ))}
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="mt-2 rounded-full bg-stone-900 px-4 py-2.5 text-center text-sm font-semibold text-white"
            >
              Book Now
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  )
}

export default Navbar
