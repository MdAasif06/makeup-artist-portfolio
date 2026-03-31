import PageBanner from '../components/PageBanner'
import ServiceCard from '../components/ServiceCard'
import { services } from '../data/siteData'

const ServicesPage = () => {
  return (
    <div className="space-y-10">
      <PageBanner
        eyebrow="Services & Pricing"
        title="Professional makeup services for weddings, events, and content days"
        description="Each booking includes a personalized consultation and a look tailored to your outfit, lighting, and occasion."
      />

      <section className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {services.map((service, index) => (
          <ServiceCard key={service.title} service={service} featured={index === 0} />
        ))}
      </section>

      <section className="rounded-[2rem] border border-rose-100 bg-gradient-to-r from-rose-50 to-amber-50 p-6 sm:p-8">
        <h2 className="font-serif text-3xl text-stone-900">Booking Notes</h2>
        <ul className="mt-4 space-y-2 text-sm leading-6 text-stone-700">
          <li>• Early morning, travel, and add-on hair styling can be quoted separately.</li>
          <li>• Bridal trials are available on request for a more personalized final look.</li>
          <li>• Group and destination wedding packages can be customized after consultation.</li>
        </ul>
      </section>
    </div>
  )
}

export default ServicesPage
