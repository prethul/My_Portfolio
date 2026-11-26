import type { Metadata } from "next";
import "./globals.css";
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
    <footer className="mt-10 border-t border-white/10 py-8 text-center text-sm text-mute">
      <a href={`mailto:${EMAIL}`} className="hover:text-accent">{EMAIL}</a>
      <p className="mt-2"><a href={GH} className="hover:text-accent">GitHub</a> · <a href={LI} className="hover:text-accent">LinkedIn</a></p>
      <p className="mt-2">© {new Date().getFullYear()} Dipto Howlader Prethul</p></footer>
  </body></html>);
}
