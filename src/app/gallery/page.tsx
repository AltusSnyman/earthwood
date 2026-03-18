"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import AnimateOnScroll from "@/components/AnimateOnScroll";

const categories = [
  "All",
  "Tables",
  "Living",
  "Bedroom",
  "Sideboards",
  "Commercial",
  "Other",
] as const;

type Category = (typeof categories)[number];

interface GalleryItem {
  src: string;
  title: string;
  category: Category;
}

const galleryItems: GalleryItem[] = [
  {
    src: "/images/AFTER-EARTHWOOD-Solid-Kauri-Table1-215x215.jpg",
    title: "Solid Kauri Table",
    category: "Tables",
  },
  {
    src: "/images/AFTER-EARTHWOOD-Chinese-Table1-215x215.jpg",
    title: "Chinese Table",
    category: "Tables",
  },
  {
    src: "/images/AFTER-EARTHWOOD-Otto-Larsen-table-215x215.jpg",
    title: "Otto Larsen Table",
    category: "Tables",
  },
  {
    src: "/images/AFTER-EARTHWOOD-Mahogany-table-with-new-mirrorerd-top-215x215.jpg",
    title: "Mahogany Table — Mirror Top",
    category: "Tables",
  },
  {
    src: "/images/AFTER-EARTHWOOD-Half-round-table1-215x215.jpg",
    title: "Half-Round Table",
    category: "Tables",
  },
  {
    src: "/images/AFTER-EARTHWOOD-kauri-table-with-newly-designed-legs-and-base-in-Arts-and-Crafts-era-style-215x215.jpg",
    title: "Kauri Table — Arts & Crafts Style",
    category: "Tables",
  },
  {
    src: "/images/AFTER-EARTHWOOD-Sapelle-Mahogany-suite1-215x215.jpg",
    title: "Sapele Mahogany Suite",
    category: "Living",
  },
  {
    src: "/images/AFTER-EARTHWOOD-Cane-chairs-215x215.jpg",
    title: "Cane Chairs",
    category: "Living",
  },
  {
    src: "/images/AFTER-EARTHWOOD-Otto-Larsen-chairs-215x215.jpg",
    title: "Otto Larsen Chairs",
    category: "Living",
  },
  {
    src: "/images/AFTER-EARTHWOOD-70s-Mahogany-Dressing-Table2-215x215.jpg",
    title: "1970s Mahogany Dressing Table",
    category: "Bedroom",
  },
  {
    src: "/images/AFTER-EARTHWOOD-Completed-restoration-of-armoire-215x215.jpg",
    title: "Armoire Restoration",
    category: "Bedroom",
  },
  {
    src: "/images/AFTER-EARTHWOOD-Oak-Cabinet2-215x215.jpg",
    title: "Oak Cabinet",
    category: "Sideboards",
  },
  {
    src: "/images/AFTER-EARTHWOOD-Teak-china-cabinet-215x215.jpg",
    title: "Teak China Cabinet",
    category: "Sideboards",
  },
  {
    src: "/images/AFTER-EARTHWOOD-Davenport2-215x215.jpg",
    title: "Davenport Desk",
    category: "Living",
  },
  {
    src: "/images/AFTER-EARTHWOOD-American-rolltop-desk-215x215.jpg",
    title: "American Rolltop Desk",
    category: "Living",
  },
  {
    src: "/images/AFTER-EARTHWOOD-Roll-top1-215x215.jpg",
    title: "Roll-Top Desk",
    category: "Living",
  },
  {
    src: "/images/AFTER-EARTHWOOD-writing-bureau-215x215.jpg",
    title: "Writing Bureau",
    category: "Living",
  },
  {
    src: "/images/AFTER-EARTHWOOD-Walnut-sewing-machine-cabinet-215x215.jpg",
    title: "Walnut Sewing Machine Cabinet",
    category: "Other",
  },
  {
    src: "/images/AFTER-EARTHWOOD-Standing-desk2-215x215.jpg",
    title: "Standing Desk",
    category: "Commercial",
  },
  {
    src: "/images/AFTER-EARTHWOOD-Veneer-repaired-and-repolished-piano-lid-215x215.jpg",
    title: "Piano Lid — Veneer Repair",
    category: "Other",
  },
  {
    src: "/images/AFTER-EARTHWOOD-Oak-hospital-bedside-cabinet-215x215.jpg",
    title: "Oak Hospital Bedside Cabinet",
    category: "Commercial",
  },
  {
    src: "/images/AFTER-EARTHWOOD-Oiled-exterior-cedar-door-215x215.jpg",
    title: "Oiled Cedar Door",
    category: "Other",
  },
  {
    src: "/images/AFTER-EARTHWOOD-Oiled-with-Haarlem-Oil-Whale-and-Calf-wooden-sculpture-fron-Hawaiian-rainforest-timber-215x215.jpg",
    title: "Whale & Calf Sculpture",
    category: "Other",
  },
  {
    src: "/images/AFTER-EARTHWOOD-Sapelle-Mahogany-suite3-215x215.jpg",
    title: "Sapele Mahogany Sideboard",
    category: "Sideboards",
  },
];

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState<Category>("All");

  const filtered =
    activeFilter === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeFilter);

  return (
    <div className="min-h-screen bg-white pt-[72px]">
      {/* Header */}
      <section className="py-20 px-6 lg:px-8 surface-grey">
        <div className="max-w-7xl mx-auto">
        <AnimateOnScroll>
          <nav className="flex items-center gap-2 text-sm text-[#111]/50 mb-8">
            <Link href="/" className="hover:text-[#111] transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-[#111]">Gallery</span>
          </nav>
        </AnimateOnScroll>

        <AnimateOnScroll delay={0.1}>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-[#111]">
            Gallery
          </h1>
        </AnimateOnScroll>
        <AnimateOnScroll delay={0.2}>
          <p className="mt-4 text-lg text-[#111]/60 max-w-2xl">
            Every piece tells a story. Browse our portfolio of restored furniture
            — from treasured family heirlooms to statement commercial pieces.
          </p>
        </AnimateOnScroll>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="px-6 lg:px-8 max-w-7xl mx-auto pb-12">
        <AnimateOnScroll delay={0.15}>
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`glass-pill px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeFilter === cat
                    ? "bg-[#111] text-white"
                    : "text-[#111]/70 hover:text-[#111]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </AnimateOnScroll>
      </section>

      {/* Masonry Grid */}
      <section className="px-6 lg:px-8 max-w-7xl mx-auto pb-32">
        <motion.div
          layout
          className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((item, i) => (
              <motion.div
                key={item.src}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: i * 0.03 }}
                className="break-inside-avoid group relative overflow-hidden rounded-2xl cursor-pointer"
              >
                <div className="relative aspect-square">
                  <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500" />
                  <div className="absolute inset-0 flex items-end p-5 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="glass rounded-xl px-4 py-3 w-full">
                      <p className="text-sm font-semibold text-[#111] truncate">
                        {item.title}
                      </p>
                      <p className="text-xs text-[#111]/50 mt-0.5">
                        {item.category}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filtered.length === 0 && (
          <div className="text-center py-20">
            <p className="text-[#111]/40 text-lg">
              No items in this category yet.
            </p>
          </div>
        )}
      </section>

      {/* CTA */}
      <section className="py-24 px-6 lg:px-8 bg-[#fafafa]">
        <AnimateOnScroll>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#111]">
              Have a piece that needs restoring?
            </h2>
            <p className="mt-4 text-lg text-[#111]/60">
              Get in touch for a free consultation. We will bring your furniture
              back to life.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center mt-8 px-8 py-3.5 bg-[#111] text-white text-sm font-medium rounded-full hover:bg-[#333] transition-colors duration-200"
            >
              Get a Free Quote
            </Link>
          </div>
        </AnimateOnScroll>
      </section>
    </div>
  );
}
