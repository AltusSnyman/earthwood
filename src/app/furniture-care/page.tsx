"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import AnimateOnScroll from "@/components/AnimateOnScroll";

interface CareArticle {
  title: string;
  description: string;
  slug: string;
}

const articles: CareArticle[] = [
  {
    title: "Cleaning Up a Precious Wooden Surface",
    description:
      "When to use wax, oil, or other protectants on your wooden furniture. Understanding your finish type is the first step to cleaning it safely without causing damage.",
    slug: "cleaning-wooden-surfaces",
  },
  {
    title: "Stripping Methods for Wooden Furniture",
    description:
      "Refurbishment vs full restoration — knowing the difference can save you time and money. Learn when a light strip-back is enough and when a complete strip is necessary.",
    slug: "stripping-methods",
  },
  {
    title: "Damaged Dining Table Top Repairs",
    description:
      "Options for damaged table tops — from heat marks and water rings to deep scratches and veneer lifting. Practical solutions for every level of damage.",
    slug: "damaged-dining-table-repairs",
  },
  {
    title: "The Good Oil",
    description:
      "Using oil to protect outdoor furniture from New Zealand's harsh UV and variable weather. Which oils work, how to apply them, and how often to recoat.",
    slug: "the-good-oil",
  },
  {
    title: "To Wax or Not to Wax",
    description:
      "When and how to wax your furniture properly. Wax can enhance a finish beautifully — but applied to the wrong surface, it creates problems. Here's the guide.",
    slug: "to-wax-or-not-to-wax",
  },
  {
    title: "Dealing with Borer in Timber",
    description:
      "Ways to deal with borer before it destroys your furniture. Identification, treatment options, and when to call in the professionals.",
    slug: "dealing-with-borer",
  },
];

export default function FurnitureCarePage() {
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
            <span className="text-[#111]">Furniture Care</span>
          </nav>
        </AnimateOnScroll>

        <AnimateOnScroll delay={0.1}>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-[#111]">
            Furniture Care
          </h1>
        </AnimateOnScroll>
        <AnimateOnScroll delay={0.2}>
          <p className="mt-4 text-lg text-[#111]/60 max-w-2xl">
            Practical guidance on keeping your wooden furniture looking its best.
            From routine cleaning to dealing with damage, these articles cover
            the essentials.
          </p>
        </AnimateOnScroll>
      </section>

      {/* Articles Grid */}
      <section className="px-6 lg:px-8 pb-32 surface-grey-light py-24">
        <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article, i) => (
            <AnimateOnScroll key={article.slug} delay={i * 0.08}>
              <div className="glass group rounded-2xl p-7 h-full flex flex-col hover:shadow-[0_2px_20px_rgba(0,0,0,0.06)] transition-all duration-300">
                <h3 className="text-lg font-semibold text-[#111] group-hover:text-[#333] transition-colors">
                  {article.title}
                </h3>
                <p className="mt-3 text-sm text-[#111]/60 leading-relaxed flex-1">
                  {article.description}
                </p>
                <div className="mt-6 pt-4 border-t border-black/5">
                  <span className="inline-flex items-center text-sm font-medium text-[#111] group-hover:gap-2 gap-1.5 transition-all duration-300">
                    Read More
                    <ArrowRight
                      size={14}
                      className="transition-transform duration-300 group-hover:translate-x-0.5"
                    />
                  </span>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 lg:px-8 bg-[#fafafa]">
        <AnimateOnScroll>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#111]">
              Need a professional assessment?
            </h2>
            <p className="mt-4 text-lg text-[#111]/60">
              If your furniture needs more than routine care, we are here to
              help. Contact us for a free, no-obligation consultation.
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
