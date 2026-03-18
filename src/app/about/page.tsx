"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Clock,
  Award,
  MapPin,
  Phone,
  Truck,
  Paintbrush,
  Hammer,
  Droplets,
  Sparkles,
} from "lucide-react";
import AnimateOnScroll from "@/components/AnimateOnScroll";

const stats = [
  { icon: Clock, label: "Years Experience", value: "45+" },
  { icon: Award, label: "Pieces Restored", value: "100s" },
  { icon: MapPin, label: "Service Area", value: "Auckland-Wide" },
  { icon: Phone, label: "Consultation", value: "Free" },
];

const specialties = [
  {
    icon: Paintbrush,
    title: "French Polishing",
    description:
      "Traditional shellac-based finish applied by hand for a deep, warm lustre that honours the original character of fine furniture.",
  },
  {
    icon: Sparkles,
    title: "Stain Matching",
    description:
      "Mark's highly skilled craft of blending custom stains to seamlessly match existing timber tones — even across different wood species.",
  },
  {
    icon: Droplets,
    title: "Modern Coatings",
    description:
      "Two-pack polyurethane and water-based finishes for durability on high-use pieces like dining tables and commercial joinery.",
  },
  {
    icon: Hammer,
    title: "Structural Repairs",
    description:
      "From wobbly joints to broken rails, we repair and reinforce the skeleton of your furniture so it lasts another lifetime.",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white pt-[72px]">
      {/* Hero */}
      <section className="relative py-32 px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/DiningTable01.jpg"
            alt="EarthWood restoration workshop"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-white/80 backdrop-blur-sm" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <AnimateOnScroll>
            <nav className="flex items-center gap-2 text-sm text-[#111]/50 mb-8">
              <Link href="/" className="hover:text-[#111] transition-colors">
                Home
              </Link>
              <span>/</span>
              <span className="text-[#111]">About</span>
            </nav>
          </AnimateOnScroll>

          <AnimateOnScroll delay={0.1}>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-[#111] max-w-3xl">
              About EarthWood
            </h1>
          </AnimateOnScroll>
          <AnimateOnScroll delay={0.2}>
            <p className="mt-6 text-xl text-[#111]/60 max-w-2xl leading-relaxed">
              Over 45 years of passion, precision, and an unwavering respect for
              wood. Based in Helensville, serving all of Auckland.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Mark Profile */}
      <section className="py-24 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimateOnScroll direction="left">
              <div className="relative">
                <div className="rounded-3xl overflow-hidden">
                  <Image
                    src="/images/DSC04388-400x400.jpg"
                    alt="Mark Biggelaar — Founder of EarthWood"
                    width={400}
                    height={400}
                    className="w-full max-w-md object-cover rounded-3xl"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 glass rounded-2xl px-6 py-4">
                  <p className="text-sm font-semibold text-[#111]">
                    Mark Biggelaar
                  </p>
                  <p className="text-xs text-[#111]/50">
                    Founder & Master Craftsman
                  </p>
                </div>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll direction="right" delay={0.1}>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#111]">
                  A lifetime dedicated to the craft.
                </h2>
                <div className="mt-6 space-y-4 text-[#111]/70 leading-relaxed">
                  <p>
                    Mark Biggelaar has spent over 45 years mastering the art and
                    science of wood finishing. What began as a fascination with
                    timber has become a lifelong vocation — restoring, repairing,
                    and refinishing furniture to a standard that rivals the
                    original makers.
                  </p>
                  <p>
                    Based in Helensville, just north-west of Auckland, EarthWood
                    provides a comprehensive furniture restoration service across
                    the entire Auckland region. From treasured family heirlooms
                    to commercial fitouts, every piece receives the same
                    meticulous care and attention.
                  </p>
                  <p>
                    Mark specialises in stain matching, French polishing, modern
                    coatings, wax finishes, and structural repairs. His ability
                    to match existing stains and finishes is widely regarded as
                    exceptional — the result of decades of hands-on experience
                    with every timber species and finish type.
                  </p>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Specialties */}
      <section className="py-24 px-6 lg:px-8 surface-grey-light">
        <div className="max-w-7xl mx-auto">
          <AnimateOnScroll>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#111]">
                What we do best.
              </h2>
              <p className="mt-4 text-lg text-[#111]/60 max-w-xl mx-auto">
                Four decades of expertise distilled into every restoration.
              </p>
            </div>
          </AnimateOnScroll>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {specialties.map((item, i) => (
              <AnimateOnScroll key={item.title} delay={i * 0.1}>
                <div className="glass rounded-2xl p-6 h-full">
                  <div className="w-12 h-12 rounded-xl bg-[#111]/5 flex items-center justify-center mb-4">
                    <item.icon size={22} className="text-[#111]" />
                  </div>
                  <h3 className="text-lg font-semibold text-[#111]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-[#111]/60 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* The Van */}
      <section className="py-24 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimateOnScroll direction="left">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#111]">
                  Auckland-wide pickup and delivery.
                </h2>
                <p className="mt-6 text-[#111]/70 leading-relaxed">
                  Every Thursday, the EarthWood van makes its rounds across
                  Auckland — collecting pieces that need restoration and
                  delivering finished work back to their owners. It is a service
                  that makes the entire process effortless for you.
                </p>
                <p className="mt-4 text-[#111]/70 leading-relaxed">
                  Whether you are in Devonport, Manukau, or anywhere in between,
                  we will come to you. Just give us a call to arrange your
                  collection.
                </p>
                <div className="mt-8 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#111]/5 flex items-center justify-center">
                    <Truck size={18} className="text-[#111]" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[#111]">
                      Weekly Thursday Service
                    </p>
                    <p className="text-xs text-[#111]/50">
                      Free consultation on collection
                    </p>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll direction="right" delay={0.1}>
              <div className="rounded-3xl overflow-hidden">
                <Image
                  src="/images/Earthwood-Van1.jpg"
                  alt="The EarthWood van — Auckland-wide furniture pickup and delivery"
                  width={800}
                  height={600}
                  className="w-full object-cover rounded-3xl"
                />
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-24 px-6 lg:px-8 surface-grey-light">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <AnimateOnScroll key={stat.label} delay={i * 0.1}>
                <div className="glass-thick rounded-2xl p-8 text-center">
                  <div className="w-12 h-12 rounded-xl bg-[#111]/5 flex items-center justify-center mx-auto mb-4">
                    <stat.icon size={22} className="text-[#111]" />
                  </div>
                  <p className="text-3xl md:text-4xl font-bold text-[#111]">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-sm text-[#111]/50">{stat.label}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 lg:px-8">
        <AnimateOnScroll>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#111]">
              Ready to restore your piece?
            </h2>
            <p className="mt-4 text-lg text-[#111]/60">
              Get in touch for a free, no-obligation consultation. We would love
              to hear about your furniture.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-3.5 bg-[#111] text-white text-sm font-medium rounded-full hover:bg-[#333] transition-colors duration-200"
              >
                Get a Free Quote
              </Link>
              <a
                href="tel:0212881884"
                className="inline-flex items-center justify-center px-8 py-3.5 border border-[#111]/15 text-[#111] text-sm font-medium rounded-full hover:bg-[#111]/5 transition-colors duration-200"
              >
                <Phone size={16} className="mr-2" />
                021 288 1884
              </a>
            </div>
          </div>
        </AnimateOnScroll>
      </section>
    </div>
  );
}
