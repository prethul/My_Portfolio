import { Mail, Github, Linkedin, Download } from "lucide-react";
import PageHead from "@/components/PageHead";
import CopyEmail from "@/components/CopyEmail";
import Spot from "@/components/Spot";
import { EMAIL, GH, LI } from "@/data/site";
export default function Contact() {
  return (<><PageHead eyebrow="Contact" title="Let's Build Something Intelligent Together." sub="I'm always interested in connecting with people working on AI, Machine Learning, Generative AI, and meaningful technology products." />
    <section className="sec"><div className="grid gap-5 sm:grid-cols-3">
      <a href={`mailto:${EMAIL}`}><Spot className="h-full"><Mail className="text-accent"/><p className="mt-3 break-all text-sm">{EMAIL}</p></Spot></a>
      <a href={LI} target="_blank" rel="noreferrer"><Spot className="h-full"><Linkedin className="text-accent"/><p className="mt-3 text-sm">LinkedIn</p></Spot></a>
      <a href={GH} target="_blank" rel="noreferrer"><Spot className="h-full"><Github className="text-accent"/><p className="mt-3 text-sm">GitHub</p></Spot></a></div>
      <div className="mt-8 flex flex-wrap gap-3"><CopyEmail />
        <a href="/resume.pdf" download className="btn border border-white/15 hover:border-accent"><Download size={16}/>Download Resume</a></div></section></>);
}
