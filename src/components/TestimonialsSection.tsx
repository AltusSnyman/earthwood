"use client";

import { Star } from "lucide-react";
import AnimateOnScroll from "./AnimateOnScroll";

const testimonials = [
  {
    quote:
      "We are wanting to acknowledge the amazing restoration work... He has turned shabby family heirlooms into magnificent pieces that we are now proud to display in our home.",
    author: "Christopher and Joyce",
  },
  {
    quote:
      "We are absolutely thrilled with the repairs — perfect, as good as the day we bought them.",
    author: "Steve & Alice",
  },
  {
    quote:
      "It's amazing — it looks absolutely flawless. Particularly the stool that belonged to my uncle.",
    author: "Andrea W.",
  },
  {
    quote:
      "Mark did an amazing job. I thought I had lost my bed altogether, but he brought it back.",
    author: "Shelley J.",
  },
  {
    quote:
      "The chest of drawers is amazing. We were blown away by it and love it to bits.",
    author: "Joyce B.",
  },
  {
    quote:
      "It's fantastic, and the attention to detail is superb.",
    author: "Jane A.",
  },
];

// Duplicate for seamless infinite loop
const allCards = [...testimonials, ...testimonials];

export default function TestimonialsSection() {
  return (
    <section className="relative surface-grey py-24 sm:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <AnimateOnScroll className="text-center mb-16 sm:mb-20">
          <p className="text-[11px] font-medium tracking-[0.3em] uppercase text-neutral-400 mb-3">
            What Clients Say
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-[#111]">
            Stories of Restored Treasures
          </h2>
        </AnimateOnScroll>
      </div>

      {/* Auto-scrolling marquee of cards */}
      <div className="relative w-full">
        <div
          className="flex gap-6 animate-marquee hover:[animation-play-state:paused]"
          style={{ width: "max-content" }}
        >
          {allCards.map((t, i) => (
            <div key={i} className="flex-shrink-0 w-[320px] sm:w-[380px]">
              <div className="h-full glass rounded-2xl border border-white/30 p-8 flex flex-col justify-between">
                <div className="flex gap-1 mb-5">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} size={14} fill="#111" strokeWidth={0} className="text-[#111]" />
                  ))}
                </div>
                <p className="text-[15px] leading-relaxed text-neutral-600 flex-1">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="mt-6 pt-5 border-t border-neutral-200/60">
                  <p className="text-sm font-semibold text-[#111] tracking-tight">{t.author}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="text-center mt-12">
        <a
          href="/testimonials"
          className="glass-pill inline-flex items-center text-sm font-medium text-[#111] rounded-full px-8 py-3"
        >
          Read All Testimonials <span className="ml-2">&rarr;</span>
        </a>
      </div>
    </section>
  );
}
