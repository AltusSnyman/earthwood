"use client";

const items = [
  "French Polishing",
  "Stain Matching",
  "Antique Restoration",
  "Commercial Fit-Out",
  "Kauri Specialists",
  "45+ Years",
  "Auckland-Wide",
  "Free Consultation",
];

function MarqueeItem({ text }: { text: string }) {
  return (
    <span className="flex items-center gap-8 whitespace-nowrap">
      <span className="text-[11px] sm:text-xs font-medium tracking-[0.25em] uppercase text-neutral-500">
        {text}
      </span>
      <span className="block w-1 h-1 rounded-full bg-neutral-300 flex-shrink-0" />
    </span>
  );
}

export default function BrandMarquee() {
  const doubled = [...items, ...items];

  return (
    <section className="relative w-full border-y border-white/30 surface-grey-light py-5 overflow-hidden">
      <div className="flex animate-marquee gap-8">
        {doubled.map((item, i) => (
          <MarqueeItem key={`${item}-${i}`} text={item} />
        ))}
        {/* Third copy for truly seamless loop */}
        {doubled.map((item, i) => (
          <MarqueeItem key={`${item}-dup-${i}`} text={item} />
        ))}
      </div>
    </section>
  );
}
