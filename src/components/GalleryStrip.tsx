"use client";

import Image from "next/image";
import Link from "next/link";
import AnimateOnScroll from "./AnimateOnScroll";

const galleryImages = [
  {
    src: "/images/AFTER-EARTHWOOD-Completed-restoration-of-armoire-215x215.jpg",
    label: "Armoire Restoration",
  },
  {
    src: "/images/AFTER-EARTHWOOD-Solid-Kauri-Table1-215x215.jpg",
    label: "Kauri Table",
  },
  {
    src: "/images/AFTER-EARTHWOOD-Oak-Cabinet2-215x215.jpg",
    label: "Oak Cabinet",
  },
  {
    src: "/images/AFTER-EARTHWOOD-Davenport2-215x215.jpg",
    label: "Davenport Desk",
  },
  {
    src: "/images/AFTER-EARTHWOOD-Sapelle-Mahogany-suite1-215x215.jpg",
    label: "Mahogany Suite",
  },
  {
    src: "/images/AFTER-EARTHWOOD-Teak-china-cabinet-215x215.jpg",
    label: "Teak Cabinet",
  },
];

export default function GalleryStrip() {
  return (
    <section className="relative w-full surface-grey-light py-24 sm:py-32 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <AnimateOnScroll className="text-center mb-16 sm:mb-20">
          <p className="text-[11px] font-medium tracking-[0.3em] uppercase text-neutral-400 mb-3">
            Our Work
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-[#111]">
            Recent Restorations
          </h2>
        </AnimateOnScroll>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
          {galleryImages.map((img, i) => (
            <AnimateOnScroll key={img.label} delay={i * 0.08}>
              <div className="group relative aspect-square rounded-2xl overflow-hidden bg-neutral-100">
                <Image
                  src={img.src}
                  alt={img.label}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
                {/* Hover Glass Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-white/10 group-hover:backdrop-blur-sm transition-all duration-300 flex items-end justify-start p-5">
                  <span className="text-white text-sm font-medium tracking-wide opacity-0 group-hover:opacity-100 translate-y-3 group-hover:translate-y-0 transition-all duration-300">
                    {img.label}
                  </span>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        {/* CTA */}
        <AnimateOnScroll className="text-center mt-12">
          <Link
            href="/gallery"
            className="glass-pill inline-flex items-center px-6 py-3 text-sm font-medium text-[#111] rounded-full hover:tracking-wide transition-all duration-300"
          >
            View Full Gallery
            <span className="ml-1">&rarr;</span>
          </Link>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
