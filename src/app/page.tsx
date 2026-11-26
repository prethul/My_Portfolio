import Image from "next/image";
import Link from "next/link";
import { Github, Linkedin, MapPin, Mail, ArrowUpRight } from "lucide-react";
import Typewriter from "@/components/Typewriter";
import Spot from "@/components/Spot";
import Reveal from "@/components/Reveal";
import { GH, LI, EMAIL } from "@/data/site";
const tech = ["Python","PyTorch","LangChain","Gemini","OpenAI","n8n","FastAPI","Streamlit","Pandas","NumPy","Hugging Face","Git"];
const tiles = [["About","/about","Who I am and what I build"],["Skills","/skills","Tools and technologies I use"],["Projects","/projects","AI, ML and automation work"],
  ["Experience","/experience","Teaching and leadership"],["Education","/education","Academics and learning"],["CV","/cv","View and download my resume"]];
export default function Home() {
  return (<>
    <section className="sec grid items-center gap-12 !pt-14 md:grid-cols-[1.2fr_1fr]">
      <div>
        <span className="chip inline-flex items-center gap-2"><span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400"/>Open to AI/ML Opportunities</span>
        <h1 className="mt-6 font-serif text-4xl leading-tight sm:text-5xl lg:text-6xl">Building Intelligent Solutions Through <span className="grad-text">AI &amp; Engineering.</span></h1>
        <p className="mt-6 max-w-xl leading-relaxed text-mute">I&apos;m Dipto Howlader Prethul, an aspiring AI/ML Engineer passionate about building practical AI-powered applications, intelligent systems, and scalable backend solutions.</p>
        <p className="mt-4 text-lg">Exploring <Typewriter /></p>
        <p className="mt-3 flex items-center gap-2 text-sm text-mute"><MapPin size={15}/>Bangladesh</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/projects" className="btn bg-gradient-to-r from-accent to-gold text-bg">Explore My Projects</Link>
          <Link href="/cv" className="btn border border-white/15 hover:border-accent">View CV</Link>
          <a href={`mailto:${EMAIL}`} className="btn border border-white/15 hover:border-gold"><Mail size={16}/>Email Me</a></div>
        <div className="mt-6 flex gap-5 text-mute">
          <a href={GH} target="_blank" rel="noreferrer" aria-label="GitHub" className="hover:text-accent"><Github/></a>
          <a href={LI} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:text-accent"><Linkedin/></a></div>
      </div>
      <div className="relative mx-auto w-full max-w-sm animate-float">
        <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-accent via-gold to-accent opacity-50 blur-2xl" />
        <div className="relative rounded-3xl bg-gradient-to-tr from-accent to-gold p-[2px]">
          <Image src="/profile.png" alt="Portrait of Dipto Howlader Prethul" width={460} height={460} priority className="aspect-square w-full rounded-[22px] object-cover" /></div>
      </div>
    </section>
    <div className="overflow-hidden border-y border-white/10 py-4"><div className="flex w-max animate-marquee gap-10 text-sm text-mute">
      {[...tech, ...tech].map((t, i) => <span key={i} className="whitespace-nowrap">◆ {t}</span>)}</div></div>
    <section className="sec"><div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{tiles.map(([t, h, d], i) => (
      <Reveal key={h} delay={i * 80}><Link href={h}><Spot className="group h-full"><div className="flex items-center justify-between">
        <h2 className="font-serif text-2xl">{t}</h2><ArrowUpRight className="text-mute transition group-hover:text-accent"/></div>
        <p className="mt-2 text-sm text-mute">{d}</p></Spot></Link></Reveal>))}</div></section></>);
}
