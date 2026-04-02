import { motion as Motion } from "framer-motion";
import defaultImage from "../assets/default1.avif"

const ServiceCard = ({ service, featured = false }) => {
  return (
    <Motion.article
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 220, damping: 20 }}
      className={`overflow-hidden rounded-[1.75rem] border shadow-sm transition-all duration-300 ${
        featured
          ? "border-rose-200 bg-gradient-to-br from-white via-rose-50 to-amber-50 shadow-[0_18px_40px_-30px_rgba(190,24,93,0.45)]"
          : "border-stone-200 bg-white hover:border-rose-200 hover:shadow-[0_18px_40px_-30px_rgba(120,53,15,0.25)]"
      }`}
    >
      {/* 🔥 Image Section */}
      <div className="relative">
        <img
          src={service.image||defaultImage}
          alt={service.title}
          className="w-full h-58 object-cover transition-transform duration-300 hover:scale-105"
        />

        {/* Badge on Image */}
        {service.badge && (
          <span className="absolute top-3 left-3 rounded-full bg-rose-500 px-3 py-1 text-xs font-semibold text-white shadow-md">
            {service.badge}
          </span>
        )}
      </div>

      {/* 🔽 Content */}
      <div className="p-5">
        {/* Title + Price */}
        <div className="flex items-center justify-between">
          <h3 className="font-extrabold  font-serif text-xl text-stone-900">
            {service.title}
          </h3>
          <p className="text-lg font-semibold text-rose-600">
            {service.price}
          </p>
        </div>

        {/* Description */}
        <p className="mt-3 text-sm leading-6 text-stone-600">
          {service.description}
        </p>

        {/* Features */}
        <ul className="mt-4 space-y-2 text-sm text-stone-700">
          {service.features?.map((feature) => (
            <li key={feature} className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-rose-400" />
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </Motion.article>
  );
};

export default ServiceCard;