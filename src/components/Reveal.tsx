"use client";
import { useEffect, useRef, useState } from "react";
export default function Reveal({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const r = useRef<HTMLDivElement>(null); const [v, setV] = useState(false);
  useEffect(() => {
    const el = r.current; if (!el) return;
    const o = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setV(true); o.disconnect(); } }, { threshold: 0.12 });
    o.observe(el); return () => o.disconnect();
  }, []);
  return <div ref={r} style={{ transitionDelay: `${delay}ms` }} className={`transition-all duration-700 ${v ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"} ${className}`}>{children}</div>;
}
