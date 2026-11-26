import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import Navbar from "@/components/Navbar";
import ScrollBar from "@/components/ScrollBar";
import { EMAIL, GH, LI } from "@/data/site";
export const metadata: Metadata = {
  title: "Dipto Howlader Prethul — AI/ML Engineer",
  description: "Final-year CSE student building LLM applications, multi-agent systems and n8n automations.",
  openGraph: { title: "Dipto Howlader Prethul", description: "Aspiring AI/ML Engineer", images: ["/profile.png"] },
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (<html lang="en"><head><meta name="viewport" content="width=device-width, initial-scale=1" /></head><body>
    <div className="gridbg fixed inset-0 -z-10" />
    <div className="blob bg-accent -left-32 top-10" /><div className="blob bg-gold -right-32 top-[45%]" style={{ animationDelay: "-8s" }} />
    <ScrollBar /><Navbar />{children}
    <footer className="mt-10 border-t border-white/10 bg-panel/30">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-12 sm:px-8 md:grid-cols-[1.4fr_.8fr_1fr] md:py-14">
        <div>
          <Link href="/" className="font-serif text-2xl text-ink">Prethul<span className="text-accent">.</span></Link>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-mute">
            Aspiring AI/ML engineer building practical applications with machine learning, generative AI and automation.
          </p>
          <div className="mt-5 flex items-center gap-3">
            <a href={GH} target="_blank" rel="noreferrer" aria-label="GitHub" className="rounded-lg border border-white/10 p-2.5 text-mute transition hover:border-accent/40 hover:text-accent"><Github size={17} /></a>
            <a href={LI} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="rounded-lg border border-white/10 p-2.5 text-mute transition hover:border-accent/40 hover:text-accent"><Linkedin size={17} /></a>
            <a href={`mailto:${EMAIL}`} aria-label="Email" className="rounded-lg border border-white/10 p-2.5 text-mute transition hover:border-accent/40 hover:text-accent"><Mail size={17} /></a>
          </div>
        </div>
        <div>
          <h2 className="text-sm font-semibold text-ink">Explore</h2>
          <ul className="mt-4 space-y-3 text-sm text-mute">
            <li><Link href="/about" className="transition hover:text-accent">About</Link></li>
            <li><Link href="/projects" className="transition hover:text-accent">Projects</Link></li>
            <li><Link href="/skills" className="transition hover:text-accent">Skills</Link></li>
            <li><Link href="/experience" className="transition hover:text-accent">Experience</Link></li>
          </ul>
        </div>
        <div>
          <h2 className="text-sm font-semibold text-ink">Let&apos;s connect</h2>
          <p className="mt-4 text-sm leading-relaxed text-mute">Open to AI/ML opportunities and thoughtful collaborations.</p>
          <a href={`mailto:${EMAIL}`} className="mt-4 inline-flex items-center gap-2 text-sm text-accent transition hover:text-gold">
            {EMAIL}<ArrowUpRight size={15} />
          </a>
        </div>
      </div>
      <div className="border-t border-white/[.07]">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-5 text-xs text-mute sm:px-8 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Dipto Howlader Prethul. All rights reserved.</p>
          <p>Designed with care · Built with Next.js</p>
        </div>
      </div>
    </footer>
  </body></html>);
}
