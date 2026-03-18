"use client";

import Image from "next/image";
import Link from "next/link";
import { MapPin, Truck, Phone, CalendarDays } from "lucide-react";
import AnimateOnScroll from "./AnimateOnScroll";

const bullets = [
  { icon: MapPin, text: "Based in Helensville, Auckland" },
  { icon: Truck, text: "Auckland-wide pickup & delivery" },
  { icon: Phone, text: "Free consultation" },
  { icon: CalendarDays, text: "Thursday weekly collection run" },
];

export default function AboutPreview() {
  return (
    <section className="relative w-full bg-white py-24 sm:py-32 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Column */}
          <AnimateOnScroll direction="left">
            <div className="relative">
              {/* Main Image */}
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/Earthwood-Van1.jpg"
                  alt="EarthWood workshop van"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>

              {/* Inset Photo */}
              <div className="absolute -bottom-6 -right-4 sm:-right-6 w-28 h-28 sm:w-36 sm:h-36 rounded-2xl overflow-hidden border-4 border-white shadow-lg">
                <Image
                  src="/images/DSC04388-400x400.jpg"
                  alt="Mark Biggelaar at work"
                  fill
                  className="object-cover"
                  sizes="144px"
                />
              </div>

              {/* Years Badge */}
              <div className="absolute -top-4 -left-4 sm:-top-5 sm:-left-5 w-20 h-20 sm:w-24 sm:h-24 rounded-full glass-thick flex flex-col items-center justify-center shadow-lg">
                <span className="text-2xl sm:text-3xl font-bold text-[#111] leading-none">
                  45+
                </span>
                <span className="text-[9px] sm:text-[10px] font-medium tracking-[0.2em] uppercase text-neutral-500 mt-0.5">
                  Years
                </span>
              </div>
            </div>
          </AnimateOnScroll>

          {/* Text Column */}
          <AnimateOnScroll direction="right" delay={0.15}>
            <div>
              <p className="text-[11px] font-medium tracking-[0.3em] uppercase text-neutral-400 mb-3">
                About EarthWood
              </p>
              <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-[#111] mb-6">
                Craftsmanship that speaks <br className="hidden sm:block" />
                for itself.
              </h2>

              <p className="text-base text-neutral-500 leading-relaxed mb-4">
                Founded by Mark Biggelaar over four decades ago, EarthWood has
                become Auckland&rsquo;s most trusted name in furniture
                restoration. From a small workshop in Helensville, Mark has
                restored hundreds of pieces — each one treated with the
                reverence it deserves.
              </p>
              <p className="text-base text-neutral-500 leading-relaxed mb-4">
                Whether it&rsquo;s a century-old kauri table or a modern
                commercial fit-out, the approach is always the same: listen to
                the wood, respect its history, and finish with precision that
                lasts another lifetime.
              </p>
              <p className="text-base text-neutral-500 leading-relaxed mb-8">
                Every Thursday, Mark runs a pickup and delivery service across
                Auckland, making professional restoration accessible to everyone.
              </p>

              {/* Bullet Points */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                {bullets.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.text} className="flex items-center gap-3">
                      <div className="flex items-center justify-center w-9 h-9 rounded-lg glass flex-shrink-0">
                        <Icon size={16} strokeWidth={1.5} className="text-[#111]" />
                      </div>
                      <span className="text-sm font-medium text-[#111]">
                        {item.text}
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* CTA */}
              <Link
                href="/about"
                className="inline-flex items-center text-sm font-medium text-[#111] hover:tracking-wide transition-all duration-300"
              >
                Mark&rsquo;s Story
                <span className="ml-1">&rarr;</span>
              </Link>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
