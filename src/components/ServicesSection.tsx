"use client";

import { Armchair, Building2, Paintbrush } from "lucide-react";
import AnimateOnScroll from "./AnimateOnScroll";

const services = [
  {
    icon: Armchair,
    title: "Domestic Restoration",
    description:
      "From cherished family heirlooms to antique finds, we bring your furniture back to its original glory with meticulous care.",
    items: [
      "Antique furniture repair",
      "Structural restoration",
      "Drawer & hinge repair",
      "Veneer replacement",
      "Colour matching",
    ],
  },
  {
    icon: Building2,
    title: "Commercial Timber",
    description:
      "Bespoke timber solutions for hospitality, retail, and corporate spaces. Quality craftsmanship at scale.",
    items: [
      "Bar tops & counters",
      "Shopfitting & joinery",
      "Office furniture refurb",
      "Heritage building work",
      "Bulk restoration projects",
    ],
  },
  {
    icon: Paintbrush,
    title: "Specialty Finishes",
    description:
      "Expert finishing techniques perfected over decades. Every surface treated with the precision it deserves.",
    items: [
      "French polishing",
      "Stain matching",
      "Wax finishing",
      "Two-pack polyurethane",
      "Modern spray coatings",
    ],
  },
];

export default function ServicesSection() {
  return (
    <section className="relative w-full surface-grey-light py-24 sm:py-32 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <AnimateOnScroll className="text-center mb-16 sm:mb-20">
          <p className="text-[11px] font-medium tracking-[0.3em] uppercase text-neutral-400 mb-3">
            What We Do
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-[#111]">
            Expert Restoration Services
          </h2>
        </AnimateOnScroll>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <AnimateOnScroll key={service.title} delay={index * 0.15}>
                <div className="group relative h-full rounded-[24px] p-8 sm:p-10 glass-thick transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_60px_rgba(255,255,255,0.2),0_12px_40px_rgba(0,0,0,0.08),inset_0_1px_0_rgba(255,255,255,0.7)]">
                  {/* Icon */}
                  <div className="mb-6 flex items-center justify-center w-12 h-12 rounded-xl bg-neutral-100 group-hover:bg-neutral-200/80 transition-colors duration-300">
                    <Icon
                      size={22}
                      strokeWidth={1.5}
                      className="text-[#111]"
                    />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold tracking-tight text-[#111] mb-3">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm leading-relaxed text-neutral-500 mb-6">
                    {service.description}
                  </p>

                  {/* Sub-services */}
                  <ul className="space-y-2.5 mb-8">
                    {service.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-2.5 text-sm text-neutral-600"
                      >
                        <span className="block w-1 h-1 rounded-full bg-neutral-400 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  {/* Link */}
                  <a
                    href="/contact"
                    className="inline-flex items-center text-sm font-medium text-[#111] group-hover:tracking-wide transition-all duration-300"
                  >
                    Learn more
                    <span className="ml-1 transition-transform duration-300 group-hover:translate-x-1">
                      &rarr;
                    </span>
                  </a>
                </div>
              </AnimateOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}
