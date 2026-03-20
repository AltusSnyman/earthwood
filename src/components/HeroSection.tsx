"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown } from "lucide-react";

const stats = [
  { value: "45+", label: "Years" },
  { value: "100s", label: "Restored" },
  { value: "AKL", label: "Auckland-Wide" },
  { value: "Free", label: "Consult" },
];

function AnimatedStat({ value, label }: { value: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [display, setDisplay] = useState(value);

  useEffect(() => {
    const match = value.match(/^(\d+)(.*)$/);
    if (!match) return; // non-numeric — show as-is

    const target = parseInt(match[1]);
    const suffix = match[2];
    const duration = 1400;

    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      observer.disconnect();

      const startTime = performance.now();
      const tick = (now: number) => {
        const t = Math.min((now - startTime) / duration, 1);
        const eased = 1 - Math.pow(1 - t, 3);
        setDisplay(`${Math.round(eased * target)}${suffix}`);
        if (t < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    });

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value]);

  return (
    <div ref={ref}>
      <p className="text-2xl sm:text-3xl font-semibold tracking-tight text-[#111]">{display}</p>
      <p className="mt-1 text-[11px] sm:text-xs font-medium tracking-widest uppercase text-neutral-500">{label}</p>
    </div>
  );
}

export default function HeroSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen w-full bg-white overflow-hidden flex flex-col"
    >
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center flex-1 px-6 pt-32 pb-24 lg:pt-40 lg:pb-32">
        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center max-w-4xl mx-auto"
        >
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold tracking-tight text-[#111] leading-[1.05]">
            Restoration is an{" "}
            <span className="italic font-normal">art.</span>
          </h1>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.2,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          className="mt-6 max-w-2xl text-center text-lg sm:text-xl text-neutral-500 leading-relaxed font-light"
        >
          For 45 years, Mark Biggelaar has been bringing Auckland&rsquo;s most
          treasured wooden pieces back to life.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.4,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <Link
            href="/gallery"
            className="glass-pill inline-flex items-center justify-center px-8 py-3.5 bg-[#111] text-white text-sm font-medium rounded-full hover:bg-[#333] transition-colors duration-200"
          >
            View Our Work
          </Link>
          <Link
            href="/contact"
            className="glass-pill inline-flex items-center justify-center px-8 py-3.5 border border-[#111] text-[#111] text-sm font-medium rounded-full hover:bg-[#111] hover:text-white transition-all duration-200"
          >
            Get a Free Quote
          </Link>
        </motion.div>

        {/* Parallax Image with Glass Stats Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            delay: 0.6,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          className="relative mt-16 w-full max-w-5xl mx-auto"
        >
          <motion.div
            style={{ y: imageY, scale: imageScale }}
            className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden shadow-2xl"
          >
            <Image
              src="/images/DiningTable01.jpg"
              alt="Beautifully restored dining table by EarthWood"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1024px"
              priority
            />
            {/* Glass overlay on parallax image */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
            <div className="absolute inset-0 glass opacity-10 pointer-events-none" />
          </motion.div>

          {/* Liquid Glass Stats Overlay */}
          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-[92%] max-w-2xl">
            <div className="glass-thick rounded-2xl px-6 py-5 sm:px-10 sm:py-6">
              <div className="grid grid-cols-4 gap-4 text-center">
                {stats.map((stat) => (
                  <AnimatedStat key={stat.label} value={stat.value} label={stat.label} />
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
      >
        <span className="text-[10px] font-medium tracking-[0.3em] uppercase text-neutral-400">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
        >
          <ChevronDown size={16} className="text-neutral-400" />
        </motion.div>
      </motion.div>
    </section>
  );
}
