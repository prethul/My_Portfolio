import PageHead from "@/components/PageHead";
import Reveal from "@/components/Reveal";
import Spot from "@/components/Spot";
const items = [["BSc in Computer Science & Engineering","Uttara University — Final Year Student"],["HSC","M.E.H Arif College — GPA 5.00 / 5.00"],["SSC","BARI High School — GPA 4.83 / 5.00"],["AI/ML Engineering, Batch 2","Phitron — Currently studying"],["Complete Data Analytics","Code With Harry"]];
export default function Education() {
  return (<><PageHead eyebrow="Education" title="Academics & learning" />
    <section className="sec"><div className="grid gap-5 sm:grid-cols-2">{items.map(([a, b], i) => (
      <Reveal key={a} delay={i * 80}><Spot><h3 className="font-medium">{a}</h3><p className="mt-1 text-sm text-mute">{b}</p></Spot></Reveal>))}</div></section></>);
}
