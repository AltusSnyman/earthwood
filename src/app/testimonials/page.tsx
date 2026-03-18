"use client";

import Link from "next/link";
import { Star, Quote, Phone } from "lucide-react";
import AnimateOnScroll from "@/components/AnimateOnScroll";

interface Testimonial {
  quote: string;
  author: string;
  featured?: boolean;
}

const testimonials: Testimonial[] = [
  {
    quote: "I'm very, very happy. Mark's done an excellent job.",
    author: "Julie L.",
  },
  {
    quote: "We're absolutely delighted. Mark did an amazing job.",
    author: "Shelley J.",
  },
  {
    quote: "The chest of drawers is amazing. We were blown away.",
    author: "Joyce B.",
  },
  {
    quote: "It's fantastic, and the attention to detail is superb.",
    author: "Jane A.",
  },
  {
    quote: "It's amazing — it looks absolutely flawless.",
    author: "Andrea W.",
  },
  {
    quote: "The coffee table was amazing. It was perfect.",
    author: "Melissa H.",
  },
  {
    quote:
      "Very happy — it's still in the garage, but I have looked at it, patted it.",
    author: "Amanda R.",
  },
  {
    quote: "We're delighted — you did a great job.",
    author: "Josh H.",
  },
  {
    quote: "Everything is absolutely fine — we're pretty happy.",
    author: "Margaret C.",
  },
  {
    quote: "Yes, very good job on the water-damaged rimu furniture legs.",
    author: "Thomas R.",
  },
];

const featuredTestimonials: Testimonial[] = [
  {
    quote:
      "Mark has a real gift for turning shabby family heirlooms into magnificent pieces. The craftsmanship and care he puts into every restoration is extraordinary. We couldn't be happier with the results.",
    author: "Christopher & Joyce",
    featured: true,
  },
  {
    quote:
      "We are absolutely thrilled with the repairs. The furniture looks better than we ever imagined it could. Mark's skill and professionalism made the entire process seamless from start to finish.",
    author: "Steve & Alice",
    featured: true,
  },
];

function StarRating() {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          size={14}
          className="text-amber-400 fill-amber-400"
        />
      ))}
    </div>
  );
}

export default function TestimonialsPage() {
  return (
    <div className="min-h-screen bg-white pt-[72px]">
      {/* Header */}
      <section className="py-20 px-6 lg:px-8 max-w-7xl mx-auto">
        <AnimateOnScroll>
          <nav className="flex items-center gap-2 text-sm text-[#111]/50 mb-8">
            <Link href="/" className="hover:text-[#111] transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-[#111]">Testimonials</span>
          </nav>
        </AnimateOnScroll>

        <AnimateOnScroll delay={0.1}>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-[#111]">
            Testimonials
          </h1>
        </AnimateOnScroll>
        <AnimateOnScroll delay={0.2}>
          <p className="mt-4 text-lg text-[#111]/60 max-w-2xl">
            Don't take our word for it. Here is what our customers have to say
            about their experience with EarthWood.
          </p>
        </AnimateOnScroll>
      </section>

      {/* Featured Testimonials */}
      <section className="px-6 lg:px-8 pb-16 surface-grey-light py-16">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
          {featuredTestimonials.map((testimonial, i) => (
            <AnimateOnScroll key={testimonial.author} delay={i * 0.15}>
              <div className="relative glass-thick rounded-[24px] p-10 h-full">
                <Quote
                  size={40}
                  className="text-[#111]/10 absolute top-8 right-8"
                />
                <StarRating />
                <blockquote className="mt-6 text-xl font-medium text-[#111] leading-relaxed">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
                <div className="mt-8 pt-6 border-t border-black/5">
                  <p className="text-sm font-semibold text-[#111]">
                    {testimonial.author}
                  </p>
                  <p className="text-xs text-[#111]/50 mt-0.5">
                    Verified Customer
                  </p>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </section>

      {/* Grid Testimonials */}
      <section className="px-6 lg:px-8 pb-32 max-w-7xl mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, i) => (
            <AnimateOnScroll key={testimonial.author} delay={i * 0.05}>
              <div className="glass rounded-[24px] p-7 h-full flex flex-col">
                <StarRating />
                <blockquote className="mt-4 text-[#111] leading-relaxed flex-1">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
                <div className="mt-6 pt-4 border-t border-black/5">
                  <p className="text-sm font-semibold text-[#111]">
                    {testimonial.author}
                  </p>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 lg:px-8 surface-grey-light">
        <AnimateOnScroll>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#111]">
              Join our happy customers.
            </h2>
            <p className="mt-4 text-lg text-[#111]/60">
              Get in touch for a free consultation and discover what EarthWood
              can do for your furniture.
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
