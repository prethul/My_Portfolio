"use client";
import { useEffect, useState } from "react";
const words = ["Generative AI","LLM Applications","Multi-Agent Systems","n8n Automation","Machine Learning"];
export default function Typewriter() {
  const [i, setI] = useState(0); const [n, setN] = useState(0); const [del, setDel] = useState(false);
  useEffect(() => {
    const w = words[i]; const t = setTimeout(() => {
      if (!del && n < w.length) setN(n + 1);
      else if (!del) setDel(true);
      else if (n > 0) setN(n - 1);
      else { setDel(false); setI((i + 1) % words.length); }
    }, del ? 40 : n === w.length ? 1200 : 80);
    return () => clearTimeout(t);
  }, [n, del, i]);
  return <span className="text-gold">{words[i].slice(0, n)}<span className="ml-0.5 animate-[blink_1s_steps(1)_infinite]">|</span></span>;
}
