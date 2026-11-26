"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
const links = [["About","/about"],["Skills","/skills"],["Projects","/projects"],["Experience","/experience"],["Education","/education"],["CV","/cv"],["Contact","/contact"]];
export default function Navbar() {
  const path = usePathname(); const [open, setOpen] = useState(false);
  useEffect(() => setOpen(false), [path]);
  return (<header className="sticky top-0 z-50 border-b border-white/10 bg-bg/70 backdrop-blur-xl">
    <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
      <Link href="/" className="font-serif text-xl">Prethul<span className="text-accent">.</span></Link>
      <div className="hidden gap-6 text-sm lg:flex">{links.map(([l, h]) => (
        <Link key={h} href={h} className={`transition hover:text-accent ${path === h ? "text-accent" : "text-mute"}`}>{l}</Link>))}</div>
      <div className="flex items-center gap-2">
        <a href="/resume.pdf" download className="btn bg-gradient-to-r from-accent to-gold !py-2 text-bg">Resume</a>
        <button className="p-2 lg:hidden" aria-label="Menu" onClick={() => setOpen(!open)}>{open ? <X size={22}/> : <Menu size={22}/>}</button></div></nav>
    {open && <div className="flex flex-col gap-4 border-t border-white/10 bg-panel px-5 py-5 lg:hidden">{links.map(([l, h]) => (
      <Link key={h} href={h} className={path === h ? "text-accent" : "text-mute"}>{l}</Link>))}</div>}
  </header>);
}
