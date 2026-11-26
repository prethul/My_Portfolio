import PageHead from "@/components/PageHead";
import Reveal from "@/components/Reveal";
import Spot from "@/components/Spot";
import { skills } from "@/data/site";
export default function Skills() {
  return (<><PageHead eyebrow="Skills" title="Tools I work with" />
    <section className="sec"><div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{Object.entries(skills).map(([k, v], i) => (
      <Reveal key={k} delay={i * 80}><Spot className="h-full"><h3 className="mb-4 font-medium text-accent">{k}</h3>
        <div className="flex flex-wrap gap-2">{v.map(s => <span key={s} className="chip">{s}</span>)}</div></Spot></Reveal>))}</div></section></>);
}
