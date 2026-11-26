import PageHead from "@/components/PageHead";
import Reveal from "@/components/Reveal";
import { experience } from "@/data/site";
export default function Experience() {
  const all = [...experience, { role: "Executive Member & Event Group Leader", org: "Uttara University Machine Learning Club (UUMLC)", when: "Leadership",
    desc: "Executive member of UUMLC; group leader for a university-organized event, coordinating a team and handling logistics." }];
  return (<><PageHead eyebrow="Experience" title="Teaching & leadership" />
    <section className="sec"><ol className="space-y-8 border-l border-accent/30 pl-6">{all.map((e, i) => (
      <Reveal key={e.role} delay={i * 100}><li className="relative"><span className="absolute -left-[31px] top-1.5 h-2.5 w-2.5 rounded-full bg-accent shadow-[0_0_12px_#5eead4]"/>
        <p className="text-xs text-gold">{e.when}</p><h3 className="text-lg font-semibold">{e.role}</h3>
        <p className="text-sm text-mute">{e.org}</p><p className="mt-2 max-w-2xl text-sm text-mute">{e.desc}</p></li></Reveal>))}</ol></section></>);
}
