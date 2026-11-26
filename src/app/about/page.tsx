import PageHead from "@/components/PageHead";
import Reveal from "@/components/Reveal";
const facts = ["Final-year CSE student at Uttara University","Works across the ML workflow, from raw data to a deployed product","Builds LLM-powered apps and multi-agent systems (LangChain, Gemini)","Specializing in n8n workflow automation","Teaches Python and machine learning as an instructor","Executive Member, Uttara University Machine Learning Club (UUMLC)"];
export default function About() {
  return (<><PageHead eyebrow="About" title="Who I am" sub="Final-year CSE student focused on AI/ML engineering, taking projects from raw data to deployed, working products." />
    <section className="sec"><ul className="grid gap-4 sm:grid-cols-2">{facts.map((f, i) => (
      <Reveal key={f} delay={i * 80}><li className="card text-sm leading-relaxed">{f}</li></Reveal>))}</ul></section></>);
}
