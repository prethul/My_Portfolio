"use client";
import { useState } from "react";
import { Github, ExternalLink } from "lucide-react";
import { projects, type Cat } from "@/data/site";
import Spot from "./Spot";
const tabs = ["All","Generative AI","Machine Learning","Deep Learning"] as const;
export default function Projects() {
  const [f, setF] = useState<(typeof tabs)[number]>("All");
  const list = projects.filter(p => f === "All" || p.cat === (f as Cat));
  return (<>
    <div className="mb-8 flex flex-wrap gap-2">{tabs.map(t => (
      <button key={t} onClick={() => setF(t)} aria-pressed={f === t}
        className={`rounded-full px-4 py-2 text-sm transition ${f === t ? "bg-gradient-to-r from-accent to-gold text-bg" : "border border-white/10 text-mute hover:text-ink"}`}>{t}</button>))}</div>
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{list.map((p, i) => (
      <div key={p.title} className="animate-fadeUp flex" style={{ animationDelay: `${i * 70}ms` }}>
        <Spot className="flex w-full flex-col">
          <span className="text-xs text-accent">{p.cat}</span>
          <h3 className="mt-2 text-lg font-semibold">{p.title}</h3>
          <p className="mt-3 flex-1 text-sm leading-relaxed text-mute">{p.desc}</p>
          <div className="mt-4 flex flex-wrap gap-2">{p.stack.map(s => <span key={s} className="chip">{s}</span>)}</div>
          <div className="mt-5 flex gap-4 text-sm">
            <a href={p.repo} target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:text-accent"><Github size={15}/>GitHub</a>
            {p.live && <a href={p.live} target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:text-accent"><ExternalLink size={15}/>Live</a>}</div>
        </Spot></div>))}</div></>);
}
