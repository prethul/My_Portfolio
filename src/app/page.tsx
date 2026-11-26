import Image from "next/image";
import Link from "next/link";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  BrainCircuit,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Workflow,
  Code2,
} from "lucide-react";
import Typewriter from "@/components/Typewriter";
import Spot from "@/components/Spot";
import Reveal from "@/components/Reveal";
import { EMAIL, GH, LI, projects } from "@/data/site";

const tech = ["Python", "PyTorch", "LangChain", "Gemini", "OpenAI", "n8n", "FastAPI", "Streamlit", "Pandas", "NumPy", "Hugging Face", "Git"];
const tiles = [
  ["About", "/about", "Who I am and what I build"],
  ["Skills", "/skills", "Tools and technologies I use"],
  ["Projects", "/projects", "AI, ML and automation work"],
  ["Experience", "/experience", "Teaching and leadership"],
  ["Education", "/education", "Academics and learning"],
  ["CV", "/cv", "View and download my resume"],
];
const focusAreas = [
  { icon: BrainCircuit, title: "Applied AI", description: "LLM applications, prompt design and multi-agent workflows built around practical use cases." },
  { icon: Code2, title: "Machine learning", description: "Thoughtful data preparation, feature engineering and model evaluation from start to finish." },
  { icon: Workflow, title: "Automation", description: "Connecting tools and APIs with n8n, webhooks and lightweight backend services." },
];

export default function Home() {
  const featuredProjects = projects.slice(0, 3);

  return (
    <>
      <section className="sec grid items-center gap-12 !pt-14 md:min-h-[610px] md:grid-cols-[1.15fr_.85fr] md:!pt-16">
        <div className="animate-fadeUp">
          <span className="chip inline-flex items-center gap-2 border-accent/20 bg-accent/[.06] text-ink">
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
            Open to AI/ML opportunities
          </span>
          <h1 className="mt-6 max-w-3xl font-serif text-4xl leading-[1.12] sm:text-5xl lg:text-6xl">
            Building intelligent solutions through <span className="grad-text">AI &amp; engineering.</span>
          </h1>
          <p className="mt-6 max-w-xl leading-relaxed text-mute">
            I&apos;m Dipto Howlader Prethul, an aspiring AI/ML engineer passionate about building practical AI-powered applications, intelligent systems, and scalable backend solutions.
          </p>
          <p className="mt-4 text-lg">Currently exploring <Typewriter /></p>
          <p className="mt-3 flex items-center gap-2 text-sm text-mute"><MapPin size={15} />Bangladesh</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/projects" className="btn bg-gradient-to-r from-accent to-gold text-bg">Explore my projects <ArrowRight size={16} /></Link>
            <Link href="/cv" className="btn border border-white/15 hover:border-accent">View CV</Link>
            <a href={`mailto:${EMAIL}`} className="btn border border-white/15 hover:border-gold"><Mail size={16} />Email me</a>
          </div>
          <div className="mt-6 flex items-center gap-5 text-mute">
            <a href={GH} target="_blank" rel="noreferrer" aria-label="GitHub" className="transition hover:text-accent"><Github size={19} /></a>
            <a href={LI} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="transition hover:text-accent"><Linkedin size={19} /></a>
            <span className="h-4 border-l border-white/15" />
            <a href="#featured-work" className="inline-flex items-center gap-2 text-xs transition hover:text-ink">Scroll to explore <ArrowDown size={14} /></a>
          </div>
        </div>
        <div className="relative mx-auto w-full max-w-sm animate-float">
          <div className="absolute -inset-5 rounded-[2rem] bg-gradient-to-tr from-accent/50 via-gold/40 to-accent/40 opacity-60 blur-3xl" />
          <div className="relative rounded-[1.8rem] border border-white/10 bg-panel/70 p-3 shadow-2xl shadow-black/30">
            <div className="relative overflow-hidden rounded-[1.35rem]">
              <Image src="/profile.png" alt="Portrait of Dipto Howlader Prethul" width={460} height={460} priority className="aspect-square w-full object-cover" />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-bg/95 via-bg/55 to-transparent px-5 pb-5 pt-16">
                <p className="font-serif text-xl">Dipto Howlader Prethul</p>
                <p className="mt-1 text-sm text-mute">AI/ML Engineer in the making</p>
              </div>
            </div>
            <div className="mt-3 flex items-center justify-between px-2 pb-1 text-xs text-mute">
              <span className="inline-flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />Learning by building</span>
              <span>Bangladesh</span>
            </div>
          </div>
          <div className="absolute -right-4 top-8 rounded-xl border border-white/10 bg-panel/95 px-4 py-3 shadow-xl sm:-right-9">
            <p className="text-xs text-mute">Focused on</p>
            <p className="mt-1 text-sm font-medium text-accent">AI · ML · Automation</p>
          </div>
        </div>
      </section>

      <div className="overflow-hidden border-y border-white/10 bg-white/[.015] py-4" aria-label="Technologies">
        <div className="flex w-max animate-marquee gap-10 text-sm text-mute">
          {[...tech, ...tech].map((item, index) => <span key={`${item}-${index}`} className="whitespace-nowrap">◆ {item}</span>)}
        </div>
      </div>

      <section id="featured-work" className="sec scroll-mt-20">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-sm font-medium text-accent">Selected work</p>
            <h2 className="mt-2 font-serif text-3xl sm:text-4xl">Ideas turned into projects.</h2>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-mute">A few projects exploring generative AI, machine learning and useful automation.</p>
          </div>
          <Link href="/projects" className="group inline-flex items-center gap-2 text-sm text-mute transition hover:text-accent">All projects <ArrowUpRight size={16} className="transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" /></Link>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {featuredProjects.map((project, index) => (
            <Reveal key={project.title} delay={index * 90}>
              <Spot className="flex h-full flex-col">
                <span className="text-xs text-accent">{project.cat}</span>
                <h3 className="mt-3 font-serif text-xl leading-snug">{project.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-mute">{project.desc}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.stack.map((item) => <span key={item} className="chip">{item}</span>)}
                </div>
              </Spot>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="sec !pt-0">
        <div className="mb-8">
          <p className="text-sm font-medium text-accent">What I work on</p>
          <h2 className="mt-2 font-serif text-3xl sm:text-4xl">Curious by nature. Practical by design.</h2>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {focusAreas.map(({ icon: Icon, title, description }, index) => (
            <Reveal key={title} delay={index * 80}>
              <Spot className="h-full">
                <span className="inline-flex rounded-xl border border-accent/20 bg-accent/[.07] p-3 text-accent"><Icon size={21} /></span>
                <h3 className="mt-5 text-lg font-semibold">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-mute">{description}</p>
              </Spot>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="sec !pt-0">
        <div className="mb-8">
          <p className="text-sm font-medium text-accent">Explore</p>
          <h2 className="mt-2 font-serif text-3xl sm:text-4xl">A little more about me.</h2>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {tiles.map(([title, href, description], index) => (
            <Reveal key={href} delay={index * 60}>
              <Link href={href} className="block h-full">
                <Spot className="group h-full">
                  <div className="flex items-center justify-between">
                    <h3 className="font-serif text-2xl">{title}</h3>
                    <ArrowUpRight className="text-mute transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
                  </div>
                  <p className="mt-2 text-sm text-mute">{description}</p>
                </Spot>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="sec !pt-0">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-panel via-panel to-accent/[.08] p-7 sm:p-10">
          <div className="relative z-10 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
            <div>
              <p className="text-sm font-medium text-accent">Have a project in mind?</p>
              <h2 className="mt-2 font-serif text-3xl">Let&apos;s build something useful.</h2>
              <p className="mt-3 max-w-lg text-sm leading-relaxed text-mute">I&apos;m open to AI/ML opportunities and thoughtful collaborations. Feel free to get in touch.</p>
            </div>
            <a href={`mailto:${EMAIL}`} className="btn shrink-0 bg-gradient-to-r from-accent to-gold text-bg">Say hello <ArrowRight size={16} /></a>
          </div>
          <div className="pointer-events-none absolute -right-12 -top-20 h-56 w-56 rounded-full bg-accent/10 blur-3xl" />
        </div>
      </section>
    </>
  );
}
