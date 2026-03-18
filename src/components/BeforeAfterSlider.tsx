"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import Image from "next/image";
import { GripVertical } from "lucide-react";
import AnimateOnScroll from "./AnimateOnScroll";

interface SliderPair {
  before: string;
  after: string;
  title: string;
  description: string;
}

const pairs: SliderPair[] = [
  {
    before: "/images/BEFORE-EARTHWOOD-Waethered-extrerior-cedar-door.jpg",
    after: "/images/AFTER-EARTHWOOD-Oiled-exterior-cedar-door.jpg",
    title: "Cedar Door",
    description: "Weathered exterior cedar door restored with natural oil finish.",
  },
  {
    before:
      "/images/BEFORE-EARTHWOOD-Whale-and-calf-sculpted-from-Hawaiian-Rainforest-timber-severely-weathered-with-rotten-bottom-and-one-fluke-on-the-mother-broken.jpg",
    after:
      "/images/AFTER-EARTHWOOD-Oiled-with-Haarlem-Oil-Whale-and-Calf-wooden-sculpture-fron-Hawaiian-rainforest-timber.jpg",
    title: "Whale Sculpture",
    description:
      "Hawaiian rainforest timber sculpture with severe weathering — fully restored.",
  },
  {
    before: "/images/100-year-old-table-on-wobbly-joints.jpg",
    after:
      "/images/Completed-table-finished-in-a-dark-stain-and-two-pack-polyurethan-joints-now-all-sturdy.jpg",
    title: "100-Year-Old Table",
    description:
      "Century-old table with wobbly joints — re-stained and finished in two-pack polyurethane.",
  },
];

function SingleSlider({ pair }: { pair: SliderPair }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [sliderPos, setSliderPos] = useState(50);
  const isDragging = useRef(false);

  const handleMove = useCallback((clientX: number) => {
    if (!isDragging.current || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const pct = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPos(pct);
  }, []);

  const handleStart = useCallback(() => {
    isDragging.current = true;
  }, []);

  const handleEnd = useCallback(() => {
    isDragging.current = false;
  }, []);

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => handleMove(e.clientX);
    const onTouchMove = (e: TouchEvent) => {
      if (e.touches[0]) handleMove(e.touches[0].clientX);
    };
    const onUp = () => handleEnd();

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onUp);
    window.addEventListener("touchmove", onTouchMove, { passive: true });
    window.addEventListener("touchend", onUp);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onUp);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", onUp);
    };
  }, [handleMove, handleEnd]);

  return (
    <div className="flex flex-col">
      <div
        ref={containerRef}
        className="relative aspect-[3/4] sm:aspect-[4/5] w-full rounded-2xl overflow-hidden cursor-ew-resize select-none bg-neutral-100"
        onMouseDown={handleStart}
        onTouchStart={handleStart}
      >
        {/* After Image (full) */}
        <Image
          src={pair.after}
          alt={`After: ${pair.title}`}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 33vw"
        />

        {/* Before Image (clipped) */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ width: `${sliderPos}%` }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={pair.before}
            alt={`Before: ${pair.title}`}
            className="absolute inset-0 w-full h-full object-cover"
            style={{ maxWidth: "none", width: containerRef.current ? `${containerRef.current.offsetWidth}px` : "100%" }}
            draggable={false}
          />
        </div>

        {/* Labels */}
        <div className="absolute top-4 left-4 z-20">
          <span className="px-3 py-1 rounded-full text-[10px] font-semibold tracking-[0.15em] uppercase bg-black/60 text-white backdrop-blur-sm">
            Before
          </span>
        </div>
        <div className="absolute top-4 right-4 z-20">
          <span className="px-3 py-1 rounded-full text-[10px] font-semibold tracking-[0.15em] uppercase bg-white/80 text-[#111] backdrop-blur-sm">
            After
          </span>
        </div>

        {/* Slider Line */}
        <div
          className="absolute top-0 bottom-0 w-[2px] bg-white z-10"
          style={{
            left: `${sliderPos}%`,
            transform: "translateX(-50%)",
            boxShadow: "0 0 12px rgba(0,0,0,0.3)",
          }}
        />

        {/* Handle */}
        <div
          className="absolute top-1/2 z-10 flex items-center justify-center w-10 h-10 rounded-full bg-white shadow-lg"
          style={{
            left: `${sliderPos}%`,
            transform: "translate(-50%, -50%)",
          }}
        >
          <GripVertical size={16} className="text-neutral-400" />
        </div>
      </div>

      {/* Caption */}
      <div className="mt-4 px-1">
        <h4 className="text-base font-semibold text-[#111] tracking-tight">
          {pair.title}
        </h4>
        <p className="mt-1 text-sm text-neutral-500 leading-relaxed">
          {pair.description}
        </p>
      </div>
    </div>
  );
}

export default function BeforeAfterSlider() {
  return (
    <section className="relative w-full bg-white py-24 sm:py-32 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <AnimateOnScroll className="text-center mb-16 sm:mb-20">
          <p className="text-[11px] font-medium tracking-[0.3em] uppercase text-neutral-400 mb-3">
            The Transformation
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-[#111]">
            Before &amp; After
          </h2>
        </AnimateOnScroll>

        {/* Sliders Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {pairs.map((pair, i) => (
            <AnimateOnScroll key={pair.title} delay={i * 0.15}>
              <SingleSlider pair={pair} />
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
