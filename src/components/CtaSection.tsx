"use client";

import Link from "next/link";
import AnimateOnScroll from "./AnimateOnScroll";

export default function CtaSection() {
  return (
    <section className="relative w-full surface-grey-dark py-24 sm:py-32 px-6 lg:px-8">
      {/* Subtle top gradient */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-neutral-200 to-transparent" />

      <div className="max-w-3xl mx-auto text-center">
        <AnimateOnScroll>
          <div className="glass-thick rounded-[24px] p-10 sm:p-12">
          <p className="text-[11px] font-medium tracking-[0.3em] uppercase text-neutral-400 mb-3">
            Let&rsquo;s Begin
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-[#111] leading-tight">
            Ready to Restore <br className="hidden sm:block" />
            Your Furniture?
          </h2>
          <p className="mt-6 text-lg text-neutral-500 leading-relaxed font-light max-w-xl mx-auto">
            Every great restoration starts with a conversation. Get in touch for
            a free, no-obligation consultation — we&rsquo;ll assess your piece
            and let you know what&rsquo;s possible.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="glass-pill inline-flex items-center justify-center px-8 py-3.5 bg-[#111] text-white text-sm font-medium rounded-full hover:bg-[#333] transition-colors duration-200"
            >
              Get a Free Quote
            </Link>
            <a
              href="tel:0212881884"
              className="glass-pill inline-flex items-center justify-center px-8 py-3.5 border border-[#111] text-[#111] text-sm font-medium rounded-full hover:bg-[#111] hover:text-white transition-all duration-200"
            >
              Call 021 288 1884
            </a>
          </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
