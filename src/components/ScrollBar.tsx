"use client";
import { useEffect, useState } from "react";
export default function ScrollBar() {
  const [p, setP] = useState(0);
  useEffect(() => {
    const f = () => { const h = document.documentElement; setP(h.scrollTop / Math.max(1, h.scrollHeight - h.clientHeight)); };
    f(); window.addEventListener("scroll", f, { passive: true }); return () => window.removeEventListener("scroll", f);
  }, []);
  return <div className="fixed left-0 top-0 z-[60] h-0.5 bg-gradient-to-r from-accent to-gold" style={{ width: `${p * 100}%` }} />;
}
