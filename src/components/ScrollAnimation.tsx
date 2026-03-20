"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { ChevronDown } from "lucide-react";

const TOTAL = 192;
const BATCH = 20;

const PHASES = [
  {
    id: "01",
    title: "Crafted with Precision",
    text: "Over 45 years of mastery distilled into every joint, every finish, every detail.",
    start: 0.08, end: 0.24, side: "left" as const,
  },
  {
    id: "02",
    title: "Every Grain Tells a Story",
    text: "We don\u2019t just restore furniture \u2014 we listen to it. Each piece carries decades of memory.",
    start: 0.28, end: 0.46, side: "right" as const,
  },
  {
    id: "03",
    title: "From Worn to Wonderful",
    text: "What arrives weathered departs radiant \u2014 structurally sound, flawlessly finished.",
    start: 0.50, end: 0.68, side: "left" as const,
  },
  {
    id: "04",
    title: "Your Heirloom, Reimagined",
    text: "Ready to see what\u2019s possible? Bring us the piece you\u2019ve been meaning to restore.",
    start: 0.72, end: 0.92, side: "right" as const,
  },
];

function frameSrc(i: number) {
  return `/frames/frame-${String(i + 1).padStart(4, "0")}.jpg`;
}

function fadeVal(progress: number, start: number, end: number) {
  const len = (end - start) * 0.2;
  if (progress < start || progress > end) return 0;
  if (progress < start + len) return (progress - start) / len;
  if (progress > end - len) return (end - progress) / len;
  return 1;
}

export default function ScrollAnimation() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imgsRef = useRef<HTMLImageElement[]>([]);
  const frameRef = useRef(0);
  const drawnRef = useRef(-1);

  const [loadPct, setLoadPct] = useState(0);
  const [ready, setReady] = useState(false);
  const [progress, setProgress] = useState(0);

  // ---- PRELOAD ----
  useEffect(() => {
    let dead = false;
    const arr: HTMLImageElement[] = new Array(TOTAL);
    let n = 0;

    function one(i: number): Promise<void> {
      return new Promise((res) => {
        const img = new Image();
        img.src = frameSrc(i);
        img.onload = img.onerror = () => {
          arr[i] = img;
          n++;
          if (!dead) setLoadPct(Math.round((n / TOTAL) * 100));
          res();
        };
      });
    }

    (async () => {
      for (let b = 0; b < TOTAL; b += BATCH) {
        if (dead) return;
        const p = [];
        for (let j = b; j < Math.min(b + BATCH, TOTAL); j++) p.push(one(j));
        await Promise.all(p);
      }
      if (dead) return;
      imgsRef.current = arr;
      setReady(true);
    })();

    return () => { dead = true; };
  }, []);

  // ---- DRAW ----
  const draw = useCallback((idx: number) => {
    const cvs = canvasRef.current;
    if (!cvs) return;
    const ctx = cvs.getContext("2d");
    if (!ctx) return;
    const img = imgsRef.current[idx];
    if (!img || !img.naturalWidth) return;

    const w = cvs.clientWidth;
    const h = cvs.clientHeight;
    const dpr = window.devicePixelRatio || 1;

    if (cvs.width !== w * dpr || cvs.height !== h * dpr) {
      cvs.width = w * dpr;
      cvs.height = h * dpr;
    }

    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    const ir = img.naturalWidth / img.naturalHeight;
    const cr = w / h;
    let dw: number, dh: number, dx: number, dy: number;

    if (cr >= 1) {
      // Landscape/square canvas (desktop): object-fit cover
      if (ir > cr) { dh = h; dw = h * ir; dx = (w - dw) / 2; dy = 0; }
      else { dw = w; dh = w / ir; dx = 0; dy = (h - dh) / 2; }
    } else {
      // Portrait canvas (mobile): scale to fill width, center vertically
      dw = w; dh = w / ir; dx = 0; dy = (h - dh) / 2;
    }

    ctx.drawImage(img, dx, dy, dw, dh);
  }, []);

  // ---- RAF LOOP ----
  useEffect(() => {
    if (!ready) return;
    draw(0);
    drawnRef.current = 0;

    let raf = 0;
    function tick() {
      const f = frameRef.current;
      if (f !== drawnRef.current) {
        draw(f);
        drawnRef.current = f;
      }
      raf = requestAnimationFrame(tick);
    }
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [ready, draw]);

  // ---- SCROLL HANDLER (uses scrollY + offsetTop, NOT getBoundingClientRect) ----
  useEffect(() => {
    if (!ready) return;

    function onScroll() {
      const el = sectionRef.current;
      if (!el) return;

      // Use offsetTop + scrollY — immune to overflow/transform CSS issues
      const elTop = el.offsetTop;
      const elH = el.offsetHeight;
      const viewH = window.innerHeight;
      const scrollY = window.scrollY;

      const scrolled = scrollY - elTop;
      const scrollable = elH - viewH;
      if (scrollable <= 0) return;

      const p = Math.max(0, Math.min(1, scrolled / scrollable));
      frameRef.current = Math.min(TOTAL - 1, Math.max(0, Math.floor(p * (TOTAL - 1))));
      setProgress(p);
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [ready]);

  // ---- RESIZE ----
  useEffect(() => {
    if (!ready) return;
    const fn = () => { drawnRef.current = -1; };
    window.addEventListener("resize", fn, { passive: true });
    return () => window.removeEventListener("resize", fn);
  }, [ready]);

  return (
    <section ref={sectionRef} style={{ height: "500dvh" }} className="relative">
      {/* Loader */}
      {!ready && (
        <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white">
          <p className="mb-6 text-[11px] font-light tracking-[0.3em] text-neutral-400 uppercase">
            Loading experience...
          </p>
          <div className="relative h-px w-48 bg-neutral-200 overflow-hidden">
            <div className="absolute inset-y-0 left-0 bg-black" style={{ width: `${loadPct}%`, transition: "width 0.2s" }} />
          </div>
          <p className="mt-4 text-[11px] font-light tracking-widest text-neutral-300 tabular-nums">{loadPct}%</p>
        </div>
      )}

      {/* Sticky viewport — pinned while scrolling through 500dvh */}
      <div className="sticky top-0 left-0 w-full overflow-hidden" style={{ height: "100dvh", background: "#e8e8e8" }}>
        <canvas ref={canvasRef} style={{ display: "block", width: "100%", height: "100%" }} />

        {/* Mobile welcome & scroll hint — top letterbox area, fades out on scroll */}
        <div
          className="absolute inset-x-0 top-0 flex flex-col items-center justify-center md:hidden pointer-events-none"
          style={{ height: "30%", opacity: Math.max(0, 1 - progress / 0.04) }}
        >
          <p className="text-[11px] font-medium tracking-[0.35em] uppercase text-neutral-400 mb-3">
            Welcome
          </p>
          <h2 className="text-3xl font-light italic tracking-wide text-neutral-600">
            EarthWood
          </h2>
          <div className="mt-6 flex flex-col items-center gap-1" style={{ animation: "scrollBounce 1.8s ease-in-out infinite" }}>
            <span className="text-[10px] font-medium tracking-[0.3em] uppercase text-neutral-400">Scroll</span>
            <ChevronDown size={14} className="text-neutral-400" />
          </div>
        </div>

        {/* Phase overlay cards */}
        {PHASES.map((ph) => {
          const o = fadeVal(progress, ph.start, ph.end);
          if (o < 0.01) return null;
          return (
            <div
              key={ph.id}
              className={`absolute inset-0 flex items-center pointer-events-none ${
                ph.side === "left" ? "justify-start pl-6 md:pl-14 lg:pl-24" : "justify-end pr-6 md:pr-14 lg:pr-24"
              }`}
              style={{ opacity: o, transform: `translateY(${(1 - o) * 24}px)` }}
            >
              <div
                className="w-full max-w-md rounded-2xl border border-white/50 p-8 md:p-10 shadow-2xl"
                style={{
                  background: "rgba(255,255,255,0.7)",
                  backdropFilter: "blur(40px) saturate(1.4)",
                  WebkitBackdropFilter: "blur(40px) saturate(1.4)",
                }}
              >
                <span className="block mb-2 text-[10px] font-medium tracking-[0.3em] text-neutral-400 uppercase">{ph.id}</span>
                <h2 className="mb-3 text-2xl md:text-3xl font-semibold tracking-tight text-black leading-tight">{ph.title}</h2>
                <p className="text-sm md:text-[15px] leading-relaxed text-neutral-600">{ph.text}</p>
                {ph.id === "04" && (
                  <a href="/contact" className="pointer-events-auto inline-block mt-6 rounded-full bg-black px-6 py-3 text-xs font-medium tracking-[0.15em] text-white uppercase hover:bg-neutral-800 transition-colors">
                    Get in Touch
                  </a>
                )}
              </div>
            </div>
          );
        })}

        {/* Progress bar */}
        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-black/5">
          <div className="h-full bg-black/30" style={{ width: `${progress * 100}%` }} />
        </div>
      </div>
    </section>
  );
}
