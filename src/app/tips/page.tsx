"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import AnimateOnScroll from "@/components/AnimateOnScroll";

interface TipArticle {
  title: string;
  description: string;
  slug: string;
}

const articles: TipArticle[] = [
  {
    title: "Tips for Loose Furniture Joints",
    description:
      "Repairing wooden joints and the styles you might encounter. From mortise-and-tenon to dowelled connections, learn how to identify and fix the most common joint failures.",
    slug: "loose-furniture-joints",
  },
  {
    title: "The Good Oil",
    description:
      "Protecting exterior wooden furniture, objects and doors. Discover which oils work best for New Zealand conditions and how to apply them for lasting protection.",
    slug: "the-good-oil",
  },
  {
    title: "To Wax or Not To Wax",
    description:
      "When to use wax on your furniture, and how to do it properly. Not every finish benefits from wax — learn when it helps and when it can cause more harm than good.",
    slug: "to-wax-or-not-to-wax",
  },
  {
    title: "Repairing Wonky Drawers",
    description:
      "Step by step on how to repair sticky or crooked drawers. Worn runners, swollen timber, and misaligned guides are all fixable with the right approach.",
    slug: "repairing-wonky-drawers",
  },
  {
    title: "French Polishing Finishes",
    description:
      "The process and when it's a good option. French polishing creates an incomparable depth and warmth — but it's not right for every piece. Here's what you need to know.",
    slug: "french-polishing-finishes",
  },
  {
    title: "Dealing with Borer in Timber",
    description:
      "Ways to deal with borer — from identification to treatment. Borer can silently destroy furniture over years. Learn how to spot it early and what treatments actually work.",
    slug: "dealing-with-borer",
  },
  {
    title: "Stain Matching",
    description:
      "Mark's highly-skilled craft of blending custom stains to seamlessly match existing timber tones. After 45 years, it's as much intuition as technique.",
    slug: "stain-matching",
  },
];

export default function TipsPage() {
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
            <span className="text-[#111]">Tips & Techniques</span>
          </nav>
        </AnimateOnScroll>

        <AnimateOnScroll delay={0.1}>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-[#111]">
            Tips & Techniques
          </h1>
        </AnimateOnScroll>
        <AnimateOnScroll delay={0.2}>
          <p className="mt-4 text-lg text-[#111]/60 max-w-2xl">
            Practical advice from 45 years at the workbench. Whether you are a
            DIY enthusiast or simply want to understand your furniture better,
            these guides are for you.
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
              Need professional help?
            </h2>
            <p className="mt-4 text-lg text-[#111]/60">
              Some jobs are best left to the experts. Get in touch for a free
              consultation on your restoration project.
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
